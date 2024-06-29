//import React from 'react';

import { useLoaderData, useNavigate } from "react-router-dom";
import useAuthContext from '../../Hooks/useAuthContext'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import axios from 'axios';
import PageTitle from "../../PageTitle/PageTitle";



const JobDetails = () => {
    const navigate=useNavigate()
    const [startDate, setStartDate] = useState(new Date());
    const {user}=useAuthContext()
    console.log(user.email)
    const job=useLoaderData();
    console.log(job)
    const {name,salary, postingDate,username,description,closingDate,email,_id,applicant,category}=job;
    console.log(category)
    const handleApplyJob=async e=>{
        e.preventDefault();



    const form = e.target;
    const job_id=_id
    const BuyerEmail=form.buyerEmail.value;
    const applicantEmail=form.email.value;
    const coverLetter=form.description.value;
    const applyDate=startDate;
    const status='applied';
    const jobClosingDate = new Date(closingDate);
    //console.log(jobClosingDate)
    if(BuyerEmail===applicantEmail){
        toast.error("Employers cannot apply for their own job.");
        return;
    }
    else if(startDate>jobClosingDate){
        toast.error("The deadline for this job application has passed. You cannot apply.");
        return;   
    }



    const applicationData={
        job_id,name,salary, coverLetter,closingDate,applicantEmail,BuyerEmail,applyDate,category,status
    }
    //console.log(applicationData)
     try{
       
      const {data}=await axios.post(`${import.meta.env.VITE_URL}/applyJob`,applicationData);
      toast.success('You are successfully applied This Job') 
      
     // navigate('/applyJob') 
     }catch(error){
        console.log(error)

     }
    }
    const title='Job Details'
    return (
        <div className="container mx-auto">
          <PageTitle title={title}></PageTitle>
           <div className="flex flex-row justify-center items-center gap-5 my-10 h-screen ">
           <div className="flex-1 space-y-5"> 
            <h1 className="font-bold text-3xl">{name}</h1>
            <p className="font-bold">Posted By:{username}</p>
            <p className="font-bold"><span>posting Date:</span>{postingDate}</p>
            <p className="font-bold"><span>Applicant:</span>{applicant}</p>

            <p className=" w-3/4">{description}</p>
            
            </div>
           <div className="flex-1 space-y-3">
            <p className="font-bold">Closing Date:{closingDate}</p>
           <p className="font-bold"><span>Salary range:</span>{salary}</p>
           <a href='#apply'>
           <button onClick={()=>document.getElementById('my_modal_1').showModal()} className="btn btn-primary mt-5">Apply Now</button>
           </a>
            
           </div>
           </div>
            <dialog id="my_modal_1" className="modal" >
                <div className="w-3/4 bg-white p-10">
                <div className="text-center p-10 rounded-xl bg-gray-400 font-bold">
                    Apply This Job
                </div>
                <div>
                <form onSubmit={handleApplyJob}>
           
            {/* form username and details row */}
             <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-2xl font-bold">Buyer Email</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="buyerEmail"
                    defaultValue={email}
                    disabled
                   
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text text-2xl font-bold">User Email</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="email"
                    defaultValue={user.email}
                    disabled
                    placeholder="write Processiong time"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control ml-4 md:w-1/2">
              <label className="label">
                  <span className="label-text text-2xl font-bold">Apply Date</span>
                </label>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="p-3 bg-gray-100 border-2 rounded-xl" />
              </div>

            </div>
        
        
            <div className="mb-8">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-2xl font-bold">Cover Letter</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    
                    name="description"
                    placeholder="description"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <input type="submit" value="Apply This Job" className="btn btn-primary" />
                </form>
                <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
 
                </div>
                </div>
            </dialog>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default JobDetails;