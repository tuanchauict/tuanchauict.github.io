import {createStore, combineReducers} from 'redux'
import {STOCKS_ADD, STOCKS_DELETE, STOCKS_UPDATE, STOCKS_INIT} from '../constants/eventTypes'
import codesReducer from './codeReducer'
import dataReducer from './dataReducer'
import {initStocks, updateStocks} from '../actions/actions'
import {createSample} from '../Model'

const reducer = combineReducers({
  codes: codesReducer,
  data: dataReducer,
})

export const store = createStore(reducer)

store.dispatch(initStocks(['HAG', 'HNG', 'MBB']))
store.dispatch(updateStocks({
  HAG: createSample(),
  HNG: createSample(),
  MBB: createSample(),
}))
