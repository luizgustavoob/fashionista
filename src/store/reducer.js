import { GET_CATALOG } from './actions/catalogActions';
import { ADD_BAG, REMOVE_BAG, applyAddBag, applyRemoveBag } from './actions/bagActions';
import { SET_TOGGLE, applyToggleMenu } from './actions/toggleActions';

const INITIAL_STATE = {
  catalog: [],
  bag: []
};

const appReducer =  (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CATALOG:
      return { ...state, catalog: payload };

    case ADD_BAG:
      return applyAddBag(state, payload);
    
    case REMOVE_BAG:
      return applyRemoveBag(state, payload.sku, payload.size, payload.quantity);

    case SET_TOGGLE:
      return applyToggleMenu(state, payload);
      
    default:
      return state;
  }
};

export default appReducer;