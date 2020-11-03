import React from 'react';
import classes from './Builtcontrols.module.css';
import Builtcontrol from './Builtcontrol/Builtcontrol';

var state =[
  {label:'Salad' ,type:'Salad'},
   {label:'Bacon', type:'Bacon'},
    {label:'Cheese', type:'Cheese'},
     {label:'Meat', type:'Meat'}
];
let my =[];
my.push("btn btn-success btn-lg btn-block");
my.push(classes.Button);
const Burgerbuilders = (props)=>(
	
	<div className={classes.Builtcontrols}>
	<p className={classes.Price}> <strong>Price</strong> : {props.price.toFixed(2)} </p>
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

     <button className={my.join(' ')} disabled = {!props.purchaseable} onClick={props.order}>{props.isauth?'OREDR':'SINGUP TO ORDER'}</button>


	</div>
	
)




export default Burgerbuilders;