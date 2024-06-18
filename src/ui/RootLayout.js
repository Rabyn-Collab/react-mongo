import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
const RootLayout = () => {
  return (
    <>
      <Header />

      <Outlet />

      <ToastContainer autoClose={1000} pauseOnHover={false} pauseOnFocusLoss={false} />


    </>
  )
}

export default RootLayout