import React from 'react';
import Aux from '../../hoc/Auxilary';
import classes from './layout.module.css';

const layout = (props)=>(
	<Aux>

    <div> sidebar,toolbar,backdrop</div>
    <main className= {classes.margin}>
    {props.children}
    </main>

    </Aux>
);

export default layout;