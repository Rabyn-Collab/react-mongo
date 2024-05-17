import React from 'react'
import { products } from '../dummy/data';

const personName = 'lios';
const Home = () => {



  return (
    <div>

      <h1>Show Products</h1>

      {products.map((product) => {
        return <div key={product.id}>

        </div>
      })}





    </div>
  )
}

export default Home