import React,{Component} from 'react';
import Order from '../../components/Order/myorder/Orders';
import Axios from '../../Axiosinstance.js';
import Error from '../../hoc/Errorhandler/Errorhandler';


class orders extends Component{
	state = {
		order:[],
		loading:true
	}
	componentDidMount(){
     Axios.get('/confirm.json',).then(
       res =>{
       	const fetched = [];
       	for(let key in res.data){
       		fetched.push(
       		{
              ...res.data[key],
              id:key
       		});
       	}
       	console.log(res.data);
       	this.setState({order:fetched,loading:false});
       }
     	).catch(
     	err=>{
     		this.setState({loading:false})
     	}
     	)
	}



	render(){
		return(
			<div>
			{
				this.state.order.map(order=>(
					<Order key={order.id} id={order.id}  order={order}/>
				)
				)
			}
			</div>
			
          
			);
	}
}


export default Error(orders,Axios);

