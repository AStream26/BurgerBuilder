import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import classes from './checkout.module.css';



import Burger from '../Burger/Burger';

const checkout = (props)=>{

	return (
          <div className={classes.checkout}>
          <h1> We Hope it Taste Well !!!</h1>
          <div style={{
          	width:"100%",
          	margin:"auto",

          }}>
          </div>
          <Burger ing ={props.ing} />
          <button className="btn btn-outline-success btn-lg" onClick={props.confirm}>checkout</button>
         <button className="btn btn-outline-danger btn-lg" onClick={props.cancel}>Cancel</button>
      
        



          </div>
    
		);
}

export default checkout;