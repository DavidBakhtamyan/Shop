import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import './HomeWrapper.css'
const HomeWrapper = () => {
    return (
        <>
        <NavBar />
        <div className='HomeWrapperOutlet'>
            <Outlet />
        </div>
        <Footer />
        </>
    );
}

export default HomeWrapper;
