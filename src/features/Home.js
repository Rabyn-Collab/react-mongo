import React from 'react'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>

      <h1> This is Home</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi suscipit voluptate nostrum voluptatum asperiores, nam id consequatur aspernatur! Debitis, mollitia totam consequatur similique id magni officia dignissimos, ducimus dolore veniam in minus quia nihil aperiam sequi tempore nostrum repellendus commodi deleniti vero et quidem! Sed culpa modi nostrum beatae odit?</p>

      <NavLink to='/' className='bg-red-600'>Go to Child1</NavLink>
      <NavLink to='/child2' className='bg-red-600'>Go to Child2</NavLink>

      <Outlet />
    </div>
  )
}

export default Home