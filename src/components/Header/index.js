import React, { Fragment } from 'react';
import Navbar from './../Navbar';
import Search from './../Search';
import Bag from './../Bag';
import './../toggle.css';
import './styles.css';

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <Navbar />
      </header>
      <Search />
      <Bag />
    </Fragment>
  );
}

export default Header;