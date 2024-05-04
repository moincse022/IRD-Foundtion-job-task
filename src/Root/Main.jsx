import React from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Home from '../Page/Home';
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div className='p-6 overflow-hidden'>
            <Header/>
            <div className="flex">
                <Navbar/>
                <Home/>
                <Outlet/>
            </div>
        </div>
    );
};

export default Main;