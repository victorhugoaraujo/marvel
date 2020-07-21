import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import reducer from './reducers';
import { loadState, saveState } from './store/localStorage.js';

import Home from './pages/Home';

// Load State from localStorage
const persistedState = loadState();
const store = createStore(reducer, persistedState, configureStore);

// Add state to localStorage
store.subscribe(() => {
  saveState({
    characters: store.getState().characters,
  });
});

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
