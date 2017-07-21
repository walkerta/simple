import React, { Component } from 'react';
import logo from './logo.svg';
import '..src/styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="earthquake-header"/>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


class EarthQuake extends Component{
render() {
return<h1>"This is a list of 8 Earthquakes occurring on the morning of July 14th across the United States."</h>;
}

}
export default App;
