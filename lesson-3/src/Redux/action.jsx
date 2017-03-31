/*=================
    action.jsx
==================*/
import fetch from 'isomorphic-fetch'
// 现在有了 applyMiddleware(thunk) 中间 thunk ，检测到Action 是一个函数内部会自动做处理，接受函数并派发一个同样的Action
// 函数名 increase 对应  组件的  onClick={increase}
 export const increase = () => {
   return {type: 'INCREASE'}
 }
 export const decrease = () => {
   return {type: 'DECREASE'}
 }

const dispathData = (path,json) => {
  return {
    type: 'DISPATHDATA',
    path:path,
    json:json
  }

}
export const fetchData = (url ,data) => {
   console.log('.....getZhihuData......');
   return dispatch =>{
     fetch('/getData',{
        mode: 'cors',
        "Content-Type": "application/json"
     })
      .then(function(response) {
        console.log(response);

          if (response.status >= 400) {
              throw new Error("Bad response from server");
          }
          return response.json();
      })
      .then(function(data){
        console.log(data);
           return dispatch(dispathData('getData',data));
      })
      .catch(function(error) {
          console.log('Request failed', error)
      });
   }
}
