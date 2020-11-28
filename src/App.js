 import React from 'react'

import {  BrowserRouter as Router,
          Route,
          Switch,
          Redirect } from 'react-router-dom';

import { Provider } from "react-redux"; 
import store  from "./store/store"
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Provider store={store}> 
      <Router>
        <Switch> 
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
