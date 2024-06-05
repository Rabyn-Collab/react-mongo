import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';

const Home = () => {
  const { users } = useSelector((state) => state.userSlice);

  const nav = useNavigate();
  return (
    <div>


      {users.map((user) => {
        return <div key={user.id}>
          <h1>{user.email}</h1>
          <img src={user.imageReview} alt="" />
          <button onClick={() => nav(`/updateForm/${user.id}`, { state: user })}>Edit</button>
        </div>
      })}



    </div>
  )
}

export default Home