//const redux = require('redux');
import * as Actiontype from '../Action/ActionType.js';

let ING_Price = {
	Salad:20,
	Meat:99.8,
	Cheese:34.5,
	Bacon:37.7
};

// {
// 			Salad:0,
// 			Meat:0,
// 	Cheese:0,
// 	Bacon:0
// 		}
const intialstate ={
	
	ingredient: null,
	totalprice:4,
	error:false,
	building:false
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
		   	totalprice:state.totalprice+ING_Price[action.INGNAME],
		   	building:true

		   }
		   
		  case(Actiontype.REMOVE_INGREDIENT):
		 // console.log("Removed!!!");
		  return{
		  		...state,
		   	ingredient:{
		   		...state.ingredient,
		   		[action.INGNAME]:state.ingredient[action.INGNAME]-1
		   	},
		   	totalprice:state.totalprice-ING_Price[action.INGNAME],
		   	building:true

		  }
		
		  case(Actiontype.SET_INGREDIENT):
		  return{
		  	...state,
		  	ingredient:action.ingredient,
		  	totalprice:4,
		  	error:false,
		  	building:false
		  }
		   

		   case(Actiontype.SET_ERROR_FETCH):
		   return{
		   	...state,
		   	error:true
		   }
		   
		  default:return state;
	}

}

export default reducer;