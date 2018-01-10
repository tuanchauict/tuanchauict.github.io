import {createStore, combineReducers} from 'redux'
import codesReducer from './codeReducer'
import dataReducer from './dataReducer'
import {initStocks, updateStocks} from '../actions/actions'
import {createSample} from '../MockModel'

const reducer = combineReducers({
  codes: codesReducer,
  data: dataReducer,
})

export const store = createStore(reducer)

export function getStockCodes() {
  return store.getState().codes;
}

export function subscribe(listener) {
  store.subscribe(listener)
}

//TEST
store.dispatch(initStocks(['HAG', 'HNG', 'MBB']))
// store.dispatch(updateStocks({
//   HAG: createSample(),
//   HNG: createSample(),
//   MBB: createSample(),
// }))
