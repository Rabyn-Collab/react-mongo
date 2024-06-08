import React from 'react'

import { AccordionBody, Button } from '@material-tailwind/react';
import { useAddUserPostMutation, useGetUserPostQuery } from './postApi';

const UserPost = ({ user }) => {

  const { isError, data, isLoading, isSuccess } = useGetUserPostQuery(user);
  const [addPost] = useAddUserPostMutation();
  if (isLoading) {
    return <h1>Loading....</h1>
  }
  console.log(data);
  return (
    <div>

      <AccordionBody>
        <Button onClick={() => addPost(user)}>Add Some</Button>
        <br />
        We&apos;re not always in the position that we want to be at. We&apos;re constantly
        growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
        ourselves and actualize our dreams.
      </AccordionBody>


    </div>
  )
}

export default UserPost