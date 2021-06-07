import React from 'react';
import Input from '../../../components/core/Input';
import SelectBox, {
  ISelectOptionValue
} from '../../../components/core/SelectBox';
import COUNTRIES_LIST from '../../../_mock_data/countries.json';
import { useDispatch, useSelector } from 'react-redux';
import { getCitiesByCountry } from '../redux/actions/GetCities';
import { RootState } from '../../../redux/reducers';
import EmployersList from '../../../_mock_data/employers.json';
import {
  ICitiesStateReducerState,
  IStep2Inputs,
  IStep2Props
} from '../interfaces';

const Step2: React.FC<IStep2Props> = ({
  handleSubmit,
  onSubmit,
  register,
  setValue,
  errors,
  onBack,
  getValues
}) => {
  const dispatch = useDispatch();
  const cities: ICitiesStateReducerState = useSelector(
    (state: RootState) => state.cities
  );
  const { country, city, department }: IStep2Inputs = getValues();
  const currentCountryCities: string[] = cities[country]?.cities;
  const isCurrentCountryCitiesLoaded: boolean = !cities[country]?.loading;
  const CITIES_LIST =
    currentCountryCities?.map((e: string) => ({ value: e, label: e })) ?? [];

  const handleCountryChanged = React.useCallback(
    ({ label }: ISelectOptionValue) => {
      dispatch(getCitiesByCountry(label));
      setValue('country', label);
      setValue('city', '');
    },
    [dispatch]
  );

  const getAvailableDepartments = React.useMemo(() => {
    const departments: string[] = [];

    EmployersList.forEach((employer) => {
      if (!departments.includes(employer.department)) {
        departments.push(employer.department);
      }
    });

    return departments.map((value) => ({ label: value, value }));
  }, [EmployersList]);

  const getPlaceHolderText = () => {
    if (!currentCountryCities) {
      return 'Choose a country at first';
    }

    if (isCurrentCountryCitiesLoaded) {
      return 'Choose a city';
    }

    return 'Loading...';
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="wrapper">
        <h1>REGISTER AS EMPLOYER</h1>
        <div className="stepContainer">
          <SelectBox
            {...register('country')}
            placeholder="Choose a country"
            error={errors.country?.message}
            defaultValue={country ? { label: country, value: country } : null}
            className="input"
            options={COUNTRIES_LIST}
            onChange={handleCountryChanged}
          />
          <SelectBox
            {...register('city')}
            placeholder={getPlaceHolderText()}
            error={errors.city?.message}
            className="input"
            options={CITIES_LIST}
            disabled={!currentCountryCities?.length ?? true}
            onChange={(e: ISelectOptionValue) => setValue('city', e.value)}
            defaultValue={city ? { label: city, value: city } : null}
          />
        </div>
        <div className="stepContainer">
          <SelectBox
            {...register('department')}
            placeholder="Department"
            error={errors.department?.message}
            className="input"
            options={getAvailableDepartments}
            onChange={(e: ISelectOptionValue) =>
              setValue('department', e.value)
            }
            defaultValue={
              department ? { label: department, value: department } : null
            }
          />
          <Input
            {...register('job_title')}
            style={{
              width: 300,
              height: 17,
              margin: '10px 9px 5px 20px'
            }}
            placeholder="Job Title"
            error={errors.job_title?.message}
          />
        </div>
        <div className="stepContainer">
          <button onClick={onBack} className="subBtn" style={{ margin: 10 }}>
            Back
          </button>
          <Input
            type="submit"
            value="Next"
            className="subBtn"
            style={{ margin: 0 }}
          />
        </div>
      </div>
    </form>
  );
};

export default Step2;
