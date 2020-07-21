import { combineReducers } from 'redux';
import characters from './characters';

const allReducers = combineReducers({
  characters,
});

const rootReducer = (stateReceived, action) =>
  allReducers(stateReceived, action);

export default rootReducer;
