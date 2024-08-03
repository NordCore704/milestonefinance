import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

export async function GET() {
  const session = await getServerSession(authOptions);

  console.log('Session:', session); // Debugging: Check session object

  if (!session || session.user.role !== "admin") {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    await connectMongoDB();

    const users = await User.find({ role: "user" }).exec();
   
    return new Response(JSON.stringify(users), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Failed to fetch users", error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
