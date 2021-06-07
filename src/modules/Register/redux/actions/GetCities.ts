export const GET_CITIES_BY_COUNTRY = 'GET_CITIES_BY_COUNTRY';
export const GET_CITIES_BY_COUNTRY_SUCCESS = 'GET_CITIES_BY_COUNTRY_SUCCESS';
export const SET_LOADING = 'SET_LOADING';

// @ts-ignore
export const getCitiesByCountry = (country: string) => ({
  type: GET_CITIES_BY_COUNTRY,
  payload: { country }
});

export const getCitiesByCountrySuccess = (country: string, list: string[]) => ({
  type: GET_CITIES_BY_COUNTRY_SUCCESS,
  payload: { list, country }
});

export const setLoading = (country: string) => ({
  type: SET_LOADING,
  payload: { country }
});
