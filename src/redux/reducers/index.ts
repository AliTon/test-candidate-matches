/**
 *  FILE: REDUX ROOT REDUCER
 **/

import { combineReducers } from 'redux';

// All Reducers - '../../containers/*/reducers'
import citiesReducer from '../../modules/Register/redux/reducers/CitiesReducer';
import suggestionsReducer from '../../modules/Register/redux/reducers/SuggestionsReducer';
import profileReducer, {
  IProfileReducerState
} from '../../modules/Profile/redux/reducers/ProfileReducer';

const rootReducer = combineReducers({
  cities: citiesReducer,
  suggestions: suggestionsReducer,
  profile: profileReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
