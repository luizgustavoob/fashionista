import React, { Fragment } from 'react';
import Header from './components/Header';
import 'normalize.css';
import './styles/global.css';

const App = ({ children }) => {
  return (
    <Fragment>      
      <Header />
      <div className="container-content">
        { children }
      </div>    
    </Fragment>
  );
};

export default App;