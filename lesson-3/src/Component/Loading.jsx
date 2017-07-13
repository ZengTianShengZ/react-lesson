import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
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
       return  true;
    }
}
export default template({
  id:'',
  url:'',
  subscribeData:['fData'],
  component:LoadingView
})
