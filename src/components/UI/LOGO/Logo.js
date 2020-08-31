import React from 'react';
import Burgerlogo from '../../../assest/Images/burger-logo.png';
import classes from './logo.module.css';

const logo =(props)=>{
	return (

        <div  className={classes.logo} style={{height:props.height}}>
        <img src={Burgerlogo} alt="logo" />
        </div>

		)
}

export default logo;