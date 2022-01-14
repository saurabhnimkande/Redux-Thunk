import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginError, loginLoading, loginSuccess } from "../features/login/actions";
import { RootState } from "../store/store";

interface UserData {
    username:string,
    password:string,
 }

 interface StoreReducer {
    loading:boolean,
    token:string,
    error:boolean
}

export const Login = () => {

    const [userData,setUserData] = useState<UserData>({
        username:"",
        password:"",
    });

    const handleChange =(e:React.ChangeEvent<HTMLInputElement>) => {
        setUserData({
            ...userData,
            [e.target.name]:e.target.value,
        })
    }

    const dispatch =useDispatch();

    const {loading,token,error} =useSelector<RootState,StoreReducer>((state) => ({
        loading:state.loginState.loading,
        token:state.loginState.token,
        error:state.loginState.error,  
    }))
    
    console.log(loading,token,error)

    const handleLogin = () => {
      dispatch(loginLoading())
      fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-type": "application/json",
        },
      }).then((res) => {
          return res.json();
      }).then((res) => {
          dispatch(loginSuccess(res))
      })
      .catch((err) => {
          dispatch(loginError(err))
      });
    }

    if(token) {
        return <Navigate to="/"></Navigate>
    }

    return loading?<h1>Checking User Details....</h1>: (
        <div>
            <h1>This is Login Page</h1>
            <br></br>
            <label>Enter Username : </label>
            <input type="text" placeholder="Enter Username" onChange={handleChange} name="username"></input>
            <br></br>
            <label>Enter Password : </label>
            <input type="text" placeholder="Enter Password" onChange={handleChange} name="password"></input>
            <br></br>
            <button onClick={handleLogin}>LOGIN</button>
            {token===undefined?<p>Wrong Credentials</p>:null}
        </div>
    )
}