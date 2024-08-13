import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

export async function POST(request) {
  const { userId } = await request.json(); // The user ID should be sent from the frontend

  try {
    console.log("Connecting to MongoDB...");
    await connectMongoDB();
    console.log("Connected to MongoDB");

    const user = await User.findById(userId);
    if (!user) {
      console.log("User not found");
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    // Update the hasUserActivatedWithdrawal field
    user.hasUserActivatedWithdrawal = 'yes';

    await user.save();
    console.log("User withdrawal activation updated successfully");

    return new Response(JSON.stringify({ message: "Withdrawal activated successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error updating withdrawal activation:", error);
    return new Response(JSON.stringify({ message: "Failed to activate withdrawal" }), {
      status: 500,
    });
  }
}