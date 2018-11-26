import React, { Component } from 'react';
import './App.css';

import{BrowserRouter,Route,Switch}from 'react-router-dom';
import WeatherContainer from './components/WeatherContainer/WeatherContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Switch>
        <Route component={WeatherContainer}/>
       
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
