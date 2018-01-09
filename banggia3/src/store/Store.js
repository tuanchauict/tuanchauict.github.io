import {createStore, combineReducers} from 'redux';

const reducer = combineReducers({})

function rowsReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_STOCKS': {
      
    }
    case 'DELETE_STOCKS': {
      return state.filter(s => action.codes.indexOf(s.code) >= 0)
    }
    case 'UPDATE_STOCKS': {
      
    }
    default: {
      return state
    }
  }
}



const store = createStore(reducer)
function addStock(codes) {
  return {
    type: 'ADD_STOCKS',
    codes
  }
}

function deleteStock(codes) {
  return {
    type: 'DELETE_STOCKS', 
    codes
  }
}

function updateStocks(data) {
  return {
    type: 'UPDATE_STOCKS',
    data
  }
}

export {
  store
}