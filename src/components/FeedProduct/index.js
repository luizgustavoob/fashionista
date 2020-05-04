import React, { Fragment } from 'react';
import Discount from '../Discount';
import MoneyFormat from '../MoneyFormat';
import './styles.css';

const FeedProduct = ({product}) => {
  
  return (
    <Fragment>
      <figure className="catalog__product--figure">
        <img src={product.image}
          className="catalog__product--img" alt={product.name} title={product.name}/>
        { 
          product.on_sale &&
          <Discount discountPercentage={product.discount_percentage} />
        }
      </figure>
      <div className="catalog__product--info">
        <p className="catalog__product--name">{product.name}</p>
        { 
          product.on_sale ?
          <div className="catalog__product--prices">
            <span className="catalog__product--promo-price">
              <MoneyFormat value={product.regular_price} />
            </span>
            <span className="catalog__product--price">
              <MoneyFormat value={product.actual_price} />
            </span>
          </div>
          :
          <div className="catalog__product--unique-price">
            <span className="catalog__product--price">
              <MoneyFormat value={product.actual_price} />
            </span>
          </div>
        }
      </div>
    </Fragment>
  );
};

export default FeedProduct;