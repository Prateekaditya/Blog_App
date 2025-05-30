import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
  async function getData(){
    const res=await fetch('http://localhost:3000/api/posts',{
      cache:"no-store",
    })
    if(!res.ok){
      throw new Error ('Failed To fetch data')
    }
    return res.json();
  }
const Blog = async() => {
  const data =await getData()
  return (
   <>
      <div >
        {data.map((item,index)=>(
      <Link className='flex items-center gap-[50px] mb-[80px]' href={`/blog/${item._id}`} key={index}>
        <div className='flex-1/4'>
        <Image className='object-cover' src={item.img}
        height={250}
        width={400}
        alt='ahsg'
        />
        </div>
        <div className='flex-1/2' >
        <h1 className='mb-[10px] text-3xl'>{item.title}</h1>
        <p className='text-[15px] '>{item.desc}</p>
      </div>
      </Link>))}
      </div>
   </>
  )
}

export default Blog