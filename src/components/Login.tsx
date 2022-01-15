import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginError, loginLoading, loginSuccess } from "../features/login/actions";
import { RootState } from "../store/store";
import { Input ,Button} from 'antd';
import 'antd/dist/antd.css';
import "./Login.css"

interface UserData {
    username:string,
    password:string,
 }

 interface StoreReducer {
    loading:boolean,
    token:string,
    error:boolean,
    isAuth:boolean,
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

    const {loading,token,error,isAuth} =useSelector<RootState,StoreReducer>((state) => ({
        loading:state.loginState.loading,
        token:state.loginState.token,
        error:state.loginState.error,  
        isAuth:state.loginState.isAuth,
    }))
    
    console.log(loading,token,error,isAuth)
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

    return loading?<img className="loadingImage" src="https://cdn140.picsart.com/301568770156201.gif?to=crop&type=webp&r=-1x-1&q=95&width=1920" alt="loding"></img>: (
        <div id="loginPage">
            <h1>Login Page</h1>
            <br></br>
            <p className="lableText">Enter Username : </p>
            <Input type="text" placeholder="Enter Username" onChange={handleChange} name="username" className="inputBox"></Input>
            <br></br>
            <p className="lableText">Enter Password : </p>
            <Input type="text" placeholder="Enter Password" onChange={handleChange} name="password" className="inputBox"></Input>
            <br></br>
            <Button onClick={handleLogin} className="loginButton">LOGIN</Button>
            {token===undefined?<p className="wrongDetails">Wrong Credentials!!!</p>:null}
        </div>
    )
}