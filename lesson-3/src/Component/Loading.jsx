import React, {Component, PropTypes} from 'react';
import {History, Link } from 'react-router';
import {connect} from 'react-redux';
import { is, fromJS} from 'immutable';
import template from './common/template'
/*=================
  BottonView.jsx 子组件
==================*/
class LoadingView extends Component{
    constructor(){
        super();
    }
    render(){
        let{fData} = this.props;
        let loadingStyle;
        if(fData.loading){
          loadingStyle = {
              opacity: 1
          }
        }else{
          loadingStyle = {
                opacity: 0
          }
        }
        return(
            <div id='LoadingView' style={loadingStyle}>
            </div>
        )
    }
    shouldComponentUpdate(nextProps, nextState){
      // let randerFlag = !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
       return  true;
    }
}
export default template({
  id:'',
  url:'',
  subscribeData:['fData'],
  component:LoadingView
})
