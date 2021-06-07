import React from 'react';
import './Header.styles.scss';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logOut } from '../../modules/Profile/redux/actions/Profile';
import { IMAGES_ENUM } from '../../constants';

const ProfileMenu: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogOut = () => {
    dispatch(logOut());
    history.push('/register');
  };
  return (
    <div className="menu">
      <img
        src={`${IMAGES_ENUM.USER}`}
        alt="user"
      />
      <button onClick={() => handleLogOut()}>Log out</button>
    </div>
  );
};

export default ProfileMenu;
