import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import template from './common/template'
import BottonView from './BottonView'
/*=================
  index.jsx 子组件
==================*/
class Index extends Component{
    constructor(){
        super();
        this.pClick =() =>{
         };
        this.state = {
        }
    }
    render(){
        // 拿到 this.props 参数
        const {increaseData,decreaseData, increase, decrease} = this.props;

        return(
            <div id='IndexView'>
                <p className="lesson-3">React lesson-3</p>
                <p>
                    ---------------------------------
                </p>
                <div className="count">
                    <div>计数 +：{increaseData.count}次</div>
                    <div>计数 -：{decreaseData.count}次</div>
                    <span className="btn" onClick={increase}>+</span>
                    <span className="btn" onClick={decrease}>-</span>
                </div>
                <BottonView/>
            </div>
        )
    }
    shouldComponentUpdate(nextProps, nextState){
       return true;
    }
}
export default template({
  id:'index',
  url:'',
  component:Index
})
