import React from 'react';
import classes from './Builtcontrol.module.css';

const Builtcontrol = (props)=>(
	<div className={classes.BuiltControl}>

     <div className={classes.Label}> {props.label}</div>
     <button className={classes.More} onClick={props.added}>More</button>
     <button className={classes.Less} onClick={props.removed} disabled = {props.disable}>Less</button>
	</div>
	);
export default Builtcontrol;