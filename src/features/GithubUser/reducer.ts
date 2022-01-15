import { GET_USER } from "./actionTypes";

const init={data:{}}

interface Payload {
    type:string,
    payload: {
        total_count:number,
        incomplete_results:boolean,
        items:[],
    }
}

export const gitReducer = (state=init,{type,payload}:Payload) => {
    switch (type) {
        case GET_USER: 
        return {
            ...state,
            data:payload,
        }
        default:
        return state;
    }
}