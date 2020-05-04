import { fetchProducts } from '../../services/api';

export const SET_CATALOG = 'SET_CATALOG';

export const fetchCatalog = () => {
  return {
    type: SET_CATALOG,
    payload: fetchProducts()
  };
}