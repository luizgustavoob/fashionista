const toggleMenuReducer = (state, payload) => {
  const { target } = payload;

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

  return state;
};

export {
  toggleMenuReducer
};