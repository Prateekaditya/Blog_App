import React from 'react'
import Link from 'next/link'
const Portfolio = () => {
  const linkGallery = [
        {
          url:"/portfolio/illustrations",
          text:"Illustrations",
          image:"/illustration.png", 
        },
        {
          url:"/portfolio/websites",
          text:"Websites",
          image:"/websites.jpg",
        },
        {
          url:"/portfolio/applications",
          text:"Applications",
          image:"/apps.jpg",
        },
    
  ];
  return (
    <>
      <div>
        <h4 className='mt-[10px] mb-[10px] text-[20px] md:text-[25px]'>Choose Your gallery</h4>
        <div className='flex gap-[20px] md:gap-[40px]'>
          {linkGallery.map((data,i)=>(
              <Link  key={i} className='border-[4px] z-10 border-solid border-[#bbb] rounded-[5px]  md:w-[300px] md:h-[400px] w-[100px] h-[200px] relative hover:text-[#ed6c4f] duration-200 hover:scale-105' href={data.url} style={{
                backgroundImage:`url(${data.image})`,
                backgroundSize:"cover",
                backgroundPosition:"center",
              }}>
              <span className='absolute z-10 bottom-1 right-1 md:bottom-[10px] md:right-[10px] text-[10px] md:text-4xl font-bold'>{data.text}</span>
              </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Portfolio