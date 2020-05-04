export const ADD_BAG = 'ADD_BAG';
export const REMOVE_BAG = 'REMOVE_BAG';

export const addBag = ( {name, finalPrice, size, sku, image, installments} ) => {
  return {
    type: ADD_BAG,
    payload: { name, finalPrice, size, sku, image, installments, quantity: 1 }
  };
};

export const applyAddBag = (state, product) => {
  let updatedBag = [...state.bag];
  const index = updatedBag.findIndex(prod => prod.sku === product.sku && prod.size === product.size);
  
  if (index >= 0) {
    updatedBag[index].quantity += 1;
    return { ...state, bag: updatedBag };
  } else {
    return { ...state, bag: [...state.bag, product] };
  }
};

export const removeBag = (sku, size, quantity = 0) => {
  return {
    type: REMOVE_BAG,
    payload: { sku, size, quantity }
  }
};

export const applyRemoveBag = (state, sku, size, quantity) => {
  const prod = state.bag.find(p => p.sku === sku && p.size === size);      
  if ((prod && prod.quantity === quantity) || !quantity) {      
    return { ...state, bag: state.bag.filter(p => p.sku !== sku && p.size !== size) };
  } else {
    let updatedBag = [...state.bag];
    const index = updatedBag.findIndex(prod => prod.sku === sku && prod.size === size);
    updatedBag[index].quantity -= 1;
    return { ...state, bag: updatedBag };
  }
};