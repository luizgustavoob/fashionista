const fetchCatalogReducer = (state, payload) => {
  return { ...state, catalog: payload };
};

export {
  fetchCatalogReducer
};