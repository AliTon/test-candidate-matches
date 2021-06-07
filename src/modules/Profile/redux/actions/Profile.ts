import { IEmployer } from '../../../Register/interfaces';

export const LOG_OUT = 'LOG_OUT';
export const LOG_IN = 'LOG_IN';

export const logOut = () => ({
  type: LOG_OUT
});

export const logIn = (employer: IEmployer) => ({
  type: LOG_IN,
  payload: {
    employer
  }
});
