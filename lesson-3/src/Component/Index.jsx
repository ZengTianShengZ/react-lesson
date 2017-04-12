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
        let inc_count = increaseData.get('count');
        let dec_count = decreaseData.get('count');
        return(
            <div id='IndexView'>
                <p className="lesson-3">React lesson-3</p>
                <p>
                    ---------------------------------
                </p>
                <div className="count">
                    <div>计数 +：{inc_count}次</div>
                    <div>计数 -：{dec_count}次</div>
                    <span className="btn" onClick={increase.bind(this,inc_count)}>+</span>
                    <span className="btn" onClick={decrease.bind(this,dec_count)}>-</span>
                </div>
                <div className='botton-img'></div>
                <BottonView/>
            </div>
        )
    }
    shouldComponentUpdate(nextProps, nextState){
      console.log('index component::::');
      console.log(nextProps);
       return true;
    }
}
export default template({
  id:'index',
  url:'',
  subscribeData:['increaseData','decreaseData'], // 对应组件所需要的 this.props 数据
  component:Index
})
