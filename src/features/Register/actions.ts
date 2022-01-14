import { REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS } from "./actionTypes";

interface PayloadData {
    error:string,
    token:string
}

export const registerLoading = () => ({
    type:REGISTER_LOADING,
})

export const registerSuccess= (payload:PayloadData) => ({
    type:REGISTER_SUCCESS,
    payload,
})

export const registerError = (payload:PayloadData) => ({
    type:REGISTER_ERROR,
    payload,
})