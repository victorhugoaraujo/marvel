import api from '../services/api';

export const LOAD_CHARACTERS = 'LOAD_CHARACTERS';
export const LOAD_CHARACTERS_SUCCESS = 'LOAD_CHARACTERS_SUCCESS';

export const SEARCH_CHARACTER = 'SEARCH_CHARACTER';
export const SEARCH_CHARACTER_SUCCESS = 'SEARCH_CHARACTER_SUCCESS';

export const loadCharacters = () => {
  return (dispatch) => {
    dispatch({ type: LOAD_CHARACTERS });
    api
      .get('/characters', {
        params: {
          ts: '1595364280',
          apikey: '31610740c4faf376d9298842641f72b9',
          hash: 'c87bd4f9d417c95a3521c2b0eeab3eba',
        },
      })
      .then((response) => {
        dispatch({ type: LOAD_CHARACTERS_SUCCESS, response });
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
};

export const searchCharacter = (name) => {
  return (dispatch) => {
    dispatch({ type: SEARCH_CHARACTER });
    api
      .get('/characters', {
        params: {
          name: name,
          ts: '1595364280',
          apikey: '31610740c4faf376d9298842641f72b9',
          hash: 'c87bd4f9d417c95a3521c2b0eeab3eba',
        },
      })
      .then((response) => {
        console.log(response);
        dispatch({ type: SEARCH_CHARACTER_SUCCESS, response });
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
};
