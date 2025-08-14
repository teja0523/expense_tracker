import { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import logo from '../assets/expense-tracer-logo.jpeg';
function Nav(){ 
    const[isloggedin,setIsloggedin]=useState(!!localStorage.getItem("id"));
    const[ismenuopen,setIsmenuopen]=useState(false);
    const tooglemenu=()=>{
        setIsmenuopen(!ismenuopen);
    }
    useEffect(()=>{
        const userid=localStorage.getItem("id");
        if(userid){
            setIsloggedin(true);
        }
    })
    const navigate=useNavigate();
    const handlesubmit=()=>{
        localStorage.removeItem("id");
        setIsloggedin(false);
        navigate("./login");
    }
    return(
        <>
        <nav className="fixed top-0 left-0 right-0 bg-gray-300 flex justify-between p-3 sm:p-5 z-10">
            <div className="ml-14 text-rose-500 flex">
                <img src={logo} className='h-6 ' alt="logo"/>
                <Link to="/" className='ml-2'>Expense Tracer</Link>
            </div>
            <div className='hidden md:flex md:space-x-14'>
                <Link to="/home" class="nav-link text-rose-500 ">Home</Link>
               <Link to="/create-expense" class="nav-link text-rose-500 "> Add Expense</Link>
                <Link to="/expense-list" class="nav-link text-rose-500">Expense List</Link>
                <Link to="/budget-track" class="nav-link text-rose-500">Budget-tracker</Link>
                {!isloggedin && (
                    <Link to="/login" class="nav-link text-rose-500 nav-buttons">Signin</Link>
                )}
                {isloggedin &&(
                    <button className=" text-rose-500 nav-buttons"onClick={handlesubmit} type="submit">Logout</button>
                )}
            </div>
            <div className='md:hidden'>
                      <button className='text-rose-500' onClick={tooglemenu}>
                        <svg
                        fill='none'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        viewBox='0 0 24 24'
                        className='w-6 h-6'>
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                      </button>
            </div>
            {ismenuopen ?(
                   <ul className='flex flex-col md:hidden absolute right-0 top-8 bg-gray-300 p-1 md:hidden'>
                <li><Link to="/home" class="text-rose-500 ">Home</Link></li> 
                <li> <Link to="/create-expense" class="text-rose-500 "> Add Expense</Link></li> 
                <li> <Link to="/expense-list" class="text-rose-500">Expense List</Link></li> 
                 <li> <Link to="/budget-track" class=" text-rose-500">Budget-tracker</Link></li> 
                 <li> {!isloggedin && (
                      <Link to="/login" class="nav-link text-rose-500 ">Signin</Link>
                  )}
                  {isloggedin &&(
                      <button className=" text-rose-500 "onClick={handlesubmit} type="submit">Logout</button>
                  )}</li>
                  </ul>):null}
        </nav>
        </>
 )
}
export default Nav;