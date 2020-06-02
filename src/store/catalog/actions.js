import { fetchProducts } from '../../services/api';
import { GET_CATALOG } from './types';

const fetchCatalog = () => {
  return {
    type: GET_CATALOG,
    payload: fetchProducts()
  };
};

export {
  fetchCatalog
};