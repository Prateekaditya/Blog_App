"use client";
import React, { useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(false);
    setLoading(true);
    
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    
    try {
      // Fix: Use absolute path or ensure correct relative path
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      });
      
      const data = await res.json();
      
      if (res.status === 201) {
        router.push("/dashboard/login?success=Account has been created");
      } else {
        setErr(data.message || "Something went wrong");
      }
      
    } catch (err) {
      console.error("Registration error:", err);
      setErr("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className='flex flex-col gap-[20px] items-center justify-center'>
      <form onSubmit={handleSubmit} className='w-[300px] flex flex-col gap-[20px]'>
        <input 
          type='text'
          placeholder='username'
          className='p-[20px] text-[#bbb] bg-transparent border-[2px] border-solid border-[#bbb] rounded-md text-xl font-bold'
          required
          disabled={loading}
        />
        <input 
          type='email'
          placeholder='email'
          className='p-[20px] text-[#bbb] bg-transparent border-[2px] border-solid border-[#bbb] rounded-md text-xl font-bold'
          required
          disabled={loading}
        />
        <input 
          type='password'
          placeholder='password'
          className='p-[20px] text-[#bbb] bg-transparent border-[2px] border-solid border-[#bbb] rounded-md text-xl font-bold'
          required
          disabled={loading}
        />
        <button 
          className='cursor-pointer p-[12px] bg-[#ed6c4f] border-none rounded-[5px] text-white disabled:opacity-50'
          disabled={loading}
        >
          {loading ? "Creating Account..." : "Register"}
        </button>
      </form>
      {err && <div className="text-red-500">{typeof err === 'string' ? err : "Something went wrong"}</div>}
      <Link href="/dashboard/login">Login with an existing account</Link>
    </div>
  );
};

export default Register;