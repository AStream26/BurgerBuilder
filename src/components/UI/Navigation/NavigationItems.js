import React from 'react';
import Item from './NavigationItem/Navigationitem.js';
import classes from './items.module.css';

const navigation = (props)=>{
	return (
       
       <ul className={classes.items}>

       <Item active link="/">Burger Builder </Item>
       <Item link="/"> Checkout </Item>
        

       </ul>


		)
}

export default navigation;