export const ADD_BAG = 'ADD_BAG';

export const addBag = ({id, name, finalPrice, size, image}) => {
  return {
    type: ADD_BAG,
    payload: {id, name, finalPrice, size, image}
  };
}