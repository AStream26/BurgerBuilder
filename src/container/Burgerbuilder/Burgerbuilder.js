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
import * as Actiontype from '../../store/action';



class Burgerbuilder extends Component {
	state = {
		//purchaseable:false,
		purchasing :false,
		loading:false,
		error:false
	}

	componentDidMount(){
		// Axios.get('/Ingredients.json').then( response =>{
		// 	console.log(response.data);
  //     this.setState({ingredient:response.data})
		// }).catch(err=>{
  //        this.setState({error:true})
		// });
	}

     purchase = ()=>{
		this.setState({purchasing:true});
		//console.log("this.state.purchasing->",this.state.purchasing);
	}

	cancelpurchase=()=>{
		this.setState({purchasing:false});
		//console.log("this.state.purchasing-->",this.state.purchasing);
	
	}

	confirmorder=()=>{
		
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
			load = 
			 <Summery price={this.props.price} 
			 confirm={this.confirmorder} 
			 cancel={this.cancelpurchase} 
			 ingredint={this.props.ings} />

       // let Burger = this.state.error?<p>Application Failed</p>:<Load />;
         

            	if(this.state.loading){
			         load = <Load />
		     }
	      

		return (
			<Aux>
			 <Modal purchase ={this.state.purchasing} click={this.cancelpurchase}>
			 {
			 	load
			 }
			 </Modal>
			 
			<Burger ing = {this.props.ings} />
            
			<Builtcontrols addIngredients = {this.props.addIngredient}
			 removeIngredients={this.props.removeIngredient} disable={disabledcheck}
			 price = {this.props.price}
			 purchaseable={this.checkorder()}
			 order = {this.purchase}  />
			</Aux>
			);
	}
}


const mapStateToProps = state =>{
	return {
		ings:state.ingredient,
		price:state.totalprice
	}
}

const mapDispatchToProps = dispatch =>{
	return {
		addIngredient:(ing) => dispatch({type:Actiontype.ADD_INGREDIENT,INGNAME:ing}),
		removeIngredient:(ing) => dispatch({type:Actiontype.REMOVE_INGREDIENT,INGNAME:ing})
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Error(Burgerbuilder,Axios));