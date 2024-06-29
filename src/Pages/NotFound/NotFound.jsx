//import React from 'react';
import Navbar from '../../SharedComponent/NavBar/NavBar'
import Footer from '../../SharedComponent/Footer/Footer'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex flex-col justify-center items-center my-10'>
                <img src="https://t4.ftcdn.net/jpg/03/88/63/83/360_F_388638369_wSBADhKfhiTx6Q5Pz1xfdpy6zotku1Sg.jpg" alt="" />
                <Link to='/'>
                <button className='btn btn-primary mt-5'>Visite Home Page</button>
                </Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;