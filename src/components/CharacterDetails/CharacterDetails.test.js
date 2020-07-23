import React from 'react';
import CharactersDetails from './';
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

describe('render Characters Details component', () => {
  it('should render a characters details', () => {
    const { debug, getByText } = renderWithProviders(<CharactersDetails />, {
      reduxState: {
        characters: {
          loading: false,
          loadedCharacters: [
            {
              id: 1011334,
              name: '3-D Man',
              description: '',
              modified: '2014-04-29T14:18:17-0400',
              thumbnail: {
                path:
                  'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
                extension: 'jpg',
              },
            },
          ],
          series: [
            {
              id: 1991,
              title: 'Avengers (1963 - 1996)',
              description:
                "Avengers Assemble! Iron Man, Thor, Captain America and the rest of Earth's Mightiest Heroes unite to stand against the threats none can face alone! See the Avengers go up against Ultron, Kang, the Masters of Evil and more over three decades of epic action!",
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
              startYear: 1963,
              endYear: 1996,
              rating: '',
              type: 'ongoing',
              modified: '2016-09-29T18:00:49-0400',
              thumbnail: {
                path:
                  'http://i.annihil.us/u/prod/marvel/i/mg/9/10/519baa6d1890a',
                extension: 'jpg',
              },
            },
            {
              id: 1995,
              title: 'Cable (1993 - 2002)',
              description: null,
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1995',
              urls: [],
              startYear: 1993,
              endYear: 2002,
              rating: '',
              type: '',
              modified: '2018-05-10T13:49:59-0400',
              thumbnail: {
                path:
                  'http://i.annihil.us/u/prod/marvel/i/mg/6/d0/5af4862c7f075',
                extension: 'jpg',
              },
            },
          ],
        },
      },
    });
    // const element = getByText(/3-D Man/i);
    // expect(element).toBeInTheDocument();

    debug();
  });
});
