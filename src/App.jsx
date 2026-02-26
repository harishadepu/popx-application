import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import Home from './components/Home'
import RegisterPage from './components/RegisterPage'
import Profile from './components/Profile'

const App = () => {
  const navigate  = useNavigate()
  const token = localStorage.getItem('user')
  useEffect(()=>{
    if(token){
      navigate('/profile')
    }
    else{
      navigate('/')
    }

  },[token])
  return (
    <div className='min-h-screen'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/profile' element={<Profile/>}/>
        
      </Routes>
    </div>
  )
}

export default App