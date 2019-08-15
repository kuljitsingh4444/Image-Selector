//Create Store For Redux.

import thunk from 'redux-thunk';
import rootReducer from '../duck/reducers/index';
import { createStore, applyMiddleware } from 'redux';

const initialState = {};

const middleware = [thunk];

export const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
);