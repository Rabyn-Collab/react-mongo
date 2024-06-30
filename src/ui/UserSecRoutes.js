import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router';

const UserSecRoutes = () => {
  const { user } = useSelector((state) => state.userSlice);

  return user === null ? <Navigate to='/' /> : <Outlet />;
}

export default UserSecRoutes