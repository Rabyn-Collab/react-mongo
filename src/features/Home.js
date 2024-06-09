import React, { useState } from 'react'
import { useGetUsersQuery } from './users/userApi'
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react';

const Home = () => {
  const { isLoading, isError, error, data } = useGetUsersQuery();

  const [opens, setOpens] = useState([]);

  const handleClick = (index) => {
    if (opens.includes(index)) {
      const pos = opens.indexOf(index);
      opens.splice(pos, 1);
    } else {
      opens.push(index);
    }

    console.log(opens);

    setOpens([...opens]);

  }


  if (isLoading) {
    return <h1>Loading....</h1>
  }



  return (
    <div className='p-4'>
      {data.map((user, i) => {
        return <Accordion open={opens.includes(i)} key={user.id}>
          <AccordionHeader onClick={() => handleClick(i)} >{user.username}</AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at. We&apos;re constantly
            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
            ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>;
      })}

    </div>
  )
}

export default Home