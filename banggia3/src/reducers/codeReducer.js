import {STOCKS_ADD, STOCKS_DELETE, STOCKS_INIT} from '../constants/eventTypes'

export default function codes(state = [], action) {
  switch (action.type) {
    case STOCKS_ADD: {
      return state.concat(action.codes)
    }
    case STOCKS_DELETE: {
      return state.filter(c => action.codes.indexOf(c) < 0);
    }
    case STOCKS_INIT: {
      return action.codes
    }
    default: {
      return state
    }
    
  }
}
