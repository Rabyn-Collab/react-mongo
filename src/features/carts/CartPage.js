import { Button } from '@material-tailwind/react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { imageUrl } from '../../constants/constants';
import { setToCart } from './cartSlice';


const CartPage = () => {

  const { carts } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();
  const total = carts.reduce((a, b) => a + b.qty * b.product_price, 0);




  const handleSubmit = () => {

  }

  return (
    <div className='p-5'>
      {carts.length === 0 ? <h1>list is empty add some</h1> :
        <div>

          <div >
            {carts.map((cart) => {
              return <div className='grid grid-cols-4 gap-12' key={cart._id}>
                <img className='w-full h-36' src={`${imageUrl}${cart.product_image}`} alt="" />
                <div>
                  <select defaultValue={cart.qty} name="qty" id="" onChange={(e) => {

                    dispatch(setToCart({ ...cart, qty: Number(e.target.value) }));
                  }}>
                    {[...Array(cart.countInStock).keys()].map((c) => {
                      return <option key={c + 1} value={c + 1}>{c + 1}</option>
                    })}
                  </select>
                </div>
                <h1>Rs.{cart.product_price}</h1>
              </div>
            })}

          </div>

          <div className='flex justify-between'>
            <h1>Total</h1>
            <p>{total}</p>
          </div>
          <Button className='mt-10'>Place An Order</Button>
        </div>}

    </div>
  )
}

export default CartPage