//import React from 'react';

import { Link } from "react-router-dom";

const Table = ({item,idx}) => {
    const {name,salary,postingDate,closingDate,_id}=item
    return (
        <tr>
           
        {/* <th>{idx+1}</th> */}
        <td >
            {name}
        </td>
        <td>
            {salary}
        </td>
        <td>
            {postingDate}
        </td>
        <td>
            {closingDate}
        </td>
       
        <td>
            <Link to={`/jobDetails/${_id}`}>
            <button className="btn btn-primary">View Details</button>
            </Link>
        </td>
        
       
        </tr>
    );
};

export default Table;