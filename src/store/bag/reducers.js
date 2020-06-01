const addBagReducer = (state, payload) => {
  let updatedBag = [...state.bag];
  const index = updatedBag.findIndex(prod => prod.sku === payload.sku);
  
  if (index >= 0) {
    updatedBag[index].quantity += 1;
    return { ...state, bag: updatedBag };
  } else {
    return { ...state, bag: [...state.bag, payload] };
  }
};

const removeBagReducer = (state, payload) => {
  const { sku, quantity } = payload;
  const prod = state.bag.find(p => p.sku === sku);
  
  if (prod && (prod.quantity === quantity || !quantity)) {
    return { ...state, bag: state.bag.filter(p => p.sku !== sku)};
  } else {
    let updatedBag = [...state.bag];
    const index = updatedBag.findIndex(prod => prod.sku === sku);
    updatedBag[index].quantity -= 1;
    return { ...state, bag: updatedBag };
  }
};

export {
  addBagReducer,
  removeBagReducer
};