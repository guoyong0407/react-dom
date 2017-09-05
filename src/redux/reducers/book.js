import * as actionTypes from '../actionTypes'
let initState={
    list:[]
};
let book=(state=initState,action)=>{
    switch (action.type){
        case actionTypes.SET_BOOK:
            return {
                list:action.list
            };
        case actionTypes.ADD_BOOK:
            return {
              list:[...state.list,action.book]
            };
        case actionTypes.DELETE_BOOK:
            return {
                list:state.list.filter((item,index)=>item.id!=action.id)
            };
        default:
            return state
    }
};
export {book}