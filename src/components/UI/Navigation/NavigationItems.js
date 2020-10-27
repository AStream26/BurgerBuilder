import React from 'react';
import Item from './NavigationItem/Navigationitem.js';
import classes from './items.module.css';

const navigation = (props)=>{
	return (
       
       <ul className={classes.items}>

       <Item link="/">Burger Builder </Item>
       <Item link="/Orders"> Checkout </Item>
        

       </ul>


		)
}

export default navigation;