import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

export async function PUT(request, { params }) {
  const { id } = params;
  const { withdrawableBalance, totalProfit, hasUserPaid, plan, amountPaid } = await request.json();

  await connectMongoDB();

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { withdrawableBalance, totalProfit, hasUserPaid, plan, amountPaid },
      { new: true, runValidators: true }
    );

    if (!user) {
      return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });
    }

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error updating user' }), { status: 500 });
  }
}
