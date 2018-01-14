import {STOCKS_ADD, STOCKS_DELETE, STOCKS_INIT, STOCKS_SWAP} from '../constants/eventTypes'

export default function codes(state = [], action) {
  switch (action.type) {
    case STOCKS_ADD: {
      const codes = action.codes.filter(code => (state.indexOf(code) < 0))
      return state.concat(codes)
    }
    case STOCKS_DELETE: {
      return state.filter(c => action.codes.indexOf(c) < 0);
    }
    case STOCKS_INIT: {
      return action.codes
    }
    case STOCKS_SWAP: {
      const {stock1, stock2} = action
      const index1 = state.indexOf(stock1)
      const index2 = state.indexOf(stock2)
      const newState = [...state]
      newState[index1] = stock2
      newState[index2] = stock1
      return newState
    }
    default: {
      return state
    }
    
  }
}
