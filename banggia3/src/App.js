import React, { Component } from 'react';
import PTable from './components/Table'
import './App.css';
import {priceTable} from './Model'


class App extends Component {
  render() {
    return (
      <div id="desktop" className="App">
        <PTable priceTable={priceTable}/>
      </div>
    );
  }
}

export default App;
