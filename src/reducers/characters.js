import {
  LOAD_CHARACTERS,
  LOAD_CHARACTERS_SUCCESS,
} from '../actions/characters';

const initialState = {
  loading: false,
  characters: [],
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
    default:
      return state;
  }
}
