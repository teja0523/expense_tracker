import { useEffect, useState } from "react";
import Axios from 'axios';
function Budget_tracker(){
    const[budget,setBudget]=useState("");
    const[totalexpense,setTotalexpense]=useState("");
    const[message,setMessage]=useState("");
    const id=localStorage.getItem("id");
    const handlesubmit=(e)=>{
        console.log(id);
        e.preventDefault();
        if(!id){
            alert("please login to set your budget");
            return;
        }
        const data={budget:budget}
        Axios.post("http://localhost:5000/UserRoute/set-budget/"+id,data)
        .then((res)=>{
               if(res.status===200){
                 alert("budget set successfully");
                 setBudget(" ");
               }else{
                Promise.reject();
               }
        }).catch((err)=>{
            console.log(err);
            alert("error setting budget")
        })
    }
    const fetchexpenses=()=>{
        Axios.get("http://localhost:5000/UserRoute/total-expenses/"+id)
        .then((res)=>{
            if(res.status===200){
                const totalexpense=res.data.totalexpenses;
               setTotalexpense(totalexpense);
            }
        })
        .catch((err)=>{
            alert("error fetching expenses");
            console.log(err);
        })
    }
    const fetchbudget=()=>{
        Axios.get("http://localhost:5000/UserRoute/getbudget/"+id)
        .then((res)=>{
            if(res.status===200){
                console.log(res.data);
                setBudget(res.data.budget);
            }else{
                Promise.reject();
            }
        }).catch((err)=>{
            console.log(err);
            alert("error getting budget");
        })
    }
    useEffect(()=>{
       if(id){
        fetchexpenses();
        fetchbudget();
       }
    },[id]);
    const change=()=>{
        const spend=budget-totalexpense;
        setMessage(spend>0?"you can spend":"Expenses exceeded budget");
    }
    useEffect(()=>{
        change();
    },[totalexpense,budget]);
    return(
        <>
        <div className="bg-rose-300  w-64 mx-auto mt-36 sm:mt-28 lg:mt-32 items-center text-center p-4 rounded ">
        <form onSubmit={handlesubmit}>
            <h1 className="text-indigo-400 text-2xl mb-2">Budget Tracker</h1>
            <label className="text-lg">Set your monthly budget:</label><br/>
            <input className="mt-2 rounded" onChange={(event)=>setBudget(event.target.value)}placeholder=" enter budget" type="number" required/><br/>
            <button className="mt-3 bg-gray-300 rounded  p-1" type="submit">Set budget</button>
            </form>
        <div className="mt-4">
           <h1 className="text-2xl mb-2 text-indigo-400">Budget status</h1>
           <h1 className="text-lg mb-1">Budget:{budget}</h1>
           <h1 className="text-lg mb-1">Total expenses:{totalexpense}</h1>
           <p className="text-lg mb-1">Remaining Budget:${budget-totalexpense}</p>
           <p className="text-xl mb-1 text-indigo-400 border mt-2">{message}</p>
           
        </div>
        </div>
        </>
    )
}
export default Budget_tracker;