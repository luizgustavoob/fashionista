import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { addBag, removeBag } from '../../store/bag/actions';
import './styles.css';

const BagProduct = ({ product, state, addBag, removeBag }) => {

  const handleRemoveProduct = (quantity = 0) => 
    removeBag({ sku: product.sku, size: product.size, quantity });

  const handleAddProduct = () => {
    const productToBag = {
      name: product.name, 
      finalPrice: product.finalPrice,
      size: product.size, 
      sku: product.sku, 
      image: product.image,
      installments: product.installments
    };

    addBag(productToBag);
  };

  return (
    <Fragment>
      <figure className="bag__product--figure">
        <img 
          className="bag__product--img" 
          src={product.image ? product.image : "https://via.placeholder.com/270x194/FFFFFF/?text=Imagem+Indisponível"} 
          alt={product.name ? product.name : "Imagem indisponível"}
          title={product.name ? product.name : "Imagem indisponível"} />
        <button type="button" className="bag__product--remove" onClick={() => handleRemoveProduct()}>
          Remover
        </button>
      </figure>
      <div className="bag__product--group-info">
        <div className="bag__product--info">
          <p className="bag__product--info-name">{product.name}</p>
          <p className="bag__product--info-size">Tam. {product.size}</p>
          <p className="bag__product--info-quantity">
            <button type="button" className="bag__product--alter-quantity" onClick={() => handleRemoveProduct(1)}>
              <i className="fa fa-minus"/>
            </button>
            {product.quantity}
            <button type="button" className="bag__product--alter-quantity" onClick={() => handleAddProduct()}>
              <i className="fa fa-plus"/>
            </button>
          </p>
        </div>
        <div className="bag__product--price">
          <p className="bag__product--price-final">{product.finalPrice}</p>
          <p className="bag__product--price-installments">{product.installments}</p>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {addBag, removeBag})(BagProduct);