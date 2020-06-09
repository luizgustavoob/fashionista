const addBagReducer = (state, payload) => {
  const index = state.bag.findIndex(prod => prod.sku === payload.sku);
  let bag = [];
  
  if (index >= 0) {
    bag = [...state.bag];
    bag[index].quantity += 1;
  } else {
    bag = [...state.bag, payload];
  }

  window.localStorage.setItem('bag', JSON.stringify(bag));
  return { ...state, bag };
};

const removeBagReducer = (state, payload) => {
  const { sku, quantity } = payload;
  const prod = state.bag.find(p => p.sku === sku);
  let bag = [];
  
  if (prod && (prod.quantity === quantity || !quantity)) {
    bag = state.bag.filter(p => p.sku !== sku);
  } else {
    bag = [...state.bag];
    const index = bag.findIndex(prod => prod.sku === sku);
    bag[index].quantity -= 1;
  }
  
  window.localStorage.setItem('bag', JSON.stringify(bag));
  return { ...state, bag };
};

export {
  addBagReducer,
  removeBagReducer
};