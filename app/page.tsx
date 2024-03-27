"use client"
import Image from "next/image"
import { useState } from "react"
import { BiCalendar } from "react-icons/bi"
import { FaHeart } from "react-icons/fa6"
import axios from "axios"
const Home = ()=>{

  interface Post {
    title: string,
    description: string
    id: number,
    Likes: number,
    date: string
 }
 
  
 const [posts, setPosts] = useState<Post[]>([]);

 axios.get("http://localhost:5000/api/posts").then(res=>{
   setPosts(res.data)
 })
  return(
    <div className="md:py-20 pt-28">
     <header className="hero flex flex-col items-center">
    <h1 className="text-3xl pb-3 font-bold text-blue-800">Welcome to our Programming Blog</h1>
    <p className=" text-justify md:text-xl md:p-0 px-5">
      Stay up-to-date with the latest programming tutorials, tips, and tricks.<span className="md:block">
    </span>resolve any error that comes in your codes with other rest world best and expert programmers.</p>
  </header>

<div className="py-5">
 
  <h3 className="text-center bg-orange-300 max-w-md mx-auto my-6 py-2 text-gray-600 text-2xl">latest posts about different topics</h3>
  <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
    {posts.filter(item=>item.id <= 6).map((post,i)=>{
      return <div key={i} className="max-w-2xl  bg-white/90 rounded-2xl shadow-2xl overflow-hidden p-10">
        <h1 className="py-5 px-5 text-2xl text-center font-bold">{post.title}</h1>
        <p className="px-7">{post.description}</p>
        <div className="flex justify-around pt-8">

          <div className="flex items-center">
          <FaHeart className="cursor-pointer text-red-600 text-xl"/>
          <p className="pl-2">{post.Likes}</p>
          </div>
         <div className="flex items-center">
          <span className="pr-3">posted</span>
         <BiCalendar/>
         <p className="pl-2">{new Date(post.date).toLocaleString("us",{year: "numeric",month: 'long',day: "numeric"})}</p>
         </div>
          </div>
      
      </div>
    })}
  </div>
</div>


  <div className="grid lg:grid-cols-3 md:grid-cols-2">

  

  <div className="max-w-md mx-auto bg-white/90 rounded-xl shadow-md overflow-hidden">
  <div className="md:flex">
    <div className="md:flex-shrink-0">
      <Image className="h-48 w-full object-cover md:w-48 transition duration-300 ease-in-out transform hover:scale-110" 
      src="/programmer.jpg" alt="Image" width={787} height={300}/>
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Think Like programmer</div>
      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Card Description</a>
      <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula leo et convallis gravida.</p>
    </div>
  </div>
</div>

<div className="max-w-md mx-auto bg-white/90 rounded-xl shadow-md overflow-hidden">
 <div className="md:flex">
   <div className="md:flex-shrink-0">
   <Image className="h-48 w-full object-cover md:w-48 transition duration-300 ease-in-out transform hover:scale-110"
    src="/group.jpg" alt="Image" width={787} height={300}/>
   </div>
   <div className="p-8">
       <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Help one another</div>
       <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Card Description</a>
      <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula leo et convallis gravida.</p>
   </div>
 </div>
</div>


<div className="max-w-md mx-auto bg-white/90 rounded-xl shadow-md overflow-hidden">
 <div className="md:flex">
   <div className="md:flex-shrink-0">
   <Image className="h-48 w-full object-cover md:w-48 transition duration-300 ease-in-out transform hover:scale-110" 
   src="/LearnMore.webp" alt="Image" width={787} height={300}/>
   </div>
   <div className="p-8">
       <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Learn More and More </div>
       <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Card Description</a>
      <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula leo et convallis gravida.</p>
   </div>
 </div>
</div>

  </div>
    </div>
  )
}

export default Home