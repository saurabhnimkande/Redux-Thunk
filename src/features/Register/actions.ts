import { REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS } from "./actionTypes";

interface PayloadData {
    error:boolean,
    message:string,
    loading:boolean,
}

export const registerLoading = () => ({
    type:REGISTER_LOADING,
})

export const registerSuccess= (payload:PayloadData) => ({
    type:REGISTER_SUCCESS,
    payload,
})

export const registerError = () => ({
    type:REGISTER_ERROR,
})