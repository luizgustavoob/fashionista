import React from 'react';
import './styles.css';

const Discount = ( {discountPercentage} ) => {
  return (
    <span className="product__discount">-{discountPercentage}</span>
  );
};

export default Discount;