import React from 'react'
import { useParams } from 'react-router'
import { products } from '../dummy/data';

const DetailPage = () => {
  const { id } = useParams();
  const prod = products.find((product) => product.id === Number(id));
  console.log(prod);
  return (
    <div>

      <h1>Hello</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet aliquam odio velit illo deserunt expedita nihil nobis eos laborum dolores.</p>
    </div>
  )
}

export default DetailPage