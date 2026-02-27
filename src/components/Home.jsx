import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div className='min-h-screen flex items-end justify-center items-center mb-10'>
        <div className='flex flex-col items-right justify-end w-[310px] h-100 gap-3 border border-gray-400 shadow-lg px-4 py-3 pt-120 md:w-[400px]'>
            <h1 className='font-bold text-3xl text-gray-700'>Welcome to PopX</h1>
            <p className='text-gray-500 mb-3'>POPX is a fully managed and integrated MSP Platform that transforms operations, service and business
                 management functions with a fraction of the time and risk.</p>
            <button onClick={()=>{navigate('/register')}} className='w-full bg-blue-800 text-white font-semibold rounded py-2 hover:bg-blue-900'>Create Account</button>
            <button onClick={()=>{navigate('/login')}} className='w-full bg-purple-400 text-gray-700 font-semibold rounded py-2 hover:bg-purple-600'>Already Registered?Login</button>
        </div>
        
    </div>
  )
}

export default Home