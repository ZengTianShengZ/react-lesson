 import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {get, is, fromJS} from 'immutable';
import  * as action from '../../Redux/action.jsx'
/*=================
    template.jsx
    所有组件的父组件
    由来封装组件用的
==================*/
const Main = mySetting => {
  // 默认 setting
   let setting={
     id:'',
     url:'',
     data:{},
     subscribeData:[],
     component:<div></div>
   }
   // 初始化 setting
   for(let key in mySetting){
     setting[key] = mySetting[key];
   }
   class Index extends Component{
     static defaultProps = {setting}
     constructor(props,context){
       super(props,context)
     }
     componentWillMount(){
     }
     render(){
       // 将数据传递给子组件
       //...this.props 是 mapStateToProps 返回过来的数据
       return <this.props.setting.component {...this.props}  />
     }
     componentDidMount(){
       // 如果组件初次加载有请求数据，在这里 派发 Action 请求数据
       // 因为这里设计的是一个 url 只对应一次请求，如果你的组件初始化涉及到请求多个接口，是不是需要考虑拆分组件
       if (this.props.setting.url) {
             this.props.fetchData(this.props.setting.url,this.props.setting.data);
       }
     }
     /*
        nextProps 或 nextState 变化时回调该方法 重新渲染组件
     */
     shouldComponentUpdate(nextProps, nextState){
       // immutable.js 深层次判断是否状态真的发生了变化
         return !is(fromJS(this.props),fromJS(nextProps))||!is(fromJS(this.state),fromJS(nextState))
         // return true;
     }
   }
   /*
       拿到 reducer 给过来的数据
   */
   const mapStateToProps = (state) => {
       // 子组件的订阅数据
       // 参数 state 能得到所有reducer数据，但都返回给子组件那就会 对没产生数据变化的其他子组件触发render，耗性能
       // 所以采用 让子组件来订阅 它自身所需要的数据就好
       let subscribeData = {};
       for(let sd of setting.subscribeData){
          subscribeData[sd] = state[sd];
       }
       return subscribeData;
   };
   /*
     connect() 连接 数据组件 和  UI组件
   */
   return connect(mapStateToProps, action)(Index);

}

export default Main;
