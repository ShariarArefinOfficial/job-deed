//import React from 'react';

import { Link } from "react-router-dom";
import useAuthContext from "../../Hooks/useAuthContext";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const LogIn = () => {
    const {signIn,googleSignIn,githubSignIn}=useAuthContext();
    const handleGoogleSignIn=async()=>{
      try{
        const result=await googleSignIn()
       const userEmail=result.user.email;
       // console.log(userEmail)
        const {data}=await axios.post(`${import.meta.env.VITE_URL}/jwt`,{userEmail},{withCredentials:true})
        console.log(data)

        toast.success('Log in SuccessFully');
         // Sign In with Firebase
        //  signIn(email, password)
        //  .then(Result => {
        //  //  toast.success('Log in SuccessFully');
        //    const user = Result.user;
        //    console.log(user)

          
     
         
        //  })
        //  .catch(error => {
        //    console.error(error)
        //    //toast.error('GIve authentic Email and passWord')
        //  });

       }catch(error){
        console.log(error)
       }
    }
   // console.log(signIn);
    const handleLogin =async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        
       try{
        const result=await signIn(email, password)
        const userEmail=result?.user?.email;
       // console.log(userEmail)
        const {data}=await axios.post(`${import.meta.env.VITE_URL}/jwt`,{userEmail},{withCredentials:true})
        console.log(data)

        toast.success('Log in SuccessFully');
         // Sign In with Firebase
        //  signIn(email, password)
        //  .then(Result => {
        //  //  toast.success('Log in SuccessFully');
        //    const user = Result.user;
        //    console.log(user)

          
     
         
        //  })
        //  .catch(error => {
        //    console.error(error)
        //    //toast.error('GIve authentic Email and passWord')
        //  });

       }catch(error){
        console.log(error)
       }
      
        // Attempt to reset the form
        //e.currentTarget.reset();
      }
    return (
        <div>
            <div>
        <div className=" min-h-screen flex flex-col justify-center items-center">
          <div className="w-full md:w-1/2 border-2 border-blue-500 rounded-xl p-5">
            <h2 className="text-3xl my-10 text-center font-bold">
              Log In Now
            </h2>
            <form onSubmit={handleLogin} className=" md:w-3/4 lg:w-1/2 mx-auto">
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
                <input
                  type="password"
                  required
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In</button>
              </div>
            </form>
            <p className="text-center mt-4">
              Do not have an account{" "}
              <Link className="text-blue-600 font-bold" to="/register">
                Registration 
              </Link>
            </p>
            <div className="p-5 flex  justify-center items-center gap-4">
              <button
                onClick={() => handleGoogleSignIn()}
                className="btn btn-success"
              >
                Sign In with Google
              </button>
              {/* <button
                onClick={() => githubSignIn()}
                className="btn btn-success"
              >
                Sign In with Github
              </button> */}
            </div>
          </div>
        </div>
      </div>
           <ToastContainer></ToastContainer> 
        </div>
    );
};

export default LogIn;