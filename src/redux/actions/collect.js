import * as actionTypes from '../actionTypes'
let addCollect=(book)=>({
    type:actionTypes.ADD_COLLECT,
    book
});
let cancelCollect=(id)=>({
    type:actionTypes.CANCEL_COLLECT,
    id
});
export {addCollect,cancelCollect}