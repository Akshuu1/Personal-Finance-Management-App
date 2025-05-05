import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='p-[5vw] flex justify-between'>
        <div className='flex flex-col'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo adipisci distinctio alias, quaerat ipsa excepturi.
          </p>
        <button>Location</button>
        <input type="text" className='bg-black' />
        <button>Buy Properties</button>
        </div>
        <img src="src/assets/property 2.jpg" className='h-[30vw]' />
      </div>
    </div>
  )
}

export default Home