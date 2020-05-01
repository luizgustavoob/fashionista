import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { addBag } from '../../store/actions/bagActions';
import MoneyFormat from '../../components/MoneyFormat';
import Discount from '../../components/Discount';
import './styles.css';

const Product = ( {product, addBag} ) => {
  
  const [selectedSize, setSelectedSize] = useState(''); 

  const handleAddBag = product => {
    if (!selectedSize) {
      toast.error('Precisamos saber o tamanho que você deseja!');
      return;
    }

    const productToBag = {
      name: product.name, 
      finalPrice: product.actual_price, 
      size: selectedSize.size, 
      sku: selectedSize.sku, 
      image: product.image,
      installments: product.installments
    };

    addBag(productToBag);
    toast.success(`Produto adicionado à sacola!`);
    resetButtons();
  };

  const handleSelectedSize = size => {
    const buttons = document.getElementsByClassName('product__size--select-button');
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].id === size.size) {
        setSelectedSize(size);
        buttons[i].classList.add('product__size--button-selected');
      } else {
        buttons[i].classList.remove('product__size--button-selected');
      }
    }
  };

  const resetButtons = () => {
    const buttons = document.getElementsByClassName('product__size--select-button');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('product__size--button-selected');
    }
    setSelectedSize('');
  };

  return (
    <section className="product">      
      <figure className="product__image">
        <img src={product.image}
         className="product__image--img" alt={product.name} title={product.name}/>
        { 
          product.on_sale &&
          <Discount discountPercentage={product.discount_percentage} />
        }
      </figure>

      <div className="product__info">        
        <p className="product__name">{product.name}</p>
        <div className="product__price">
          <MoneyFormat className={"product__price--text"} value={product.actual_price} />
          <span className="product__price--installments">Em Até {product.installments}</span>
        </div>
        <div className="product__size">
          <p className="product__size--text">Escolha o tamanho:</p>
          {
            product.sizes.filter(size => size.available).map(size => (
              <button key={size.size} id={size.size} type="button" className="product__size--select-button" 
                onClick={() => handleSelectedSize(size)}>
                {size.size}
              </button>
            ))
          }
        </div>
        <button type="button" className="product__add-bag" onClick={() => handleAddBag(product)}>
          Adicionar à Sacola
        </button>
      </div>
    </section>
  );
}

const mapStateToProps = state => {
  return { product: state.productDetail };
}

export default connect(mapStateToProps, {addBag})(Product);