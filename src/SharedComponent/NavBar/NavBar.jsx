//import React from 'react';

import { Link, NavLink, useNavigate } from "react-router-dom";
//import useAuthContext from '../../Hooks/useAuthContext'
import { useContext, useEffect, useState } from "react";
import useAuthContext from "../../Hooks/useAuthContext";
import { AuthContext } from "../../AuthProviders/AuthProvider";

const NavBar = () => {
    const navigate = useNavigate();
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
      logOut().then().catch();
      navigate("/");
    };
  
    const [theme, setTheme] = useState("light");
    useEffect(()=>{
      localStorage.setItem('theme',theme)
      const localTheme=localStorage.getItem('theme')
      document.querySelector('html').setAttribute('data-theme',localTheme)
  
    },[theme])
  
    const handleToggle=e=>{
      if(e.target.checked){
        setTheme('dark')
      }
      else{
        setTheme('light')
      }
    }

  
    const navLinks = (
      <>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to='/allJobs'>All Jobs</NavLink>
        </li>
        {
          (user)?
          <>
          <li>
          <NavLink to='/applyJob'>Applied Jobs</NavLink>
        </li>
        <li>
          <NavLink to='/application'>Job Applications</NavLink>
        </li>
          <li>
          <NavLink to='/addJob'>Add A Job</NavLink>
        </li>
        <li>
          <NavLink to='/myJob'>My Jobs</NavLink>
        </li>
          </>:
          <></>
        }
         <li>
          <NavLink to='/blogs'>Blogs</NavLink>
        </li>
        <li>
        <label className="cursor-pointer grid place-items-center">
          <input
          onChange={handleToggle}
            type="checkbox"
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </li>
   
       
      </>
    );
    return (
        <div>
            <div className=" max-w-screen-xl mx-auto">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl text-blue-600">
            Job<span className="text-black">DeeD</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="dropdown  dropdown-hover mr-0 md:mr-10 ">
                <div tabIndex={0} role="button" className="btn m-1">
                  <Link>
                    <img
                      src={user.photoURL}
                      alt=""
                      className="w-10 rounded-full mr-4"
                    />
                  </Link>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-20 menu  shadow bg-base-100 rounded-box w-40"
                >
                  <li>
                    <Link to="/myprofile">{user.displayName}</Link>
                  </li>
                  <li>
                    <button onClick={handleSignOut} className="btn">
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="btn bg-blue-600 mr-2">
                Log IN
              </Link>
              <Link to="/register" className="btn bg-green-600">
                Registration
              </Link>
            </>
          )}{" "}
        </div>
      </div>
    </div>
        </div>
    );
};

export default NavBar;