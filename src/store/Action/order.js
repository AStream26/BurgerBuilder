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

export const Purchase = (orderdata,token) =>{
    return dispatch =>{

    	dispatch(purchaseStart());
    		Axios.post('/confirm.json?auth='+token,orderdata).then(response=>{
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

export const Fetch_start = ()=>{
         return{
         	type:ActionType.FETCH_START
         }
}
export const Fetch_fail = (err)=>{
	return{
		type:ActionType.FETCH_FAIL,
		error:err
	}
}

export const Fetch_end= (orders)=>{
	return{
		type:ActionType.FETCH_END,
		order:orders
	}
}


export const Fetch = (token,userid)=>{
	   
	return dispatch =>{
		 dispatch(Fetch_start());
		 let queryparams = '?auth='+token+'&orderBy="userId"&equalTo="'+userid +'"';
		 Axios.get('/confirm.json'+queryparams).then(
       res =>{
      // 	console.log(res);
       	const fetched = [];
       	for(let key in res.data){
       		fetched.push(
       		{
              ...res.data[key],
              id:key
       		});
       	}
       //	console.log("aaa",res.data);
       dispatch(Fetch_end(fetched));
       }
     	).catch(
     	err=>{
     			//console.log("aA",err);
        dispatch(Fetch_fail(err));
     	}
     	)
	}
}