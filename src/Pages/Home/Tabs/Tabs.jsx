//import React from 'react';

const Tabs = ({job}) => {
    const {name,description,username}=job
    return (
        <div className="border-2 rounded-xl">
            <div className="p-4">
                <h3>{name}</h3>
                <p>{description}</p>
                <p>Posted By:{username}</p>
                <p>Salary Range:{salary}</p>
            
                
            </div>
            <button className="btn btn-primary">View Details</button>
            
        </div>
    );
};

export default Tabs;