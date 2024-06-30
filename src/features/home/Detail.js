import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useGetProductByIdQuery } from '../shared/productApi';
import { Button, Card, Option, Select, Typography } from '@material-tailwind/react';
import { imageUrl } from '../../constants/constants';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { setToCart } from '../carts/cartSlice';

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
        <img className='w-full' src={`${imageUrl}${product.product_image}`} alt="" />
      </div>
      <div className="info space-y-3">
        <h1>{product.product_name}</h1>
        <p>{product.product_detail}</p>
        <p>Rs.{product.product_price}</p>
      </div>

      {product && <AddCart product={product} />}




    </div>
  )
}

export default Detail








export const AddCart = ({ product }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { carts } = useSelector((state) => state.cartSlice);
  const { user } = useSelector((state) => state.userSlice);
  const isExist = carts.find((cart) => cart._id === product._id);

  const formik = useFormik({
    initialValues: {
      qty: isExist?.qty || 1
    }
  });




  const handleSubmit = () => {
    dispatch(setToCart({ ...product, qty: Number(formik.values.qty) }));
    nav('/carts');
  }

  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>

            <th

              className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
            >
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                Product Name
              </Typography>
            </th>
            <th

              className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
            >
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                {product.product_name}
              </Typography>
            </th>

          </tr>

          <tr>

            <th

              className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
            >
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                Qty
              </Typography>
            </th>
            <th

              className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
            >
              <div>

                <select defaultValue={formik.values.qty} name="qty" id="" onChange={(e) => formik.setFieldValue('qty', e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((c) => {
                    return <option key={c + 1} value={c + 1}>{c + 1}</option>
                  })}
                </select>
              </div>
            </th>

          </tr>

        </thead>



      </table>
      <div className='flex justify-center pt-7'>
        <Button disabled={user?.isAdmin || !user} onClick={handleSubmit}>Add To Cart</Button>
      </div>
    </Card>
  )
}