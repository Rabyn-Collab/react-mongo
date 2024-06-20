import React from 'react'
import { useGetProductsQuery } from '../shared/productApi'
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import Cara from './Cara';
import { useNavigate } from 'react-router';

const Home = () => {
  const { data, isLoading, error } = useGetProductsQuery();

  const nav = useNavigate();

  if (isLoading) {
    return <h1>Loading....</h1>;
  }



  return (
    <div className='px-5'>
      <Cara />
      <div className=' grid grid-cols-3 gap-5 items-start '>

        {data?.data.map(({ _id, product_name, product_detail, product_image }) => {
          return <Card className="mt-6 " key={_id}>
            <CardHeader color="blue-gray" className="relative ">
              <img
                className='w-full'
                src={product_image}
                alt="card-image"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {product_name}
              </Typography>
              <Typography>
                {product_detail}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button onClick={() => nav(`/product/${_id}`)}>Read More</Button>
            </CardFooter>
          </Card>
        })}



      </div>
    </div>
  )
}

export default Home