/* eslint-disable no-underscore-dangle */
import thunk from 'redux-thunk';

import { applyMiddleware, compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

export default composeEnhancers(applyMiddleware(thunk));
