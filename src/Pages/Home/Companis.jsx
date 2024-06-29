//import React from 'react';
import Marquee from "react-fast-marquee";
import img1 from '../../assets/Adidas.png'
import img2 from '../../assets/amazon.png'
import img3 from '../../assets/Apple.png'
import img4 from '../../assets/LogoStock.jpg'
import { Link } from "react-router-dom";

const Companis = () => {
    return (
        <>
        <div className="p-10 bg-slate-200 my-5">
            <div className="flex flex-col justify-center items-center">
                <h1 className=" font-bold text-3xl my-5">Get Started WIth <span className=" text-blue-600 font-bold">Job Deed</span></h1>
                <div className="flex flex-row justify-center items-center gap-5">
                <Link to='/login'>
                <button className="btn btn-primary">Login</button>
</Link>
                <Link to='/register'>
                <button className="btn bg-green-500"> Register</button>
</Link>

                </div>
            </div>
        </div>
        <div className="border-t-2 border-b-2 p-10 mt-10 mb-10">
            <h1 className="text-3xl font-bold text-center my-5">Recomanded Companis</h1>
            <Marquee autoFill play pauseOnHover >
                <img src={img1} alt="" className="w-[250px]" />
                <img src={img2} alt="" className="w-[250px]" />
                <img src={img3} alt="" className="w-[250px]" />
                <img src={img4} alt="" className="w-[250px]"  />

            </Marquee>
            
        </div>

        </>
    );
};

export default Companis;