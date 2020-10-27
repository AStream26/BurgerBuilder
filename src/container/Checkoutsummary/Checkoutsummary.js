import React,{Component} from 'react';
import {Route} from 'react-router-dom';
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
   	return (

     <div>
     <Checkout ing ={this.props.ings} cancel={this.cancel} confirm={this.confirm}/>
     <Route path={this.props.match.path+'/contact-data'} 
        component={Contact}/>
      </div>
   		);
   }



}

const mapStateToProps = state=>{
	return {
      ings:state.ingredient
	}
	
}

export default connect(mapStateToProps)(checkout);