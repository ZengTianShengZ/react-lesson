import fetch from 'isomorphic-fetch'
/*=================
    action.jsx
    派发 action
==================*/
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
   return dispatch =>{
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
           return dispatch(dispathData('getData',data));
      })
      .catch(function(error) {
          console.log('Request failed', error)
      });
   }
}
