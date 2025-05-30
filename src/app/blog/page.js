import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
  async function getData(){
    const res=await fetch('https://jsonplaceholder.typicode.com/posts',{
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
        {data.map((item)=>(
      <Link className='flex items-center gap-[50px] mb-[80px]' href="/blog/testId" key={item.id}>
        <div className='flex-1/4'>
        <Image className='object-cover' src="https://images.pexels.com/photos/712520/pexels-photo-712520.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        height={250}
        width={400}
        alt='ahsg'
        />
        </div>
        <div className='flex-1/2' >
        <h1 className='mb-[10px] text-3xl'>{item.title}</h1>
        <p className='text-[15px] '>{item.body}</p>
      </div>
      </Link>))}
      </div>
   </>
  )
}

export default Blog