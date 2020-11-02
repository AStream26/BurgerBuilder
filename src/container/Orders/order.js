import React,{Component} from 'react';
import Order from '../../components/Order/myorder/Orders';
import Axios from '../../Axiosinstance.js';
import Error from '../../hoc/Errorhandler/Errorhandler';
import {connect} from 'react-redux';
import * as Actioncreator from '../../store/Action/index';
import Spinner from '../../components/UI/Loader/loader';



class orders extends Component{

	componentDidMount(){
		this.props.OnFetchdata(this.props.token,this.props.userid);
     // Axios.get('/confirm.json',).then(
     //   res =>{
     //   	const fetched = [];
     //   	for(let key in res.data){
     //   		fetched.push(
     //   		{
     //          ...res.data[key],
     //          id:key
     //   		});
     //   	}
     //   	//console.log(res.data);
     //   	this.setState({order:fetched,loading:false});
     //   }
     // 	).catch(
     // 	err=>{
     // 		this.setState({loading:false})
     // 	}
     // 	)
	}



	render(){
		let  load = <Spinner />;
		if(!this.props.loading){
			//console.log("loading...",this.props.loading);
			load = this.props.order.map(order=>(
					<Order key={order.id} id={order.id}  order={order}/>
				)
				)
		}
		return(
			<div>
			{
				load
			}
			</div>
			
          
			);
	}
}
const mapStateToProps = (state)=>{
	return {
		order:state.order.order,
		loading:state.order.loading,
		token:state.auth.token,
		userid:state.auth.userid
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
       OnFetchdata :(token,userid)=> dispatch(Actioncreator.Fetch(token,userid))
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(Error(orders,Axios));

