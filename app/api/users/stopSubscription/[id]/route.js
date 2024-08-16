// app/api/users/stopSubscription/[id]/route.js
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

export async function POST(request, { params }) {
    const { id } = params;

    try {
        await connectMongoDB();

        // Find the user by ID
        const user = await User.findById(id);
        if (!user) {
            return new Response(JSON.stringify({ message: "User not found" }), {
                status: 404,
            });
        }

        // Stop the subscription
        user.planStatus = "inactive";
        user.plan = ''
        user.hasUserPaid = ''
        user.totalProfit = 0
        user.withdrawableBalance = ''
        user.hasUserActivatedPlan = "inactive" 
        user.subscriptionEndDate = new Date(); // Store the end date

        await user.save();

        return new Response(JSON.stringify({ message: "Subscription stopped" }), {
            status: 200,
        });
    } catch (error) {
        return new Response(
            JSON.stringify({ message: "Failed to stop subscription" }),
            {
                status: 500,
            }
        );
    }
}
