import React,{Component} from 'react';
import Aux from '../../hoc/Auxilary';
import classes from './layout.module.css';
import Toolbar from '../UI/Toolbar/Toolbar';
import Sidedraw from '../UI/Sidedrawer/Sidedraw';
import {connect} from 'react-redux';

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

    <Toolbar isauth={this.props.isauth} click={this.toggle} />
    <Sidedraw isauth = {this.props.isauth} show = {this.state.sidedrawer} click = {this.togglesidedrwer} />
    <main className= {classes.margin}>
    {this.props.children}
    </main>

           </Aux>
           

			)

	}
	
}

const mapStateToProps = (state)=>{
	return{
		isauth:state.auth.token!=null
	}
}

export default connect(mapStateToProps)(Layout);