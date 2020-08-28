import React,{Component} from 'react';
import Aux from '../../hoc/Auxilary'
import Burger from '../../components/Burger/Burger';
import Builtcontrols from '../../components/Burger/Buildcontrols/Builtcontrols';

let ING_Price = {
	Salad:50,
	Meat:100,
	Cheese:35,
	Bacon:40
};

class Burgerbuilder extends Component {
	state = {
		ingredient:{
			
		
		Meat:0,
		Cheese:0,
		Salad:0,
		Bacon:0
		},
		totalprice : 78
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

	};

	removeIngredient = (type)=>{
		let prevamt = this.state.ingredient[type];
		if(prevamt<=0)
			return;
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

	}
	render(){
		const disabledcheck = {
			...this.state.ingredient
		}
		for(let key in disabledcheck){
			disabledcheck[key] = disabledcheck[key]<=0;
		}

		return (
			<Aux>
			<Burger ing = {this.state.ingredient}/>
			<Builtcontrols addIngredients = {this.addIngredient}
			 removeIngredients={this.removeIngredient} disable={disabledcheck}
			 price = {this.state.totalprice}  />

			</Aux>
			);
	}
}

export default Burgerbuilder;