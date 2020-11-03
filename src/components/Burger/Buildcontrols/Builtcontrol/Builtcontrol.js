import React from 'react';
import Classes from './Builtcontrol.module.css';
import 'bootstrap/dist/css/bootstrap.css';
let myclass = [];
	myclass.push("btn btn-success");
	myclass.push(Classes.More);
	let my = [];
	let less = "btn btn-warning";
	my.push(Classes.Less);
	my.push(less);
	

const Builtcontrol = (props)=>(
	


	<div className={Classes.BuiltControl}>

      
     <div className={Classes.Label}> {props.label}</div>
     <button className={myclass.join(' ')} onClick={props.added}>More</button>
     <button className={my.join(' ')} onClick={props.removed} disabled = {props.disable}>Less</button>
	</div>
	);
export default Builtcontrol;