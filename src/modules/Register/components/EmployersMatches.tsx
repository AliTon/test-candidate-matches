import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getSuggestions } from '../redux/actions/SuggestionManagement';
import EmployersList from '../../../_mock_data/employers.json';
import {
  IEmployer,
  IEmployersMatchesProps,
} from '../interfaces';
import Dashboard from '../../Dashboard';
import { logIn } from '../../Profile/redux/actions/Profile';

const EmployersMatches: React.FC<IEmployersMatchesProps> = ({
  getValues,
  onBack
}) => {
  const values: IEmployer = getValues();
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    const matches: IEmployer[] = [];
    EmployersList.forEach((employer) => {
      if (
        employer.department === values.department ||
        employer.city === values.department ||
        employer.gender === values.gender ||
        employer.country === values.department
      ) {
        matches.push(employer);
      }
    });
    dispatch(getSuggestions(matches));
  }, [values, dispatch]);

  const handleProfileCreate = () => {
    dispatch(logIn(values));
    history.push('/profile');
  };

  return (
    <>
      <Dashboard>
        <div className="createContainer">
          <span className="title">Create profile</span>
          <div className="space-between">
            <button onClick={onBack} className="subBtn">
              Back
            </button>
            <button className="subBtn" onClick={handleProfileCreate}>
              Create
            </button>
          </div>
        </div>
      </Dashboard>
    </>
  );
};

export default EmployersMatches;
