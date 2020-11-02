import * as Actiontype from './ActionType';
import Axios from '../../Axiosinstance.js';



export const addIngredient = (val)=>{
	return {
		type:Actiontype.ADD_INGREDIENT,
		INGNAME:val
	}
}


export const removeIngredient = (val)=>{
	console.log("Removed");
	return {
		type:Actiontype.REMOVE_INGREDIENT,
		INGNAME:val
	}
}

export const setError = ()=>{
	return {
		type:Actiontype.SET_ERROR_FETCH
	}
}

export const seting =(ing)=>{
	return {
		type:Actiontype.SET_INGREDIENT,
		ingredient:ing
	}
}

export const setIngredient = ()=>{
	return dispatch =>{
		Axios.get('/Ingredients.json').then( response =>{
			//console.log(response.data);
      //this.setState({ingredient:response.data})
        dispatch(seting(response.data));
		}).catch(err=>{
         dispatch(setError());
		});

	}
}






