import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
// import {get, is, fromJS} from 'immutable';
import  * as action from '../../Redux/action.jsx'

const Main = mySetting => {
  // 默认 setting
   let setting={
     id:'',
     url:'',
     data:{},
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
       if (this.props.setting.url) {
             this.props.fetchData(this.props.setting.url,this.props.setting.data);
       }
     }
     render(){
       return <this.props.setting.component {...this.props}  />
     }
     componentDidMount(){

     }
     /*nextProps 或 nextState 变化时回调该方法 重新渲染组件*/
     shouldComponentUpdate(nextProps, nextState){
       // immutable.js 深层次判断是否状态真的发生了变化
      //  return !is(fromJS(this.props),fromJS(nextProps))||!is(fromJS(this.state),fromJS(nextState))
          return true;
     }
   }
   const mapStateToProps = (state) => {
     let {fData ,increaseData ,decreaseData} = state;
       return {
           increaseData:increaseData,
           decreaseData,
           fData
       }
   };

   return connect(mapStateToProps, action)(Index);

}

export default Main;
