import React from 'react';
import classes from './toolbar.module.css';
import Logo from '../LOGO/Logo.js';
import Nav from '../Navigation/NavigationItems';
import Openmenu from '../../../assest/Images/open-menu.png';


const toolbar= (props)=>(


	
		<header className={classes.toolbar}>
        
		<Logo height="80%" />
		 <div className={classes.mobileonly} onClick={props.click}><img src={Openmenu} alt="&&"className={classes.imga} /></div>
	
		<nav className={classes.dekstoponly}>
		<Nav isauth={props.isauth} />
		</nav>
    

		</header>

		)


export default toolbar;