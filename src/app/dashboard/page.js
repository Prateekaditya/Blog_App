'use client'

import useSWR from 'swr'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Dashboard = () => {
  const { data: session, status } = useSession()
  const router = useRouter()
  const fetcher = (url) => fetch(url).then((r) => r.json())

  // Only create SWR key when we have session data
  const swrKey = session?.user?.name 
    ? `/api/posts?username=${session.user.name}` 
    : null

  const { data, mutate, error, isLoading } = useSWR(swrKey, fetcher)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Check if session exists
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
      
      // Re-fetch posts and clear form
      mutate()
      e.target.reset()
    } catch (error) {
      console.error('Error creating post:', error)
    }
  }

  // Fixed delete function
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      console.log('Post deleted successfully')
      // Re-fetch posts after deletion
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
    <div className='flex gap-[100px]'>
      <div className='flex-1'>
        {isLoading ? (
          <p>Loading posts...</p>
        ) : error ? (
          <p>Error loading posts: {error.message}</p>
        ) : data && data.length > 0 ? (
          data.map((post, index) => (
            <div className='flex items-center justify-between mt-[50px] mb-[50px]' key={post._id || index}>
              <div className='w-[200px] h-[200px]'>
                <Image className='object-cover' src={post.img} alt="" width={200} height={100} />
              </div>
              <h2>{post.title}</h2>
              <span 
                className='cursor-pointer text-red-500 hover:text-red-700' 
                onClick={() => handleDelete(post._id)}
              >
                X
              </span>
            </div>
          ))
        ) : (
          <p>No posts found</p>
        )}
      </div>

      <form className='flex-1 flex flex-col gap-[20px]' onSubmit={handleSubmit}>
        <h1>Add New Post</h1>
        <input className='p-[10px] bg-transparent border-[2px] border-solid rounded-xl text-[13px] font-bold border-[#bbb]' type="text" placeholder='Title' required />
        <input className='p-[10px] bg-transparent border-[2px] border-solid rounded-xl text-[13px] font-bold border-[#bbb]' type="text" placeholder='Description' required />
        <input className='p-[10px] bg-transparent border-[2px] border-solid rounded-xl text-[13px] font-bold border-[#bbb]' type="text" placeholder='Image URL' required />
        <textarea className='p-[10px] bg-transparent border-[2px] border-solid rounded-xl text-[13px] font-bold border-[#bbb]' cols="30" rows="10" placeholder='Content' required></textarea>
        <button type="submit" className='cursor-pointer bg-[#ed6c4f] p-[5px] rounded-xl text-[15px] font-bold text-[#bbb]'>Send</button>
      </form>
    </div>
  )
}

export default Dashboard