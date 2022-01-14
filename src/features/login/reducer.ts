import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./actionTypes";

const init = {loading:false, token:"",error:false};

interface DestPayload {
    type:string,
    payload:{
        token:string,
        error:boolean,
    },
}

export const Loginreducer = (state=init, {type,payload}:DestPayload) => {
    switch (type) {
        case LOGIN_LOADING: 
        return {
            ...state,
            loading:true,
        }
        case LOGIN_SUCCESS:
            console.log(payload)
            return {
                ...state,
                token:payload.token,
                loading:false,
            }
        case LOGIN_ERROR:
            return {
                ...state,
                error:payload.error,
            }
        default :
        return state
    }
}