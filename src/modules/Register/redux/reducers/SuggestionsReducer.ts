import { PayloadAction } from '@reduxjs/toolkit';
import {
  ADD_ITEM,
  GET_SUGGESTIONS,
  REMOVE_ITEM
} from '../actions/SuggestionManagement';
import { ISuggestionsReducerState } from '../../interfaces';

const defaultState: ISuggestionsReducerState = {
  suggestions: [],
  favorites: []
};

const reducer = (
  state = defaultState,
  action: PayloadAction<{ index: number }>
) => {
  const { type, payload } = action;
  switch (type) {
    case GET_SUGGESTIONS:
      return { ...state, suggestions: payload };
    case REMOVE_ITEM:
      let favoritesCopy = [...state.favorites];
      favoritesCopy.splice(payload.index, 1);
      return {
        ...state,
        suggestions: state.suggestions.concat(state.favorites[payload.index]),
        favorites: favoritesCopy
      };
    case ADD_ITEM:
      let suggestionsCopy = [...state.suggestions];
      suggestionsCopy.splice(payload.index, 1);
      return {
        ...state,
        favorites: state.favorites.concat(state.suggestions[payload.index]),
        suggestions: suggestionsCopy
      };
    default:
      return state;
  }
};

export default reducer;
