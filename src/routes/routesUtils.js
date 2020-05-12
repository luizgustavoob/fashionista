export const formatProductRoute = product => {
  return `${product.name.toLowerCase().replace(new RegExp(' ', 'g'), '-')}_${product.code_color}`;
};