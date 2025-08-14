import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import  Axios from "axios";
function ExpenseList(){
    const[arr,setArr]=useState([])
    const userid=localStorage.getItem("id");
    useEffect(()=>{
        Axios.get("http://localhost:5000/RecordRoute/get/"+userid)
        .then((res)=>{
            if(res.status===200){
                console.log(res.data);
                setArr(res.data.records||[]);
            }else{
                Promise.reject();
            }
        }).catch((err)=>{
           // console.log(err);
            alert("not getting record");
        })
    },[userid]);

    const handleDelete=(id)=>{
        Axios.delete("http://localhost:5000/RecordRoute/delete-record/"+id)
        .then((res)=>{
             if(res.status===200){
                alert("expense deleted successfully");
             }
             else{
                Promise.reject();
             }
        }).catch((err)=>{console.log(err)
            alert("not able to delete due to",err)
        })

    }
    return(
        <>
        <div className="bg-rose-300   w-10/12 p-4 m-auto mt-12 rounded">
        <h1 className="text-center text-stone-600 text-3xl">Expenses List</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  p-2 mt-2 lg:ml-32 xl:ml-40 sm:ml-28 md:ml-8">
        {arr.map((val)=>(
            <div key={val._id}  className="bg-gray-300 shadow-md rounded-lg p-4 border border-gray-300  w-56 sm:w-72">
            <h1>Title:{val.title}</h1>
            <h1>Amount:{val.amount}</h1>
            <h1>Category:{val.category}</h1>
            <h1>Date of expense:{val.date}</h1>
            <button className="bg-green-500 w-14 rounded "><Link to={`/edit-record/${val._id}`}>Edit</Link></button>
            <button className="bg-red-500 w-14 rounded ml-8" type="submit" onClick={()=>handleDelete(val._id)}>Delete</button>
            </div>
           ))}
        </div>
        </div>
        </>
    )
}
export default ExpenseList;