import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as reducer from './reducer'
/*=================
    store.jsx
  中央数据处理器
==================*/
var store = createStore(
    combineReducers(reducer),
    applyMiddleware(thunk)
);
export default store;
