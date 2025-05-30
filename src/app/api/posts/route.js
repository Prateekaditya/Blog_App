import connect from "@/utils/db"
import { NextResponse } from "next/server"
import postModel from "@/models/Post";

export  const GET = async (request)=>{
    try{
        await connect();
        const posts=await postModel.find();
        return new NextResponse(posts,{status:200})
    }
    catch(e){
        return new NextResponse("Database Error",{status:500})
    }
}