import React from 'react'
import Link from 'next/link'
const Portfolio = () => {
  return (
    <>
      <div>
        <h4 className='mt-20px mb-20px text-[60px]'>Choose Your gallery</h4>
        <div className='flex gap-[40px]'>
          <Link className='border-[4px] border-solid border-[#bbb] rounded-[5px] w-[300px] h-[300px] relative' href="/portfolio/illustraions">
            <span>Illustraions</span>
          </Link>
          <Link className='border-[4px] border-solid border-[#bbb] rounded-[5px] w-[300px] h-[300px] relative' href="/portfolio/websites">
            <span>Websites</span>
          </Link>
          <Link className='border-[4px] border-solid border-[#bbb] rounded-[5px] w-[300px] h-[300px] relative' href="/portfolio/applications">
            <span>Applications</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Portfolio