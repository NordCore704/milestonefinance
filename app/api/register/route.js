import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    const { firstName, secondName, email, mobileNumber, password, role } = await req.json();
    
    await connectMongoDB();

    // Check if a user with the same email already exists (userExists logic)
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: 'User with this email already exists.' },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    await User.create({
      firstName,
      secondName,
      email,
      mobileNumber,
      password: hashedPassword,
      role,
    });

    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });

  } catch (error) {
    console.error('Error during registration:', error);
    return NextResponse.json(
      { message: 'An error occurred while registering the user.' },
      { status: 500 }
    );
  }
}