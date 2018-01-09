import {createStore, combineReducers} from 'redux'
import {STOCKS_ADD, STOCKS_DELETE, STOCKS_INIT, STOCKS_UPDATE} from '../constants/eventTypes'

const reducer = combineReducers({})

function rowsReducer(state = [], action) {
  switch (action.type) {
    case STOCKS_ADD:
      {}
    case STOCKS_DELETE:
      {
        return state.filter(s => action.codes.indexOf(s.code) >= 0)
      }
    case STOCKS_UPDATE:
      {}
    default:
      {
        return state
      }
  }
}

const store = createStore(reducer)
function addStock(codes) {
  return {type: 'ADD_STOCKS', codes}
}

function deleteStock(codes) {
  return {type: 'DELETE_STOCKS', codes}
}

function updateStocks(data) {
  return {type: 'UPDATE_STOCKS', data}
}

export {store}