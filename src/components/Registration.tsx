import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { registerError, registerLoading, registerSuccess } from "../features/Register/actions";
import { RootState } from "../store/store";
import { Input ,Button} from 'antd';
import 'antd/dist/antd.css';
import "./Registration.css"

interface UserData {
   name:string,
   email:string,
   password:string,
   username:string,
   mobile:number,
   description:string,
}

interface StoreReducer {
    loading:boolean,
    message:string,
    error:boolean
}

export const Registration = () => {
    const [userData,setUserData] = useState<UserData>({
        name:"",
        email:"",
        password:"",
        username:"",
        mobile:0,
        description:"",
    });

    const handleChange =(e:React.ChangeEvent<HTMLInputElement>) => {
        setUserData({
            ...userData,
            [e.target.name]:e.target.value,
        })
    }
    
    const dispatch =useDispatch();

    const handleRegister =() => {
        dispatch(registerLoading())
        console.log("register page",userData)

        fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-type": "application/json",
        },
        }).then((res) => {
          return res.json();
        }).then((res) => {
          dispatch(registerSuccess(res))
        })
        .catch((err) => {
          dispatch(registerError())
        });
    }



    const {loading,message,error} =useSelector<RootState,StoreReducer>((state) => ({
        loading:state.registerState.loading,
        message:state.registerState.message,
        error:state.registerState.error,  
    }))

    console.log(error)
    if(message === "Registration Success") {
     
        return <Navigate to="/login"></Navigate>
    }


    return loading?<img className="loadingImage" src="https://cdn140.picsart.com/301568770156201.gif?to=crop&type=webp&r=-1x-1&q=95&width=1920" alt="loding"></img>: (
        <div className="registerPage">
            <h1>Sign up</h1>
            <br></br>
            <p className="lableText">Enter Name : </p>
            <Input type="text" placeholder="Enter Name" onChange={handleChange} name="name" className="inputBox"></Input>
            <br></br>
            <p className="lableText">Enter Email : </p>
            <Input type="email" placeholder="Enter Email" onChange={handleChange} name="email" className="inputBox"></Input>
            <br></br>
            <p className="lableText">Enter Password : </p>
            <Input type="password" placeholder="Enter Password" onChange={handleChange} name="password" className="inputBox"></Input>
            <br></br>
            <p className="lableText">Enter Username : </p>
            <Input type="text" placeholder="Enter Username" onChange={handleChange} name="username" className="inputBox"></Input>
            <br></br>
            <p className="lableText">Enter Mobile Number : </p>
            <Input type="number" placeholder="Enter Mobile Number" onChange={handleChange} name="mobile" className="inputBox"></Input>
            <br></br>
            <p className="lableText">Enter Bio : </p>
            <Input type="text" placeholder="Enter Bio" onChange={handleChange} name="description" className="inputBox"></Input>
            <br></br>
            <Button onClick={handleRegister} className="loginButton">Sign UP</Button>
        </div>
    )
}