// import Immutable from 'immutable'
/*=================
    reducer.jsx
接收Action 并作出处理
==================*/
export const increaseData =  (state ={count:0}, action={}) => {
    switch (action.type){
              case 'INCREASE':
              var count = state.count+1;
              return {count:count};
        default: return state;
    }
};
export const decreaseData =  (state = {'count':0}, action={}) => {
    switch (action.type){
              case 'DECREASE':
              var count = state.count-1;
              return {count: count};
        default: return state;
    }
};
export const fData = (state = {data:{},loading:false}, action={}) => {
  switch (action.type){
            case 'LOADING':
              return {
                data:{},
                loading:true
              };
            case 'DISPATHDATA':
              return {
                data: action.json,
                loading:false
              };
      default: return state;
  }
}
