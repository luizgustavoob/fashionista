import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchCatalog } from './actions';

import Discount from './../../components/Discount';
import MoneyFormat from './../../components/MoneyFormat';

import './styles.css';

const Feed = ( {catalog, fetchCatalog} ) => {

  const history = useHistory();
  
  useEffect(() => {
    fetchCatalog();
  }, [fetchCatalog]);

  const handleClickProduct = product => history.push(`/product/${product.id}`);

  return (
    <section>
      <p className="catalog__length">{catalog.length} itens</p>

      <ul className="catalog">
        {catalog.map(product => (
          <li key={product.id} className="catalog__product" onClick={() => handleClickProduct(product)}>
            <figure className="catalog__product--figure">
              <img src={product.image} className="catalog__product--img" alt={product.name}/>
              { 
                product.isPromotion &&
                <Discount normalPrice={product.price} promoPrice={product.promotionalPrice} />
              }
            </figure>
            <div className="catalog__product--info">
              <p className="catalog__product--name">{product.name}</p>
              { 
                product.isPromotion ?
                <div className="catalog__product--prices">
                  <span className="catalog__product--promo-price">
                    <MoneyFormat value={product.price} displayType={'text'} />
                  </span>
                  <span className="catalog__product--price">
                    <MoneyFormat value={product.promotionalPrice} displayType={'text'} />
                  </span>
                </div>
                :
                <div className="catalog__product--unique-price">
                  <span className="catalog__product--price">
                    <MoneyFormat value={product.price} displayType={'text'} />
                  </span>
                </div>
              }
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

const mapStateToProps = state => {
  return { catalog: state.catalog };
}

export default connect(mapStateToProps, {fetchCatalog})(Feed);