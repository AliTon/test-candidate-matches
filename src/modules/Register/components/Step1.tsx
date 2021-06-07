import React from 'react';
import { Input, SelectBox } from '../../../components/core';
import { IStep1Props } from '../interfaces';
import { GENDERS } from '../../../constants';

import './Register.styles.scss';

const Step1: React.FC<IStep1Props> = ({
  handleSubmit,
  onSubmit,
  register,
  errors,
  setValue,
  getValues
}) => {
  const handleGenderChanged = React.useCallback((data) => {
    setValue('gender', data.label);
  }, [setValue]);

  const formValues = getValues();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="wrapper">
        <h1>REGISTER AS EMPLOYER</h1>
        <div className="stepContainer">
          <Input
            {...register('first_name')}
            placeholder="First Name"
            error={errors.first_name?.message}
            className="input"
          />
          <Input
            {...register('last_name')}
            placeholder="Last Name"
            error={errors.last_name?.message}
            className="input"
          />
        </div>
        <div className="stepContainer">
          <Input
            {...register('phoneNumber')}
            placeholder="Phone Number"
            type="text"
            error={errors.phoneNumber?.message}
            className="input"
          />
          <Input
            {...register('email')}
            placeholder="Business email"
            error={errors.email?.message}
          />
        </div>
        <div className="stepContainer">
          <span className="selectBoxLabel">Gender</span>
          <SelectBox
            {...register('gender')}
            placeholder="gender"
            defaultValue={GENDERS.find((g) => g.label === formValues.gender)}
            error={errors.gender?.message}
            className="select-box"
            options={GENDERS}
            onChange={handleGenderChanged}
          />
        </div>
        <div className="stepContainer">
          <input type="submit" value="Next" className="subBtn" />
        </div>
      </div>
    </form>
  );
};

export default Step1;
