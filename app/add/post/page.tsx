// components/Form.js
"use client"
import axios from 'axios';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
function Form() {

  const [id,setId] = useState('')
  const [title,setTitile] = useState('')
  const [description,setDescription] = useState('')
  const [Likes,setLikes] = useState('')
  const [date,setDate] = useState('')
  
  const router = useRouter()


  const handleSubmit = (event:any)=>{
      event.preventDefault()
   id == ""? alert("pleaase add id"): title == ""?alert("please title required!"): description == ""? "please fill out description required":
   Likes == ""? alert("Likes field required"): !date? alert("date musted filled"):
   (
      axios.post('http://localhost:5000/api/posts',{id,title,description,Likes,date}).then(res=>{
        try{
         if(res.status === 201){
            console.log("posted successful");
            router.push("/posts")
         }
        }
        catch(error){
           alert('err')
        }
      }))
  }


  return (
    <form onSubmit={handleSubmit} className="w-1/2 mx-auto p-6 bg-gray-100 rounded-lg shadow-md pt-24">
      <h1 className='text-center text-4xl font-bold'>Register</h1>
      <div className="mb-4">
        <label htmlFor="id" className="block text-gray-700 font-bold mb-2">ID</label>
        <input type="number" name="id" id="id" value={id} onChange={(e)=>setId(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
        <input type="text" name="title" id="title" value={title} onChange={(e)=>setTitile(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
        <textarea name="description" id="description" value={description} onChange={(e)=>setDescription(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="likes" className="block text-gray-700 font-bold mb-2">Likes</label>
        <input type="number" name="likes" id="likes" value={Likes} onChange={(e)=>setLikes(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Date</label>
        <input type="date" name="date" id="date" value={date} onChange={(e)=>setDate(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
      </div>
      <div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Submit</button>
      </div>
    </form>
  );
}

export default Form;
