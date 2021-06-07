import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './modules/Register';
import Profile from './modules/Profile';
import Dashboard from './modules/Dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/edit">
        <Dashboard editMode={true} />
      </Route>
    </Switch>
  );
};

export default Routes;
