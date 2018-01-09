import React, { Component } from 'react';
import PTable from './components/Table'
import './App.css';
import {createRows} from './Utils'
import {store} from './reducers/store'
import StockRepository from  './model/StockRepository'
import {updateStocks} from './actions/actions'

const repo = new StockRepository('wss://price-hn04.vndirect.com.vn/realtime/472/iksx822s/websocket')

class App extends Component {
  compnentDidMount() {
    store.subscribe(() => {
      this.forceUpdate()
      repo.updateStockCodes(store.getState().codes)
    })
    
    repo.subscribe((data) => {
      store.dispatch(updateStocks(data))
    })
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
