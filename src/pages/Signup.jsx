import React, { useRef } from 'react'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Signup() {

  const {signup} = useAuth()

  const username = useRef();
  const password = useRef();
  const email = useRef();
  
  const navigate = useNavigate()

  const handelSignup = () => {
    const userData = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    signup(userData);
    
    navigate("/login")

  }

  return (
    <>
      <div className='mt-24 flex flex-col  gap-4 w-[400px] mx-auto'>
        <h1 className='text-center font-extrabold text-xl my-4'>Signup</h1>
        <input ref={username} className='border-2 theme-bg-gray rounded px-2 py-px border-gray-500/30' type="text" name='username' placeholder='Username' />
        <input ref={email} className='border-2 theme-bg-gray rounded px-2 py-px border-gray-500/30' type="email" name='email' placeholder='user@email.com' />
        <input ref={password} className='border-2 theme-bg-gray rounded px-2 py-px border-gray-500/30' type="password" name='password' placeholder='password' />
        <button className='theme-bg-i rounded text-lg font-semibold p-1 ' onClick={handelSignup}>Signup</button>
      </div>
    </>
  )
}

export default Signup
