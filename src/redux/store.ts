import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import book from './books/reducer';

const rootReducer = combineReducers({ book });

const middlewares = [applyMiddleware(thunk)];

const store = createStore(rootReducer, compose(...middlewares));

export default store;
