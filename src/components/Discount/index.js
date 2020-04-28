import React from 'react';
import './styles.css';

const Discount = ({normalPrice, promoPrice}) => {
  
  const applyPercentage = (normalPrice, promoPrice) => 
    (100 - ((100 * promoPrice) / normalPrice)).toFixed(0);

  return (
    <span className="product__discount">
      -{applyPercentage(normalPrice, promoPrice)}%
    </span>
  );
}

export default Discount;