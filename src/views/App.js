import React, { Component } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import Home from './Home/Home';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path ="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
