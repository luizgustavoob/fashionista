export const formatProductRoute = product => {
  return `${product.name.toLowerCase().replace(new RegExp(' ', 'g'), '-')}-${product.code_color}`;
};