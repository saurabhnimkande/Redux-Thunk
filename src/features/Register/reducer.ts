import { REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS } from "./actionTypes";


const init = {loading:false, message:"",error:false};


interface DestPayload {
    type:string,
    payload:{
        loading:boolean,
        message:string,
        error:boolean,
    },
}


export const registerReducer = (state=init, {type,payload}:DestPayload) => {
    switch (type) {
        case REGISTER_LOADING: 
        return {
            ...state,
            loading:true,
        }
        case REGISTER_SUCCESS:
            console.log("inside register reducer",payload)
                return {
                    ...state,
                    message:payload.message,
                    loading:false,
                } 
        case REGISTER_ERROR:
            console.log(payload,"error")
            return {
                ...state,
                message:"none",
                loading:false,
            }
        default :
        return state;
    }
 

}