import React from 'react';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import { addBag, removeBag } from '../../store/actions/bagActions';
import './styles.css';

const Bag = ( {onClose, bag, subTotal, addBag, removeBag} ) => {

  const handleAddProduct = product => {
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

  const handleRemoveProduct = (product, quantity = 0) => {
    removeBag(product.sku, product.size, quantity);
  };

  return (
    <div id="bag" className="toggle__parent">
      <div className="toggle__menu">
        <header className="toggle__header">
          <button type="button" className="toggle__header--icon" onClick={onClose}>
            <i className="fa fa-arrow-left" />
          </button>
          <p className="toggle__header--title">Sacola ({bag.reduce((acc, prod) => acc + prod.quantity, 0)})</p>
        </header>

        <aside className="toggle__content">
          <ul className="bag__products">
            { 
              bag.map(product => (
                <li key={product.sku} className="bag__product">
                  <figure className="bag__product--figure">
                    <img className="bag__product--img" src={product.image} alt={product.name} title={product.name}/>
                    <button type="button" className="bag__product--remove" onClick={() => handleRemoveProduct(product)}>
                      Remover
                    </button>
                  </figure>
                  <div className="bag__product--group-info">
                    <div className="bag__product--info">
                      <p className="bag__product--info-name">{product.name}</p>
                      <p className="bag__product--info-size">Tam. {product.size}</p>
                      <p className="bag__product--info-quantity">
                        <button type="button" className="bag__product--alter-quantity" onClick={() => handleRemoveProduct(product, 1)}>
                          <i className="fa fa-minus"/>
                        </button>
                        {product.quantity}
                        <button type="button" className="bag__product--alter-quantity" onClick={() => handleAddProduct(product)}>
                          <i className="fa fa-plus"/>
                        </button>
                      </p>
                    </div>
                    <div className="bag__product--price">
                      <p className="bag__product--price-final">{product.finalPrice}</p>
                      <p className="bag__product--price-installments">{product.installments}</p>
                    </div>
                  </div>
                </li>
              )) 
            }
          </ul>
        </aside>
        
        <footer className="bag__footer">
          <span className="bag__footer--subtotal">
            Subtotal -
            <NumberFormat value={subTotal} displayType={'text'} prefix={' R$'} thousandSeparator={'.'} 
              decimalSeparator={','} decimalScale={2} fixedDecimalScale={true} />
          </span>
        </footer>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  const bagToCalculate = [...state.bag].map(prod => {
    return { ...prod, finalPrice: parseFloat(prod.finalPrice.replace('R$', '').replace(',', '.')) }
  });
  const subTotal = bagToCalculate.reduce((acc, prod) => acc + (prod.finalPrice * prod.quantity), 0);
  return { bag: state.bag, subTotal };
};

export default connect(mapStateToProps, {addBag, removeBag})(Bag);