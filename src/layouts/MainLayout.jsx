import React from 'react'
import { Outlet } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '../components/Navbar'

// Outlet component means it can render the content of the children routes?

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <ToastContainer />
        </>
    )
}

export default MainLayout