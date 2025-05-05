import React from 'react'

const FirstPage = () => {
  return (
    <div>
        <div className="flex justify-center items-center">
            <div className='absolute z-[1] flex gap-[3vw] flex-col bg-gray-200/40 p-[2vw] text-center radiusZ'>
                <p className=' text-[2.5vw]  '>Sign Up</p>
                <input type="text" className='border-b-[1px] w-[20vw] ' placeholder='Email/Phone Number' />
                <input type="text" className='border-b-[1px] w-[20vw]' placeholder='Password' />
                <button type="submit">SIGN UP</button>
                <div>
                <p>Already a User ?</p>
                <button type='submit'>Login</button>
                </div>
                

            </div>
            
        <img src="src/assets/property.jpg" className='w-[100vw] h-[100vh] blur-[5px] relative' />
        </div>
    </div>
  )
}

export default FirstPage