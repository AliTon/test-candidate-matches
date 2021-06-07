import { PayloadAction } from '@reduxjs/toolkit';
import {
  GET_CITIES_BY_COUNTRY_SUCCESS,
  SET_LOADING
} from '../actions/GetCities';
import { ICitiesStateReducerState } from '../../interfaces';
import { LOG_OUT } from '../../../Profile/redux/actions/Profile';

const reducer = (
  state = {},
  action: PayloadAction<{ country: string; list: string[] }>
) => {
  const { type, payload } = action;
  const stateClone: ICitiesStateReducerState = { ...state };
  switch (type) {
    case LOG_OUT:
      return {};
    case GET_CITIES_BY_COUNTRY_SUCCESS:
      stateClone[payload.country] = {
        cities: payload.list,
        loading: false
      };
      return stateClone;
    case SET_LOADING:
      stateClone[payload.country] = {
        cities: [],
        loading: true
      };
      return stateClone;
    default:
      return state;
  }
};

export default reducer;
