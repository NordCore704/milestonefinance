// src/app/api/users/[id]/route.js
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function DELETE(req, { params }) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  const { id } = params;

  try {
    await connectMongoDB();
    await User.findByIdAndDelete(id);
    return new Response(JSON.stringify({ message: "User deleted successfully" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Failed to delete user", error }), {
      status: 500,
    });
  }
}
