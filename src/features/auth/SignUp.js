import React from 'react'
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom/dist';
import { useFormik } from 'formik';
import { useUserRegisterMutation } from './userApi';
import { toast } from 'react-toastify';

const SignUp = () => {
  const [registerUser, { isLoading }] = useUserRegisterMutation();

  const nav = useNavigate();

  const { handleChange, values, handleSubmit, handleReset } = useFormik({
    initialValues: {
      email: '',
      password: '',
      username: ''
    },
    onSubmit: async (val) => {
      try {
        const response = await registerUser(val).unwrap();
        toast.success('successfully register');
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
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-center">
          Nice to meet you! Enter your details to Register.
        </Typography>
        <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
          <div className="mb-1 flex flex-col gap-6">

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              name='username'
              onChange={handleChange}
              value={values.username}
              size="lg"
              placeholder="username"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

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
            Already have an account ?
            <button type='button' onClick={() => nav(-1)}>
              Login
            </button>

          </Typography>
        </form>
      </Card>
    </div>
  )
}

export default SignUp