import React,{Component} from 'react';
import Aux from '../../hoc/Auxilary';
import classes from './layout.module.css';
import Toolbar from '../UI/Toolbar/Toolbar';
import Sidedraw from '../UI/Sidedrawer/Sidedraw';

class Layout extends Component{
	state={
		sidedrawer : true
	}

	togglesidedrwer = ()=>{
		this.setState({sidedrawer:false});
	}

	toggle = ()=>{
		let a = true;
		if(this.state.sidedrawer){
			a = false;
		}
		this.setState({sidedrawer:a});
	}

	render(){

		return (
            
            <Aux>

    <Toolbar click={this.toggle} />
    <Sidedraw show = {this.state.sidedrawer} click = {this.togglesidedrwer} />
    <main className= {classes.margin}>
    {this.props.children}
    </main>

           </Aux>
           

			)

	}
	
}

export default Layout;