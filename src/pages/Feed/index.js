import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCatalog } from '../../store/actions/feedActions';
import { setProductDetail } from '../../store/actions/productActions';
import Discount from '../../components/Discount';
import MoneyFormat from '../../components/MoneyFormat';
import './styles.css';

const Feed = ( {catalog, fetchCatalog, setProductDetail} ) => {

  const history = useHistory();
  
  useEffect(() => {
    fetchCatalog();
  }, [fetchCatalog]);

  const handleProduct = product => {
    setProductDetail(product);
    const path = product.name.toLowerCase();
    history.push(`/product/${path}`);
  };

  return (
    <section>
      <p className="catalog__length">{catalog.length} itens</p>

      <ul className="catalog">
        {
          catalog.map(product => (
            <li key={product.code_color} className="catalog__product" onClick={() => handleProduct(product)}>
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
            </li>
          ))
        }
      </ul>
    </section>
  );
}

const mapStateToProps = state => {
  return { catalog: state.catalog };
}

export default connect(mapStateToProps, {fetchCatalog, setProductDetail})(Feed);