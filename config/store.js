/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import * as reducers from '../resources/reducers'

const token = localStorage.getItem('token')
const initialState = {}

// pass token to api
if (token) { initialState.user = { token } }

const enhancers = applyMiddleware(thunkMiddleware)

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* eslint-disable no-underscore-dangle */
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose
/* eslint-enable */

const store = createStore(
    combineReducers(reducers),
    initialState,
    composeEnhancers(enhancers),
)

export default store
