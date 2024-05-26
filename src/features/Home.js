import React, { useState } from 'react'
import { useApiHooks } from './hooks/apiHooks'


const Home = () => {
  const [data, load] = useApiHooks('https://fakestoreapi.com/products');

  return (
    <div>




    </div>
  )
}

export default Home