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
    console.log("Connecting to MongoDB...");
    await connectMongoDB();
    console.log("Connected to MongoDB");

    const user = await User.findById(id);
    if (!user) {
      console.log("User not found");
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    console.log("User found:", user);

    // Validate date and time
    if (!isValidDate(date) || !isValidTime(time)) {
      console.log("Invalid date or time");
      return new Response(JSON.stringify({ message: "Invalid date or time" }), {
        status: 400,
      });
    }

    const withdrawalRecord = {
      investment,
      plan,
      profitWithdrawn,
      date,
      time,
    };

    console.log("Recording withdrawal:", withdrawalRecord);

    user.withdrawalHistory.push(withdrawalRecord);

    await user.save();
    console.log("Withdrawal recorded successfully");

    return new Response(JSON.stringify({ message: "Withdrawal recorded" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error recording withdrawal:", error);
    return new Response(JSON.stringify({ message: "Failed to record withdrawal" }), {
      status: 500,
    });
  }
}