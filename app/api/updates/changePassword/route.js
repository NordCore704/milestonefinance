// app/api/resetPassword/route.js
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectMongoDB();

  const { email, newPassword } = await req.json();
  const user = await User.findOne({
    email, // Ensure token is still valid
  });
  console.log(email, user);
  

  if (!user) {
    return NextResponse.json({ message: "Invalid or expired email token, please attempt to login again with your email" }, { status: 400 });
  }

  // Hash the new password and update the user's password
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashedPassword;

  // Clear reset token and expiration

  await user.save();

  return NextResponse.json({ message: "Password reset successfully" }, { status: 200 });
}