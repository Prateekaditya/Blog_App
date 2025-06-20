'use client'

import useSWR from 'swr'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { AiOutlinePlusSquare } from "react-icons/ai";
import { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { MdDelete } from "react-icons/md";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open)
  }

  const { data: session, status } = useSession()
  const router = useRouter()
  const fetcher = (url) => fetch(url).then((r) => r.json())

  const swrKey = session?.user?.name 
    ? `/api/posts?username=${session.user.name}` 
    : null

  const { data, mutate, error, isLoading } = useSWR(swrKey, fetcher)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!session?.user?.name) {
      console.error('No session data available')
      return
    }

    const title = e.target[0].value
    const desc = e.target[1].value
    const img = e.target[2].value
    const content = e.target[3].value

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          userName: session.user.name
        })
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      console.log('Post created:', result)
      
      mutate()
      e.target.reset()
      setOpen(false) // close modal after submit
    } catch (error) {
      console.error('Error creating post:', error)
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      console.log('Post deleted successfully')
      mutate()
    } catch (error) {
      console.error('Error deleting post:', error)
    }
  }

  if (status === "loading") return <p>Loading session...</p>
  if (status === "unauthenticated") {
    router.push("/dashboard/login")
    return null
  }

  return (
    <div className='flex gap-[100px] relative'>
      <div className='flex-1'>
        {isLoading ? (
          <p>Loading posts...</p>
        ) : error ? (
          <p>Error loading posts: {error.message}</p>
        ) : data && data.length > 0 ? (
          data.map((post, index) => (
            <div className='flex flex-col md:flex md:flex-row md:items-center gap-3 md:justify-between mt-30 md:mt-[50px] mb-[50px]' key={post._id || index}>
              <div className='md:w-[200px] md:h-[200px]'>
                <Image className='object-cover' src={post.img} alt="" width={200} height={100} />
              </div>
              <h2 className='text-xl font-semibold md:font-normal md:text-[15px]'>{post.title}</h2>
              <span 
                className='cursor-pointer text-red-500 hover:text-red-700' 
                onClick={() => handleDelete(post._id)}
              >
                <MdDelete/>
              </span>
            </div>
          ))
        ) : (
          <p>No posts found</p>
        )}
      </div>

      {/* Desktop Form */}
      <form className='hidden flex-1 md:flex flex-col gap-[20px]' onSubmit={handleSubmit}>
        <h1>Add New Post</h1>
        <input className='p-[10px] bg-transparent border-[2px] border-solid rounded-xl text-[13px] font-bold border-[#bbb]' type="text" placeholder='Title' required />
        <input className='p-[10px] bg-transparent border-[2px] border-solid rounded-xl text-[13px] font-bold border-[#bbb]' type="text" placeholder='Description' required />
        <input className='p-[10px] bg-transparent border-[2px] border-solid rounded-xl text-[13px] font-bold border-[#bbb]' type="text" placeholder='Image URL' required />
        <textarea className='p-[10px] bg-transparent border-[2px] border-solid rounded-xl text-[13px] font-bold border-[#bbb]' cols="30" rows="10" placeholder='Content' required></textarea>
        <button type="submit" className='cursor-pointer bg-[#ed6c4f] p-[5px] rounded-xl text-[15px] font-bold text-[#bbb]'>Send</button>
      </form>

      {/* Mobile Floating Button */}
      {!open && (
        <div className='md:hidden fixed bottom-5 right-2 z-20 flex items-center gap-2 p-3 bg-[#ed6c4f] text-white rounded-xl shadow-lg cursor-pointer' onClick={handleClick}>
          <h1 className='text-sm'>Add New Post</h1>
          <AiOutlinePlusSquare size={20} />
        </div>
      )}

      {/* Mobile Modal */}
      {open && (
        <div className="md:hidden fixed inset-0 z-30 flex items-center justify-center backdrop-blur-sm bg-black/40">
          <form className='bg-[#1a1a1a] p-4 rounded-xl w-[90%] flex flex-col gap-[15px]' onSubmit={handleSubmit}>
            <h1 className='flex items-center justify-between text-white text-sm'>
              Add New Post
              <span className='text-lg cursor-pointer' onClick={handleClick}><RxCross1 /></span>
            </h1>
            <input className='p-[5px] bg-transparent border border-[#bbb] rounded-md text-xs text-white' type="text" placeholder='Title' required />
            <input className='p-[5px] bg-transparent border border-[#bbb] rounded-md text-xs text-white' type="text" placeholder='Description' required />
            <input className='p-[5px] bg-transparent border border-[#bbb] rounded-md text-xs text-white' type="text" placeholder='Image URL' required />
            <textarea className='p-[5px] bg-transparent border border-[#bbb] rounded-md text-xs text-white' rows="4" placeholder='Content' required></textarea>
            <button type="submit" className='bg-[#ed6c4f] text-white text-sm font-bold rounded-md py-2'>Send</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default Dashboard
