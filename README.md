## React项目构建三部曲

### Features

- 可以解析JSX语法
- 可以解析ES6语法新特性
- 支持LESS、SCSS预处理器
- 编译完成自动打开浏览器
- 单独分离CSS样式文件
- 支持文件MD5戳，解决文件缓存问题
- 支持图片、图标字体等资源的编译
- 支持浏览器源码调试
- 实现组件级热更新
- 实现代码的热替换，浏览器实时刷新查看效果
- 区分开发环境和生产环境
- 分离业务功能代码和公共依赖代码

### 前言：
本项目分成了三部分对基于React框架的前端项目进行拆分学习，项目涉及webpack、react-redux、
react-router等知识点。

### [第一部分：构建一套适合 React、ES6 开发的脚手架](https://github.com/ZengTianShengZ/react-lesson/blob/master/lesson-1/README.md)
```
clone git@github.com:ZengTianShengZ/react-lesson.git
cd lesson-1
npm install
npm run hot
```
使用 Webpack 构建一套适合 React、ES6 开发的脚手架。Webpack 是当下最热门的前端资源模块化管理和打包工具。
它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。还可以将按需加载的模块进行代码分隔，
等到实际需要的时候再异步加载。通过 loader 的转换，任何形式的资源都可以视作模块，比如CommonJs 模块、
AMD 模块、 ES6 模块、CSS、图片、 JSON、Coffeescript、 LESS 等。

### [第二部分：Redux 的设计思想](https://github.com/ZengTianShengZ/react-lesson/blob/master/lesson-2/README.md)
```
clone git@github.com:ZengTianShengZ/react-lesson.git
cd lesson-2
npm install
npm run hot
```
Redux是什么呢？一个状态管理工具。那是干嘛用的呢？都知道，React可以进行单页应用的开发，可以对页面
中各个模块进行分割形成组件，而组件之间就避免不了事件的传递或数据的交互，那Redux就是用来对这些组件
的状态进行管理的。就好比买家和卖家，快递是交给第三方（Redux）去完成。

### [第三部分：构建 React 项目开发模板](https://github.com/ZengTianShengZ/react-lesson/blob/master/lesson-3/README.md)
```
clone git@github.com:ZengTianShengZ/react-lesson.git
cd lesson-3
npm install
npm run hot
```
在 `lesson-1 :构建一套适合 React、ES6 开发的脚手架`,`lesson-2 : Redux 的设计思想`,
我们已经对利用 React 构建项目有了一些基础知识，那推出 `构建 React 项目开发模板` 是为了在
实际的项目中有一套完善的体系或机制来迎合我们实际的开发需求，比如在 lesson-2 中，虽然我们已经
能让项目带着 Redux 这么一个数据状态管理机器给运转起来了，那 lesson-3 就是对 React 结合
react-redux 进一步封装，使开发更加清爽，项目也更加容易迭代和维护。

> #### 最后：有问题可以一起探讨 ，欢迎issues 和 `star` 
