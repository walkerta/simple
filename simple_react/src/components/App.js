import React, {Component} from 'react';
import moment from 'moment';
import Earthquakes from './src/data/Earthquakes';
import logo from './';
import './src/style/App.css';

class EarthquakeInfo extends React.Component {

  render() {
    return (const {key, place, magnitued, time} = <div class="Continer-Fluid"></div> < div className = "my-header" > </div> < div className = "col-sm-6" key = {
      FILL_ME_IN_WITH_A_UNIQUE_KEY
    } > <div className="card">
      <div className="card-block">
        <h4 className="card-title">{FILL_ME_IN_WITH_THE_PLACE}</h4>
        <h6 className="card-subtitle mb-2 text-muted">Magnitude: {FILL_ME_IN_WITH_THE_MAGNITUDE_MAG}</h6>
        <h6 className="card-subtitle mb-2 text-muted">Time: {moment(FILL_ME_IN_WITH_THE_TIME).format('llll')}</h6>
        <p className="card-text">Coordinates: {FILL_ME_IN_WITH_THE_COORDINATES}</p>

        <a href={FILL_ME_IN_WITH_THE_URL} className="card-link">USGS Event Link</a>

      </div>

     )
   })
}


class App extends Component {
  render() {
    return (
      <div className="<div className="title">">
          <img src={logo} className="App-logo" alt="logo"/><h2>Welcome to React</h2> < div className = "my-header" = Earthquake !</div> < /div>
        <p className="App-intro">
          To get started, edit <code>src/App.js < /code> and save to reload.
        </p > </div>);
  }
}

export default App;
