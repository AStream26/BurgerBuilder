import React from 'react';
import classes from './item.module.css';

const item = (props)=>{

	return (
      <li className={classes.item}> <a href={props.link} className={props.active?classes.active:null}>

      {props.children} </a> </li>
		)
}


export default item;