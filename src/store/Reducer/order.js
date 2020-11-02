import * as ActionType from '../Action/ActionType';

let intialstate = {
	order:[],
	loading :false,
	purchased:false
}

const reducer = (state=intialstate,action) => {
       
       switch(action.type){
       case(ActionType.PURCHASE_INIT):
       return {
       	...state,
       	purchased:false

       }

       case(ActionType.PURCHASE_BURGER_START):
          return {
          	...state,
          	loading:true
          }
       case(ActionType.PURCHASE_BURGER_END):
       const cur_order = {
       	...action.orderdata,
       	id:action.orderid
       }
       return{
       	     ...state,
       	     loading:false,
       	     purchased:true,
       	     order:state.order.concat(cur_order)
       }
       

       case(ActionType.PURCHASE_BURGER_FAIL):
       return{
       	...state,
       	loading:false
       }
       

       case(ActionType.FETCH_FAIL):
       return {
        ...state,
        loading:false
       }
      
       case(ActionType.FETCH_START):
       // console.log("FETCH_START");
       return{
        ...state,
        loading:true
       }
      
       case(ActionType.FETCH_END):
       //console.log("FETCH_END");
       return{
        ...state,
        order:action.order,
        loading:false
       }
       default:
       return state;
   }

}

export default reducer;