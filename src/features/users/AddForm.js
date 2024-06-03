import React from 'react'
import * as Yup from 'yup';
import {
  Card,
  Input,
  Button,
  Typography,
  Radio,
  Checkbox,
  Textarea,
  Select,
  Option
} from "@material-tailwind/react";
import { useFormik } from 'formik';
const AddForm = () => {

  const userSchema = Yup.object({
    username: Yup.string().required('Required'),
    email: Yup.string().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'lkjlkjlkj').required('mail is required'),

  });


  const { handleChange, handleSubmit, values, setFieldValue, errors, touched } = useFormik({
    initialValues: {
      username: '',
      email: '',
      gender: '',
      hobbies: [],
      msg: '',
      country: ''
    },
    onSubmit: (val) => {
      console.log(val);
    },
    validationSchema: userSchema
  });






  return (
    <div className='max-w-[400px] p-2'>
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Add Your Detail
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to Post.
        </Typography>
        <form onSubmit={handleSubmit} className="mt-8 mb-2 space-y-6 ">

          <div>
            <Input
              error={errors.username && touched.username}
              name='username'
              onChange={handleChange}
              value={values.username}
              label="Username" />
            {errors.username && touched.username && <p className='text-pink-400'>{errors.username}</p>}
          </div>

          <div>
            <Input
              name='email'
              onChange={handleChange}
              value={values.email}
              label="Email" />
            {errors.email && touched.email && <p className='text-pink-400'>{errors.email}</p>}
          </div>

          <div >
            <h1>Select Your Gender</h1>
            <div className="flex gap-10">
              {radData.map((rad, i) => {
                return <Radio
                  key={i}
                  name="gender"
                  onChange={handleChange}
                  label={rad.label}
                  value={rad.value}
                  color={rad.color}
                />
              })}


            </div>

            <div>
              <h1>Select Your Hobby</h1>
              <div className="flex w-max gap-4">
                {checkData.map((check, i) => {
                  return <Checkbox
                    key={i}
                    name="hobbies"
                    onChange={handleChange}
                    label={check.label}
                    value={check.value}
                    color={check.color}
                  />
                })}
              </div>
            </div>

            <div className="w-72 my-3">
              <Select name='country' onChange={(e) => setFieldValue('country', e)} label="Select Country">
                <Option value='nepal'>Nepal</Option>
                <Option value='india'>India</Option>
                <Option value='china'>China</Option>

              </Select>
            </div>


            <div className="w-96">
              <Textarea
                name='msg'
                onChange={handleChange}
                value={values.msg}
                label="Message" />
            </div>

            <div className="w-96 my-3">

              <h1>Please Select an Image</h1>
              <Input
                name='file'
                onChange={(e) => {
                  console.log(e.target.files);
                }}
                type='file'
              />
            </div>





          </div>




          <Button type='submit' className="mt-6" fullWidth>
            Submit
          </Button>

        </form>
      </Card>



    </div>
  )
}

export default AddForm



const radData = [
  {
    label: 'Male',
    color: 'red',
    value: 'male'
  },
  {
    label: 'Female',
    color: 'purple',
    value: 'female'
  }
];
const checkData = [
  {
    label: 'Dance',
    color: 'green',
    value: 'dance'
  },
  {
    label: 'Sing',
    color: 'yellow',
    value: 'sing'
  }
];