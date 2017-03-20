import React,{Component,PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider,connect} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import Index from './Component/Main.jsx';
import './Style/comm.scss'

// reducer
const reducer = (state = {count: 0}, action) => {
    switch (action.type){
        case 'INCREASE': return {count: state.count + 1};
        case 'DECREASE': return {count: state.count - 1};
        default: return state;
    }
}
const store = createStore(reducer);
//监听state变化
store.subscribe(() => {
    //console.log(store.getState())
});
render(
    <Provider store={store}>
        <Index></Index>
    </Provider>,
    document.body.appendChild(document.createElement('div'))
);
