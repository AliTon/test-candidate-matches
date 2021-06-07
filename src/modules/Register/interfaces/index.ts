import { FieldErrors } from 'react-hook-form/dist/types/errors';
import {
  UseFormGetValues,
  UseFormSetValue
} from 'react-hook-form/dist/types/form';

export interface IStep1Inputs {
  first_name: string;
  last_name: string;
  email: string;
  phoneNumber: number;
  gender: string;
}

export interface IStep2Inputs {
  country: string;
  city: string;
  job_title: string;
  department: string;
}

export interface ICitiesStateReducerState {
  [country: string]: {
    loading: boolean;
    cities: string[];
  };
}

export interface ISuggestionsReducerState {
  suggestions: IEmployer[];
  favorites: IEmployer[];
}

export interface IStep2Props {
  onBack: () => void;
  handleSubmit: Function;
  onSubmit: Function;
  register: any;
  errors: FieldErrors<IStep2Inputs>;
  setValue: UseFormSetValue<IStep2Inputs>;
  getValues: UseFormGetValues<IStep2Inputs>;
}

export interface IStep1Props {
  handleSubmit: Function;
  onSubmit: Function;
  register: any;
  errors: FieldErrors<IStep1Inputs>;
  setValue: UseFormSetValue<IStep1Inputs>;
  getValues: UseFormGetValues<IStep1Inputs>;
}

export interface IEmployersMatchesProps {
  onBack: () => void;
  getValues: () => IEmployer;
}

export interface IEmployer {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  department: string;
  job_title: string;
  country: string;
  city: string;
}
