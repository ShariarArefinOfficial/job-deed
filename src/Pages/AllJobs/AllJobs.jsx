//import React from 'react';

import { useLoaderData } from "react-router-dom";
import Table from "./Table";
import axios from "axios";
import { useEffect, useState } from "react";
import PageTitle from "../../PageTitle/PageTitle";

const AllJobs = () => {
   // const data=useLoaderData()
    const [num,setNumber]=useState(0)
    const [search,SetSearch]=useState('')
    const [jobs,setJobs]=useState([])
    useEffect(()=>{
      const getCount=async()=>{
        const {data}=await axios(`${import.meta.env.VITE_URL}/jobs`)
        console.log(data)
      // setJobs(data)
        const n=data.length;
        setNumber(n);
        //setCount(data.cursor)
      }
      getCount()
    },[])

    const [itemsPerPage,setItemsPerPage]=useState(3)
    const [currentPage,setCurrentPage]=useState(1)
    let count=num;
    const index=parseInt(count/itemsPerPage);
    const [countin,setCount]=useState(0)
    //console.log(index)
    useEffect(()=>{
      const getCount=async()=>{
        const {data}=await axios(`${import.meta.env.VITE_URL}/jobs-count`)
        setCount(data.cursor)
       // setJobs(data)
      }
      getCount()
    },[])
    useEffect(()=>{
      const getCount=async()=>{
        const {data}=await axios(`${import.meta.env.VITE_URL}/all-jobs?page=${currentPage}&size=${itemsPerPage}&search=${search}`)
        setJobs(data)
        //console.log(data)
        //setCount(data.cursor)
      }
       
      getCount()
    },[currentPage,itemsPerPage])
    //console.log(countin)
    useEffect(()=>{
      const getSearch=async()=>{
        const {data}=await axios(`${import.meta.env.VITE_URL}/jobs-str/${search}`)
        setJobs(data)
        setNumber(data.length)
      }
      if(search){
        getSearch()
      }
    },[search,itemsPerPage])

    const pages=[...Array(index+1).keys()].map(element=>element+1)

    const handlePaginationButton=value=>{
      console.log(value)
      setCurrentPage(value)
    }
   let inc=currentPage+1
   let dec=currentPage-1
   const handleSearch=event=>{
    event.preventDefault();

    const form = event.target;
    const text=form.search.value;
    //console.log(text)
    SetSearch(text)


   }
   //console.log(search)

   const title='All Jobs'

    return (
        <div>
          <PageTitle title={title}></PageTitle>
          <div className="container mx-auto p-10 bg-gray-400 rounded-xl text-center mt-10">
            <h1 className="text-white text-xl">All Jobs</h1>
          </div>
          <div className="p-10">
            <h1 className="text-center text-2xl font-bold mb-5">Search By Title</h1>
            <form onSubmit={handleSearch} className="flex flex-row gap-5 justify-center items-center">
              <input type="text" name="search" id="" className="input input-bordered"/>
              <input type="submit" value="Search" className="btn btn-primary" />
            </form>
          </div>

          
             <div className="container mx-auto my-10">
            <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              
              <th>Job Title</th>
              <th>Salary Range</th>
              <th>Posting Date</th>
              <th>Closing Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((item,idx)=><Table
            key={item._id}
            item={item}
            idx={idx}
            
            >
                
                </Table>)}
          </tbody>
        </table>
      </div>
            
        </div>
        <div className="flex my-10 justify-center">
          <button onClick={()=>handlePaginationButton(dec ==0 ? dec=index+1 : dec)} className="btn mr-3 bg-gray-300">Previos</button>
          <div>
            {pages.map(num=><button onClick={()=>handlePaginationButton(num)} className="btn mr-3 bg-gray-300"key={num}>{num}</button>)}
          </div>
          <button onClick={()=>handlePaginationButton(inc>index+1 ? inc=1 : inc)} className="btn mr-3 bg-gray-300">Next</button>
        </div>
        </div>
    );
};

export default AllJobs;