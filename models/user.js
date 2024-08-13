import mongoose, { models, Schema } from "mongoose";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    secondName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    plan: {
      type: String,
      default: "",
    },
    amountPaid: {
      type: String,
      default: "",
    },
    withdrawableBalance: {
      type: Number,
      default: 0,
    },
    totalProfit: {
      type: Number,
      default: 0,
    },
    totalWithdrawals: {
      type: "String",
      default: "",
    },
    planStatus: {
      type: "String",
      default: "inactive",
    },
    hasUserActivatedPlan: {
      type: "String",
      default: "inactive",
    },
    hasUserPaid: {
      type: "String",
      default: "not paid",
    },
    withdrawalHistory: [
      {
        investment: { type: String, required: true },
        plan: { type: String, required: true },
        profitWithdrawn: { type: String, required: true },
        date: { type: String, required: true },
        time: { type: String, required: true },
      },
    ],
    lastProfitUpdate: {
      type: Date,
      default: null,
    },
    subscriptionStartDate: {
      type: Date,
      default: null,
    },
    subscriptionEndDate: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
