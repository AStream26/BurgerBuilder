import React from 'react';
import classes from './BurgerIng.module.css';


const ingredint = (props)=>{
	let ing = null;
	switch(props.type){
		case('BreadBottom'):
		       ing = <div className={classes.BreadBottom}></div>
		       break;
		case('BreadTop'):
		       ing = ( 
		       <div className={classes.BreadTop}>
                   <div className={classes.seed1}> </div>
                    <div className={classes.seed2}> </div>
		       </div>
		       );
		       break;
		case('Meat'):
		       ing = <div className={classes.Meat}></div>
		       break;
		case('Cheese'):
		       ing = <div className={classes.Cheese}></div>
		       break;
		case('Salad'):
		       ing = <div className={classes.Salad}></div>
		       break;
		case('Bacon'):
		       ing = <div className={classes.Bacon}></div>
		       break;
		default:ing = null;
		
	}
	return ing;
}




export default ingredint;
