//import React from 'react';

import { useEffect, useState } from "react";
import useAuthContext from "../../Hooks/useAuthContext";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import PageTitle from "../../PageTitle/PageTitle";
//import { useQuery } from "@tanstack/react-query";

const JobApplication = () => {
  const title='Job Application'
    const {user}=useAuthContext();
    const axiosSecure=useAxiosSecure()
    const [Filter,setFilter]=useState([])
    const getData=async()=>{
        const {data}=await axiosSecure(`/application/${user.email}`,{withCredentials:true})
        //console.log(data)
        
       setFilter(data)
       return data;
  
        
      }

    //   const {data:application=[]
    //     ,isError,isLoading,error,reFetch}=useQuery({
    //     queryFn:()=>getData(),
    //     queryKey:['application'],
    //   })

    //   console.log(application)
   
  useEffect(()=>{
  
    getData();
  },[user.email])
  const handleStatus=async(id,status)=>{
    //console.log(status,id)
    const {data}=await axios.patch(`${import.meta.env.VITE_URL}/applyJob/${id}`,{status})
    console.log(data)
    getData()
    
  }
    return (
        <div>
          <PageTitle title={title}></PageTitle>
             <div className="container mx-auto">
            <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Applicants Email</th>
              <th>Apply Date</th>
              <th>Cover Letter</th>
              <th>category</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Filter.map((item,idx)=>  <tr key={item._id}>
           
           <th>{idx+1}</th>
           <td >
               {item.name}
           </td>
           <td>
               {item.applicantEmail}
           </td>
           <td>
               {item.applyDate}
           </td>
           <td>
               {item.coverLetter}
           </td>
           <td>
               {item.category}
           </td>
           <td className={`${(item.status==='applied') ? 'text-blue-500' :(item.status==='selected') ? 'text-green-500' : 'text-red-500'} `}>
               {item.status}
           </td>
           <td >
            <button onClick={()=>handleStatus(item._id,'selected')} className="btn bg-green-500">Selected</button>
            <button onClick={()=>handleStatus(item._id,'rejected')} className="btn bg-red-500">Rejected</button>
           </td>
          
          
           </tr>)}
          </tbody>
        </table>
      </div>
            
        </div>
        </div>
    );
};

export default JobApplication;