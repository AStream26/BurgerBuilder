import React from 'react';
import classes from './item.module.css';
import {NavLink} from 'react-router-dom';

const item = (props)=>{

	return (
      <li className={classes.item}> 
      <NavLink  exact to={props.link} activeClassName={props.active}>

      {props.children} </NavLink> </li>
		)
}


export default item;