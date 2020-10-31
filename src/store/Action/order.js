import * as ActionType from './ActionType';
import Axios from '../../Axiosinstance';

export const purchaseInit = ()=>{
	return {
		type:ActionType.PURCHASE_INIT
	}
}



export const purchaseEnds = (dataid,orderdata) =>{
     return {
     	type:ActionType.PURCHASE_BURGER_END,
     	orderData:orderdata,
     	orderid:dataid

     }
}
export const purchaseFails = (err)=>{
	return {
		type:ActionType.PURCHASE_BURGER_FAIL,
		error:err
	}
}

export const purchaseStart = ()=>{
	return {
		type:ActionType.PURCHASE_BURGER_START
	}
}







export const Purchase = (orderdata) =>{
    return dispatch =>{

    	dispatch(purchaseStart());
    		Axios.post('/confirm.json',orderdata).then(response=>{
    			//console.log(response.data);
            dispatch(purchaseEnds(response.data.name,orderdata));
			//console.log(response.data);
			//this.setState({loading:false});
			//console.log(this.props.histroy);
			// this.props.history.push('/');
		}).catch(error=>{
			dispatch(purchaseFails(error));
			//console.log(error);
			//this.setState({loading:false})
		});
    }
}
