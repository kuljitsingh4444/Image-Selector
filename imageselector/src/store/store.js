//Create Store For Redux.

import thunk from 'redux-thunk';
import rootReducer from '../duck/reducers/index';
import { createStore, applyMiddleware, compose } from 'redux';

const initialState = {};

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
);