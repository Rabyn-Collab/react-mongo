import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';

const Home = () => {
  const { users } = useSelector((state) => state.userSlice);


  return (
    <div>

      <div onClick={() => {
        document.getElementsByClassName('.root').innerHTML = 'red';
        console.log('hello');
      }} className="root">
        <h1>as;ldjsa;dlj;l</h1>
      </div>





    </div>
  )
}

export default Home