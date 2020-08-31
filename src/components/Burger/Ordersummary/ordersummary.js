import React from 'react';
import AUX from '../../../hoc/Auxilary';
import 'bootstrap/dist/css/bootstrap.css';
import classes from './ordersummary.module.css';

const ordersummary = (props)=>{

	const summery = Object.keys(props.ingredint).map((igkey)=>{
		return <li key={igkey}> {igkey}:{props.ingredint[igkey]}    </li>
	});
      
      return(

     <AUX>

    <div className={classes.order}>
     <p > <strong> ORDER SUMMARY</strong> </p>
     <p> Confirm Your Order </p>


    
     <ul>
     {
     	summery

     }
     </ul>
     <h3> <strong> Confirm Your Order </strong> </h3>
     <p>Total Price :{props.price}</p>
     <button className="btn btn-outline-success" onClick={props.confirm}>Confirm</button>
     <button className="btn btn-outline-danger" onClick={props.cancel}>Cancel</button>

     </div>
   
     </AUX>




      	)

};

export default ordersummary;