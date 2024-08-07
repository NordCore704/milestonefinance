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
      type: String,
      default: "",
    },
    totalProfit: {
      type: 'String',
      default: ''
    },
    totalWithdrawals: {
      type: 'String',
      default: '',
    },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;