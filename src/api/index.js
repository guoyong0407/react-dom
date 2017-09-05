//1.引入 axios
import axios from 'axios';

export function getSliders() {
    return axios.get('http://127.0.0.1:4001/api/slider');
}
export function getHot() {
    return axios.get("http://127.0.0.1:4001/api/hot")
}
export function getBook() {
    return axios.get("http://127.0.0.1:4001/api/book")
}
export function addBook(data) {
    return axios.post("http://127.0.0.1:4001/api/book",data)
}
export function removeBook(id) {
    return axios.delete("http://127.0.0.1:4001/api/book?id="+id)
}
export function getOneBook(id) {
    return axios.get("http://127.0.0.1:4001/api/book?id="+id)
}
export function updateBook(id,data) {
    return axios.put("http://127.0.0.1:4001/api/book?id="+id,data)
}
