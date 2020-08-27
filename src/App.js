import React from 'react';

import './App.css';
import Layout from './components/layout/Layout';
import Burger from './container/Burgerbuilder/Burgerbuilder.js';

function App() {
  return (
    <div>
    <Layout>
    <Burger/>
    </Layout>
     
    </div>
  );
}

export default App;
