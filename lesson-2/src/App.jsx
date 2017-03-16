import React,{Component,PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider,connect} from 'react-redux';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';
import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';

import Index from './Component/Main.jsx'
import './Style/comm.scss'

const reducer = (state = {count: 0}, action) => {
    switch (action.type){
        case 'INCREASE': return {count: state.count + 1};
        case 'DECREASE': return {count: state.count - 1};
        default: return state;
    }
}
const store = createStore(reducer);
store.subscribe(() => { //监听state变化
    //console.log(store.getState())
});
//            <Route path="/list" component={List}/>
render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Index}/>
        </Router>
    </Provider>,
    document.body.appendChild(document.createElement('div'))
);
