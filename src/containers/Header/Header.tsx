import React from 'react';
import './Header.styles.scss';
import ProfileMenu from './ProfileMenu';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { IProfileReducerState } from '../../modules/Profile/redux/reducers/ProfileReducer';

const Header: React.FC = () => {
  const profile: IProfileReducerState = useSelector(
    (state: RootState) => state.profile
  );
  return (
    <div className="headerContent">
      <div className="headerLogo" />
      {profile.isLoggedIn && <ProfileMenu />}
    </div>
  );
};

export default Header;
