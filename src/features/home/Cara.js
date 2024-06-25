import { Carousel } from '@material-tailwind/react'
import React from 'react'
import { useGetTopProductsQuery } from '../shared/productApi'
import { imageUrl } from '../../constants/constants';

const Cara = () => {
  const { data, isLoading, error, } = useGetTopProductsQuery();
  console.log(data);
  if (isLoading) {
    return <Carousel className="rounded-xl h-[300px] w-[70%] mx-auto mt-4 mb-6 animate-pulse" autoplay loop >
      <div className="grid  place-items-center rounded-lg bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-full w-60 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </div>
    </Carousel>
  }

  return (
    <>

      <Carousel className="rounded-xl h-[300px] w-[70%] mx-auto mt-4 mb-6" autoplay loop >

        {data?.data.map(({ _id, product_image }) => {
          return <img
            key={_id}
            src={`${imageUrl}${product_image}`}
            alt="image 1"
            className="h-full w-full object-cover"
          />;
        })}


      </Carousel>

    </>
  )
}

export default Cara