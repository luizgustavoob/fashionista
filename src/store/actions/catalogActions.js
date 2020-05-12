import { fetchProducts } from '../../services/api';

export const GET_CATALOG = 'GET_CATALOG';

export const fetchCatalog = () => {
  return {
    type: GET_CATALOG,
    payload: fetchProducts()
  };
}