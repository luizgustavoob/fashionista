import React, { useState, Fragment } from 'react';
import Navbar from './../Navbar';
import Search from './../Search';
import Bag from './../Bag';
import './../toggle.css';
import './styles.css';

const Header = () => {  

  const [isSearch, setIsSearch] = useState(false);
  const [isBag, setIsBag] = useState(false);

  const handleMenuSearch = () => {    
    setIsSearch(!isSearch);
    handleStyleBody();
  }

  const handleMenuBag = () => {
    setIsBag(!isBag);
    handleStyleBody();
  };

  const handleStyleBody = () => {
    if (document.body.classList.contains('in-background')) {
      document.body.classList.remove('in-background');
    } else {
      document.body.classList.add('in-background');
    }
  }

  return (
    <Fragment>
      <header className="header">
        <Navbar onOpenSearch={handleMenuSearch} onOpenBag={handleMenuBag} />
      </header>
      { isSearch ? <Search onClose={handleMenuSearch} /> : null }
      { isBag ? <Bag onClose={handleMenuBag} /> : null }
    </Fragment>
  );
}

export default Header;