"use client";
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';


const DarkModeToggle = () => {
    const { toggle, mode } = useContext(ThemeContext);
  return (
    <div onClick={toggle} className='w-[42px] h-[24px] border-[1px] border-solid border-[#fd6b4b] flex justify-between rounded-4xl p-[2px] items-center text-[12px] relative cursor-pointer'>
        <div>🌙</div>
        <div>
        ☀️
        </div>
        <div  className='w-[15px] h-[15px] absolute rounded-full bg-[#ed6c4f]'
         style={
            mode ==="light" ? {left:"2px"} :{right:"2px"}
         }
        />
    </div>
  )
}

export default DarkModeToggle