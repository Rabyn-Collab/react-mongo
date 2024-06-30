import React from 'react'
import { useSelector } from 'react-redux'
import UserDetailForm from './UserDetailForm';
import UserOrders from '../orders/UserOrders';

const UserProfile = () => {

  const { user } = useSelector((state) => state.userSlice);
  return (
    <div className='p-4 grid grid-cols-3 gap-7'>


      <UserDetailForm user={user} />
      <UserOrders user={user} />


    </div>
  )
}

export default UserProfile