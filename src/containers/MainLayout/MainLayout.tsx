import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header';
import Footer from '../../components/Footer';
import './MainLayout.styles.scss';
import { RootState } from '../../redux/reducers';
import { useSelector } from 'react-redux';
import { IProfileReducerState } from '../../modules/Profile/redux/reducers/ProfileReducer';

interface IMainLayoutProps {
  children: JSX.Element;
}

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  const history = useHistory();
  const { isLoggedIn }: IProfileReducerState = useSelector((state: RootState) => state.profile);

  React.useEffect(() => {
    if (!isLoggedIn) {
      history.push('/register');
    } else {
      history.push('/profile');
    }
  }, [isLoggedIn, history]);

  return (
    <div className="content">
      <Header />
      <div className="regPage">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
