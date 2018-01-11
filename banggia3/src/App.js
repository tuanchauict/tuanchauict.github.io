import React, { Component } from 'react';
import PTable from './components/Table'
import './App.css';
import {createRows, readUrlParam} from './Utils'
import {store} from './reducers/store'
import StockRepository from  './model/StockRepository'
import {updateStocks, initStocks} from './actions/actions'
import Firebase from './model/FirebaseRepository';
import { config } from './constants/firebase';

const repo = new StockRepository('wss://price-hn04.vndirect.com.vn/realtime/472/iksx822s/websocket', store.getState().codes)
const fb = new Firebase(config)
fb.addListener(codes => {
  store.dispatch(initStocks(codes))
})

fb.setProperties(readUrlParam('o', 'anh'), readUrlParam('t', 'default'))


class App extends Component {
  
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate()
      repo.updateStockCodes(store.getState().codes)
      fb.writeCodes(store.getState().codes)
    })
    repo.addListener((data) => {
      console.log(data);
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
