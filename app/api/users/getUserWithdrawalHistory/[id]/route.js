import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

export async function GET(req, { params }) {
  const { id } = params;

  try {
    await connectMongoDB();

    const user = await User.findById(id);

    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify({ withdrawalHistory: user.withdrawalHistory }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Failed to fetch withdrawal history" }), {
      status: 500,
    });
  }
}