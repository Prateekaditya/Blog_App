import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button/Button'
export const metadata = {
  title: "Nitoq Contact",
  description: "This is a blog app",
};
const Contact = () => {
  return (
    <>
      <div>
      <h1 className='text-[60px] mb-[20px] text-center'>Let&apos;s Keep in Touch</h1>

        <div className='flex gap-[100px] items-center'>
          <div className='flex-1 h-[430px] relative'>
            <Image src="https://www.shutterstock.com/image-vector/get-touch-abstract-concept-vector-600nw-2253719001.jpg" fill={true} alt="contact us image" className='grayscale object-contain'/>
          </div>
          <form className='flex-1 flex flex-col gap-[12px]'>
            <input className='text-[15px] font-bold p-[10px] bg-transparent border-solid border-[1px] rounded-xl text-[#bbb]' type="text" placeholder='name' />
            <input className='text-[15px] font-bold p-[10px] bg-transparent border-solid border-[1px] rounded-xl text-[#bbb]' type="text" placeholder='email'/>
            <textarea className='text-[15px] font-bold p-[10px] bg-transparent border-solid border-[1px] rounded-xl text-[#bbb]' placeholder='message' cols="30" rows="10"></textarea>
            <Button url="#" text="send"/>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact