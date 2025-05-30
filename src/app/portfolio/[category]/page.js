
import Button from "@/components/Button/Button";
import Image from "next/image";
import { items } from "./data.js"
import { notFound } from "next/navigation";

const getData =(cat)=>{
    const data =items[cat]
    if(data){
        return data;
    }
    return notFound
}

const  Category = async({params}) => {
   const res = await params
   const data =getData(res.category)

  return (
    <div>
        <h1 className="text-[#ed6c4f]">{res.category}</h1>
    {/* flexrowrevsremorediv */}
        {data.map((item,index)=>(
        <div className={`flex gap-12 mt-12 mb-24 ${
            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
          }`} key={index}>
            <div className="flex-1 flex flex-col gap-[20px] justify-center">
                <h1>{item.title}</h1>
                <h4>{item.desc}</h4>
                <Button text="See More" url="#"/>
            </div>
            <div className="flex-1 h-[500px] relative">
                <Image src={item.image} fill={true} alt="nad" className="object-cover"/>
            </div>
        </div>))}
    </div>
  )
}

export default Category