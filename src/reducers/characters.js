import {
  LOAD_CHARACTERS,
  LOAD_CHARACTERS_SUCCESS,
  LOAD_CHARACTER_SERIES,
  LOAD_CHARACTER_SERIES_SUCCESS,
  SEARCH_CHARACTER,
  SEARCH_CHARACTER_SUCCESS,
  CLEAR_SEARCH_CARACTER,
  ADD_CHARACTER_TO_LIST,
} from '../actions/characters';

export const initialState = {
  loading: false,
  loadingSeries: false,
  loadedCharacters: [],
  foundCharacters: [],
  series: [],
};

export function characters(state = initialState, action) {
  switch (action.type) {
    case LOAD_CHARACTERS:
      return {
        ...state,
        loading: true,
      };
    case LOAD_CHARACTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        loadedCharacters: [...action.response.data.data.results],
      };
    case LOAD_CHARACTER_SERIES:
      return {
        ...state,
        loadingSeries: true,
      };
    case LOAD_CHARACTER_SERIES_SUCCESS:
      return {
        ...state,
        loadingSeries: false,
        series: [...action.response.data.data.results],
      };
    case SEARCH_CHARACTER:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_CHARACTER_SUCCESS:
      return {
        ...state,
        loading: false,
        foundCharacters: [...action.response.data.data.results],
      };
    case CLEAR_SEARCH_CARACTER:
      return {
        ...state,
        foundCharacters: [],
      };
    case ADD_CHARACTER_TO_LIST:
      return {
        ...state,
        loadedCharacters: [...state.loadedCharacters, action.obj],
      };
    default:
      return state;
  }
}
