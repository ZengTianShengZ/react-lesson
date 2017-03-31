import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';
import Index from '../Component/Index.jsx';
/*=================
   router.jsx 组件
  专门用来管理路由的
==================*/

/**
Page2 组件按需加载
*/
const page2 = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Component/Page2').default)
    },'page2')
}

const RouteConfig =(
  <Router history={hashHistory}>
     <Route path='/' component={Index}/>
     <Route path='/page2' getComponent={page2}/>
  </Router>
)
export default RouteConfig
