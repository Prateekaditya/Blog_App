"use client";
import React, { useState } from 'react'
import Link from "next/link"
import {useRouter}  from "next/navigation"
const Register = () => {
  const [err,setErr] =useState(false)
  const router =useRouter()
  const handleSubmit =async(e)=>{
    e.preventDefault()
    const name=e.target[0].value;
    const email=e.target[1].value;
    const password=e.target[2].value;
    try{
      const res = await fetch("api/auth/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,
          email,
          password
        })
      })
      res.status ===201 && router.push("/dashboard/login?success=Account has been created")
    }
    catch(err){
      setErr(true)
    }
    // console.log(name)
    // console.log(email)
    // console.log(password)
  }
  return (
    <div className='flex flex-col gap-[20px] items-center justify-center'>
      <form onSubmit={handleSubmit} className='w-[300px] flex flex-col gap-[20px]'>
        <input type='text' 
              placeholder='username'
              className='p-[20px] text-[#bbb] bg-transparent border-[2px] border-solid border-[#bbb] rounded-md text-xl font-bold'
              required
        />
        <input type='email' 
              placeholder='email'
              className='p-[20px] text-[#bbb] bg-transparent border-[2px] border-solid border-[#bbb] rounded-md text-xl font-bold'
              required
        />
        <input type='password' 
              placeholder='password'
              className='p-[20px] text-[#bbb] bg-transparent border-[2px] border-solid border-[#bbb] rounded-md text-xl font-bold'
              required
        />
        <button className='cursor-pointer p-[12px] bg-[#ed6c4f] border-none rounded-[5px]  text-white'>Register</button>
      </form>
      {err && "something went wrong"}
      <Link href="/dashboard/login">Login with an existing account</Link>
    </div>
  )
}

export default Register