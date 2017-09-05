import * as actionTypes from '../actionTypes'
let setHot=(hotList)=>({
    type:actionTypes.SET_HOT,
    hotList
});
export {setHot}