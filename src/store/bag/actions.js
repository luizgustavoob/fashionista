const ADD_BAG = 'ADD_BAG';
const REMOVE_BAG = 'REMOVE_BAG';

const addBag = ( {name, finalPrice, size, sku, image, installments} ) => {
  return {
    type: ADD_BAG,
    payload: { name, finalPrice, size, sku, image, installments, quantity: 1 }
  };
};

const removeBag = (sku, size, quantity = 0) => {
  return {
    type: REMOVE_BAG,
    payload: { sku, size, quantity }
  }
};

export {
  ADD_BAG,
  REMOVE_BAG,
  addBag,
  removeBag
};