import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      const savedData = JSON.parse(localStorage.getItem('user'))
      if (savedData) {
        if (
          loginData.email === savedData.email &&
          loginData.password === savedData.password
        ) {
          alert('Login successful!')
          navigate('/profile') // navigate only after success
        } else {
          alert('Invalid email or password')
        }
      } else {
        alert('No registered account found. Please sign up first.')
      }
    } catch (error) {
      console.error('Error reading localStorage:', error)
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col justify-center gap-4 w-[310px] h-150 border border-gray-300 shadow-lg py-4 px-3 md:w-[360px]'
      >
        <h1 className='text-3xl font-bold text-gray-700'>
          Sign in to your <br /> PopX account
        </h1>
        <p className='text-gray-500 mb-3'>
          Welcome back! Please enter your credentials.
        </p>

        {/* Email */}
        <div className="relative">
          <label className="text-sm text-violet-500 block mb-1 absolute -top-2 left-3 bg-gray-100 px-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            required
            className="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <label className="text-sm text-violet-500 block mb-1 absolute -top-2 left-3 bg-gray-100 px-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
            className="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className='text-white bg-blue-800 py-3 rounded font-semibold hover:bg-blue-900'
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginPage