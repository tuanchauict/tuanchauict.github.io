import React, { Component } from 'react';
import PTable from './components/Table'
import './App.css';
import {createRows} from './Utils'
import {store} from './reducers/store'



class App extends Component {
  compnentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }
  
  render() {
    const state = store.getState();
    return (
      <div id="desktop" className="App">
        <PTable rows={createRows(state)}/>
      </div>
    );
  }
}

export default App;
