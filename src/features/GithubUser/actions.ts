import { GET_USER } from "./actionTypes"


interface PayloadData {
        total_count:number,
        incomplete_results:boolean,
        items:[],
}


export const getUser = (payload:PayloadData) => ({
    type:GET_USER,
    payload,
})

export const getUserList= (query:string,page:number,page_size:number) => (dispatch:any) => {
    fetch(`https://api.github.com/search/users?q=${query}&page=${page}&per_page=${page_size}`)
    .then((e) => e.json())
    .then((e) => dispatch(getUser(e)))
}