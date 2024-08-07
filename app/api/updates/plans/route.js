import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

export async function POST(req) {
  try {
    const { userId, selectedPlan, amountPaid } = await req.json();

    if (!userId || !selectedPlan || !amountPaid) {
      return new Response(JSON.stringify({ message: "Invalid input" }), { status: 400 });
    }

    await connectMongoDB();

    const user = await User.findByIdAndUpdate(
      userId,
      { plan: selectedPlan, amountPaid },
      { new: true }
    );

    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: "Plan updated successfully", user }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Internal server error" }), { status: 500 });
  }
}
