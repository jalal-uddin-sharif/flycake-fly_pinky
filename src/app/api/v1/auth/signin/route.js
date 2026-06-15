import User from "@/app/models/User";
import connectDB from "@/lib/db";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();
    const normalizedEmail = email?.trim().toLowerCase();
    if (!email || !password) {
      return NextResponse.json(
        { message: "All field are required" },
        { status: 400 },
      );
    }
    console.log(normalizedEmail);
    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 },
      );
    }

    const isMatch =await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { success: false, message: "Wrong Password" },
        { status: 401 },
      );
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    const response = NextResponse.json({
      success: true,
      message: "Login Successfule",
      user: {
        _id: user._id,
        name: user.fullName,
        email: user.email,
      },
    });
    response.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
    });
    return response;
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
