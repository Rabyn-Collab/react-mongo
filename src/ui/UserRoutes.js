import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router';

const UserRoutes = () => {
  const { user } = useSelector((state) => state.userSlice);

  return user === null ? <Outlet /> : <Navigate to='/' />;
}

export default UserRoutes