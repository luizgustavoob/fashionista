import React, { useEffect } from 'react';
import './styles.css';

const Search = ({ onClose = () => {} }) => {

  useEffect(() => {
    document.querySelector('#search').addEventListener('click', event => {
      const target = event.target;
      if (target.classList.contains('closeable')) {
        onClose();
      }
    });
  });

  return (
    <div id="search" className="toggle__parent closeable" >
      <div className="toggle__menu">
        <header className="toggle__header">
          <button type="button" className="toggle__header--icon closeable">
            <i className="fa fa-arrow-left closeable"></i>
          </button>          
          <p className="toggle__header--title">Buscar Produtos</p>
        </header>
      </div>
    </div>
  );
}

export default Search;