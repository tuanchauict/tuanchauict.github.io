import {STOCKS_UPDATE} from '../constants/eventTypes'

export default function dataReducer(state = {}, action) {
  switch (action.type) {
    case STOCKS_UPDATE:
      {
        return {
          ...state,
          ...action.data
        }
      }
    default:
      {
        return state
      }
  }
}