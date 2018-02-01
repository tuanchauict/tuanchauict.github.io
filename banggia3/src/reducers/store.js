import {createStore, combineReducers} from 'redux'
import codes from './codeReducer'
import data from './dataReducer'
import indexes from './indexReducer';

const reducer = combineReducers({
  codes,
  data,
  indexes,
})

export const store = createStore(reducer)

export function getStockCodes() {
  return store.getState().codes;
}

export function subscribe(listener) {
  store.subscribe(listener)
}

const stockInfo = {}
fetch("https://finfoapi-hn.vndirect.com.vn/stocks")
  .then(response => response.json())
  .then(json => json.data)
  .then(data => {
    // console.log(data);
    data.forEach(item => {
      stockInfo[item.symbol] = item
    });
    // console.log(stockInfo);
  })
  
export function getStockInfo(code) {
  return stockInfo[code]
}