import React from 'react'
import { useGetUsersQuery } from './users/userApi'

const Home = () => {

  const { isError, data, isLoading, isSuccess } = useGetUsersQuery();



  return (
    <div>Home</div>
  )
}

export default Home