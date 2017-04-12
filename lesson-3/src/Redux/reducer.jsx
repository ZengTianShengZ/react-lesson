import Immutable from 'immutable'
/*=================
    reducer.jsx
接收Action 并作出处理
==================*/
export const increaseData =  (state =Immutable.fromJS({ count: 0}), action={}) => {
    switch (action.type){
              case 'INCREASE':
              return Immutable.Map({count:action.data+1});
        default: return state;
    }
};
export const decreaseData =  (state = Immutable.fromJS({ count: 8}), action={}) => {
    switch (action.type){
              case 'DECREASE':
              return Immutable.Map({count:action.data-1});
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
