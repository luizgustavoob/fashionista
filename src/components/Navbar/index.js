import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NotificationBag from '../NotificationBag';
import { toggleMenu } from '../../store/toggle-menu/actions';
import './styles.css';

const Navbar = ({ toggleMenu }) => {
  
  const handleMenuSearch = () => toggleMenu(document.querySelector('#search'));
  const handleMenuBag = () => toggleMenu(document.querySelector('#bag'));

  return (
    <nav className="container navbar">
      <Link to="/">
        <h1 className="navbar__title">Fashionista</h1>
      </Link>      

      <ul className="navbar__actions">
        <li className="navbar__action-item" onClick={handleMenuSearch}>
          <button type="button" className="navbar__action-item--button">
            <i className="fa fa-search" />            
          </button>
        </li>
        
        <li className="navbar__action-item" onClick={handleMenuBag}>
          <button type="button" className="navbar__action-item--button">
            <i className="fa fa-shopping-bag" />            
          </button>

          <NotificationBag />
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {toggleMenu})(Navbar);