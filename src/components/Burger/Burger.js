import React from 'react';
import classes from './Burger.module.css';

import Burgeringredint from './BurgerIng/BurgerIng';
const burger  = (props)=>{

	const ingre = Object.keys(props.ing).map((igkey)=>{
		return [...Array(props.ing[igkey])].map((_,i)=>{
		return <Burgeringredint key ={igkey+i} type = {igkey} />
	});

	}).reduce((arr,cur)=>{
       return arr.concat(cur);
	},[]);
//	console.log(ingre);

	return (
      <div className = {classes.burger}>
      <Burgeringredint type = 'BreadTop'/>
       {ingre}
         <Burgeringredint type = 'BreadBottom'/>
       
      </div>
		);

}

export default burger;