//import React from 'react';

import { useLoaderData } from "react-router-dom";
import Hero from "./Hero";
import TabCategories from "./Tabs/TabCategories";
import Slider from "./Slider";
import PageTitle from "../../PageTitle/PageTitle";
import Companis from "./Companis";

const Home = () => {
   // const jobs=useLoaderData();
   const title='Home'
    return (
        <div>
                      <PageTitle title={title}></PageTitle>

            <div className='container mx-auto my-5'>
            <Slider></Slider>
            <TabCategories ></TabCategories>
            
            </div>
            <Companis></Companis>
           
           
        </div>
    );
};

export default Home;