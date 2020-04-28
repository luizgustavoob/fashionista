import { SET_CATALOG } from './pages/Feed/actions';
import { ADD_BAG } from './components/Bag/actions';

const INITIAL_STATE = {
  catalog: [],
  bag: [],
};

export default function AppReducer (state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_CATALOG:
      return { ...state, catalog: payload };

    case ADD_BAG:
      const product = { ...payload, seq: state.bag.length + 1 };
      return { ...state, bag: [...state.bag, product] };
    
      default:
      return state;
  }
}