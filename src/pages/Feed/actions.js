import { fetchProducts } from './../../services/api';

export const SET_CATALOG = 'SET_CATALOG';

export const fetchCatalog = () => {  
  const payload = fetchProducts();
  return {
    type: SET_CATALOG,
    payload
  };
}
