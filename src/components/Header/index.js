import React, { Fragment } from 'react';
import Navbar from './../Navbar';
import Search from './../Search';
import Bag from './../Bag';
import './../toggle.css';
import './styles.css';

const Header = () => {

  const handleMenuSearch = () => {
    handleStyleToggle(document.querySelector('#search'));    
    handleStyleBody();
  }

  const handleMenuBag = () => {
    handleStyleToggle(document.querySelector('#bag'));
    handleStyleBody();
  };

  const handleStyleToggle = target => {
    if (target.classList.contains('toggle__menu--visible')) {
      target.classList.remove('toggle__menu--visible');
    } else {
      target.classList.add('toggle__menu--visible');
    }
  };

  const handleStyleBody = () => {
    if (document.body.classList.contains('in-background')) {
      document.body.classList.remove('in-background');
    } else {
      document.body.classList.add('in-background');
    }
  };

  return (
    <Fragment>
      <header className="header">
        <Navbar onOpenSearch={handleMenuSearch} onOpenBag={handleMenuBag} />
      </header>
      <Search onClose={handleMenuSearch} />
      <Bag onClose={handleMenuBag} />
    </Fragment>
  );
}

export default Header;