import connect from "@/utils/db";
import { NextResponse } from "next/server";
import userModel from "@/models/User";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
    try {
        const { name, email, password } = await request.json();
        
        // Fix: Call the connect function
        await connect();
        
        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return new NextResponse("User already exists", {
                status: 400,
            });
        }
        
        const hashedPassword = await bcrypt.hash(password, 5);
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });
        
        await newUser.save();
        
        // Fix: Return proper response
        return NextResponse.json(
            { 
                message: "User has been created",
                user: {
                    id: newUser._id,
                    name: newUser.name,
                    email: newUser.email
                }
            },
            { status: 201 }
        );
        
    } catch (e) {
        console.error("Registration error:", e);
        return new NextResponse(e.message, {
            status: 500,
        });
    }
};