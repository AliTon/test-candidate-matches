import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/reducers';
import { IEmployer, ISuggestionsReducerState } from '../Register/interfaces';
import EmployerCard from '../../components/EmployerCard';

import './Dashboard.styles.scss';

interface IProps {
  editMode?: boolean;
  children?: JSX.Element;
}

const Dashboard: React.FC<IProps> = ({ editMode, children }) => {
  const { favorites, suggestions }: ISuggestionsReducerState = useSelector(
    (state: RootState) => state.suggestions
  );
  const history = useHistory();

  const EMPTY: IEmployer[] = new Array(5 - favorites.length).fill('');

  return (
    <div className="mainContainer">
      <div className="favoriteBlock">
        <div className="wrapper">
          <div className="header">
            <h1 className="title">Favorites</h1>
            {editMode && (
              <button className="btn" onClick={() => history.push('/profile')}>
                Save
              </button>
            )}
            {children}
          </div>
          <div className="favoriteItems">
            {favorites.map((item, index) => (
              <EmployerCard info={item} status="favorites" index={index} />
            ))}

            {EMPTY.map((item, index) => (
              <EmployerCard info={item} status="empty" index={index} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <span className="title">Suggestions</span>
        <div className="suggestionItems">
          {suggestions.map((item, index) => (
            <EmployerCard info={item} index={index} status="suggestion" />
          ))}
        </div>
      </div>
      <div />
    </div>
  );
};

export default Dashboard;
