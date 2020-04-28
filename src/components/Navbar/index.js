import React from 'react';
import { Link } from 'react-router-dom';

import NotificationBag from './../NotificationBag';
import './styles.css';

const Navbar = ({ onOpenSearch, onOpenBag }) => {
  return (
    <nav className="container navbar">
      <Link to="/">
        <h1 className="navbar__title">Fashionista</h1>
      </Link>      

      <ul className="navbar__actions">
        <li className="navbar__action-item" onClick={onOpenSearch}>
          <button type="button" className="navbar__action-item--button">
            <i className="fa fa-search" />            
          </button>
        </li>
        
        <li className="navbar__action-item" onClick={onOpenBag}>
          <button type="button" className="navbar__action-item--button">
            <i className="fa fa-shopping-bag" />            
          </button>

          <NotificationBag />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;