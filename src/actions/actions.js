import Axios from "axios";
import global from './../config/const';
export const FILTER_POST = "FILTER_POST";
export const FETCH_ALL = "FETCH_ALL";

export function fetchAll() {
    return function (dispatch) {
        Axios.get(global.url).then(res => {
            dispatch({ type: FETCH_ALL, payload: res.data })
        }).catch(err => {
            console.log(err)
        })
    }
}

export function fetchByFilter(query) {
    return function (dispatch) {
        Axios.get(`${global.url}${query}`).then(res => {
            dispatch({ type: FILTER_POST, payload: res.data })
        }).catch(err => {
            console.log(err)
        })
    }
}


