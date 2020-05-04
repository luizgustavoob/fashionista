export const SET_TOGGLE = 'SET_TOGGLE';

export const toggleMenu = target => {
  return {
    type: SET_TOGGLE,
    payload: { target }
  };
};

export const applyToggleMenu = payload => {
  const target = payload.target;

  if (target.classList.contains('toggle__menu--visible')) {
    target.classList.remove('toggle__menu--visible');
  } else {
    target.classList.add('toggle__menu--visible');
  }

  if (document.body.classList.contains('in-background')) {
    document.body.classList.remove('in-background');
  } else {
    document.body.classList.add('in-background');
  }
};