import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Feed from '../pages/Feed';
import Product from '../pages/Product';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Feed} />
      <Route path="/product/:name" component={Product} />      
      <Redirect to='/' />
    </Switch>
  );
};

export default Routes;