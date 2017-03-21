import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class Main extends Component {
  constructor() {
      super();
  }
  render(){
    return(
        <div>
          <h1>lesson 1 </h1>
          <p>webpack 构建一套适合 React、ES6 开发的脚手架 </p>
          <Link to="/page1" activeStyle={{color: 'blue'}}>page1</Link>
        </div>
    )
  }
}
export default Main;
