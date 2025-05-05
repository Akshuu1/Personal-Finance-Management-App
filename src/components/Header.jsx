import React from 'react'

const Header = () => {
  return (
    <div>
        <div className='flex justify-around'>
        <p>GharLelo</p>
        <div className='flex'>
        <p>Location</p>
        <input type="text" className='bg-black' />
        </div>
        <p>About</p>
        <p>Contact</p>
        <p>Profile</p>
      </div>
    </div>
  )
}

export default Header