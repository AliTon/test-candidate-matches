import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header';
import Footer from '../../components/Footer';
import './MainLayout.styles.scss';
import { RootState } from '../../redux/reducers';
import { useSelector } from 'react-redux';

interface IMainLayoutProps {
  children: JSX.Element;
}

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  const history = useHistory();
  const isLoggedIn: boolean = useSelector(
    (state: RootState) => state.profile.isLoggedIn
  );

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
