import  Axios  from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditExpense(){
    const[uptitle,setUpTitle]=useState("");
    const[upamount,setUpAmount]=useState("");
    const[upcategory,setUpCategory]=useState("");
    const[update,setUpDate]=useState("");
    const[initialData,setInitialData]=useState([]);
    const {id}=useParams();
    useEffect(()=>{
        Axios.get("http://localhost:5000/RecordRoute/update-record/"+id)
        .then((res)=>{
            if(res.status===200){
                const{title,amount,category,date}=res.data;
                setInitialData({title,amount,category,date});
            }else{
                Promise.reject();
            }
        })
        .catch((err)=>{
            console.log(err)
            alert("error getting records")
        })
    },[id])
    const handleSubmit=(e)=>{
        e.preventDefault();
       const data={title:uptitle||initialData.title,
            amount:upamount||initialData.amount,
            category:upcategory||initialData.category,
            date:update||initialData.date
        };
        Axios.put("http://localhost:5000/RecordRoute/update-record/"+id,data)
        .then((res)=>{
            if(res.status===200){
               alert("record updated successfully")
               setUpTitle("")
               setUpAmount("")
               setUpCategory("")
               setUpDate("")
            //    Navigate("/create-record");
            }else{
                Promise.reject();
            }
        })
        .catch((err)=>{
               console.log(err);
               alert("not able to update");
        })
    }
      return(
        <>
         <div className="h-96 flex items-center justify-center w-72 sm:w-80 bg-rose-300 mt-32 sm:mt-36 lg:mt-44 2xl:mt-48 mx-auto rounded"> 
            <form className="items-center mx-auto " onSubmit={handleSubmit}>
                <div>
                <label>Title</label><br/>
                <input type="string" defaultValue={initialData.title} className="mb-5 mt-2 rounded w-56" onChange={(event)=>setUpTitle(event.target.value)} placeholder="e.g., Grocery Shopping" required/>
                </div>
                <div>
                    <label>Amount</label><br/>
                    <input type="number" defaultValue={initialData.amount} className="mb-5 mt-2 rounded w-56" onChange={(event)=>setUpAmount(event.target.value)} placeholder="eg:45000" required/>
                </div>
                <div>
                    <label >Category</label><br/>
                    <input type="string" defaultValue={initialData.category} className="mb-5 mt-2 rounded w-56" onChange={(event)=>setUpCategory(event.target.value)} placeholder="e.g., Food, Rent, Entertainment" required/>
                </div>
                <div>
                    <label>Date of expense</label><br/>
                    <input type="date" 
                    defaultValue={initialData.date ? new Date(initialData.date).toISOString().split('T')[0] : ""}
                     onChange={(event)=>setUpDate(event.target.value)} className="mb-5 mt-3 rounded w-56" required/>
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
export default EditExpense;