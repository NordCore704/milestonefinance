import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

// Function to validate if a string is a valid ISO date
const isValidDate = (dateString) => {
  const regex = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD format
  return regex.test(dateString) && !isNaN(Date.parse(dateString));
};

// Function to validate if a string is a valid time in HH:MM:SS format
const isValidTime = (timeString) => {
  const regex = /^\d{2}:\d{2}:\d{2}$/; // HH:MM:SS format
  return regex.test(timeString);
};

export async function POST(request, { params }) {
  const { id } = params;
  const { investment, plan, profitWithdrawn, date, time } = await request.json();

  try {
    await connectMongoDB();

    const user = await User.findById(id);
    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    // Validate date and time
    if (!isValidDate(date) || !isValidTime(time)) {
      return new Response(JSON.stringify({ message: "Invalid date or time" }), {
        status: 400,
      });
    }

    const withdrawalRecord = {
      investment,
      plan,
      profitWithdrawn,
      date, // Store the validated date
      time, // Store the validated time
    };

    user.withdrawalHistory.push(withdrawalRecord);

    // await user.save();

    return new Response(JSON.stringify({ message: "Withdrawal recorded" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Failed to record withdrawal" }), {
      status: 500,
    });
  }
}