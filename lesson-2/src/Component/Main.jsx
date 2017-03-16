import React, {Component, PropTypes} from 'react';
import {History, Link } from 'react-router';
import { connect } from 'react-redux';

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
        const {count, increase, decrease} = this.props;
        return(
            <div>
                <p>
                    <Link to="/list">link to list</Link>
                </p>
                <p>
                    ---------------------------------
                </p>
                <div>计数：{this.props.count}次</div>
                <button onClick={this.props.increase}>增加</button>
                <button onClick={this.props.decrease}>减少</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        count: state.count
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increase: (...args) => dispatch(actions.increase(...args)),
        decrease: (...args) => dispatch(actions.decrease(...args))
    }
};
const actions = {
    increase: () => ({type: 'INCREASE'}),
    decrease: () => ({type: 'DECREASE'})
};
const Comp = connect(mapStateToProps, mapDispatchToProps)(Main);
// export 给路由组件用
export default Comp;
