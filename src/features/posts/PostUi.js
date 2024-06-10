import { AccordionBody, Button } from '@material-tailwind/react'
import React from 'react'
import { useAddPostMutation, useGetUserPostQuery } from './postApi';

const PostUi = ({ user }) => {

  const { isLoading, isError, error, data, isFetching } = useGetUserPostQuery(user);

  const [addPost, { isLoading: load, data: dat, error: err }] = useAddPostMutation();



  if (isLoading) {
    return <h1>Loading....</h1>
  }




  return (


    <AccordionBody>

      <div className='flex justify-between mb-4[]'>
        <h1 className='text-lg text-gray-800'>{user.info}</h1>

        <Button loading={load} onClick={() => addPost(user)} className='bg-green-600 ' size='sm'>Add</Button>
      </div>


      {data?.map((post) => {
        return <div key={post.id} className='flex justify-between space-y-4 items-baseline'>
          <h1>{post.title}</h1>
          <Button size='sm' >Delete</Button>
        </div>
      })}

    </AccordionBody>



  )
}

export default PostUi