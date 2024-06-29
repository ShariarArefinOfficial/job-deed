//import React from 'react';

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuthContext from "../../Hooks/useAuthContext";
import TableRow from "./TableRow";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import PageTitle from "../../PageTitle/PageTitle";

const MyJobs = () => {
  const axiosSecure=useAxiosSecure();
    const {user}=useAuthContext();
    //const data=useLoaderData();
  //  console.log(data);
    const [filterData,setFilterData]=useState([]);
    const getData=async()=>{
      
      const {email}=user;
      //const {data}=await axios.get(`${import.meta.env.VITE_URL}/myJob/${email}`,{withCredentials:true})
      const {data}=await axiosSecure(`/myJob/${email}`)
      setFilterData(data)
    }
    useEffect(()=>{
      getData();
       
    },[user.email])

  

   // console.log(filterData)
   const title='My Jobs'
    return (
        <div className="container mx-auto">
                    <PageTitle title={title}></PageTitle>

            <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Salary Range</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filterData.map((item, idx) => (
              <TableRow
                key={item._id}
                idx={idx + 1}
                data={item}
                setFilterData={setFilterData}
                filterData={filterData}
              />
            ))}
          </tbody>
        </table>
      </div>
            
        </div>
    );
};

export default MyJobs;