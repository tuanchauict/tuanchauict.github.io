import React, { Component } from 'react';
import {addStocks} from '../actions/actions'
import {store} from '../reducers/store'

export default class StockInput extends Component {
  state = {
    value: ''
  }
  
  handleKeyDown = (e) => {
    if (e.which === 13) {
      const value = this.refs.codes.value
      this.refs.codes.value = ''
      const codes = value.split(',').map(item => (item.trim().toUpperCase())).filter(item => item in window._ListStockInfo)
      store.dispatch(addStocks(codes))
    }
  }
  
  render() {
    return (
      <div>
        <input type="text" ref='codes' onKeyPress={this.handleKeyDown} placeholder='MBB, FPT, VNM'/>
        
      </div>
    )
  }
}