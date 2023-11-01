import { combineReducers } from 'redux';

const cacheReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CACHE_DATA':
      return { ...state, [action.key]: action.data };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cache: cacheReducer,
});

export default rootReducer;
