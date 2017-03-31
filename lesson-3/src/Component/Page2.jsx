import React, {Component, PropTypes} from 'react';
import {History, Link } from 'react-router';
import {connect} from 'react-redux';
import { is, fromJS} from 'immutable';
import template from './common/template'
/*=================
  Page2.jsx 子组件
==================*/
class Page2 extends Component{
    constructor(){
        super();
    }
    render(){
        const {fData} = this.props;
        let items;
        if(fData.data.data){
             console.log(fData);
             items = (fData.data.data.stories.map((item,index)=>{
                  return <ListItem key={index} {...item} index = {item}/>
             }))
         }
        return(
            <div id='Page2'>
                {/* <p>{fData.data.data.stories[0].title}</p> */}
                <div className='page-head'>
                  <p className="lesson-3">page2 component</p>
                  <div className='test-data'>
                    <p>来着index页面的 </p>
                    <span>加数据:{this.props.increaseData.count}</span>
                    <span>减数据:{this.props.decreaseData.count}</span>
                  </div>
                  <Link className='link_page2' to='/'>link to index</Link>
                </div>
                {
                  items
                }
            </div>
        )
    }
    shouldComponentUpdate(nextProps, nextState){
       return  true;
    }
}
class ListItem extends Component{
    constructor(){
        super();
    }
    render(){
        let {title ,images ,index} = this.props;
        console.log(images[0]);
        var imgUrl = {background:'url('+images[0]+') no-repeat center'}
        return(
            <div id='ListItem'>
              <p>{title}</p>
              <div className='item-img' style={imgUrl}></div>
            </div>
        )
    }
}
export default template({
  id:'',
  url:'/getData',
  component:Page2
})
