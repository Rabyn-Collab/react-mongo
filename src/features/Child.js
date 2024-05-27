import React, { memo } from 'react'

const Child = () => {
  console.log('Child render');
  return (
    <div>


    </div>
  )
}

export default memo(Child)