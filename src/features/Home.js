import React, { useState } from 'react'
import { useGetUsersQuery } from './users/userApi'
import { Accordion, AccordionHeader } from '@material-tailwind/react';
import UserPost from './posts/UserPost';

const Home = () => {

  const { isError, data, isLoading, isSuccess } = useGetUsersQuery();
  const [opens, setOpens] = useState([]);

  const handleOpen = (index) => {
    if (opens.includes(index)) {
      const pos = opens.indexOf(index);
      opens.splice(pos, 1);
    } else {
      opens.push(index);
    }

    setOpens([...opens]);
  };

  if (isLoading) {
    return <h1>Loading....</h1>;
  }


  return (
    <div className='p-4'>

      {data.map((user, i) => {
        return <Accordion open={opens.includes(i)} key={user.id}>
          <AccordionHeader onClick={() => handleOpen(i)}>{user.username}</AccordionHeader>

          {opens.includes(i) && <UserPost user={user} />}


        </Accordion>;

      })}





    </div>
  )
}

export default Home