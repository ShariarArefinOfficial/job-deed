import {
    createBrowserRouter,

  } from "react-router-dom";
import App from "../App";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import AllJobs from "../Pages/AllJobs/AllJobs";
import AddJob from "../Pages/AddJob/AddJob";
import PrivateRoutes from "./PrivateRoutes";
import MyJobs from "../Pages/MyJobs/MyJobs";
import UpdatesJob from "../Pages/UpdatesJob/UpdatesJob";
import JobDetails from "../Pages/JobDetails/JobDetails";
import ApplyJobs from "../Pages/ApplyJob/ApplyJobs";
import JobApplication from "../Pages/JobApplication/JobApplication";
import Blogs from "../Pages/Blogs.jsx/Blogs";
import NotFound from "../Pages/NotFound/NotFound";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement:<NotFound></NotFound>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
        //  loader:()=>fetch(`${import.meta.env.VITE_URL}/jobs`)
        },
        {
          path:'/addJob',
          element:<PrivateRoutes><AddJob></AddJob></PrivateRoutes>
        },
        {
          path:'/myJob',
          element:<PrivateRoutes><MyJobs></MyJobs></PrivateRoutes>,
          //loader:()=>fetch('http://localhost:5000/jobs'),
        },
        {
          path:'/allJobs',
          element:<AllJobs></AllJobs>,
      //  loader:()=> fetch(`${import.meta.env.VITE_URL}/jobs`)
          
        },
        {
          path:'/jobDetails/:id',
          element:<PrivateRoutes><JobDetails></JobDetails></PrivateRoutes>,
          loader: ({ params }) => fetch(`${import.meta.env.VITE_URL}/job/${params.id}`)
        },
        {
          path:'/updatejob/:id',
          element:<PrivateRoutes><UpdatesJob></UpdatesJob></PrivateRoutes>,
          loader: ({ params }) => fetch(`${import.meta.env.VITE_URL}/job/${params.id}`)
        },
        {
            path:'/login',
            element:<LogIn></LogIn>
        },
        {
          path:'/blogs',
          element:<Blogs></Blogs>

        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
          path:'/applyJob',
          element:<PrivateRoutes><ApplyJobs></ApplyJobs></PrivateRoutes>,
        },
        {
          path:'/application',
          element:<PrivateRoutes><JobApplication></JobApplication></PrivateRoutes>,

        }

      ]
    },
  ]);

  export default router;
  