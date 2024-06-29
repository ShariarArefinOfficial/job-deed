//import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import useAuthContext from '../../Hooks/useAuthContext'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios";
import PageTitle from "../../PageTitle/PageTitle";
const Register = () => {
    const [show,setShow]=useState(false)
    const {createUser,updateUserProfile}=useAuthContext();
    const updateData=async(email)=>{
      const userEmail=email;


      const {data}=await axios.post(`${import.meta.env.VITE_URL}/jwt`,{userEmail},{withCredentials:true})
        console.log(data)
    }

        const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
       // const registration={name, photo, email, password}
        
      //   if(password.length<6){
      //    // toast.error("Password Must Be 6 character");
      //     return;

      // }
      // else if(!/[A-Z]/.test(password)){
      //    // toast.error("At leat One UpperCase needed");
      //   return;
      // }
      // else if(!/[a-z]/.test(password)){
      //    // toast.error("At leat One LowerCase needed");
      //     return;
      // }
      

      createUser(email,password)
      .then((userCredential) => {
        toast.success("Sign Up SuccessFull!");
        updateData(email)

        // Signed up 
        //const user = userCredential.user;
        //==New User SuccessFully Created
        updateUserProfile(name,photo)        
        .then(result=>{
          console.log(result)
        
        })
        
      
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
      });
    



        e.currentTarget.reset();

    }
    const title='Registration'

    return (
        <div>
                    <PageTitle title={title}></PageTitle>

             <div className=" min-h-screen flex flex-col justify-center items-center m-5">
        <div className="w-full md:w-1/2 border-2 border-blue-500 rounded-xl p-5">
          <h2 className="text-3xl my-10 text-center font-bold">Register Now</h2>
          <form
            onSubmit={handleRegister}
            className=" md:w-3/4 lg:w-1/2 mx-auto"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                required
                name="name"
               
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                required
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                required
                name="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="flex flex-row items-center">
                <input
                  type={show ? "text" : "password"}
                  required
                  name="password"
                  placeholder="Password"
                  className="input input-bordered w-full"
                />
                <span onClick={() => setShow(!show)} className="-ml-10">
                  {show ? (
                    <MdOutlineRemoveRedEye></MdOutlineRemoveRedEye>
                  ) : (
                    <FaRegEyeSlash></FaRegEyeSlash>
                  )}
                </span>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link className="text-blue-600 font-bold" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;