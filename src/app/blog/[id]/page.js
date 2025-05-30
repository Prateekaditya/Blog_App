import Image from 'next/image'
import { notFound } from 'next/navigation';

async function getData(id){
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
      cache:"no-store",
    })
    if(!res.ok){
      return notFound();
    }
    return res.json();
  }
// const Id = async({params}) => {
   
// }
async function Id({params}){
    const pleaseWork = await params
    const data =await getData(pleaseWork.id)
    return (
      <div>
          <div className='flex'>
              <div className='flex-1 flex flex-col justify-between'>
                  <h1 className='text-4xl'>{data.title}</h1>
                  <p className='text-[15px] font-[300]'>{data.body}</p>
                  <div className='flex items-center gap-[10px]'>
                      <Image className='object-cover rounded-full' src="https://images.pexels.com/photos/712520/pexels-photo-712520.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="jdsasa" width={40} height={40}/>
                      <span>John Doe</span>
                  </div>
              </div>
              <div className='flex-1 h-[300px] relative'>
                  <Image className='object-cover' src="https://images.pexels.com/photos/712520/pexels-photo-712520.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="jdsasa" fill={true}/>
              </div>
          </div>
          <div >
              <p className='mt-[20px] text-[15px] font-[300] text-justify'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo sapien nec tempus maximus. Nam imperdiet neque nec diam malesuada, a hendrerit risus iaculis. Fusce viverra dolor lectus, ac gravida neque dictum quis. Pellentesque ut ultricies tortor. Praesent malesuada interdum enim, quis viverra mi vulputate et. Duis fermentum ullamcorper est, nec varius ipsum efficitur a. Fusce luctus posuere ante, eget sodales neque cursus mattis. Nunc faucibus mi nec mauris cursus lobortis.
              <br/>
              <br/>
  Aenean mattis justo nec velit convallis dictum. Nullam porta nisi vitae mauris congue, at aliquam ante aliquam. Pellentesque auctor vehicula metus id maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed a mauris purus. Proin id urna porttitor, sollicitudin nisi vel, lacinia quam. Morbi nec ultricies mauris, sit amet commodo odio. Vivamus erat enim, dictum et metus sed, lacinia consectetur nunc. In faucibus leo vitae quam semper, ut porttitor
  <br/>
              <br/> nisi congue. Donec vitae quam feugiat, lacinia urna tristique, commodo velit. Nunc nec gravida urna. Ut nulla tortor, sodales ut nulla sit amet, aliquet pharetra ante. Nulla vel elit pellentesque, eleifend felis at, feugiat tortor. In hendrerit enim quis dui iaculis, eu laoreet eros ornare. Donec in eros sit amet ipsum ultrices fringilla.
              </p>
          </div>
      </div>
    )
}

export default Id