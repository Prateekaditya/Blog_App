"use client";
import {signIn, useSession} from"next-auth/react"
import React, { useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";
const Login = () => {
  const session =useSession();
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(false);
    setLoading(true);
  
    const email = e.target[0].value;
    const password = e.target[1].value;
  
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false, // 🛠️ Important!
    });
  
    setLoading(false);
  
    if (res?.error) {
      setErr(res.error);
    } else {
      router.push("/dashboard");
    }
  };
  if(session.status==="loading"){
    return <p>loading</p>
  }
  if(session.status==="authenticated"){
    router?.push("/dashboard")
  }
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
      <Link href="/dashboard/register">Create a new account</Link>
      <button className="cursor-pointer p-[12px] bg-[#ed6c4f] border-none rounded-[5px] text-white " onClick={()=>signIn("google")}>Login with Goggle</button>
    </div>
  )
}

export default Login