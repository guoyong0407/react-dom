import {setHot} from './hot'
import {setSlider} from './slider'
import {setBook,addBook,deleteBook} from './book'
import {addCollect,cancelCollect} from './collect'
import * as actionTypes from '../actionTypes'
let setLink=(link)=>({
    type:actionTypes.SET_LINK,
        link
});
export {setHot,setSlider,setBook,addBook,deleteBook,addCollect,cancelCollect,setLink}