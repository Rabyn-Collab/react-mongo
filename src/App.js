import React from 'react'

const App = () => {


  const handleAlert = () => {
    alert('don\'t copy');
  }

  const eventCall = (e, msg) => {
    console.log(e);
    alert(msg);
  }



  return (
    <div className='p-4'>
      <button onClick={() => eventCall('hello jee')} className='bg-slate-600 text-white p-2 rounded' >Click Me</button>

      <p > <span onCopy={handleAlert}>Lorem </span> ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sunt voluptatum alias molestiae, repellendus ad? Alias culpa recusandae architecto natus.</p>
    </div>
  )
}

export default App