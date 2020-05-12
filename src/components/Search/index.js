import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { toggleMenu } from '../../store/actions/toggleActions';
import { fetchCatalog } from '../../store/actions/catalogActions';
import './styles.css';

const Search = ( {catalog, toggleMenu, fetchCatalog} ) => {

  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetchCatalog();
  }, [fetchCatalog]);

  const handleMenuSearch = () => toggleMenu(document.querySelector('#search'));

  const handleChange = text => {
    setTimeout(() => {
      console.log(text);
      //const results = catalog.filter(prod => prod.name.toLowerCase().contains(text.toLowerCase()));
      //setFiltered(results);
    }, 1000);
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
        <input type="text" className="toggle__search-input" placeholder="Digite o nome produto" onChange={e => handleChange(e.target.value)}/>
        { 
          filtered.length ?         
          <div>
            <ul>
              {
                filtered.map(prod => (
                  <li key={prod.code_color}>
                    { prod.name }
                  </li>
                ))
              }
            </ul>
          </div>
          :
          <span>Nenhum resultado para a pesquisa.</span>
        }
      </aside>
    </div>
  );
};

const mapStateToProps = state => {
  return { catalog: state.catalog };
};

export default connect(mapStateToProps, {toggleMenu, fetchCatalog})(Search);