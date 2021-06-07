import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import './index.styles.scss';
import { IProfileReducerState } from './redux/reducers/ProfileReducer';
import { IEmployer, ISuggestionsReducerState } from '../Register/interfaces';
import EmployerCard from '../../components/EmployerCard';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { profile }: IProfileReducerState = useSelector(
    (state: RootState) => state.profile
  );
  const { favorites }: ISuggestionsReducerState = useSelector(
    (state: RootState) => state.suggestions
  );

  const reduxState = useSelector((state) => state);

  React.useEffect(() => {
    localStorage.setItem('oldReduxState', JSON.stringify(reduxState));
  }, [reduxState]);

  return (
    <div className="profileContent">
      <div className="profileInfo">
        <div className="infoPanel">
          <div className="infoType">First name</div>
          <div className="infoDesc">{profile?.first_name}</div>
        </div>
        <div className="infoPanel">
          <div className="infoType">Last name</div>
          <div className="infoDesc">{profile?.last_name}</div>
        </div>
        <div className="infoPanel">
          <div className="infoType">E-mail</div>
          <div className="infoDesc">{profile?.email}</div>
        </div>
        <div className="infoPanel">
          <div className="infoType">Country</div>
          <div className="infoDesc">{profile?.country}</div>
        </div>
        <div className="infoPanel">
          <div className="infoType">City</div>
          <div className="infoDesc">{profile?.city}</div>
        </div>
      </div>
      <div className="profileSuggestions">
        {favorites.map((item: IEmployer, index) => (
          <EmployerCard info={item} status={'favorite'} index={index} />
        ))}
      </div>
      <div>
        <Link to={'/edit'}>
          <button className="btn">Edit Matches</button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
