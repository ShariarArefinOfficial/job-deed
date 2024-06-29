//import React from 'react';
import heroOne from '../../assets/HeroOne.jpg'
const HeroOne = () => {
    return (
        <div >
            <div style={{backgroundImage: `url(${heroOne})`}} className='bg-gradient-to-r from-gray-800 to-gray-500 bg-cover bg-no-repeat bg-center rounded-xl min-h-screen'>
                <div className='flex flex-col justify-center items-center text-center h-screen'>
                <h1 className='text-5xl font-black text-gray-800'>Unlock Your Potential</h1>
                <p className='text-2xl font-semibold text-black  w-4/5 mx-auto'>Discover exciting job opportunities that match your skills and interests. Join now and get noticed by employers.</p>
                </div>


            </div>
            
        </div>
    );
};

export default HeroOne;