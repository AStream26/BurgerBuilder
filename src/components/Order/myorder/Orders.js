import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
class Orders extends Component{

	render(){

     



		return(

			<div>

			<div className="card">
  <div className="card-header">
 
  </div>
  <div className="card-body">
    <h5 className="card-title">Customer ID - {this.props.id}</h5>
    <p className="card-text"> Customer Name - {this.props.order.orderdata.name} </p>
    <p className="card-title">Ingredients</p>
    <p className="card-text"> Bacon:{this.props.order.ingredient.Bacon} </p>
     <p className="card-text"> Salad:{this.props.order.ingredient.Salad} </p>
      <p className="card-text"> Meat:{this.props.order.ingredient.Meat} </p>
       <p className="card-text"> Cheese:{this.props.order.ingredient.Cheese} </p>
   <p className="btn btn-outline-primary">Price: {this.props.order.Price} </p> 
  </div>
</div>

			</div>


			);
	}

}


export default Orders;