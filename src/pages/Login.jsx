import React, { useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  
  const {login} = useAuth()

   const navigate = useNavigate()

  const [error, setError] = useState();

  const username = useRef();
  const password = useRef();
  const handelLogin = ()=>{
    
    const userData = {
      username: username.current.value,
      password: password.current.value,
    };
    const e = login(userData);
    if(!e){
      navigate("/")
    }
    setError(e)
  }

  return (
    <>
      <div className='mt-24 flex flex-col  gap-4 w-[400px] mx-auto'>
      <h1 className='text-center font-extrabold text-xl my-4'>Login</h1>
      <input ref={username} className='border-2 theme-bg-gray rounded px-2 py-px border-gray-500/30' type="text" name='username' placeholder='Username' />
      <input  ref={password} className='border-2 theme-bg-gray rounded px-2 py-px border-gray-500/30'  type="password" name='password' placeholder='password' />
      <button className='theme-bg-i rounded text-lg font-semibold p-1 ' onClick={handelLogin}>Login</button>
      <p className='w-max mx-auto  text-red-600'>{error}</p>
    </div>
    </>
  )
}

export default Login
