import {STOCKS_INIT, STOCKS_ADD, STOCKS_DELETE, STOCKS_UPDATE, STOCKS_SWAP, INDEXES_UPDATE} from '../constants/eventTypes'
// import indexes from '../reducers/indexReducer';

export function initStocks(codes) {
  return {
    type: STOCKS_INIT,
    codes,
  }
}

export function addStocks(codes) {
  return {
    type: STOCKS_ADD,
    codes,
  }
}

export function deleteStocks(codes) {
  return {
    type: STOCKS_DELETE,
    codes,
  }
}

export function updateStocks(data) {
  return {
    type: STOCKS_UPDATE,
    data
  }
}

export function swapStocks(a, b) {
  return {
    type: STOCKS_SWAP,
    stock1: a,
    stock2: b,
  }
}

export function updateIndexes(indexes) {
  return {
    type: INDEXES_UPDATE,
    indexes,
  }
}