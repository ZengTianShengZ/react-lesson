import ReactDOM, {render} from 'react-dom';
import React, {Component, PropTypes} from 'react';
import Main from './Component/Main.jsx'
import './Style/comm.scss'

render(
    <Main></Main>,
    document.body.appendChild(document.createElement('div'))
);
