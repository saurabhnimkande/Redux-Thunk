import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { registerError, registerLoading, registerSuccess } from "../features/Register/actions";
import { RootState } from "../store/store";

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
          dispatch(registerError(err))
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


    return loading?<h1>Registration in progress....</h1>: (
        <div>
            <h1>This is Sign up Page</h1>
            <br></br>
            <label>Enter Name : </label>
            <input type="text" placeholder="Enter Name" onChange={handleChange} name="name"></input>
            <br></br>
            <label>Enter Email : </label>
            <input type="email" placeholder="Enter Email" onChange={handleChange} name="email"></input>
            <br></br>
            <label>Enter Password : </label>
            <input type="password" placeholder="Enter Password" onChange={handleChange} name="password"></input>
            <br></br>
            <label>Enter Username : </label>
            <input type="text" placeholder="Enter Username" onChange={handleChange} name="username"></input>
            <br></br>
            <label>Enter Mobile Number : </label>
            <input type="number" placeholder="Enter Mobile Number" onChange={handleChange} name="mobile"></input>
            <br></br>
            <label>Enter Bio : </label>
            <input type="text" placeholder="Enter Bio" onChange={handleChange} name="description"></input>
            <br></br>
            <button onClick={handleRegister}>Sign UP</button>
            {message}
        </div>
    )
}