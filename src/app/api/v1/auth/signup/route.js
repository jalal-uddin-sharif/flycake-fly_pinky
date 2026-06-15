import User from "@/app/models/User";
import connectDB from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectDB();
    const { fullName, email, password } = await req.json();
    const normalizedEmail = email?.trim().toLowerCase();
    if (!fullName || !email || !password) {
      return NextResponse.json(
        { message: "All field are required" },
        { status: 400 },
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "Email Already Exist" },
        { status: 400 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      fullName,
      email: normalizedEmail,
      password: hashedPassword,
    });

    return NextResponse.json(
      {
        success: true,
        message: "User Signup successful",

        user: {
          _id: newUser._id,
          name: newUser.fullName,
          email: newUser.email,
          role: newUser.role,
        },
      },
      { status: 201 },
    );

    return NextResponse.json({
      message: "connected dasboard",
    });
  } catch (error) {
    console.error("dashboard db check failed", error.message);
    return NextResponse.json({
      message: "Failed dashboard",
      error: error.message,
    });
  }
}
