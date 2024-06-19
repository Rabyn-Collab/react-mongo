import React from 'react'
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom/dist';
import { useFormik } from 'formik';
import { useUserLoginMutation } from './userApi';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addUser } from './userSlice';

const Login = () => {

  const [loginUser, { isLoading }] = useUserLoginMutation();
  const nav = useNavigate();
  const dispatch = useDispatch();

  const { handleChange, values, handleSubmit, handleReset } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (val) => {
      try {
        const response = await loginUser(val).unwrap();
        console.log(response);
        dispatch(addUser(response));
        toast.success('successfully login');
        nav(-1);
      } catch (err) {
        toast.error(err.data?.message);
      }
    }
  });


  return (
    <div className='p-4'>
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray" className='text-center'>
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-center">
          Nice to meet you! Enter your details to login.
        </Typography>
        <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
          <div className="mb-1 flex flex-col gap-6">

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              name='email'
              onChange={handleChange}
              value={values.email}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              name='password'
              onChange={handleChange}
              value={values.password}
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Button loading={isLoading} disabled={isLoading} type='submit' className="mt-6" fullWidth>
            Submit
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Dont have an account ?
            <button type='button' onClick={() => nav('/signup')}>
              Sign Up
            </button>

          </Typography>
        </form>
      </Card>
    </div>
  )
}

export default Login