import * as actionTypes from '../actionTypes'
let setBook=(list)=>({
   type: actionTypes.SET_BOOK,
    list
});
let addBook=(book)=>({
    type:actionTypes.ADD_BOOK,
    book
});
let deleteBook=(id)=>({
   type:actionTypes.DELETE_BOOK,
    id
});
export {setBook,addBook,deleteBook}