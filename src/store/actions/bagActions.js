
export const ADD_BAG = 'ADD_BAG';
export const REMOVE_BAG = 'REMOVE_BAG';

export const addBag = ( {name, finalPrice, size, sku, image, installments} ) => {
  return {
    type: ADD_BAG,
    payload: {name, finalPrice, size, sku, image, installments, quantity: 1}
  };
}

export const removeBag = (sku, size, quantity = 0) => {
  return {
    type: REMOVE_BAG,
    payload: { sku, size, quantity }
  }
}