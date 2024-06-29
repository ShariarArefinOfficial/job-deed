//import React from 'react';
import { Link } from 'react-router-dom';

const TabsTable = ({job}) => {
    const {name,description,username,salary,_id}=job
    return (
        <div className="border-2 rounded-xl">
        <div className="p-4 text-center">
            <h3 className='text-blue-600 font-bold text-2xl'>{name}</h3>
            <p className='text-xl py-4'>{description} </p>
            <p className='font-bold text-xl text-black'>Posted By:{username}</p>
            <p className='font-bold text-xl text-gray-500 py-3' >Salary Range:{salary}</p>
            <Link to={`/jobDetails/${_id}`}>
            <button className="btn btn-primary">View Details</button>
            </Link>
        
            
        </div>
       
        
    </div>
    );
};

export default TabsTable;