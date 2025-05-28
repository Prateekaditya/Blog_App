import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='flex items-center justify-between h-[50px]'>
        <div>©PrateekAdityaCreations All rights Resrved</div>
        <div className='flex gap-5 text-[20px]'>
          <span className='hover:text-blue-600'><FaFacebook/></span>
          <span><FaInstagram/></span>
          <span><FaSquareXTwitter/></span>
          <span><FaYoutube/></span>
        </div>
    </div>
  )
}

export default Footer