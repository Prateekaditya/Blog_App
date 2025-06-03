import connect from "@/utils/db"
import { NextResponse } from "next/server"
import postModel from "@/models/Post";

export const GET = async (request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");

  try {
    await connect();
    const posts = username
      ? await postModel.find({ userName: username })
      : await postModel.find();

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (e) {
    console.error("Database Error:", e);
    return new NextResponse(JSON.stringify({ error: "Database Error" }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export const POST = async (request) => {
  const body = await request.json();
  const newPost = new postModel(body);

  try {
    await connect();
    const savedPost = await newPost.save();
    
    // Return JSON instead of plain text
    return new NextResponse(JSON.stringify({ 
      message: "Post has been created", 
      post: savedPost 
    }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    console.error("Database Error:", e);
    return new NextResponse(JSON.stringify({ error: "Database Error" }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};