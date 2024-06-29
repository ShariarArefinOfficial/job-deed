//import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabsTable from '../Tabs/TabsTable';
import { useEffect,useState } from 'react';
import axios from 'axios';
const TabCategories = () => {
  const [jobs,setJObs]=useState([])
  useEffect(()=>{
    const getData=async()=>{
      const {data}=await axios(`${import.meta.env.VITE_URL}/jobs`)
      setJObs(data)
    }
    getData();
  },[])
   // console.log(jobs)
    const PartTime="parttime"
    const onSiteJob="onsitejob"
    const Hybrid="hybrid"
    const Remote="remote"
    const filterOnSite=jobs.filter(item=>item.type==onSiteJob)
    const filterPartTime=jobs.filter(item=>item.type==PartTime)
    const filterHybrid=jobs.filter(item=>item.type==Hybrid)
    const filterRemote=jobs.filter(item=>{
    //  console.log(item.type)
      return item.type==Remote;
    })
   // console.log(filterRemote)

    return (
      <div className='container mx-auto my-10'>
        <div className='text-center my-10'>
          <h1 className='text-2xl font-bold'>Job Categories</h1>
          <p className=' text-lg w-1/2 mx-auto mt-5'>Welcome to our job portal! Explore a variety of job categories to find your next career opportunity. Click on any category to view available job listings and learn more about the roles in that field.</p>
        </div>
          <Tabs>
    <div>
        <div className='flex justify-center items-center'>
        <TabList>
      <Tab>All Types</Tab>
      <Tab>On Site Job</Tab>
      <Tab>Remote Job</Tab>
      <Tab>Hybrid</Tab>
      <Tab>Part Time</Tab>

    </TabList>
        </div>
    </div>

    <TabPanel>
      <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        {jobs.map(job=><TabsTable
        key={job._id}
        job={job}
        ></TabsTable>)}
      </div>
    </TabPanel>
    <TabPanel>
      <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        {
        
        filterOnSite.map(job=><TabsTable
        key={job._id}
        job={job}
        ></TabsTable>)}
      </div>
    </TabPanel>
    <TabPanel>
    <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        {filterRemote.map(job=><TabsTable
        key={job._id}
        job={job}
        ></TabsTable>)}
      </div>    
      </TabPanel>
    <TabPanel>
    <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        {filterHybrid.map(job=><TabsTable
        key={job._id}
        job={job}
        ></TabsTable>)}
      </div>
    </TabPanel>
    <TabPanel>
    <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        {filterPartTime.map(job=><TabsTable
        key={job._id}
        job={job}
        ></TabsTable>)}
      </div>
    </TabPanel>
  </Tabs>
      </div>
    );
};

export default TabCategories;