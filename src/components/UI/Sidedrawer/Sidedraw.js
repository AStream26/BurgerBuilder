import React from 'react';
import classes from './sidedraw.module.css';
import Logo from '../LOGO/Logo';
import Nav from '../Navigation/NavigationItems';
import Aux from '../../../hoc/Auxilary.js';
import Backdrop from '../Backdrop/Backdrop';



const side = (props)=>{
    console.log("Slide",props.isauth);
 let closeoropen = [classes.sidedraw,classes.close];
  if(props.show){
    closeoropen = [classes.sidedraw,classes.open];
  }
	return (
     <Aux>
      <Backdrop  show={!props.show} clicked={props.click}/>

         <div className={closeoropen.join(' ')}>
          <Logo height="10%" />

         <nav >
         <Nav isauth = {props.isauth} />
         </nav>

         </div>

         </Aux>
    
		)
}


export default side;