import React from 'react';
import Item from './NavigationItem/Navigationitem.js';
import classes from './items.module.css';

const navigation = (props)=>{
	//console.log("props.isauth",props.isauth);
	return (
       
       <ul className={classes.items}>

       <Item link="/">Burger Builder </Item>
       {props.isauth?<Item link="/Orders"> Checkout </Item>:null}
       
       {
       	props.isauth? <Item link ="/logout">LOGOUT</Item>: <Item link ="/authanticate">Authanticate</Item>
       }
      
        

       </ul>


		)
}

export default navigation;