"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaHouse, FaPhone } from 'react-icons/fa6'
import { GrClose } from 'react-icons/gr'
import { FaSearch } from 'react-icons/fa'



const Header = () => {

 const [isOpen,setIsOpen] = useState(false)
 const [active,setActive] = useState("home")
 const handleClick = ()=>{
     setIsOpen(!isOpen)
    

 }
 
  
  return ( 
    <div>
 <nav className='w-full bg-black fixed top-0 right-0 left-0 z-10 block md:flex flex-row-reverse items-center justify-between  md:justify-center'>


<div className="relative md:left-0 left-1/3 md:top-0 top-3 flex items-center md:mb-0 mb-2 flex-shrink">
  <input type="text" placeholder="Search..." className="md:w-1/2 w-1/2 pl-10 pr-4 md:py-1  py-1 rounded-lg border focus:outline-none focus:border-blue-500"/>
  <button type="submit" className=" right-0 top-0 mt-2 mr-3 text-gray-600">
    <FaSearch className='text-orange-400 md:text-2xl text-xl'/>
  </button>
</div>

<div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 flex-grow'>
  <div>
    <div className='flex items-center justify-between py-3 md:py-5 md:block'>
      <Link href="/">
        <h1 className='text-blue-400'>
          <span className='text-red-400 text-2xl font-extrabold'>B</span>
          <span className='text-orange-600 text-xl font-extrabold'>J</span>  Tech.com</h1> 
      </Link>
      <div className='md:hidden'>
       <button className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-500 focus:border border-gray-500 border cursor-pointer'
        onClick={handleClick}
       >
         {isOpen?(<GrClose className='text-white/90 font-bold'/>):
         (<FaBars className='text-white/90'/>)}
       </button>
      </div>
    </div>
  </div>
  <div>
    <div>
         <ul className={`h-screen md:h-auto w-full items-center justify-center md:flex md:bg-black bg-blue-600 p-0 m-0${ !isOpen?
         'md:left-0 md:relative fixed -left-full': ' left-0'}`}>
           <li className='pb-6 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-puple-900 
           md:hover:text-white/80 md:hover:bg-transparent flex items-center'>
            <FaHouse className='mr-2 text-3xl'/>
            <Link href="/" onClick={()=>setActive('home')} 
            className={`${active == 'home' && 'bg-green-500 py-2 px-4 rounded-md'}`}>Home</Link>
           </li>
           <li className='pb-6 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-puple-900 
           md:hover:text-white/80 md:hover:bg-transparent'>
            <Link href="/about" onClick={()=>setActive('about')}
            className={`${active == 'about' && 'bg-green-500 py-2 px-4 rounded-md'}`}>About</Link>
           </li>
           <li className='pb-6 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-puple-900 
           md:hover:text-white/80 md:hover:bg-transparent'>
            <Link href="/posts" onClick={()=>setActive('posts')}
            className={`${active == 'posts' && 'bg-green-500 py-2 px-4 rounded-md'}`}>Posts</Link>
           </li>
           <li className='pb-6 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-puple-900 
           md:hover:text-white/80 md:hover:bg-transparent flex items-center'>
             <FaPhone className='mr-2 text-3xl'/>
            <Link href="/contact" onClick={()=>setActive('contact')}
            className={`${active == 'contact' && 'bg-green-500 py-2 px-4 rounded-md'}`}>Contact</Link>
           </li>
         </ul>
    </div>
  </div>

</div>



</nav>
    </div>
  
  )
}

export default Header
