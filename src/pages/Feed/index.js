import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCatalog } from '../../store/actions/feedActions';
import FeedProduct from '../../components/FeedProduct';
import { setProductDetail } from '../../store/actions/productActions';
import { formatProductRoute } from '../../routes/routesUtils';
import './styles.css';

const Feed = ( {catalog, fetchCatalog, setProductDetail} ) => {

  const history = useHistory();
  
  useEffect(() => {
    fetchCatalog();
  }, [fetchCatalog]);

  const handleProduct = product => {
    setProductDetail(product);
    const route =  formatProductRoute(product);
    history.push(`/product/${route}`);
  };

  return (
    <section>
      <p className="catalog__length">{catalog.length} itens</p>
      <ul className="catalog">
        {catalog.map(product => (
          <li key={product.code_color} className="catalog__product" onClick={() => handleProduct(product)}>
            <FeedProduct product={product}/>
          </li>
        ))}
      </ul>
    </section>
  );
}

const mapStateToProps = state => {
  return { catalog: state.catalog };
}

export default connect(mapStateToProps, {fetchCatalog, setProductDetail})(Feed);