import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import ErrorBoundary from './components/ErrorBoundary';
import MainLayout from './containers/MainLayout';
import './index.module.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <MainLayout>
          <Routes />
        </MainLayout>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
