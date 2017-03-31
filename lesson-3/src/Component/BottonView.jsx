import React, {Component, PropTypes} from 'react';
import {History, Link } from 'react-router';
import {connect} from 'react-redux';
import { is, fromJS} from 'immutable';
import template from './common/template'
/**
* 定义一个 Main组件
*/
class BottonView extends Component{
    constructor(){
        super();
        this.pClick =() =>{
         };
        this.state = {

        }
    }
    render(){
        // 拿到 this.props 参数
        // const { increase, decrease} = this.props;
        console.log('...++++....botton component this.props ...++++...');
        console.log(this.props);
        return(
            <div id='BottonView'>
                <p className="lesson-3">botton component</p>
                <Link className='link_page2' to='/page2'>link to page2</Link>
            </div>
        )
    }
    shouldComponentUpdate(nextProps, nextState){
      // let randerFlag = !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
       return  true;

      //  return true;
    }
}
export default template({
  id:'',
  url:'',
  component:BottonView
})
