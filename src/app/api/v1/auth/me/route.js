import User from "@/app/models/User";
import connectDB from "@/lib/db";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken"

export async function GET(){
    await connectDB()
    
    const cookieStore = await cookies()
    const token = cookieStore.get("token")?.value;
    if(!token){
        return Response.json({user: null, error: "No token found"},{status: 401})
    }

    try{
        const decoded = await jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById({_id: decoded.userId}).select("-password")
        if(!user){
            return Response.json({user: null, error: "User not found"},{status: 404})
        }
        return Response.json({user},{status: 200})
    } catch(error){
        return Response.json({user: null, error: "Invalid token"}, {status: 401})
    }
}