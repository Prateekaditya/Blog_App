import Link from 'next/link'
import React from 'react'

const Button = ({text,url}) => {
  return (
        <Link href={url}>
            <button className='cursor-pointer p-[14px] bg-[#ed6c4f] border-none rounded-[5px] w-max text-white'>{text}</button>
        </Link>
    
  )
}

export default Button