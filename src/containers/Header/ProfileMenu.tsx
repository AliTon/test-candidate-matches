import React from 'react';
import './Header.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logOut } from '../../modules/Profile/redux/actions/Profile';
import { RootState } from '../../redux/reducers';

const ProfileMenu: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const profile: any = useSelector((state: RootState) => state.profile.profile);

  const handleLogOut = () => {
    dispatch(logOut());
    history.push('/register');
  };

  return (
    <div className="menu">
      <img
        src={`${
          profile?.gender === 'Female'
            ? 'https://www.w3schools.com/howto/img_avatar2.png'
            : 'https://www.w3schools.com/howto/img_avatar.png'
        }`}
        alt=""
      />
      <button onClick={() => handleLogOut()}>Log out</button>
    </div>
  );
};

export default ProfileMenu;
