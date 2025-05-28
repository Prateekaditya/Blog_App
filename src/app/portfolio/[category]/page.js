"use client";

import Button from "@/components/Button/Button";
import Image from "next/image";
import { useParams } from "next/navigation";

const  Category = () => {
    const params =useParams();
  return (
    <div>
        <h1 className="text-[#ed6c4f]">{params.category}</h1>
    {/* flexrowrevsremorediv */}
        <div className="flex gap-[50px] mt-[50px] mb-[100px]">
            <div className="flex-1 flex flex-col gap-[20px] justify-center">
                <h1>Test</h1>
                <h4>Desc</h4>
                <Button text="See More" url="#"/>
            </div>
            <div className="flex-1 h-[500px] relative">
                <Image src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" fill={true} alt="nad" className="object-cover"/>
            </div>
        </div>
    </div>
  )
}

export default Category