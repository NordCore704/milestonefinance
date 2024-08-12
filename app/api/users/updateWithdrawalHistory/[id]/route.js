import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

export async function POST(request, { params }) {
  const { id } = params;
  const { investment, plan, profitWithdrawn } = await request.json();

  try {
    await connectMongoDB();

    const user = await User.findById(id);
    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    // Record the withdrawal
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString(); // Format: MM/DD/YYYY
    const time = currentDate.toLocaleTimeString(); // Format: HH:MM:SS AM/PM

    const withdrawalRecord = {
      investment,
      plan,
      profitWithdrawn,
      date,
      time,
    };

    user.withdrawalHistory.push(withdrawalRecord);

    await user.save();

    return new Response(JSON.stringify({ message: "Withdrawal recorded" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Failed to record withdrawal" }), {
      status: 500,
    });
  }
}
