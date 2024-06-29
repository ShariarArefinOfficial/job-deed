//import React from 'react';

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TableRow = ({data,idx,setFilterData,filterData}) => {
    const{salary,name,_id}=data;
    //console.log(_id)
    const handleDelete=(id)=>{
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`${import.meta.env.VITE_URL}/job/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        Swal.fire(
                            'Deleted!',
                            'Your Coffee has been deleted.',
                            'success'
                        )
                        const remaining = filterData.filter(craf => craf._id !== id);
                        setFilterData(remaining);
                    })

            }
        })
    

    }
 
    return (
        <tr>
           
        <th>{idx}</th>
        <td >
            {name}
        </td>
        <td>
            {salary}
        </td>
       
        <td>
            <Link to={`/updatejob/${_id}`}>
            <button className="btn btn-primary">Update</button>
            </Link>
        </td>
        <td>
            <button  onClick={()=>handleDelete(_id)} className="btn btn-ghost">Delete</button>
        </td>
       
        </tr>
    );
};

export default TableRow;