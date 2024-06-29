//import React from 'react';

import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuthContext from "./useAuthContext";

const axiosSecure=axios.create({
    baseURL:import.meta.env.VITE_URL,
    withCredentials:true,
})
const useAxiosSecure = () => {
    const navigate=useNavigate();
    const info=useAuthContext()
    const {logOut}=info
   // console.log(logOut)
    axios.interceptors.response.use(res=>{
        return res;
    },
    async error=>{
        console.log(error)
        await logOut();
        

        navigate('/login');
        return Promise.reject(error)
    }

)
    return axiosSecure;
};

export default useAxiosSecure;
