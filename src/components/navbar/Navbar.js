"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import { CiMenuBurger } from "react-icons/ci";
import { signOut, useSession } from "next-auth/react";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
    const [open,setOpen] =useState(false);
    const handleClick =()=>{
        setOpen(!open);
    }
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
    const session = useSession();
  return (
    <>
        <div className='flex h-[100px] justify-between items-center'>
            <Link className='font-bold text-[22px]' href="/">Notiq </Link>
            <div className='hidden lg:flex gap-[20px] items-center'>
                <DarkModeToggle/>
                {links.map(link=>(
                    <Link className='' key={link.id} href={link.url}>{link.title}</Link>
                ))}
                {session.status === "authenticated" && (
                <button className='p-[8px] border-none bg-[
#ed6c4f] text-white cursor-pointer rounded-[3px]' onClick={signOut}>
                    Logout
                </button>
                 )}
            </div>
            <div className='transition ease-in duration-200 flex gap-20 lg:hidden'>
                <DarkModeToggle/>
                { open ? (<div className='absolute z-40 flex flex-col backdrop-blur-md gap-5 h-screen  top-0 right-0 w-[30vh] bg-gray-500 p-4'>
                <span className='flex justify-end' onClick={handleClick}><RxCross1/></span>
                {links.map(link=>(
                    <Link className='' key={link.id} href={link.url}>{link.title}</Link>
                ))}
                {session.status === "authenticated" ? (
                <button className='flex absolute bottom-5   p-[8px] border-none bg-[
#ed6c4f] text-white cursor-pointer rounded-[3px]' onClick={signOut}>
                    Logout
                </button>
                 ): 
                 (
                    <Link href="/dashboard/login" className='flex absolute bottom-5   p-[8px] border-none bg-[
    #ed6c4f] text-white cursor-pointer rounded-[3px]'>
                        Login
                    </Link>
                     )
                 }
                </div>)  : (<button className='transition ease-in duration-200' onClick={handleClick}>
                <CiMenuBurger/>
                  </button>)  }
            </div>
        </div>
    </>
  )
}

export default Navbar