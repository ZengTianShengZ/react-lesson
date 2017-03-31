import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as reducer from './reducer'

var store = createStore(
    combineReducers(reducer),
    applyMiddleware(thunk)
);

export default store;
