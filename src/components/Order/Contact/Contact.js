import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Axios from '../../../Axiosinstance.js';
import Spinner from '../../UI/Loader/loader';
import Input from '../../UI/Input/input';
import Classes from './contact.module.css';
import {connect} from 'react-redux';

class Contact extends Component {

	state = {
		orderdetail:{
			name:{
				inputType:'input',
				elementconfig:{
					type:'text',
					placeholder:'Name'
				},
				rules:{
					required:true
				},
				valid:false,
				value:''
			},
			email:{
				inputType:'input',
				elementconfig:{
					type:'email',
					placeholder:'E-mail'
				},
				
				rules:{
					required:true
				},
				valid:false,

				value:''
			},
			mobno:{
				inputType:'input',
				elementconfig:{
					type:'number',
					placeholder:'Contact Number'
				},
				
				rules:{
					required:true
				},
				valid:false,
				value:''
			},
	        address:{
				inputType:'input',
				elementconfig:{
					type:'text',
					placeholder:'Address'
				},
				rules:{
					required:true
				},
				valid:false,
				value:''
			},
			state:{
				inputType:'input',
				elementconfig:{
					type:'text',
					placeholder:'State'
				},
				rules:{
					required:true
				},
				valid:false,
				value:''
			},
			delivery:{
				inputType:'select',
				elementconfig:{
					options:[
                     {value:"fastest" , deliverymode:'Fastest'},
                     {value:"cheapest" , deliverymode:'Cheapest'}
					]
				},
				value:''
			}
		},
		
		loading:false



	}

	checkvalidity = (rule,value)=>{
		let isvalid = true;
		if(rule.required){
			isvalid = value.trim()!='';

		}
		return isvalid;
	}

	confirm = (event)=>{
        event.preventDefault();
        this.setState({loading:true});
        let data = {};
        for(let key in this.state.orderdetail){
           data[key] = this.state.orderdetail[key].value;
        }

		const post = {
			ingredient:this.props.ings,
			Price:this.props.price,
			orderdata:data
		}
			
		//alert("order confirmed");
		Axios.post('/confirm.json',post).then(response=>{
			//console.log(response.data);
			this.setState({loading:false});
			//console.log(this.props.histroy);
			this.props.history.push('/');
		}).catch(error=>{
			//console.log(error);
			this.setState({loading:false})
		});
	}
	inputchange = (event,key)=>{
		let formalordervalue = {
			...this.state.orderdetail
		}

		let chngeddetail ={
             ...formalordervalue[key]
		} 
		chngeddetail.value = event.target.value;
		chngeddetail.valid = this.checkvalidity(chngeddetail.rules,event.target.value);
		console.log(chngeddetail.valid);
		formalordervalue[key] = chngeddetail;
		this.setState({orderdetail:formalordervalue});


	}



	render(){
        
        let inputform = [];

        for(let key in this.state.orderdetail){
        	inputform.push({
             id:key,
             config :this.state.orderdetail[key]
        	});
        }

		let form = (
        <form onSubmit={this.confirm}className="container">
        {
        	inputform.map((order)=>(
            <Input  key = {order.id}
            inputType={order.config.inputType} 
            elementconfig={order.config.elementconfig}  
            value={order.config.value} changed={(event)=>this.inputchange(event,order.id)} />
        		))
         }
           
        <button type="submit" className="btn btn-primary">Submit</button>
   </form>
     
    );
       if(this.state.loading){
       	form = <Spinner />;
       }

       let myclass = [];
       myclass.push("container");
       myclass.push(Classes.layout);
       let C = myclass.join(" ");
		return (
			<div className={C}  >
			<div className={Classes.form}>
			

           <h1 style={{alignitems:"center"}}> Enter Your Contact Data</h1>

          {form}


			</div>
			</div>



			);
	}
}

const mapStateToProps = state=>{
	return {
      ings:state.ingredient,
      price:state.totalprice
	}
	
}


export default connect(mapStateToProps)(Contact);