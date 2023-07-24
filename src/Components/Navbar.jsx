import React from 'react'
import netflix from "../assets/netflix.png";
const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full'>
        {/* <h1 className='text-red-700 text-6xl font cursor-auto'>NETFLIX</h1> */}
        <img className='h-[150px] w-[120px] my-[-50px] max-sm:w-14' src={netflix} alt="netflix" />
        <div className='text-white'>
            <button className='rounded px-6 py-2 border border-red-700 m-1 bg-black'>Log In</button>
            <button className='bg-red-700 px-6 py-2 rounded cursor-pointer m-1'>Sign Up</button>
        </div>
    
    </div>
  )
}

export default Navbar