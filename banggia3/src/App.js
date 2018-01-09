import React, { Component } from 'react';
import PTable from './components/Table'
import './App.css';
import {model} from './Model'
import {createRows} from './Utils'


class App extends Component {
  render() {
    return (
      <div id="desktop" className="App">
        <PTable rows={createRows(model)}/>
      </div>
    );
  }
}

export default App;
