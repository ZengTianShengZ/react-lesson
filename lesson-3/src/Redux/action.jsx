import fetch from 'isomorphic-fetch'
/*=================
    action.jsx
    派发 action
==================*/
 export const increase = data => {
   return {type: 'INCREASE',data:data}
 }
 export const decrease = data => {
   return {type: 'DECREASE',data:data}
 }

const dispathData = (path,json) => {
  return {
    type: 'DISPATHDATA',
    path:path,
    json:json
  }

}
export const fetchData = (url ,data) => {
   return dispatch =>{
     // 先派发一个 LOADING action
     dispatch({type:'LOADING'});
     fetch(url,{
        mode: 'cors',
        "Content-Type": "application/json"
     })
      .then(function(response) {
          if (response.status >= 400) {
              throw new Error("Bad response from server");
          }
          return response.json();
      })
      .then(function(data){
          // 这里延时只是为了演示效果，实际开发中需要把延时去掉
          setTimeout(function(){
              // 数据请求成功 再派发一个 getData  action
              return dispatch(dispathData('getData',data));
          },3000);
       })
      .catch(function(error) {
          console.log('Request failed', error)
      });
   }
}
