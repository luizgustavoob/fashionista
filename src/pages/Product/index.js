import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { addBag } from './../../components/Bag/actions';
import { fetchProductById } from './../../services/api';
import MoneyFormat from './../../components/MoneyFormat';
import Discount from './../../components/Discount';
import './styles.css';

const Product = ( {dispatch} ) => {
  
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  
  useEffect(() => {
    fetchProductById(params.id).then(setProduct);
  }, [params.id]);

  const handleAddBag = product => {
    const finalPrice = product.isPromotion ? product.promotionalPrice : product.price;
    const productBag = {id: product.id, name: product.name, finalPrice, selectedSize, image: product.image};
    dispatch(addBag(productBag));
    toast.success(`${productBag.name} adicionado à sacola!`);
  }

  return (
    !product ? null :
    <section className="product">      
      <figure className="product__image">
        <img src={product.image} className="product__image--img" alt={product.name}/>
        { 
          product.isPromotion &&
          <Discount normalPrice={product.price} promoPrice={product.promotionalPrice} />
        }
      </figure>

      <div className="product__info">        
        <p className="product__name">{product.name}</p>
        <div className="product__price">
          <MoneyFormat className={"product__price--text"} 
            value={product.promotionalPrice ? product.promotionalPrice : product.price} displayType={'text'} />          
        </div>
        <div className="product__size">
          <p className="product__size--text">Escolha o tamanho</p>
          { 
            product.size.map(size => (
              <button key={size} type="button" className="product__size--select-button" 
                onClick={() => setSelectedSize(size)}>
                {size}
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

export default connect()(Product);