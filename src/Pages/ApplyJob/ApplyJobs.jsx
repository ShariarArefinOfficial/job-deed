//import React from 'react';

//import axios from "axios";
import { useEffect, useState } from "react";
import useAuthContext from "../../Hooks/useAuthContext";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ApplyJobs = () => {
  const { user } = useAuthContext();
  const [Filter, setFilter] = useState([]);
  const axiosSecure = useAxiosSecure();
  const [category,setCategory]=useState('')
  useEffect(() => {
    
    const getData = async () => {
      const { data } = await axiosSecure(`/applyJob/${user.email}`, {
        withCredentials: true,
      });
      //console.log(data)

      setFilter(data);
    };
    getData();
  }, [user.email]);


  useEffect(() => {
    
    const getData = async () => {
      const { data } = await axiosSecure(`/applyJob/${user.email}/${category}`, {
        withCredentials: true,
      });
      //console.log(data)

      setFilter(data);
    };
    if(category){
      getData();
    }
  }, [category]);
  const handleFilter = (value) => {
    //console.log(value);
    setCategory(value)
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex justify-center items-center my-5 ">
          <details className="dropdown">
            <summary className="m-1 btn bg-blue-500">Filter By Category</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li>
                <button onClick={()=>handleFilter('engineering')}>Engineering</button>
              </li>
              <li>
                <button onClick={()=>handleFilter('marketing')}>Marketing</button>
              </li>
              <li>
                <button onClick={()=>handleFilter('hrmanager')}>HR Manager</button>
              </li>
              <li>
                <button onClick={()=>handleFilter('projectmanager')}>Project Manager</button>
              </li>
             
            </ul>
          </details>
        </div>

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Job Title</th>
                <th>Salary Range</th>
                <th>Apply Date</th>
                <th>category</th>
                <th>status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {Filter.map((item, idx) => (
                <tr key={item._id}>
                  <th>{idx + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.salary}</td>
                  <td>{item.applyDate}</td>
                  <td>{item.category}</td>
                  <td
                    className={`${
                      item.status === "applied"
                        ? "text-blue-500"
                        : item.status === "selected"
                        ? "text-green-500"
                        : " text-red-500"
                    } `}
                  >
                    {item.status}
                  </td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApplyJobs;
