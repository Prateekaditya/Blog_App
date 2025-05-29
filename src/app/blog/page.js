import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
   <>
    <div>
      <div >
      <Link className='flex items-center gap-[50px] mb-[50px]' href="/blog/testId">
        <div>
        <Image className='object-cover' src="https://images.pexels.com/photos/712520/pexels-photo-712520.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        height={250}
        width={450}
        alt='ahsg'
        />
        </div>
        <div >
        <h1 className='mb-[10px] text-3xl'>Title</h1>
        <p className='text-[15px] '>desc</p>
      </div>
      </Link>
      </div>
      
    </div>
   </>
  )
}

export default Blog