const API_URL = 'https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog';

const fetchProducts = () => {
  return fetch(API_URL).then(res => res.json());
};

const fetchOneProduct = async codeColor => {
  const products = await fetchProducts();
  return products.find(product => product.code_color === codeColor);
};

export {
  fetchProducts,
  fetchOneProduct  
};