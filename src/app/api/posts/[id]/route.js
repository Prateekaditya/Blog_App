import connect from "@/utils/db"
import { NextResponse } from "next/server"
import postModel from "@/models/Post";

export  const GET = async (request,{params})=>{
    try{
        await connect();
        const please =await params
        const { id } = please; 
        const post=await postModel.findById(id);
        return new NextResponse(JSON.stringify(post),{status:200})
    }
    catch(e){
        return new NextResponse("Database Error",{status:500})
    }
}
export  const DELETE = async (request,{params})=>{
    try{
        await connect();
        const please =await params
        const { id } = please; 
        const post=await postModel.findByIdAndDelete(id);
        return new NextResponse("Post has been deleted",{status:200})
    }
    catch(e){
        return new NextResponse("Database Error",{status:500})
    }
}