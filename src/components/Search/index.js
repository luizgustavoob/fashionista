import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleMenu } from '../../store/actions/toggleActions';
import { fetchCatalog } from '../../store/actions/catalogActions';
import SearchProduct from './../SearchProduct';
import { formatProductRoute } from '../../routes/routesUtils';
import './styles.css';

const Search = ( {catalog, toggleMenu, fetchCatalog} ) => {

  const history = useHistory();
  const [productsFiltered, setProductsFiltered] = useState([]);

  useEffect(() => {
    fetchCatalog();
  }, [fetchCatalog]);

  const handleMenuSearch = () => toggleMenu(document.querySelector('#search'));

  let timeOut = null;

  const handleKeyUpSearch = text => {
    clearInterval(timeOut);
    timeOut = setTimeout(() => {
      let results = [];
      if (text) {
        results = catalog.filter(prod => prod.name.toLowerCase().includes(text.toLowerCase()));
      }
      setProductsFiltered(results);
    }, 500);    
  };

  const handleProduct = product => {
    toggleMenu(document.querySelector('#search'));
    const route =  formatProductRoute(product);
    history.push(`/product/${route}`);
  }

  return (    
    <div id="search" className="toggle__menu">
      <header className="toggle__header">
        <button type="button" className="toggle__header--icon" onClick={handleMenuSearch}>
          <i className="fa fa-arrow-left" />
        </button>          
        <p className="toggle__header--title">Buscar Produtos</p>
      </header>

      <aside className="search__content">
        <input type="text" className="search__input" placeholder="Digite o nome produto" 
          onKeyUp={e => handleKeyUpSearch(e.target.value)}/>
        { 
          productsFiltered.length ?
          <ul className="search__products">
            {
              productsFiltered.map(prod => (
                <li key={prod.code_color} className="search__product" onClick={(() => handleProduct(prod))}>
                  <SearchProduct product={prod}/>
                </li>
              ))
            }
          </ul>          
          :
          <span className="search__msg--not-found">Nenhum resultado :(</span>
        }
      </aside>
    </div>
  );
};

const mapStateToProps = state => {
  return { catalog: state.catalog };
};

export default connect(mapStateToProps, {toggleMenu, fetchCatalog})(Search);