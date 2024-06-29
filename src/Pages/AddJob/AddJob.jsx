//import React from 'react';

import { useState } from "react";
import useAuthContext from "../../Hooks/useAuthContext";
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from "../../PageTitle/PageTitle";



const AddJob = () => {
    const {user}=useAuthContext();
  //console.log(user)
      const [category, setCategory] = useState('');

    const [subCategory, setSubCategory] = useState('');
    const [postingDate, setPostingDate] = useState('');
    const [closingDate, setClosingDate] = useState('');
    const [type,setType]=useState('')
    const handletypeChange = (event) => {
      setType(event.target.value);
      console.log(event.target.value)
    };

    const handleDateChange = (event) => {
      setPostingDate(event.target.value);
      console.log(event.target.value)
    };
    const handleClosingDateChange = (event) => {
      setClosingDate(event.target.value);
      console.log(event.target.value)
    };
 // const categoryName = "Painting and Drawing";
 const handleCategoryChange=e=>{
  setCategory(e.target.value);
  console.log(e.target.value)
}

  const handleSubCategoryChange=e=>{
    setSubCategory(e.target.value);
    //console.log(e.target.value)
  }


  const handleAddJob = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.ItemName.value;
   // const category = form.Category.value;
    const salary = form.salary.value;
    const username=form.username.value;
    const email=form.email.value;
    const applicant=form.applicant.value;
    const description=form.description.value;
   

    const newJob = {
      description,
      applicant,
      type,
      name,
      category,
      subCategory,
      salary,
      postingDate,
      username,
      email,
      closingDate
      
    };

    console.log(newJob);



    // send data to the server
//     fetch('https://shariar-craft.vercel.app/crafts', {
//       method: 'POST',
//       headers: {
//           'content-type': 'application/json'
//       },
//       body: JSON.stringify(newCraft)
//   })
//     .then(res=>res.json)
//     .then(data=>{
//      // toast.success('craft Item suCCessfully Stored')

//     })

axios.post(`${import.meta.env.VITE_URL}/jobs`,newJob)
.then(res=>{
  toast.success('Your Job is suCCessfully Listed');
  console.log(res)
})



      





    form.reset();
  };
  const title='Add Jobs'
    return (
        <div>
                    <PageTitle title={title}></PageTitle>

        <div className="bg-[#F4F3F0] p-24">
          <h2 className="text-3xl font-extrabold text-center mb-5">Add A Job</h2>
          <form onSubmit={handleAddJob}>
            {/* form name and category row */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-2xl font-bold">Job Title</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="ItemName"
                    placeholder="Enter a job title"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text text-2xl font-bold">Category Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="radio"
                    name="category"
                    value="engineering"
                    checked={category === "engineering"}
                    onChange={handleCategoryChange}
                  />
                  Engineering
                </label>
                <label className="input-group">
                  <input
                    type="radio"
                    name="category"
                    value="marketing"
                    checked={category === "marketing"}
                    onChange={handleCategoryChange}
                  />
                  Marketing
                </label>
                <label className="input-group">
                  <input
                    type="radio"
                    name="category"
                    value="hrmanager"
                    checked={category === "hrmanager"}
                    onChange={handleCategoryChange}
                  />
                  HR Manager
                </label>
                <label className="input-group">
                  <input
                    type="radio"
                    name="category"
                    value="projectmanager"
                    checked={category === "projectmanager"}
                    onChange={handleCategoryChange}
                  />
                  Project Manager
                </label>
                
              </div>
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text text-2xl font-bold">Job Types</span>
                </label>
                <label className="input-group">
                  <input
                    type="radio"
                    name="type"
                    value="onsitejob"
                    checked={type === "onsitejob"}
                    onChange={handletypeChange}
                  />
                  On Site Job
                </label>
                <label className="input-group">
                  <input
                    type="radio"
                    name="type"
                    value="remote"
                    checked={type === "remote"}
                    onChange={handletypeChange}
                  />
                  Remote
                </label>
                <label className="input-group">
                  <input
                    type="radio"
                    name="type"
                    value="hybrid"
                    checked={type === "hybrid"}
                    onChange={handletypeChange}
                  />
                  Hybrid
                </label>
                <label className="input-group">
                  <input
                    type="radio"
                    name="type"
                    value="parttime"
                    checked={type === "parttime"}
                    onChange={handletypeChange}
                  />
                  Part Time
                </label>

                
                
              </div>
            </div>
            {/* form sub category and price row */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-2xl font-bold">Sub Category Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="radio"
                    name="subCategory"
                    value="fontenddeveloper"
                    checked={subCategory === "fontenddeveloper"}
                    onChange={handleSubCategoryChange}
                  />
                  Font-End Developer
                </label>
                <label className="input-group">
                  <input
                    type="radio"
                    name="subCategory"
                    value="backenddeveloper"
                    checked={subCategory === "backenddeveloper"}
                    onChange={handleSubCategoryChange}
                  />
                  Back End Developer
                </label>
                <label className="input-group">
                  <input
                    type="radio"
                    name="subCategory"
                    value="projectmaneger"
                    checked={subCategory === "projectmaneger"}
                    onChange={handleSubCategoryChange}
                  />
                  Project Maneger
                </label>
                <label className="input-group">
                  <input
                    type="radio"
                    name="subCategory"
                    value="sales"
                    checked={subCategory === "sales"}
                    onChange={handleSubCategoryChange}
                  />
                  Sales
                </label>
                <label className="input-group">
                  <input
                    type="radio"
                    name="subCategory"
                    value="hrmanager"
                    checked={subCategory === "hrmanager"}
                    onChange={handleSubCategoryChange}
                  />
                  Hr Manager
                </label>
                
              </div>
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text text-2xl font-bold">Salary</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="salary"
                    placeholder="Enter Salary"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* form rating and description row */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-2xl font-bold">Posting Date</span>
                </label>
                <label className="input-group">
                  <input
                    type="date"
                    name="postingDate"
                    className="input input-bordered w-full"
                    value={postingDate}
                    onChange={handleDateChange}
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-2xl font-bold">CLosing Date</span>
                </label>
                <label className="input-group">
                  <input
                    type="date"
                    name="closingDate"
                    className="input input-bordered w-full"
                    value={closingDate}
                    onChange={handleClosingDateChange}
                  />
                </label>
              </div>
            </div>

            
            
            {/* form username and details row */}
             <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-2xl font-bold">User Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="username"
                    defaultValue={user.displayName}
                    disabled
                    placeholder="write Yes or No"
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
            </div>
        
            <div className="mb-8">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-2xl font-bold">Applicants</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="applicant"
                    placeholder="Applicants"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <div className="mb-8">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-2xl font-bold">Job Description</span>
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
            <input type="submit" value="Add A Job" className="btn btn-block" />
          </form>
        </div>
       <ToastContainer></ToastContainer>
      </div>
    );
};

export default AddJob;