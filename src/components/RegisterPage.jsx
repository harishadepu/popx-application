import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
    const navigate = useNavigate()
  const [submitData, setSubmitData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    choice: 'Yes',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setSubmitData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
  e.preventDefault()
  try {
    // Check if all fields are filled
    const { fullName, phone, email, password, company, choice } = submitData

    if (!fullName || !phone || !email || !password || !company || !choice) {
      alert('Please fill in all fields before submitting.')
      return
    }

    // Save to localStorage
    localStorage.setItem('user', JSON.stringify(submitData))
    console.log('Saved:', submitData)
    alert('Successfully Registered!')
    navigate('/login')
  } catch (error) {
    console.error('Error saving to localStorage:', error)
    alert('Something went wrong while saving your data.')
  }
}

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <form 
        onSubmit={handleSubmit} 
        className='flex flex-col w-[310px] h-150 border border-gray-300 shadow-lg py-4 px-3 justify-between md:w-[360px]'
      >
        <div className='flex flex-col justify-center items-right gap-4'>
          <h1 className='text-3xl font-bold text-gray-700'>
            Create your <br/> PopX account
          </h1>

          <div className="relative">
            <label className="text-sm text-violet-500 block mb-1 absolute -top-2 left-3 bg-gray-100 px-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={submitData.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
              className="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none"
            />
          </div>


          <div className="relative">
            <label className="text-sm text-violet-500 block mb-1 absolute -top-2 left-3 bg-gray-100 px-1">
              Phone number
            </label>
            <input
              type="number"
              name="phone"
              value={submitData.phone}
              onChange={handleChange}
              placeholder="Enter mobile number"
              className="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none"
            />
          </div>


          <div className="relative">
            <label className="text-sm text-violet-500 block mb-1 absolute -top-2 left-3 bg-gray-100 px-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={submitData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none"
            />
          </div>


          <div className="relative">
            <label className="text-sm text-violet-500 block mb-1 absolute -top-2 left-3 bg-gray-100 px-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={submitData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none"
            />
          </div>


          <div className="relative">
            <label className="text-sm text-violet-500 block mb-1 absolute -top-2 left-3 bg-gray-100 px-1">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              value={submitData.company}
              onChange={handleChange}
              placeholder="Enter company name"
              className="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none"
            />
          </div>

          <p className='text-gray-700'>Are you an Agency?</p>
          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-1'>
              <input 
                id='yes' 
                type="radio" 
                name="choice" 
                value="Yes" 
                checked={submitData.choice === 'Yes'} 
                onChange={handleChange} 
              />
              <label htmlFor="yes">Yes</label>
            </div>
            <div className='flex items-center gap-1'>
              <input 
                id='no' 
                type="radio" 
                name="choice" 
                value="No" 
                checked={submitData.choice === 'No'} 
                onChange={handleChange} 
              />
              <label htmlFor="no">No</label>
            </div>
          </div>
        </div>

        <button 
          type="submit" 
          className='text-white bg-blue-800 py-3 rounded font-semibold hover:bg-blue-900'
        >
          Create Account
        </button>
      </form>
    </div>
  )
}

export default RegisterPage