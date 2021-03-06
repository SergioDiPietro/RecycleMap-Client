import { createStore, combineReducers } from 'redux';
import { userReducer } from './user/reducer';
import { mapReducer } from './map/reducer';

const reducers = combineReducers({
  userReducer,
  mapReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
