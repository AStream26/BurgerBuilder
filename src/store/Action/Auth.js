import * as Actiontype from './ActionType';
import Axios from 'axios';


export const Authstart = ()=>{
	//console.log("Auth");
	return {
		type:Actiontype.AUTHSTART
	}
}

export const Authfail = (err)=>{
	return{
		type:Actiontype.AUTHFAIL,
		error:err
	}
}

export const Authend = (token,userid)=>{
	return{
		type:Actiontype.AUTHEND,
		tokenid:token,
		id:userid
	}
}
export const logout=()=>{
	localStorage.removeItem('token');
	localStorage.removeItem('userid');
	localStorage.removeItem('expirationTime');
	return{
		type:Actiontype.LOGOUT
	}
}


export const authlogout = (expiersIn)=>{
	return dispatch=>{
		setTimeout(()=>{
        dispatch(logout());
		},expiersIn*1000);
	}
}

export const Auth = (email,password,singup)=>{
	const user = {
		email:email,
		password:password,
		returnSecureToken:true
	}
	return dispatch =>{

		dispatch(Authstart());
		let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA-cnrxaM8lS9_r49zZr543H1-wHz-cel0';
		if(!singup){
			url ='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA-cnrxaM8lS9_r49zZr543H1-wHz-cel0';

		}
       Axios.post(url,user).then(response=>{
       	console.log(response);
       	const time = new Date(new Date().getTime()+response.data.expiresIn*1000);
             localStorage.setItem('token',response.data.idToken);
             localStorage.setItem('expirationTime',time);
             localStorage.setItem('userid',response.data.localId);
       	dispatch(Authend(response.data.idToken,response.data.localId));
       	 dispatch(authlogout(response.data.expiresIn));
       }).catch(error=>{
       	//console.log("erropr");
       //	console.log(error.response.data.error);
       	dispatch(Authfail(error.response.data.error.message));

       });
      

	}
}
export const setredirect = (paths)=>{
//	console.log("lll",paths);
	return{
		type:Actiontype.SET_REDIRECT,
		  path:paths
	}
}


export const Authcheckstate = ()=>{
	return dispatch =>{
		const token = localStorage.getItem('token');
		if(!token){
			dispatch(logout());
		}
		else{
			const expTime = new Date(localStorage.getItem('expirationTime'));
			if(expTime>=new Date()){
				const userid = localStorage.getItem('userid');
                dispatch(Authend(token,userid));
                let a = (expTime.getTime()-new Date().getTime())/1000;
                dispatch(authlogout(a));
			}
			else{
				dispatch(logout());
			}
		}
	}
}