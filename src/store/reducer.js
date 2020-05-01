import { SET_CATALOG } from './actions/feedActions';
import { SET_PRODUCT_DETAIL } from './actions/productActions';
import { ADD_BAG, REMOVE_BAG } from './actions/bagActions';

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
      let updatedBag = [...state.bag];
      const index = updatedBag.findIndex(prod => prod.sku === payload.sku && prod.size === payload.size);
      if (index >= 0) {
        updatedBag[index].quantity += 1;
        return { ...state, bag: updatedBag };
      } else {
        return { ...state, bag: [...state.bag, payload] };
      }
    
    case REMOVE_BAG:
      const prod = state.bag.find(p => p.sku === payload.sku && p.size === payload.size);

      if ((prod && prod.quantity === payload.quantity) || !payload.quantity) {
        return { ...state, bag: state.bag.filter(p => p.sku !== payload.sku) };
      } else {
        let updatedBag = [...state.bag];
        const index = updatedBag.findIndex(prod => prod.sku === payload.sku && prod.size === payload.size);
        updatedBag[index].quantity -= 1;
        return { ...state, bag: updatedBag };
      }
      
    default:
      return state;
  }
};

export default appReducer;