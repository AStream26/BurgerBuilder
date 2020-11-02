 import React,{Component} from 'react';
import Aux from '../../hoc/Auxilary'
import Burger from '../../components/Burger/Burger';
import Builtcontrols from '../../components/Burger/Buildcontrols/Builtcontrols';
import Modal from '../../components/UI/Modal/Modal';
import Summery from '../../components/Burger/Ordersummary/ordersummary';
import Axios from '../../Axiosinstance.js';
import Load from '../../components/UI/Loader/loader.js';
import Error from '../../hoc/Errorhandler/Errorhandler';
import {connect} from 'react-redux';
import * as Actioncreateor from '../../store/Action/index';



class Burgerbuilder extends Component {
	state = {
		//purchaseable:false,
		purchasing :false,
		
	}

	componentDidMount(){
		// Axios.get('/Ingredients.json').then( response =>{
		// 	console.log(response.data);
  //     this.setState({ingredient:response.data})
		// }).catch(err=>{
  //        this.setState({error:true})
		// });

		this.props.intialIngredient();
	}

     purchase = ()=>{
     	if(this.props.isauth){
     this.setState({purchasing:true});
     	}
     	else{
             this.props.onAuthRedirect('/checkout');
     		this.props.history.push('/authanticate');
     	}
		
		//console.log("this.state.purchasing->",this.state.purchasing);
	}

	cancelpurchase=()=>{
		this.setState({purchasing:false});
		//console.log("this.state.purchasing-->",this.state.purchasing);
	
	}

	confirmorder=()=>{
		this.props.onPurchaseinit();
		this.props.history.push('/checkout');
	}



	checkorder = ()=>{
		let i = this.props.ings;
		let ing = Object.keys(i).map((key)=>{return i[key]}).reduce((psum,curr)=>{
			 return psum+curr},0);
		//console.log(ing);
	//	console.log("ing->"+ing);
		return ing>0;


	}

	
	
	render(){

		const disabledcheck = {
			...this.props.ings
		}
		for(let key in disabledcheck){
			disabledcheck[key] = disabledcheck[key]<=0;
		}

		let load = null;
		if(this.props.ings!=null){
			load = 
			 <Summery price={this.props.price} 
			 confirm={this.confirmorder} 
			 cancel={this.cancelpurchase} 
			 ingredint={this.props.ings} />
		}

        let burger = this.props.error?<p>Application Failed</p>:<Load />;
         

       //      	if(this.state.loading){
			    //      load = <Load />
		     // }
	      
	      if(this.props.ings){
             burger = (
         
			
		     <Aux>
		     <Burger ing = {this.props.ings} />
            
			<Builtcontrols addIngredients = {this.props.addIngredient}
			 removeIngredients={this.props.removeIngredient} disable={disabledcheck}
			 price = {this.props.price}
			 purchaseable={this.checkorder()}
			 order = {this.purchase}
			 isauth={this.props.isauth}  />

		     </Aux>	 
			
		    


             	)
	      }




		return (

		      <Aux>
		       <Modal purchase ={this.state.purchasing} click={this.cancelpurchase}>
			 {
			 	load
			 }
			 </Modal>
			 {
			 	burger
			 }

		      </Aux>
			
			);
	}
}


const mapStateToProps = state =>{
	return {
		ings:state.burgerBuilder.ingredient,
		price:state.burgerBuilder.totalprice,
		error:state.burgerBuilder.error,
		isauth:state.auth.token!=null
	}
}

const mapDispatchToProps = dispatch =>{
	return {
		addIngredient:(ing) => dispatch(Actioncreateor.addIngredient(ing)),
		removeIngredient:(ing) => dispatch(Actioncreateor.removeIngredient(ing)),
		intialIngredient:() => dispatch(Actioncreateor.setIngredient()),
		onPurchaseinit:()=>dispatch(Actioncreateor.purchaseInit()),
		onAuthRedirect :(path)=>dispatch(Actioncreateor.setredirect(path))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Error(Burgerbuilder,Axios));