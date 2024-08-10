// app/api/updateTotalProfit/route.js (or whatever your route name is)
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user"; // Adjust the import according to your file structure

export async function POST(request) {
  try {
    await connectMongoDB(); // Connect to the database

    // Fetch all users from the database
    const users = await User.find();

    // Loop through each user to calculate and update their totalProfit
    for (const user of users) {
      const { plan, amountPaid, totalProfit } = user;

      // If either the plan or amountPaid is empty, skip to the next user
      if (!plan || !amountPaid) continue;

      // Define the percentage return based on the user's plan
      let returnPercentage;
      switch (plan) {
        case "basic":
          returnPercentage = 0.025;
          break;
        case "standard":
          returnPercentage = 0.035;
          break;
        case "deluxe":
          returnPercentage = 0.05;
          break;
        case "premium":
          returnPercentage = 0.1;
          break;
        default:
          returnPercentage = 0;
          break;
      }

      // Calculate the daily profit
      const dailyProfit = amountPaid * returnPercentage;

      // Update the user's totalProfit in the database
      user.totalProfit += dailyProfit;
      await user.save();
    }

    return new Response(
      JSON.stringify({ message: "Total profits updated successfully." }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating total profits:", error);
    return new Response(
      JSON.stringify({ message: "Error updating total profits." }),
      { status: 500 }
    );
  }
}
