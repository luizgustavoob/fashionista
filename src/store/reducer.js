import { SET_TOGGLE } from './toggle-menu/types';
import { toggleMenuReducer } from './toggle-menu/reducers';

import { GET_CATALOG } from './catalog/types';
import { fetchCatalogReducer } from './catalog/reducers';

import { ADD_BAG, REMOVE_BAG } from './bag/types';
import { addBagReducer, removeBagReducer } from './bag/reducers';

const INITIAL_STATE = {
  catalog: [],
  bag: []
};

const appReducer =  (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CATALOG:
      return fetchCatalogReducer(state, payload);

    case ADD_BAG:
      return addBagReducer(state, payload);
    
    case REMOVE_BAG:
      return removeBagReducer(state, payload);

    case SET_TOGGLE:
      return toggleMenuReducer(state, payload);
      
    default:
      return state;
  }
};

export default appReducer;