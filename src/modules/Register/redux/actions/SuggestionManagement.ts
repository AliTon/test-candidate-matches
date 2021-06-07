export const GET_SUGGESTIONS = 'GET_SUGGESTIONS';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';

// @ts-ignore
export const getSuggestions = (data: any[]) => ({
  type: GET_SUGGESTIONS,
  payload: data
});

export const removeItem = (index?: number) => ({
  type: REMOVE_ITEM,
  payload: { index }
});

export const addItem = (index?: number) => ({
  type: ADD_ITEM,
  payload: { index }
});
