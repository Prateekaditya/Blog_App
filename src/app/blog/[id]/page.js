import Image from 'next/image'
import { notFound } from 'next/navigation';

async function getData(id){
const urlll=process.env.NEXTAUTH_URL || "http://localhost:3000"
  
    const res=await fetch(`${urlll}/api/posts/${id}`,{
      cache:"no-store",
    })
    if(!res.ok){
      return notFound();
    }
    return res.json();
  }
// const Id = async({params}) => {
   
// }
// ==
async function Id({params}){
    const pleaseWork = await params
    const data =await getData(pleaseWork.id)
    return (
      <div>
          <div className='flex'>
              <div className='flex-1 flex flex-col justify-between'>
                  <h1 className='text-4xl'>{data.title}</h1>
                  <p className='text-[15px] font-[300]'>{data.desc}</p>
                  <div className='flex items-center gap-[10px]'>
                      <Image className='object-cover rounded-full' src="https://images.pexels.com/photos/712520/pexels-photo-712520.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="jdsasa" width={40} height={40}/>
                      <span>{data.userName}</span>
                  </div>
              </div>
              <div className='flex-1 h-[300px] relative'>
                  <Image className='object-cover' src={data.img} alt="jdsasa" fill={true}/>
              </div>
          </div>
          <div >
              <p className='mt-[20px] text-[15px] font-[300] text-justify'>
              {data.content}
              </p>
          </div>
      </div>
    )
}

export default Id