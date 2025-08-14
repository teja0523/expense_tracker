import { useState } from "react";
import Axios from "axios";
function CreateExpense(){
    const[title,setTitle]=useState("");
    const[amount,setAmount]=useState("");
    const[category,setCategory]=useState("")
    const[date,setDate]=useState("");

    const id=localStorage.getItem("id");
    console.log(id);
    const handleSubmit=(event)=>{
        event.preventDefault();
          if(!id){
               alert("userId not exists please log in");
               return;
          }
          const data={title,amount,category,date,id}
          Axios.post("http://localhost:5000/RecordRoute/create-record/",data)
          .then((res)=>{
                console.log("data",res);
                if(res.status===200){
                    setTitle(" ")
                    setAmount(" ");
                    setCategory(" ");
                    setDate(" ");
                    alert("record added successfully");
                }else{
                    Promise.reject();
                }
          })
          .catch((e)=>{
            alert("error adding record");
                console.log(e);
          })
    }
    return(
        <>
        {/* <h1 className="bg-rose-300 w-72  mt-48  items-center text-center text-2xl text-indigo-400 mx-auto rounded-t p-1">Add an expense</h1>  */}
        <div className="h-96 flex items-center justify-center w-80 p-10 bg-rose-300 sm:mt-36  xl:mt-16 xl:mb:10 mx-auto rounded"> 
            <form className="items-center mx-auto mt-8" onSubmit={handleSubmit}>
                <div>
                <label>Title</label><br/>
                <input type="string" className="mb-5 mt-2 rounded w-56" onChange={(event)=>setTitle(event.target.value)} placeholder="e.g., Grocery Shopping" required/>
                </div>
                <div>
                    <label>Amount</label><br/>
                    <input type="number" className="mb-5 mt-2 rounded w-56" onChange={(event)=>setAmount(event.target.value)} placeholder="eg:45000" required/>
                </div>
                <div>
                    <label >Category</label><br/>
                    <input type="string" className="mb-5 mt-2 rounded w-56" onChange={(event)=>setCategory(event.target.value)} placeholder="e.g., Food, Rent, Entertainment" required/>
                    {/* <select className="mb-5 mt-2 rounded w-56" onChange={(event)=>setCategory(event.target.value)}>
                        <option value="">select a categoty</option>
                        <option value="food">Food</option>
                        <option value="transportation">Transportation</option>
                        <option value="rent">Rent</option>
                        <option value="utilities">Utilities</option>
                        <option value="other">Others</option>
                    </select> */}
                </div>
                <div>
                    <label>Date of expense</label><br/>
                    <input type="date" onChange={(event)=>setDate(event.target.value)} className="mb-5 mt-3 rounded w-56" required/>
                </div>
                <div className="flex justify-center items-center mt-3 mb-2">
                <button className=" flex bg-gray-400 rounded p-1 mx-auto" type="submit">
                    submit
                </button>
                </div>
            </form>
        </div>
        </>
    )
}
export default CreateExpense;