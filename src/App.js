import React from 'react';
import {Route} from 'react-router-dom';

import './App.css';
import Layout from './components/layout/Layout';
import Burger from './container/Burgerbuilder/Burgerbuilder.js';
import Checkout from './container/Checkoutsummary/Checkoutsummary';
import Orders from './container/Orders/order';

function App() {
  return (
    <div>
    <Layout>
    <Route path="/" exact component = {Burger} />
    <Route path="/checkout" component = {Checkout} />
       <Route path="/orders" component = {Orders} />
    </Layout>
     
    </div>
  );
}

export default App;
