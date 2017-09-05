import * as actionTypes from '../actionTypes'
let initState={
    hotList:[]
};
let hot=(state=initState,action)=>{
    switch (action.type){
        case actionTypes.SET_HOT:
            return {
                hotList:action.hotList
            };
        default:
            return state
    }
};
export {hot}