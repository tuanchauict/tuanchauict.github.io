import {STOCKS_INIT, STOCKS_ADD, STOCKS_DELETE, STOCKS_UPDATE} from '../constants/eventTypes'

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

export function deteleStocks(codes) {
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

