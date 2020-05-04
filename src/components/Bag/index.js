import React from 'react';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import BagProduct from '../../components/BagProduct';
import { toggleMenu } from '../../store/actions/toggleActions';
import './styles.css';

const Bag = ( {bag, subTotal, toggleMenu} ) => {  

  const handleMenuBag = () => toggleMenu(document.querySelector('#bag'));

  return (
    <div id="bag" className="toggle__menu">
      <header className="toggle__header">
        <button type="button" className="toggle__header--icon" onClick={handleMenuBag}>
          <i className="fa fa-arrow-left" />
        </button>
        <p className="toggle__header--title">Sacola ({bag.reduce((acc, prod) => acc + prod.quantity, 0)})</p>
      </header>

      <aside className="toggle__content">
        <ul className="bag__products">
          {bag.map(product => (
            <li key={product.sku} className="bag__product">
              <BagProduct product={product} />
            </li>
          ))}
        </ul>
      </aside>
      
      <footer className="bag__footer">
        <span className="bag__footer--subtotal">
          Subtotal - <NumberFormat value={subTotal} displayType={'text'} prefix={' R$'} thousandSeparator={'.'} 
                        decimalSeparator={','} decimalScale={2} fixedDecimalScale={true} />
        </span>
      </footer>
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

export default connect(mapStateToProps, {toggleMenu})(Bag);