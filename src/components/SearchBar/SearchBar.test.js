import React from 'react';
import SearchBar from './';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render, fireEvent } from '@testing-library/react';
import { characters, initialState } from '../../reducers/characters';
import { BrowserRouter as Router } from 'react-router-dom';

function renderWithProviders(ui, { reduxState } = {}) {
  const store = createStore(
    characters,
    reduxState || initialState,
    applyMiddleware(thunk)
  );
  return render(
    <Provider store={store}>
      <Router>{ui}</Router>
    </Provider>
  );
}

const reduxState = {
  characters: {
    loadingSearch: false,
    foundCharacters: [
      {
        id: 1017305,
        name: 'Spider-Man (Marvel: Avengers Alliance)',
        description: '',
        modified: '2013-09-18T10:16:10-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/03/5239b59f49020',
          extension: 'jpg',
        },
      },
      {
        id: 1011377,
        name: 'Spider-Man (Takuya Yamashiro)',
        description: '',
        modified: '2012-08-06T16:27:55-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/50/4be86ad8ada17',
          extension: 'jpg',
        },
      },
    ],
  },
};

describe('render Search Bar correctly', () => {
  it('should render an input element', () => {
    const { getByPlaceholderText } = renderWithProviders(<SearchBar />, {
      reduxState,
    });
    const inputElement = getByPlaceholderText(/Buscar.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it('should search for characters', async () => {
    const { getByPlaceholderText } = renderWithProviders(<SearchBar />, {
      reduxState,
    });
    const input = getByPlaceholderText(/Buscar.../i);
    fireEvent.change(input, { target: { value: 'SpiderMan' } });
    expect(input.value).toBe('SpiderMan');
  });
});
