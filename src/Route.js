import React from 'react';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';
import { Route, Switch, Redirect } from 'react-router-dom';

export default function Route() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/Accueil" component={Home} />
        <Route exact path="/">
          <Redirect to="/Accueil" />
        </Route>
        <Route exact path="/Search" component={Search} />
      </Switch>
    </div>
  );
};