import React from 'react';
import { connect } from 'react-redux';
import { toggleMenu } from '../../store/actions/toggleActions';
import './styles.css';

const Search = ( {toggleMenu} ) => {

  const handleMenuSearch = () => toggleMenu(document.querySelector('#search'));

  return (    
    <div id="search" className="toggle__menu">
      <header className="toggle__header">
        <button type="button" className="toggle__header--icon" onClick={handleMenuSearch}>
          <i className="fa fa-arrow-left" />
        </button>          
        <p className="toggle__header--title">Buscar Produtos</p>
      </header>
    </div>    
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {toggleMenu})(Search);