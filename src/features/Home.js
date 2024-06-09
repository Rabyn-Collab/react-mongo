import React, { useState } from 'react'
import { useGetUsersQuery } from './users/userApi'
import { Accordion, AccordionHeader } from '@material-tailwind/react';
import PostUi from './posts/PostUi';

const Home = () => {

  // const nios = [11, 22, 44, 55];
  // nios.splice(0, 1);

  // console.log(nios);

  const { isLoading, isError, error, data } = useGetUsersQuery();

  const [opens, setOpens] = useState([0]);

  const handleClick = (index) => {
    if (opens.includes(index)) {
      const pos = opens.indexOf(index);

      opens.splice(pos, 1);
    } else {
      opens.push(index);
    }


    setOpens([...opens]);

  }


  if (isLoading) {
    return <h1>Loading....</h1>
  }



  return (
    <div className='p-4 max-w-[400px]'>
      {data.map((user, i) => {
        return <Accordion open={opens.includes(i)} key={user.id}>
          <AccordionHeader onClick={() => handleClick(i)} >{user.username}</AccordionHeader>

          {opens.includes(i) && <PostUi user={user} />}

        </Accordion>;
      })}

    </div>
  )
}

export default Home