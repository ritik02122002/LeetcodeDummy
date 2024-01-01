import { useState,useContext } from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";
import LoggedInUser from "./LoggedInUser";
import userContext from "../utils/userContext";

const Login=()=>{
    const {isLoggedIn,setIsLoggedIn}=useContext(userContext);
    console.log(isLoggedIn)
    console.log(setIsLoggedIn)
return isLoggedIn?(<LoggedInUser/>):(
    <>
        <label className="p-1 ml-5 text-xl">Username:</label><input className="search-bar border-gray-200 border-2 focus:outline-none focus:border-gray-400 focus:border-2 focus:rounded-sm m-2 p-1" type="text" placeholder="username" id="user"></input>
        <br/>
        <label className="p-1 ml-5 text-xl">Password:</label><input className="search-bar border-gray-200 border-2 focus:outline-none focus:border-gray-400 focus:border-2 focus:rounded-sm m-2 p-1" type="password" placeholder="password" id="pass"></input>
        <br/>
        <button type="submit" onClick={()=>{
            if(document.getElementById("user").value=="ritik02122002" && document.getElementById("pass").value=="abcd")
            {setIsLoggedIn(true)
                
                // localStorage.setItem("isLogged","true");
            }
            else
            alert("wrong username or password")
        }} className="m-5 border-gray-200 border-2 p-1 hover:border-gray-700 hover:shadow-md hover:shadow-gray-700 hover:bg-gray-500 hover:text-white">Submit</button>
    </>
)


}
export default Login;
