import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Login } from './components/home/login/Login';
import { Register } from './components/home/register/Register';

export const useRoute = auth => {
  console.log(auth);
  if (auth) {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Redirect to="/login" />
    </Switch>
  );
};
