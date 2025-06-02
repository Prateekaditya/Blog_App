"use client";
import {signIn} from"next-auth/react"
import React, { useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";
const Login = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(false);
    setLoading(true);
    
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials",{email,password})
    // try {
    //   // Fix: Use absolute path or ensure correct relative path
    //   const res = await fetch("/api/auth/register", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //       name,
    //       email,
    //       password
    //     })
    //   });
      
    //   const data = await res.json();
      
    //   if (res.status === 201) {
    //     router.push("/dashboard/login?success=Account has been created");
    //   } else {
    //     setErr(data.message || "Something went wrong");
    //   }
      
    // } catch (err) {
    //   console.error("Registration error:", err);
    //   setErr("Network error. Please try again.");
    // } finally {
    //   setLoading(false);
    // }
  };
  return (
    <div className="flex flex-col items-center justify-center gap-[30px]">
       <form onSubmit={handleSubmit} className='w-[300px] flex flex-col gap-[20px]'>
        <input 
          type='email'
          placeholder='email'
          className='p-[20px] text-[#bbb] bg-transparent border-[2px] border-solid border-[#bbb] rounded-md text-xl font-bold'
          required
          
        />
        <input 
          type='password'
          placeholder='password'
          className='p-[20px] text-[#bbb] bg-transparent border-[2px] border-solid border-[#bbb] rounded-md text-xl font-bold'
          required
          
        />
        <button 
          className='cursor-pointer p-[12px] bg-[#ed6c4f] border-none rounded-[5px] text-white'
          
        >
          Login
        </button>
      </form>
      <button className="cursor-pointer p-[12px] bg-[#ed6c4f] border-none rounded-[5px] text-white " onClick={()=>signIn("google")}>Login with Goggle</button>
    </div>
  )
}

export default Login