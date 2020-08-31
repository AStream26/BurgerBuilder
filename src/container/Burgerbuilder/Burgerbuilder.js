import React,{Component} from 'react';
import Aux from '../../hoc/Auxilary'
import Burger from '../../components/Burger/Burger';
import Builtcontrols from '../../components/Burger/Buildcontrols/Builtcontrols';
import Modal from '../../components/UI/Modal/Modal';
import Summery from '../../components/Burger/Ordersummary/ordersummary';

let ING_Price = {
	Salad:20,
	Meat:99.8,
	Cheese:34.5,
	Bacon:37.7
};

class Burgerbuilder extends Component {
	state = {
		ingredient:{
			
		
		Meat:0,
		Cheese:0,
		Salad:0,
		Bacon:0
		},
		totalprice : 78,
		purchaseable:false,
		purchasing :false
	}

     purchase = ()=>{
		this.setState({purchasing:true});
		console.log("this.state.purchasing->",this.state.purchasing);
	}

	cancelpurchase=()=>{
		this.setState({purchasing:false});
		console.log("this.state.purchasing-->",this.state.purchasing);
	
	}

	confirmorder=()=>{
		alert("order confirmed");
	}



	checkorder = (i)=>{
		
		let ing = Object.keys(i).map((key)=>{return i[key]}).reduce((psum,curr)=>{
			 return psum+curr},0);
		//console.log(ing);
		console.log("ing->"+ing);
		this.setState({purchaseable:ing>0});


	}

	 addIngredient = (type)=>{
		let prevamt = this.state.ingredient[type];
		let newamt = prevamt+1;
		let newIng = {
			...this.state.ingredient
		};
		newIng[type] = newamt;
		let oldprice = this.state.totalprice;
		let newprice = oldprice+ING_Price[type];

		this.setState({
          ingredient:newIng,totalprice:newprice
		});
		this.checkorder(newIng);
     };


	removeIngredient = (type)=>{
		let prevamt = this.state.ingredient[type];
		if(prevamt<=0){
			this.checkorder();
			return;
		}
		let newamt = prevamt-1;
		let newIng = {
			...this.state.ingredient
		};
		newIng[type] = newamt;
		let oldprice = this.state.totalprice;
		let newprice = oldprice-ING_Price[type];

		this.setState({
          ingredient:newIng,totalprice:newprice
		});
		this.checkorder(newIng);

	};

	
	render(){
		const disabledcheck = {
			...this.state.ingredient
		}
		for(let key in disabledcheck){
			disabledcheck[key] = disabledcheck[key]<=0;
		}

		return (
			<Aux>
			 <Modal purchase={this.state.purchasing} click={this.cancelpurchase}><Summery price={this.state.totalprice} confirm={this.confirmorder} cancel={this.cancelpurchase} ingredint={this.state.ingredient} /> </Modal>
			<Burger ing = {this.state.ingredient}/>
            
			<Builtcontrols addIngredients = {this.addIngredient}
			 removeIngredients={this.removeIngredient} disable={disabledcheck}
			 price = {this.state.totalprice}
			 purchaseable={this.state.purchaseable}
			 order = {this.purchase}  />

			</Aux>
			);
	}
}

export default Burgerbuilder;