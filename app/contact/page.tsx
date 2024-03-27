// pages/Contact.js
"use client"
import axios from 'axios';
import React, { useState } from 'react';
const Contact = () => {



const [name , setName] = useState('')
const [email,setEmail] = useState('')
const [message,setMessage]  = useState('')


 const handleClick = ()=>{
  
 }
const handleSubmit = (event: any)=>{

  
  event.preventDefault();
  
  name == ""  && email == "" && message == ""? alert("fill out all fields"): 

  (axios.post('http://localhost:5000/api/contacts',{name,email,message}).then(res =>{
    
    try{
      if (res.status == 201){
       console.log(res.data);
       alert("Thank you for your message")
      }
      
    }
    catch(err){
      console.error("error while submitting ",err)
      alert("err")
    }

   
  })
)

}

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center contact">
      <div className="max-w-md w-full bg-white shadow-md rounded-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2"
              >Name</label>
              <input type="text" id="name" name="name" 
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
              value={name} onChange={(e)=>setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input type="email" id="email" name="email" 
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
              value={email} onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea id="message" name="message" rows={4}
               className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
               value={message} onChange={(e)=>setMessage(e.target.value)}
               ></textarea>
            </div>
            <div className="text-center">
              <button type="submit"
               className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
               onClick={handleClick}
               >Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
