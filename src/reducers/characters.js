import {
  LOAD_CHARACTERS,
  LOAD_CHARACTERS_SUCCESS,
  SEARCH_CHARACTER,
  SEARCH_CHARACTER_SUCCESS,
} from '../actions/characters';

const initialState = {
  loading: false,
  loadingSearch: false,
  characters: [],
  searchCharacter: [],
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
        characters: [...action.response.data.data.results],
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
        searchCharacters: [...action.response.data.data.results],
      };
    default:
      return state;
  }
}
