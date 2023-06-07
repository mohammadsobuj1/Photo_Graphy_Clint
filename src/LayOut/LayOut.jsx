import React from 'react';
import Home from '../Home/Home/Home';
import { Outlet } from 'react-router-dom';
import NavBar from '../Home/NavBar/NavBar';
import Footer from '../Pages/Footer/Footer';

const LayOut = () => {
    return (
        <div>
            <NavBar />
            
            <Outlet />
            <Footer />
        </div>
    );
};

export default LayOut;