import {combineReducers} from 'redux'
import {hot} from './hot'
import {slider} from './slider'
import {book} from './book'
import {collect} from './collect'
import * as actionTypes from '../actionTypes'
let link=(state="",action)=>{
    switch (action.type){
        case actionTypes.SET_LINK:
            return action.link;
        default:
            return state;
    }
};
let reducer=combineReducers({
    hot,
    slider,
    book,
    collect,
    link
});
export default reducer