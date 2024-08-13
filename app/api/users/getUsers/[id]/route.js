import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();

  try {
    const user = await User.findById(id);
    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }
    // Ensure totalProfit is treated as a number
    let totalProfit = parseFloat(user.totalProfit) || 0;
    const amountPaid = parseFloat(user.amountPaid) || 0;


    const currentDate = new Date();
    const lastUpdateDate = user.lastProfitUpdate
      ? new Date(user.lastProfitUpdate)
      : null;

    if (lastUpdateDate) {
      const daysDifference = Math.floor(
        (currentDate - lastUpdateDate) / (1000 * 60 * 60 * 24)
      );
      if (daysDifference > 0) {
        // Calculate the daily profit based on the plan
        const profitRates = {
          Basic: 0.025,
          Standard: 0.035,
          Premium: 0.05,
          Deluxe: 0.1,
        };

        const dailyProfit = amountPaid * (profitRates[user.plan] || 0);

        // Add profit for each day since the last update
        user.totalProfit += dailyProfit * daysDifference;
        console.log(dailyProfit, daysDifference);
        user.withdrawableBalance = parseFloat(dailyProfit * daysDifference) || 0

        

        // Update the last profit update date
        user.lastProfitUpdate = currentDate;
      }
    } else {
      // If lastProfitUpdate is null, initialize it
      user.lastProfitUpdate = currentDate;
      await user.save()
    }


    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error fetching user" }), {
      status: 500,
    });
  }
}
