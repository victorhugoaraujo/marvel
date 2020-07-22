import {
  LOAD_CHARACTERS,
  LOAD_CHARACTERS_SUCCESS,
  LOAD_CHARACTER_SERIES,
  LOAD_CHARACTER_SERIES_SUCCESS,
  SEARCH_CHARACTER,
  SEARCH_CHARACTER_SUCCESS,
} from '../actions/characters';

const initialState = {
  loading: false,
  loadingSeries: false,
  loadedCharacters: [],
  series: [],
};

export default function characters(state = initialState, action) {
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
        loadedCharacters: [...action.response.data.data.results],
      };
    default:
      return state;
  }
}
