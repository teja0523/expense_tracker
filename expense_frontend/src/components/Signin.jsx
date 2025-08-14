import { useState } from "react";
import Axios from "axios";
import {Link, useNavigate} from "react-router-dom"
function Signin(){
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        const data={email,password};
        Axios.post("http://localhost:5000/UserRoute/login",data)
        .then((res)=>{
             if(res.status===200){
                alert("login sucess");
                localStorage.setItem("id",res.data.others._id);
                navigate('/home')
             }else{
                Promise.reject()
             }
        })
        .catch((err)=>alert("Invalid email or password please register"));
    }

    return(
        <>
           <div className="bg-rose-300  w-64 sm:w-72 rounded flex mt-48 ml-10 h-80">
            <form className="ml-10 mt-3" onSubmit={handleSubmit}>
                <div className="text-center text-2xl">
                    <h1 className="text-indigo-400">Login Page</h1>
                </div>
                <div className="mt-3">
                    <label>Email</label><br/>
                    <input type="email"className="mt-3 rounded w-48 sm:w-52" onChange={(event)=>setEmail(event.target.value)} placeholder="enter email" required/>
                </div>
                <div className="mt-3">
                    <label>password</label><br/>
                    <input type="password" className="mt-3 rounded w-48 sm:w-52" onChange={(event)=>setPassword(event.target.value)} placeholder="enter password" required/>
                </div>
                <div className="flex mt-6 ">
                    <button className="bg-gray-300 sm:mx-auto p-1 rounded w-48 sm:w-52" type="submit">login</button>
                </div>
                <div className="mt-4">
                    <p>Don't have account?<Link to="/register" class="nav-link  ml-1 sm:ml-2 text-indigo-500">Register</Link></p>
                </div>
            </form>
        </div>
        </>
    )
}
export default Signin;