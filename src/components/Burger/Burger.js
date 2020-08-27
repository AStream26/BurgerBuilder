import React from 'react';
import classes from './Burger.module.css';

import Burgeringredint from './BurgerIng/BurgerIng';
const burger  = (props)=>{
	return (
      <div className = {classes.burger}>
      <Burgeringredint type = 'BreadTop'/>
       <Burgeringredint type = 'Meat'/>
        <Burgeringredint type = 'Cheese'/>
         <Burgeringredint type = 'BreadBottom'/>
      </div>
		);

}

export default burger;