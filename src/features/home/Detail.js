import React from 'react'
import { useParams } from 'react-router'
import { useGetProductByIdQuery } from '../shared/productApi';
import { Button, Card, Typography } from '@material-tailwind/react';

const Detail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductByIdQuery(id);


  if (isLoading) {
    return <h1>Loading....</h1>
  }
  const product = data?.data;
  return (
    <div className='grid grid-cols-3 p-4 items-center gap-10'>

      <div className="image">
        <img className='w-full' src={product.product_image} alt="" />
      </div>
      <div className="info space-y-3">
        <h1>{product.product_name}</h1>
        <p>{product.product_detail}</p>
        <p>Rs.{product.product_price}</p>
      </div>

      <AddCart />




    </div>
  )
}

export default Detail



const TABLE_ROWS = [
  {
    name: "Product Name",
    job: "Manager",

  },
  {
    name: "Qty",
    job: "Developer",

  },


];





export const AddCart = () => {

  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">

        <tbody>
          {TABLE_ROWS.map(({ name, job, date }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {job}
                  </Typography>
                </td>

              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <div className='flex justify-center'>
            <Button>Add To Cart</Button>
          </div>

        </tfoot>
      </table>
    </Card>
  )
}