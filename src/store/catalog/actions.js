import { fetchProducts } from '../../services/api';

const GET_CATALOG = 'GET_CATALOG';

const fetchCatalog = () => {
  return {
    type: GET_CATALOG,
    payload: fetchProducts()
  };
};

export {
  GET_CATALOG,
  fetchCatalog
};