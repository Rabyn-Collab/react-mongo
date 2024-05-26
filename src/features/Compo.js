import React, { useEffect } from 'react'
import { useApiHooks } from './hooks/apiHooks';

const Compo = () => {

  const [data, load] = useApiHooks('https://fakestoreapi.com/carts');


  return (
    <div>




    </div>
  )
}

export default Compo