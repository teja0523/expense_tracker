import { useState } from "react";
import Axios from 'axios'
import { Link,useNavigate } from "react-router-dom";
function Signup(){
    const[username,setUsername]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        const data={username,email,password};
        Axios.post("http://localhost:5000/UserRoute/register",data)
        .then((res)=>{
            if(res.status===200){
                alert("user created successfully");
                navigate("/login")
            }else{
                Promise.reject();
            }
        })
        .catch((e)=>{
            console.log(e);
            alert(e);
        })
    }
    return(
        <>
        <div className="bg-rose-300 w-64 sm:w-72 rounded flex mt-36 sm:mt-48 ml-10 h-96">
            <form className="ml-10 mt-3" onSubmit={handleSubmit}>
                <div className="text-center text-2xl">
                    <h1 className="text-indigo-400">Registration Page</h1>
                </div>
                <div className="mt-3">
                    <label className="">Username</label><br/>
                    <input className="mt-3 rounded w-44 sm:w-52"type="string" onChange={(event)=>setUsername(event.target.value)} placeholder=" enter username" required/>
                </div>
                <div className="mt-3">
                    <label>Email</label><br/>
                    <input type="email"className="mt-3 rounded w-44 sm:w-52" onChange={(event)=>setEmail(event.target.value)} placeholder=" enter email" required/>
                </div>
                <div className="mt-3">
                    <label>password</label><br/>
                    <input type="password" className="mt-3 rounded w-44 sm:w-52" onChange={(event)=>setPassword(event.target.value)} placeholder=" enter password" required/>
                </div>
                <div className="flex mt-6 ">
                    <button className="bg-gray-300 sm:mx-auto p-1 rounded w-44 sm:w-52" type="submit">Register</button>
                </div>
                <div className="mt-4">
                    <p>Already have account?<Link to="/login" class="nav-link ml-2 text-indigo-500">Login</Link></p>
                </div>
            </form>
        </div>
        </>
    )
}
export default Signup;