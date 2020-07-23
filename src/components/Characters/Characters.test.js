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

describe('render Characters component', () => {
  it('should render a character image', () => {
    const { getByAltText } = renderWithProviders(<Characters />, {
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
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1011334',
              comics: {
                available: 12,
                collectionURI:
                  'http://gateway.marvel.com/v1/public/characters/1011334/comics',
                items: [
                  {
                    resourceURI:
                      'http://gateway.marvel.com/v1/public/comics/21366',
                    name: 'Avengers: The Initiative (2007) #14',
                  },
                  {
                    resourceURI:
                      'http://gateway.marvel.com/v1/public/comics/24571',
                    name:
                      'Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)',
                  },
                  {
                    resourceURI:
                      'http://gateway.marvel.com/v1/public/comics/21546',
                    name: 'Avengers: The Initiative (2007) #15',
                  },
                  {
                    resourceURI:
                      'http://gateway.marvel.com/v1/public/comics/21741',
                    name: 'Avengers: The Initiative (2007) #16',
                  },
                  {
                    resourceURI:
                      'http://gateway.marvel.com/v1/public/comics/21975',
                    name: 'Avengers: The Initiative (2007) #17',
                  },
                  {
                    resourceURI:
                      'http://gateway.marvel.com/v1/public/comics/22299',
                    name: 'Avengers: The Initiative (2007) #18',
                  },
                  {
                    resourceURI:
                      'http://gateway.marvel.com/v1/public/comics/22300',
                    name:
                      'Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)',
                  },
                  {
                    resourceURI:
                      'http://gateway.marvel.com/v1/public/comics/22506',
                    name: 'Avengers: The Initiative (2007) #19',
                  },
                  {
                    resourceURI:
                      'http://gateway.marvel.com/v1/public/comics/8500',
                    name: 'Deadpool (1997) #44',
                  },
                  {
                    resourceURI:
                      'http://gateway.marvel.com/v1/public/comics/10223',
                    name: 'Marvel Premiere (1972) #35',
                  },
                  {
                    resourceURI:
                      'http://gateway.marvel.com/v1/public/comics/10224',
                    name: 'Marvel Premiere (1972) #36',
                  },
                  {
                    resourceURI:
                      'http://gateway.marvel.com/v1/public/comics/10225',
                    name: 'Marvel Premiere (1972) #37',
                  },
                ],
                returned: 12,
              },
              series: {
                available: 3,
                collectionURI:
                  'http://gateway.marvel.com/v1/public/characters/1011334/series',
                items: [
                  {
                    resourceURI:
                      'http://gateway.marvel.com/v1/public/series/1945',
                    name: 'Avengers: The Initiative (2007 - 2010)',
                  },
                  {
                    resourceURI:
                      'http://gateway.marvel.com/v1/public/series/2005',
                    name: 'Deadpool (1997 - 2002)',
                  },
                  {
                    resourceURI:
                      'http://gateway.marvel.com/v1/public/series/2045',
                    name: 'Marvel Premiere (1972 - 1981)',
                  },
                ],
                returned: 3,
              },
            },
          ],
        },
      },
    });
    const altAttribute = getByAltText('Marvel hero 3-D Man');
    expect(altAttribute).toBeInTheDocument();
  });

  it('should render a character link details', () => {
    const { getByTestId } = renderWithProviders(<Characters />, {
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
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1011334',
              comics: {
                available: 12,
                collectionURI:
                  'http://gateway.marvel.com/v1/public/characters/1011334/comics',
                items: [
                  {
                    resourceURI:
                      'http://gateway.marvel.com/v1/public/comics/21366',
                    name: 'Avengers: The Initiative (2007) #14',
                  },
                  {
                    resourceURI:
                      'http://gateway.marvel.com/v1/public/comics/24571',
                    name:
                      'Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)',
                  },
                  {
                    resourceURI:
                      'http://gateway.marvel.com/v1/public/comics/21546',
                    name: 'Avengers: The Initiative (2007) #15',
                  },
                  {
                    resourceURI:
                      'http://gateway.marvel.com/v1/public/comics/21741',
                    name: 'Avengers: The Initiative (2007) #16',
                  },
                  {
                    resourceURI:
                      'http://gateway.marvel.com/v1/public/comics/21975',
                    name: 'Avengers: The Initiative (2007) #17',
                  },
                  {
                    resourceURI:
                      'http://gateway.marvel.com/v1/public/comics/22299',
                    name: 'Avengers: The Initiative (2007) #18',
                  },
                  {
                    resourceURI:
                      'http://gateway.marvel.com/v1/public/comics/22300',
                    name:
                      'Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)',
                  },
                  {
                    resourceURI:
                      'http://gateway.marvel.com/v1/public/comics/22506',
                    name: 'Avengers: The Initiative (2007) #19',
                  },
                  {
                    resourceURI:
                      'http://gateway.marvel.com/v1/public/comics/8500',
                    name: 'Deadpool (1997) #44',
                  },
                  {
                    resourceURI:
                      'http://gateway.marvel.com/v1/public/comics/10223',
                    name: 'Marvel Premiere (1972) #35',
                  },
                  {
                    resourceURI:
                      'http://gateway.marvel.com/v1/public/comics/10224',
                    name: 'Marvel Premiere (1972) #36',
                  },
                  {
                    resourceURI:
                      'http://gateway.marvel.com/v1/public/comics/10225',
                    name: 'Marvel Premiere (1972) #37',
                  },
                ],
                returned: 12,
              },
              series: {
                available: 3,
                collectionURI:
                  'http://gateway.marvel.com/v1/public/characters/1011334/series',
                items: [
                  {
                    resourceURI:
                      'http://gateway.marvel.com/v1/public/series/1945',
                    name: 'Avengers: The Initiative (2007 - 2010)',
                  },
                  {
                    resourceURI:
                      'http://gateway.marvel.com/v1/public/series/2005',
                    name: 'Deadpool (1997 - 2002)',
                  },
                  {
                    resourceURI:
                      'http://gateway.marvel.com/v1/public/series/2045',
                    name: 'Marvel Premiere (1972 - 1981)',
                  },
                ],
                returned: 3,
              },
            },
          ],
        },
      },
    });
    const linkElement = getByTestId('character-image').getAttribute('href');
    expect(linkElement).toBe('/character/1011334');
  });

  it('should render a characters name', () => {
    const { getByText } = renderWithProviders(<Characters />, {
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
        },
      },
    });
    const element = getByText(/3-D Man/i);
    expect(element).toBeInTheDocument();
  });
});
