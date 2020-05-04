import { SET_CATALOG } from './actions/feedActions';
import { SET_PRODUCT_DETAIL } from './actions/productActions';
import { ADD_BAG, REMOVE_BAG, applyAddBag, applyRemoveBag } from './actions/bagActions';
import { SET_TOGGLE, applyToggleMenu } from './actions/toggleActions';

const INITIAL_STATE = {
  catalog: [],
  productDetail: {},
  bag: []
};

const appReducer =  (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CATALOG:
      return { ...state, catalog: payload };

    case SET_PRODUCT_DETAIL:
      return { ...state, productDetail: payload };

    case ADD_BAG:
      return applyAddBag(state, payload);
    
    case REMOVE_BAG:
      return applyRemoveBag(state, payload.sku, payload.size, payload.quantity);

    case SET_TOGGLE:
      applyToggleMenu(payload);
      return { ...state };
      
    default:
      return state;
  }
};

export default appReducer;