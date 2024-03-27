// components/Form.js
"use client"
import axios from 'axios';
import React, { useState } from 'react';

function Form() {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [new_password,setNewPassword] = useState('')
  const [confirm_password,setconfirm_password] = useState('')


  const handleSubmit = (event:any)=>{
      event.preventDefault()
  
      name == ""? alert("name required"): email == ""? alert("email required"): new_password == ""? alert("password required"): 
      new_password !== confirm_password ? alert("password mismatch!"):(
        axios.post('http://localhost:5000/api/users',{name,email,new_password,confirm_password}).then(res=>{
          try{
           if(res.status === 201){
              console.log("posted successful");
              
           }
          }
          catch(error){
             alert('err')
          }
        })
      )

  }



  return (
    <div className='w-screen h-screen flex pt-20 register items-center'>
      <div className='w-full'>
    <form onSubmit={handleSubmit} className="w-1/2 mx-auto p-6 bg-gray-200 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="id" className="block text-gray-700 font-bold mb-2">Names</label>
        <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">email</label>
        <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="new_password" className="block text-gray-700 font-bold mb-2">New password</label>
        <input type="password" name="new password" id="new password" value={new_password} onChange={(e)=>setNewPassword(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Confirm Password</label>
        <input type="password" name=" confirm password" id="confirm password" value={confirm_password} onChange={(e)=>setconfirm_password(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
      </div>
      <div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Register</button>
      </div>
    </form>
    </div>
    </div>
  );
}

export default Form;
