import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();

  try {
    const user = await User.findById(id);
    if (!user) {
      return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });
    }
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error fetching user' }), { status: 500 });
  }
}
