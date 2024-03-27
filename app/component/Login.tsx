// components/Form.js
"use client"
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function Login() {

  const router  = useRouter()
  
  const [email,setTitile] = useState('')
  const [new_password,setNewPassword] = useState('')

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, new_password });
      console.log(response.data);
        if(response.data !=0){
          router.push('/add/post')
        }
        else{
          alert("Invalid credentials")
        }
    } catch (error) {
     alert(error)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
     <h1 className='text-center text-3xl pb-2'>Login</h1>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">email</label>
        <input type="email" name="email" id="email" value={email} onChange={(e)=>setTitile(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="new_password" className="block text-gray-700 font-bold mb-2">password</label>
        <input type="password" name="new password" id="new password" value={new_password} onChange={(e)=>setNewPassword(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
      </div>
      
      <div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Login</button>
      </div>
      <div className='pt-5'>
        if don't have an account
         <Link href ="/register" className='pl-3 text-blue-900 hover:underline'>Sign up</Link>
         </div>
    </form>
  );
}

export default Login;
