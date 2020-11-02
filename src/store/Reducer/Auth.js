import * as Actiontype from '../Action/ActionType';

const initialstate = {
	token:null,
	userid:null,
	error:null,
	loading:false,
	authredirect : '/'
}

const reducer = (state=initialstate,action)=>{

	switch(action.type){
		case(Actiontype.AUTHSTART):
		return{
			...state,
			loading:true
		}

		case(Actiontype.AUTHFAIL):
		return{
			...state,
			loading:false,
			error:action.error
		}

		case(Actiontype.AUTHEND):
		return{
			...state,
			loading:false,
			error:null,
			token:action.tokenid,
			userid:action.id
		}
		case(Actiontype.LOGOUT):
		//console.log("LOGOUT");
		return{
			...state,
			token:null,
			userid:null,

		}
		case(Actiontype.SET_REDIRECT):
		//console.log("REdirect",action.path);
		return{
			...state,
			authredirect:action.path
		}


     default:return state
	}
}


export default reducer;

