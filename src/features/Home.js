import React, { useMemo, useState } from 'react'
import Child from './Child'

const Home = () => {

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const countShow = useMemo(() => {
    console.log('hello see');

    return count * 5;
  }, [count])

  const handleCount = () => {
    setCount(count + 1);
  }



  const handleCount1 = () => {

    setCount1(count1 + 1);
  }


  return (
    <div>
      <h1>{countShow}</h1>
      <h1>{count}</h1>
      <button onClick={handleCount}>Click To Incre count</button>

      <h1>{count1}</h1>

      <button onClick={handleCount1}>Click To Incre count1</button>

      {/* <Child /> */}

    </div>
  )
}

export default Home