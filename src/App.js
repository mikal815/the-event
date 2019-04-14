import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import Highlight from './components/Highlights';
import Pricing from './components/pricing';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1425px",background:'cornflowerblue' }}>
        <Header/>
        <Featured/>
        <VenueNfo/>
        <Highlight/>
        <Pricing/>
      </div>
    );
  }
}

export default App;
