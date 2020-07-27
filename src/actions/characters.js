import api from '../services/api';

export const LOAD_CHARACTERS = 'LOAD_CHARACTERS';
export const LOAD_CHARACTERS_SUCCESS = 'LOAD_CHARACTERS_SUCCESS';

export const LOAD_CHARACTER_SERIES = 'LOAD_CHARACTER_SERIES';
export const LOAD_CHARACTER_SERIES_SUCCESS = 'LOAD_CHARACTER_SERIES_SUCCESS';

export const SEARCH_CHARACTER = 'SEARCH_CHARACTER';
export const SEARCH_CHARACTER_SUCCESS = 'SEARCH_CHARACTER_SUCCESS';

export const CLEAR_SEARCH_CARACTER = 'CLEAR_SEARCH_CARACTER';
export const ADD_CHARACTER_TO_LIST = 'ADD_CHARACTER_TO_LIST';

export const EDIT_CHARACTER = 'EDIT_CHARACTER';
export const LOAD_CHARACTERS_FROM_LOCAL_STORAGE =
  'LOAD_CHARACTERS_FROM_LOCAL_STORAGE';

export const loadCharacters = (id, name) => {
  return (dispatch) => {
    dispatch({ type: LOAD_CHARACTERS });
    api
      .get('/characters', {
        params: {
          id: id && id,
          nameStartsWith: name && name,
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

export const loadCharacterSeries = (id) => {
  return (dispatch) => {
    dispatch({ type: LOAD_CHARACTER_SERIES });
    api
      .get(`/characters/${id}/series`, {
        params: {
          ts: '1595364280',
          apikey: '31610740c4faf376d9298842641f72b9',
          hash: 'c87bd4f9d417c95a3521c2b0eeab3eba',
        },
      })
      .then((response) => {
        dispatch({ type: LOAD_CHARACTER_SERIES_SUCCESS, response });
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
};

export const searchCharactersByName = (name) => {
  return (dispatch) => {
    dispatch({ type: SEARCH_CHARACTER });
    api
      .get('/characters', {
        params: {
          nameStartsWith: name,
          ts: '1595364280',
          apikey: '31610740c4faf376d9298842641f72b9',
          hash: 'c87bd4f9d417c95a3521c2b0eeab3eba',
        },
      })
      .then((response) => {
        dispatch({ type: SEARCH_CHARACTER_SUCCESS, response });
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
};
export const clearSearchCharacter = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_SEARCH_CARACTER });
  };
};

export const addCharacterToList = (obj) => {
  return (dispatch) => {
    dispatch({ type: ADD_CHARACTER_TO_LIST, obj });
  };
};

export const addCharacterToLocalStorage = (character) => {
  localStorage.setItem('@Marvel:character', JSON.stringify(character));
  return (dispatch) => {
    dispatch({ type: EDIT_CHARACTER, character });
  };
};

export const loadCharacterFromLocalStorage = () => {
  const character = JSON.parse(localStorage.getItem('@Marvel:character'));
  return (dispatch) => {
    dispatch({ type: LOAD_CHARACTERS_FROM_LOCAL_STORAGE, character });
  };
};
