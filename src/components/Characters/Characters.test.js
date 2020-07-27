import React from 'react';
import Characters from './';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render } from '@testing-library/react';
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
    loading: false,
    loadedCharacters: [
      {
        id: 1011334,
        name: '3-D Man (Peter Parker)',
        description: '',
        modified: '2014-04-29T14:18:17-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
          extension: 'jpg',
        },
      },
    ],
  },
};

describe('render Characters component', () => {
  it('should render character title', () => {
    const { getByText } = renderWithProviders(<Characters />, {
      reduxState,
    });
    const element = getByText(/3-D Man/i);
    expect(element).toBeInTheDocument();
  });

  it('should render character subtitle', () => {
    const { getByText } = renderWithProviders(<Characters />, {
      reduxState,
    });
    const element = getByText(/Peter Parker/i);
    expect(element).toBeInTheDocument();
  });

  it('should render character details link', () => {
    const { getByTestId } = renderWithProviders(<Characters />, {
      reduxState,
    });
    const element = getByTestId('character-details-link');
    expect(element).toHaveAttribute('href', '/character/1011334');
  });

  it('should render loading component', () => {
    const { getByTestId } = renderWithProviders(<Characters />, {
      reduxState: {
        characters: {
          loading: true,
          loadedCharacters: [],
        },
      },
    });
    const element = getByTestId('loading');
    expect(element).toBeInTheDocument();
  });
});
