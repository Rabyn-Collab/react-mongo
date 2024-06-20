import React from 'react'
import { useGetProductsQuery } from './shared/productApi'
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';

const Home = () => {
  const { data, isLoading, error } = useGetProductsQuery();

  if (isLoading) {
    return <h1>Loading....</h1>;
  }



  return (
    <div className='px-5 mt-[4%] grid grid-cols-4 gap-5 '>

      {data?.data.map(({ _id }) => {
        return <Card className="mt-6 w-96" key={_id}>
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              className='w-full'
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
      })}



    </div>
  )
}

export default Home