import React from 'react';
import './Header.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logOut } from '../../modules/Profile/redux/actions/Profile';
import { RootState } from '../../redux/reducers';
import { IProfileReducerState } from '../../modules/Profile/redux/reducers/ProfileReducer';
import { GENDERS_ENUM, IMAGES_ENUM } from '../../constants';

const ProfileMenu: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { profile }:IProfileReducerState = useSelector((state: RootState) => state.profile);

  const handleLogOut = () => {
    dispatch(logOut());
    history.push('/register');
  };

  return (
    <div className="menu">
      <img
        src={`${
          profile?.gender === GENDERS_ENUM.MALE
            ? IMAGES_ENUM.MALE
            : IMAGES_ENUM.FEMALE
        }`}
        alt=""
      />
      <button onClick={() => handleLogOut()}>Log out</button>
    </div>
  );
};

export default ProfileMenu;
