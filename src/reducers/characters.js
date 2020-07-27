import {
  LOAD_CHARACTERS,
  LOAD_CHARACTERS_SUCCESS,
  LOAD_CHARACTER_SERIES,
  LOAD_CHARACTER_SERIES_SUCCESS,
  SEARCH_CHARACTER,
  SEARCH_CHARACTER_SUCCESS,
  CLEAR_SEARCH_CARACTER,
  ADD_CHARACTER_TO_LIST,
  EDIT_CHARACTER,
  LOAD_CHARACTERS_FROM_LOCAL_STORAGE,
} from '../actions/characters';

export const initialState = {
  loading: false,
  loadingSeries: false,
  loadingSearch: false,
  loadedCharacters: [],
  foundCharacters: [],
  storeCharacter: [],
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
        loadingSearch: true,
      };
    case SEARCH_CHARACTER_SUCCESS:
      return {
        ...state,
        loadingSearch: false,
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
    case EDIT_CHARACTER:
      return {
        ...state,
        // storeCharacter: [...state.storeCharacter, action.character],
        storeCharacter: action.character,
      };
    case LOAD_CHARACTERS_FROM_LOCAL_STORAGE:
      return {
        ...state,
        storeCharacter: action.character,
      };
    default:
      return state;
  }
}
