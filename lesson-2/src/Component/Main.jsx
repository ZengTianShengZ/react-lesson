import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

/**
* 定义一个 Main组件
*/
class Main extends Component{
    constructor(){
        super();
        this.pClick =() =>{
            console.log('sssssssss');
        };
        this.state = {
            num:0,
            age:666
        }
    }
    render(){
        // 拿到 this.props 参数
        const {count, increase, decrease} = this.props;
        return(
            <div>
                <p className="lesson-2">React lesson-2</p>
                <p>
                    ---------------------------------
                </p>
                <div className="count">
                    <div>计数：{this.props.count}次</div>
                    <span className="btn" onClick={increase}>+</span>
                    <span className="btn" onClick={decrease}>-</span>
                </div>
            </div>
        )
    }
}
/**
* 用来给 组件传递数据
* @param state
*/
const mapStateToProps = (state) => {
    return {
        count: state.count
    }
};
/**
*用来组件给 容器组件派发数据
* @param dispatch 派发 Action
* @param ownProps 组件自身的 props参数
*/
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increase: (...args) => dispatch(actions.increase(...args)),
        decrease: (...args) => dispatch(actions.decrease(...args))
    }
};
/**
* actions
*/
const actions ={
    increase:() => {
      return {type: 'INCREASE'}
    },
    decrease: () => {
      return {type: 'DECREASE'}
    }
};
/**
* 连接 UI组件 和 容器组件
* @param mapStateToProps     输入逻辑
* @param mapDispatchToProps  输出逻辑
*/
const Comp = connect(mapStateToProps, mapDispatchToProps)(Main);
/**
*  输出一个容器组件
*/
export default Comp;
