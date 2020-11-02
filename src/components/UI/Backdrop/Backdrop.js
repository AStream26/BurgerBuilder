import React from 'react';
import classes from './backdrop.module.css';

const backdrop = (props)=>{
	        
	        
	        let b = props.show;
	       // console.log(b);
	       // console.log(props.clicked);

	       if(b)
	       	return(
	       		<div className={classes.backdrop} onClick={props.clicked}></div>
	       		)
	
       else return null;

		}

		export default backdrop;

