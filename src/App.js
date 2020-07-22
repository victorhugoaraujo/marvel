import React from 'react';
import { createStore } from 'redux';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
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
    characters: store.getState().characters.characters,
  });
});

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes />
      </Provider>
    </Router>
  );
}

export default App;
