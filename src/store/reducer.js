//const redux = require('redux');
import * as Actiontype from './action.js';

let ING_Price = {
	Salad:20,
	Meat:99.8,
	Cheese:34.5,
	Bacon:37.7
};
const intialstate ={
	
	ingredient:{
			Salad:0,
			Meat:0,
	Cheese:0,
	Bacon:0
		},
	totalprice:74
}

const reducer = (state=intialstate,action)=>{

	switch(action.type){
		case(Actiontype.ADD_INGREDIENT):
		   return {
		   	...state,
		   	ingredient:{
		   		...state.ingredient,
		   		[action.INGNAME]:state.ingredient[action.INGNAME]+1
		   	},
		   	totalprice:state.totalprice+ING_Price[action.INGNAME]

		   }
		   break;
		  case(Actiontype.REMOVE_INGREDIENT):
		  return{
		  		...state,
		   	ingredient:{
		   		...state.ingredient,
		   		[action.INGNAME]:state.ingredient[action.INGNAME]-1
		   	},
		   	totalprice:state.totalprice-ING_Price[action.INGNAME]

		  }
		  break;
		  default:return state;
	}

}

export default reducer;