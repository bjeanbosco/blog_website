import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='bg-blue-400 py-10 px-10 mt-auto'>



<div className="flex md:justify-center  justify-start md:gap-10 gap-2">
            <Link href="/" className='pr-5 hover:text-white'>Home</Link>
            <Link href="/about" className='pr-5 hover:text-white'>About Us</Link>
            <Link href="/posts" className='pr-5 hover:text-white'>Blog</Link>
            <Link href="/contact" className='pr-5 hover:text-white'>Contact</Link>
        </div>

        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1'>
     
        <div className="pt-4 flex md:gap-8 gap-5 md:py-0 py-9">
            <Link href="https://twitter.com/example" target="_blank" className='pr-3 hover:text-orange-600'><FaTwitter/></Link>
            <Link href="https://facebook.com/example" target="_blank" className='pr-3 hover:text-orange-600'><FaFacebook/></Link>
            <Link href="https://instagram.com/example" target="_blank" className='pr-3 hover:text-orange-600'><FaInstagram/></Link>
            <Link href="https://www.linkedin.com/in/bikorimanajeanbosco/?originalSubdomain=rw" target="_blank" className='hover:text-orange-600'><FaLinkedinIn/></Link>
        </div>
 
        <div></div>
    
      
      <div></div>

        <div className="footer-info">
            <p>Email: bjeanbosco48@gmail.com</p>
            <p>Phone: +25 (078) 321-4787</p>
            <p>Address: KK737 Main Street, Kigali, Rwanda</p>
        </div>
        </div>
        <div className="footer-copyright text-center">
            <p>&copy; 2024 Blog Website. All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
