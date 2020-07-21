import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import reducer from './reducers';
import { loadState, saveState } from './store/localStorage.js';

// Load State from localStorage
const persistedState = loadState();
const store = createStore(reducer, persistedState, configureStore);

// Add state to localStorage
store.subscribe(() => {
  saveState({
    hotSpot: store.getState().hotSpot,
  });
});

function App() {
  return <Provider store={store}>oi</Provider>;
}

export default App;
