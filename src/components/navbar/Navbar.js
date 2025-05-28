"use client";
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
    const links =[
        {
            id:1,
            title:"Home",
            url:"/",
        },
        {
            id:2,
            title:"Portfolio",
            url:"/portfolio",
        },
        {
            id:3,
            title:"Blog",
            url:"/blog",
        },
        {
            id:4,
            title:"About",
            url:"/about",
        },
        {
            id:5,
            title:"Contact",
            url:"/contact",
        },
        {
            id:6,
            title:"Dashboard",
            url:"/dashboard",
        }

    ];
  return (
    <>
        <div className='flex h-[100px] justify-between items-center'>
            <Link className='font-bold text-[22px]' href="/">Notiq </Link>
            <div className='flex gap-[20px] items-center'>
                {links.map(link=>(
                    <Link className='' key={link.id} href={link.url}>{link.title}</Link>
                ))}
                <button className='p-[8px] border-none bg-[#ed6c4f] text-white cursor-pointer rounded-[3px]' onClick={()=>{
                    console.log("Logged Out")
                }}>
                    Logout
                </button>
            </div>
        </div>
    </>
  )
}

export default Navbar