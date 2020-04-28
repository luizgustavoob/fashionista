import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './pages/Feed';
import Product from './pages/Product';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Feed} />
      <Route path="/product/:id" component={Product} />
    </Switch>
  );
}