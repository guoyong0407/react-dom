import * as actionTypes from '../actionTypes'
let setSlider=(sliderList)=>({
    type:actionTypes.SET_SLIDER,
    sliderList
});
export {setSlider}