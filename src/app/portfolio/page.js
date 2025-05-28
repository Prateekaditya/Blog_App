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
        <h4 className='mt-20px mb-20px text-[25px]'>Choose Your gallery</h4>
        <div className='flex gap-[40px]'>
          {linkGallery.map((data,i)=>(
              <Link  key={i} className='border-[4px] border-solid border-[#bbb] rounded-[5px] w-[300px] h-[400px] relative hover:text-[#ed6c4f] duration-200 hover:scale-105' href={data.url} style={{
                backgroundImage:`url(${data.image})`,
                backgroundSize:"cover",
                backgroundPosition:"center",
              }}>
              <span className='absolute bottom-[10px] right-[10px] text-4xl font-bold'>{data.text}</span>
              </Link>
          ))}

          {/* <Link className='border-[4px] border-solid border-[#bbb] rounded-[5px] w-[300px] h-[400px] relative' href="/portfolio/websites">
            <span className='absolute bottom-[10px] right-[10px] text-4xl font-bold'>Websites</span>
          </Link>
          <Link className='border-[4px] border-solid border-[#bbb] rounded-[5px] w-[300px] h-[400px] relative' href="/portfolio/applications">
            <span className='absolute bottom-[10px] right-[10px] text-4xl font-bold'>Applications</span>
          </Link> */}
        </div>
      </div>
    </>
  )
}

export default Portfolio