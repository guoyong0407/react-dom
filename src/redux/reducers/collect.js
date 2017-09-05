import * as actionTypes from '../actionTypes'
let initState={
    list:JSON.parse(localStorage.getItem('collects'))||[]
};
let collect=(state=initState,action)=>{
    switch (action.type){
        case actionTypes.ADD_COLLECT:
            let newListAdd={
                list:[...state.list,action.book]
            };
            localStorage.setItem('collects',JSON.stringify(newListAdd.list));
            return newListAdd;
        case actionTypes.CANCEL_COLLECT:
            let newListDel={
                list:state.list.filter((item,index)=>item.id!=action.id)
            };
            localStorage.setItem('collects',JSON.stringify(newListDel.list));
            return newListDel;
        default:
            return state
    }
};
export {collect}