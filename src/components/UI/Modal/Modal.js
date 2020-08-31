import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxilary';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props)=>(
	<Aux>

     <Backdrop clicked={props.click} show={props.purchase} />
     <div className={classes.Modal}
       style={{
       		transform:props.purchase?'translateY(0)':'translateY(-100vh)',
       	opacity:props.purchase?'1':'0',
       
       }}>
     {props.children}
     </div>

     </Aux>

);

export default modal;


