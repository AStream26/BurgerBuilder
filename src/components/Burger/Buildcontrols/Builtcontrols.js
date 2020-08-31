import React from 'react';
import classes from './Builtcontrols.module.css';
import Builtcontrol from './Builtcontrol/Builtcontrol';

var state =[
  {label:'Salad' ,type:'Salad'},
   {label:'Bacon', type:'Bacon'},
    {label:'Cheese', type:'Cheese'},
     {label:'Meat', type:'Meat'}
];
const Burgerbuilders = (props)=>(
	
	<div className={classes.Builtcontrols}>
	<p> <strong>Price</strong> : {props.price.toFixed(2)} </p>
     {      

     	state.map(ctrl=>(
     		<Builtcontrol key={ctrl.label} 
     		  label={ctrl.label}
     		 added={() => props.addIngredients(ctrl.type)}
     		 removed = {()=>props.removeIngredients(ctrl.type)}
     		 disable ={props.disable[ctrl.type]}
     		  />
     		))
     }

     <button disabled = {!props.purchaseable} onClick={props.order}> ORDER</button>


	</div>
	
)




export default Burgerbuilders;