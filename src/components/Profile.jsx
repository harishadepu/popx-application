import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    const handleLogout = ()=>{
        localStorage.removeItem('user')
        navigate('/login')
        
    }
  return (
    <div className="min-h-screen flex justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white">
        {/* Header */}
        <h2 className="text-lg font-semibold px-6 py-4 border-b">
          Account Settings
        </h2>

        {/* Profile */}
        <div className="flex gap-4 items-center px-6 py-6">
          <img
            src="https://cdn.getmerlin.in/cms/pfp2_11cfcec183.webp"
            alt="profile"
            className="w-16 h-16 rounded-full"
          />

          <div>
            <h3 className="font-bold">{user.fullName}</h3>
            <p className="text-gray-500">{user.email}</p>
          </div>
        </div>
        <p className="px-6 pb-6 text-gray-500">Lorem ipsum Dolor sit amet, Consetetur sadipscing elitr, sed diam nonumy Eirmod Temper Invidunt Ut LaboreEt Dolore Magna Aliquyam Erat, sed Diam</p>

        {/* Logout Button */}
        <div className="px-6 pb-6">
          <button
            onClick={handleLogout}
            className="w-full cursor-pointer bg-red-500 text-white py-3 rounded-lg font-semibold"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile