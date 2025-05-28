import Button from '@/components/Button/Button'
import Image from 'next/image'
const About = () => {
  return (
    <>
      <div className='flex flex-col'>
        <div className='w-full h-[220px] relative'> 
          <Image  className="object-cover grayscale" fill={true} src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3" alt="mainarea" />
          <div className='absolute bottom-[20px] left-[20px] bg-[#ed6c4f] rounded-2xl p-[10px]'>
            <h1 className='font-bold text-3xl'>Digital StoryTellers</h1>
            <h2 className='text-xl'>Handcrafted digital award winning Experinces</h2>
          </div>
        </div>
        <div className='flex flex-row gap-[100px]'>
          <div className='flex-1 flex flex-col gap-[20px] mt-[10px]'>
            <h2 className='text-4xl font-bold'>Who are we?</h2>
            <p className='text-[15px] font-[300] text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere rutrum purus, sit amet tempus ex. Nam feugiat nisi mauris. Curabitur a sem quis erat elementum dictum at id magna. Quisque ac 
              <br/>
              <br/>
              elit vitae lacus imperdiet luctus. Proin leo sem, eleifend a iaculis eget, egestas sed sem. Donec at ultricies neque. Etiam imperdiet pharetra metus ac ultrices. Pellentesque ac neque sapien. Sed quis velit quis diam tempor mattis. Mauris nulla lacus, semper a rhoncus et, facilisis in ante.
            </p>
          </div>
          <div className='flex-1 flex flex-col gap-[10px] mt-[10px]'>
            <h2 className='text-4xl font-bold'>What we do?</h2>
            <p className='text-[15px] font-[300] text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere rutrum purus, sit amet tempus ex. Nam feugiat nisi mauris. Curabitur a sem quis erat elementum dictum at id magna. Quisque ac elit vitae lacus imperdiet luctus.
            <br/>
              <br/>-Creative Illustraion
              <br/>
              <br/>-Dynamic Websites
              <br/>
              <br/>
              -Fast and Handy Mobile Apps
            </p>
            <Button url="/contact" text="contact us"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default About