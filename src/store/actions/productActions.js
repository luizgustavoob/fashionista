
export const SET_PRODUCT_DETAIL = 'SET_PRODUCT_DETAIL';

export const setProductDetail = product => {
  return {
    type: SET_PRODUCT_DETAIL,
    payload: product
  };
}