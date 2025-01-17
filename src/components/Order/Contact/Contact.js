import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Axios from '../../../Axiosinstance.js';
import Spinner from '../../UI/Loader/loader';
import Input from '../../UI/Input/input';
import Classes from './contact.module.css';
import {connect} from 'react-redux';
import WithErrorHandler from '../../../hoc/Errorhandler/Errorhandler';
import * as Action from '../../../store/Action/index'; 


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
				value:'',
				touched:false
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

				value:'',
				touched:false
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
				value:'',
				touched:false
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
				value:'',
				touched:false
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
				value:'',
				touched:false
			},
			delivery:{
				inputType:'select',
				elementconfig:{
					options:[
                     {value:"fastest" , deliverymode:'Fastest'},
                     {value:"cheapest" , deliverymode:'Cheapest'}
					]
				},
				rule:{},
				value:'Fastest',
				touched:false,
				valid :true
			}
		},
		
		
		validation:false



	}

	checkvalidity = (rule,value)=>{
		
		let isvalid = true;
		if(rule.required){
			isvalid = value.trim()!=='';

		}
		return isvalid;
	}

	confirm = (event)=>{
		// console.log("validating...",this.state.validation);
        event.preventDefault();
        this.setState({loading:true});
        let data = {};
        let validation = true;
        for(let key in this.state.orderdetail){
           data[key] = this.state.orderdetail[key].value;
           if(data[key]==null)
           	validation= false;
        }

		const post = {
			ingredient:this.props.ings,
			Price:this.props.price,
			orderdata:data,
			userId:this.props.userid
		}
		this.props.onOrder(post,this.props.token);
			
		//alert("order confirmed");
		// Axios.post('/confirm.json',post).then(response=>{
		// 	//console.log(response.data);
		// 	this.setState({loading:false});
		// 	//console.log(this.props.histroy);
		// 	this.props.history.push('/');
		// }).catch(error=>{
		// 	//console.log(error);
		// 	this.setState({loading:false})
		// });
	}
	inputchange = (event,key)=>{
		let formalordervalue = {
			...this.state.orderdetail
		}

		let chngeddetail ={
             ...formalordervalue[key]
		} 

		chngeddetail.value = event.target.value;
		chngeddetail.touched = true;
		chngeddetail.valid = this.checkvalidity(chngeddetail.rules,event.target.value);
		//console.log(chngeddetail.valid);
		formalordervalue[key] = chngeddetail;
		let validity = true;
		for(let key in formalordervalue){
			  validity   = formalordervalue[key].valid&&validity;
		}
        //console.log(validity);
		this.setState({orderdetail:formalordervalue,validation:validity});


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
            isvalid = {order.config.valid}
            touched = {order.config.touched}
            value={order.config.value} changed={(event)=>this.inputchange(event,order.id)} />
        		))
         }
           
        <button type="submit"disabled={!this.state.validation} className="btn btn-primary">Submit</button>
   </form>
     
    );
       if(this.props.loading){
       	form = <Spinner />;
       }

       let myclass = [];
       myclass.push("container");
       myclass.push(Classes.layout);
       let C = myclass.join(" ");
		return (
			<div className={C}  >
			<div className={Classes.form}>
			

           <h1 > Enter Your Contact Data</h1>

          {form}


			</div>
			</div>



			);
	}
}

const mapStateToProps = state=>{
	return {
      ings:state.burgerBuilder.ingredient,
      price:state.burgerBuilder.totalprice,
      loading:state.order.loading,
      token:state.auth.token,
      userid:state.auth.userid
	}
	
}
const mapDispatchToProps  = dispatch=>{
	return {
       onOrder: (orderdata,token)=>dispatch(Action.Purchase(orderdata,token))
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(WithErrorHandler(Contact,Axios));