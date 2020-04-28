import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import AppReducer from './reducer';

const store = createStore(AppReducer, applyMiddleware(ReduxPromise));

export default store;