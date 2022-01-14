import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./actionTypes";

interface PayloadData {
    error:string,
    token:string
}

export const loginLoading= () => ({
    type:LOGIN_LOADING,
})

export const loginSuccess= (payload:PayloadData) => ({
    type:LOGIN_SUCCESS,
    payload,
})

export const loginError= (payload:PayloadData) => ({
    type:LOGIN_ERROR,
    payload
})