import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Details from '../pages/Details';
import Home from '../pages/Home';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/details/:id" component={Details} />
  </Switch>
);

export default Routes;
