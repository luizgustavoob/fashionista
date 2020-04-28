const products = [
  {
    id: 1,
    name: 'Moletom Neon',
    price: 189.00,
    size: ['P', 'M', 'G'],
    image: 'https://hermosocompadre2.vteximg.com.br/arquivos/ids/194210-430-550/1-MOLETOM-NEON-700163.jpg?v=637224938774500000',
    isPromotion: true,
    promotionalPrice: 159.99
  }, {
    id: 2,
    name: 'Moletom Azul Punho Listrado',
    price: 169.00,
    size: ['G'],
    image: 'https://hermosocompadre2.vteximg.com.br/arquivos/ids/194168-430-550/2-moletom-azul-punho-listrado-700128.jpg?v=637224913781530000',
    isPromotion: false,
    promotionalPrice: 0
  }, {
    id: 3,
    name: 'Moletom Pastel Colors',
    price: 179.00,
    size: ['M', 'G'],
    image: 'https://hermosocompadre2.vteximg.com.br/arquivos/ids/194213-430-550/2-MOLETOM-PASTEL-COLORS-700119.jpg?v=637224940074830000',
    isPromotion: false,
    promotionalPrice: 0
  }, {
    id: 4,
    name: 'Moletom Cinza Gola Listrada',
    price: 159.00,
    size: ['P', 'M', 'G'],
    image: 'https://hermosocompadre2.vteximg.com.br/arquivos/ids/194175-430-550/1-moletom-cinza-gola-listrada-700133.jpg?v=637224918261370000',
    isPromotion: true,
    promotionalPrice: 129.00
  }, {
    id: 5,
    name: 'T-Shirt Henley Manga Longa Marrom',
    price: 109.00,
    size: ['P', 'M', 'G'],
    image: 'https://hermosocompadre2.vteximg.com.br/arquivos/ids/194146-430-550/2-T-SHIRT-HENLEY-MANGA-LONGA-MARROM-104096.jpg?v=637224900489700000',
    isPromotion: false,
    promotionalPrice: 0
  }, {
    id: 6,
    name: 'T-Shirt Manga Longa Preta',
    price: 109.00,
    size: ['P', 'M', 'G'],
    image: 'https://hermosocompadre2.vteximg.com.br/arquivos/ids/194243-430-550/2-t-shirt-manga-longa-preta-botone-gola-canoa-104142.jpg?v=637224972305970000',
    isPromotion: false,
    promotionalPrice: 0
  }
];

export const fetchProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 150);
  });
}

export const fetchProductById = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products.find(p => p.id === parseInt(id)));
    }, 150);
  });
}