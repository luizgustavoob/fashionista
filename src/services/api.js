const API_URL = 'https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog';

export const fetchProducts = () => {
  return fetch(API_URL).then(res => res.json());
}