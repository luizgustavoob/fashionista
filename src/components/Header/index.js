import React, { useState, Fragment } from 'react';

import Navbar from './../Navbar';
import Search from './../Search';
import Bag from './../Bag';

import './../toggle.css';
import './styles.css';

const Header = () => {  

  const [isSearch, setIsSearch] = useState(false);
  const [isBag, setIsBag] = useState(false);

  const handleSearch = () => {    
    setIsSearch(!isSearch);
    handleStyleBody();
  }

  const handleBag =  () => {
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
        <Navbar onOpenSearch={handleSearch} onOpenBag={handleBag} />
      </header>
      { isSearch ? <Search onClose={handleSearch} /> : null }
      { isBag ? <Bag onClose={handleBag} /> : null }
    </Fragment>
  );
}

export default Header;