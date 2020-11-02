import React,{Component} from 'react';
import {Route,withRouter,Redirect,Switch} from 'react-router-dom';

import './App.css';
import Layout from './components/layout/Layout';
import Burger from './container/Burgerbuilder/Burgerbuilder.js';
import Checkout from './container/Checkoutsummary/Checkoutsummary';
import Orders from './container/Orders/order';
import Auth from './container/Auth/Auth';
import Logout from './container/Auth/Logout/logout';
import {connect} from 'react-redux';
import * as  Action from './store/Action/index.js';
class App extends Component{
  componentDidMount(){
  this.props.onAutosingin();
   
}


  render(){
let  route = (
  <Switch>
  <Route path="/" exact component = {Burger} />
   <Route path="/authanticate" component = {Auth} />
   <redirect to="/" />

  </Switch>

  );
  if(this.props.isauth){
    route = (
 <Switch>
 
     
    <Route path="/checkout" component = {Checkout} />
       <Route path="/orders" component = {Orders} />
      
        <Route path="/logout" component = {Logout} />
         <Route path="/" exact component = {Burger} />
         <redirect to="/" />

  </Switch>

    );
  }
     return (
    <div>
    <Layout>
  {route}
    </Layout>
     
    </div>
  );

  }
}
const mapStateToProps = (state)=>{
  return{
    isauth:state.auth.token!==null
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    onAutosingin:()=>dispatch( Action.Authcheckstate())
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
