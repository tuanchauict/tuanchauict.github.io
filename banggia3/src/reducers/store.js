import {createStore, combineReducers} from 'redux'
import codes from './codeReducer'
import data from './dataReducer'

const reducer = combineReducers({
  codes,
  data,
})

export const store = createStore(reducer)

export function getStockCodes() {
  return store.getState().codes;
}

export function subscribe(listener) {
  store.subscribe(listener)
}