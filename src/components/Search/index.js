import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { toggleMenu } from '../../store/actions/toggleActions';
import { fetchCatalog } from '../../store/actions/catalogActions';
import './styles.css';

const Search = ( {catalog, toggleMenu, fetchCatalog} ) => {

  const [productsFiltered, setProductsFiltered] = useState([]);

  useEffect(() => {
    fetchCatalog();
  }, [fetchCatalog]);

  const handleMenuSearch = () => toggleMenu(document.querySelector('#search'));

  let timeOut = null;

  const handleKeyUp = text => {
    clearInterval(timeOut);
    timeOut = setTimeout(() => {
      let results = [];
      if (text) {
        results = catalog.filter(prod => prod.name.toLowerCase().includes(text.toLowerCase()));
      }
      setProductsFiltered(results);
    }, 600);    
  };

  return (    
    <div id="search" className="toggle__menu">
      <header className="toggle__header">
        <button type="button" className="toggle__header--icon" onClick={handleMenuSearch}>
          <i className="fa fa-arrow-left" />
        </button>          
        <p className="toggle__header--title">Buscar Produtos</p>
      </header>

      <aside className="toggle__content">
        <input type="text" className="search__input" placeholder="Digite o nome produto" onKeyUp={e => handleKeyUp(e.target.value)}/>
        { 
          productsFiltered.length ?         
          <div>
            <ul>
              {
                productsFiltered.map(prod => (
                  <li key={prod.code_color}>
                    { prod.name }
                  </li>
                ))
              }
            </ul>
          </div>
          :
          <span className="search__msg--not-found">Nenhum resultado para a pesquisa.</span>
        }
      </aside>
    </div>
  );
};

const mapStateToProps = state => {
  return { catalog: state.catalog };
};

export default connect(mapStateToProps, {toggleMenu, fetchCatalog})(Search);