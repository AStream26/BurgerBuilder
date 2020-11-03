import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Input from '../../components/UI/Input/input';
import Classes from './Auth.module.css';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import * as Action from '../../store/Action/index';
import Loader from '../../components/UI/Loader/authload.js';
 
 class Auth extends Component{


 	state = {
 		controls:{

 			email:{
				inputType:'input',
				elementconfig:{
					type:'email',
					placeholder:'E-mail'
				},
				
				rules:{
					required:true,
					isemail:true
				},
				valid:false,

				value:'',
				touched:false
			},
			password:{
				inputType:'input',
				elementconfig:{
					type:'password',
					placeholder:'password'
				},
				
				rules:{
					required:true,
					minlength:6
				},
				valid:false,

				value:'',
				touched:false
			},

 		},
 		singup:true,
 		validation:true
 	}
 	componentDidMount(){
 		if(!this.props.building&&this.props.authredirect!=='/'){
 			this.props.onRedirect('/');
 		}

 	}
 	switchhandler = ()=>{
 		let k = !this.state.singup;
 		// let s = {
 		// 	...this.state.controls,
 		// 	singup:k
 		// }
 		this.setState({singup:k});
 	}

 	authanticate = (event)=>{
 		event.preventDefault();
 		this.props.OnAuth(this.state.controls.email.value,this.state.controls.password.value,this.state.singup);
 	}
 	checkvalidity = (rule,value)=>{
		
		let isvalid = true;
		if(rule.required){
			isvalid = value.trim()!=='';

		}

		if(rule.minlength){
			isvalid = value.length>=rule.minlength&&isvalid;
		}
		return isvalid;
	}
inputchange = (event,key)=>{
		let formalordervalue = {
			...this.state.controls
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
       // console.log(validity);
		this.setState({controls:formalordervalue,validation:validity});


	}

 	render(){
 		 let myclass = [];
       myclass.push("container");
       myclass.push(Classes.form);
       myclass.push(Classes.layout);
       let C = myclass.join(" ");
 		  let inputform = [];

        for(let key in this.state.controls){
        	inputform.push({
             id:key,
             config :this.state.controls[key]
        	});
        }
       // console.log(inputform);

		let form = (
        <form onSubmit = {this.authanticate} className="container">
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
           
        <button type="submit"disabled={!this.state.validation} className="btn btn-dark">Submit</button>
         <br />
        




   </form>

     
    );
   

       if(this.props.loading){
       	form  = <Loader />
       }
       let error = <p>CREATE ACCOUNT</p>
       if(this.props.error){
       	error = <p>{this.props.error}</p>
       }
       let home = null;
       if(this.props.isauth){
    home = <Redirect to={this.props.authredirect} />
       }

		

		return (

			<div className={C}  >
			
			{ home}

           <h1 style={{alignitems:"center"}}>{this.state.singup?error:"LOGIN TO CONTINUE"}</h1>

          {form}
           <button onClick={this.switchhandler}className="btn btn-link"> switch to  {!this.state.singup?"singup":"singin"}</button>

			
			</div>



			);


 	}
 } 
 const mapStateToProps = (state)=>{
 	return{
 		loading:state.auth.loading,
 		error:state.auth.error,
 		isauth:state.auth.token!==null,
 		building:state.burgerBuilder.building,
 		authredirect:state.auth.authredirect
 	}
 }

 const mapDispatchToProps = (dispatch)=>{
 	return{
 		OnAuth :(email,password,singup) =>dispatch(Action.Auth(email,password,singup)),
 		onRedirect:(path)=>dispatch(Action.setredirect(path))
 	}
 }


 export default connect(mapStateToProps,mapDispatchToProps)(Auth);




























