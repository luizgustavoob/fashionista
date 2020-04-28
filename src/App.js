import React, { Fragment } from 'react';

import Header from './components/Header';

import 'normalize.css';
import './global.css';

export default function App({ children }) {
  return (
    <Fragment>      
      <Header />
      <div className="container-content">
        { children }
      </div>    
    </Fragment>
  );
}