// app/api/users/startSubscription/[id]/route.js
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

export async function POST(request, { params }) {
  const { id } = params;
  const { plan } = await request.json();

  try {
    await connectMongoDB();

    // Find the user by ID
    const user = await User.findById(id);
    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    // Ensure totalProfit is treated as a number
    let totalProfit = parseFloat(user.totalProfit) || 0;
    const amountPaid = parseFloat(user.amountPaid) || 0;
    console.log(amountPaid);
    

    const currentDate = new Date();
    const lastUpdateDate = user.lastProfitUpdate
      ? new Date(user.lastProfitUpdate)
      : null;

      console.log(lastUpdateDate);
      

    if (lastUpdateDate) {
      const daysDifference = Math.floor(
        (currentDate - lastUpdateDate) / (1000 * 60 * 60 * 24)
      );

      console.log(daysDifference);
      

      if (daysDifference > 0) {
        // Calculate the daily profit based on the plan
        const profitRates = {
          Basic: 0.025,
          Standard: 0.035,
          Premium: 0.05,
          Deluxe: 0.1,
        };

        const dailyProfit = amountPaid * (profitRates[plan] || 0);

        // Add profit for each day since the last update
        totalProfit += dailyProfit * daysDifference;
      }
    } else {
      // If lastProfitUpdate is null, initialize it
      user.lastProfitUpdate = currentDate;
          // Save user to database
    await user.save();
    }

    // Update user fields
    user.totalProfit = totalProfit;
    user.planStatus = "active";
    user.plan = plan;
    user.subscriptionStartDate = currentDate;

    await user.save()

    



    // Log for debugging
    console.log(`User ${id} updated. Total Profit: ${user.totalProfit}`);

    return new Response(JSON.stringify({ message: "Subscription started" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error starting subscription:", error);
    return new Response(
      JSON.stringify({ message: "Failed to start subscription" }),
      {
        status: 500,
      }
    );
  }
}