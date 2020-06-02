import { SET_TOGGLE } from './types';

const toggleMenu = target => {
  return {
    type: SET_TOGGLE,
    payload: { target }
  };
};

export {
  toggleMenu
};