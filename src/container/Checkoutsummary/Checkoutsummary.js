import React,{Component} from 'react';
import {Route,Redirect} from 'react-router-dom';
import Checkout from '../../components/Order/checkoutsummary';
import Contact from '../../components/Order/Contact/Contact';
import {connect} from 'react-redux';


class checkout extends Component{


	cancel= ()=>{
		this.props.history.goBack();
	}
	confirm = ()=>{
		this.props.history.replace('/checkout/contact-data');
	}

   render(){

    let summary = <Redirect to="/" />;
     let checkoutredirect = this.props.purchased?<Redirect to="/" />:null;

    if(this.props.ings){
     
      summary = <Checkout ing ={this.props.ings} cancel={this.cancel} confirm={this.confirm}/>;
    }
   	return (


     <div>
     {checkoutredirect}
     {
      summary
     }
     
     <Route path={this.props.match.path+'/contact-data'} 
        component={Contact}/>
      </div>
   		);
   }



}

const mapStateToProps = state=>{
	return {
      ings:state.burgerBuilder.ingredient,
      purchased:state.order.purchased
     
	}
	
}



export default connect(mapStateToProps)(checkout);