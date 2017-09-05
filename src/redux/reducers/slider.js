import * as actionTypes from '../actionTypes'
let initState={
    sliderList:[]
};
let slider=(state=initState,action)=>{
    switch (action.type){
        case actionTypes.SET_SLIDER:
            return {
                sliderList:action.sliderList
            };
        default:
            return state;
    }
};
export {slider}
