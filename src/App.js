import React from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';

import Home from './Page/Home';
import Login from './Page/Login';
import Register from './Page/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component = {Home} />
          <Route path='/Login' Component = {Login} />
          <Route path='/Register' Component = {Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
