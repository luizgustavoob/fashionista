import React from 'react';
import './styles.css';

const Search = ( {onClose} ) => {

  return (    
    <div id="search" className="toggle__menu">
      <header className="toggle__header">
        <button type="button" className="toggle__header--icon" onClick={onClose}>
          <i className="fa fa-arrow-left" />
        </button>          
        <p className="toggle__header--title">Buscar Produtos</p>
      </header>
    </div>    
  );
}

export default Search;