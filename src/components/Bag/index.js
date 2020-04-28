import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MoneyFormat from './../MoneyFormat';
import './styles.css';

const Bag = ({ onClose, bag = [], dispatch }) => {

  useEffect(() => {
    document.querySelector('#bag').addEventListener('click', event => {
      const target = event.target;
      if (target.classList.contains('closeable')) {
        onClose();
      }
    });
  });

  return (
    <div id="bag" className="toggle__parent closeable" >
      <div className="toggle__menu">
        <header className="toggle__header">
          <button type="button" className="toggle__header--icon closeable">
            <i className="fa fa-arrow-left closeable"></i>
          </button>
          <p className="toggle__header--title">Sacola ({bag.length})</p>
        </header>

        <section className="toggle__content">
          <ul>
            { 
              bag.map(product => (
                <li key={product.seq} className="">{product.name}</li>
              )) 
            }
          </ul>
        </section>
        
        <footer className="bag__footer">
          <p className="bag__footer--subtotal">
            Subtotal <MoneyFormat value={bag.reduce((acc, product) => acc + product.finalPrice, 0)} displayType={'text'} />
          </p>
        </footer>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return { bag: state.bag };
}

export default connect(mapStateToProps)(Bag);