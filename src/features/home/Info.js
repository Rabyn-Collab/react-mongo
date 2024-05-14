import React from 'react'

const Info = () => {
  return (
    <div className='h-[360px] w-[360px] bg-black text-white rounded-full border-[4px] flex justify-center items-center  border-green-700 mx-auto'>


      <div className="round flex flex-col ">
        <p>Name : Some Person</p>
        <p>Email: someperson@gmail.com</p>
        <p>Tel:9777777</p>
        <p>Age:90</p>
        <p>Experience:python, java, dart</p>
      </div>

    </div>
  )
}

export default Info