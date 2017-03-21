import ReactDOM, {render} from 'react-dom';
import React, {Component, PropTypes} from 'react';
import {Router,Route,hashHistory} from 'react-router';
import Main from './Component/Main.jsx'
//import Page1 from './Component/Page1.jsx'
import './Style/comm.scss'

const Page1 = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./Component/Page1').default)
    },'Page1')
}

render(
    <Router history={hashHistory}>
      <Route path='/' component={Main} />
      <Route path='/page1' getComponent={Page1} />
    </Router>,
    document.body.appendChild(document.createElement('div'))
);
