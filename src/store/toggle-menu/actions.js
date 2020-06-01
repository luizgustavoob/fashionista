const SET_TOGGLE = 'SET_TOGGLE';

const toggleMenu = target => {
  return {
    type: SET_TOGGLE,
    payload: { target }
  };
};

export {
  SET_TOGGLE,
  toggleMenu
};