import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth";
import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;

        try {
          await connectMongoDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const matchPassword = await bcrypt.compare(password, user.password);

          if (!matchPassword) {
            return null;
          }

          return user;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/dashboard",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.firstName = user.firstName;
        token.secondName = user.secondName
        token.role = user.role;
        token.plan = user.plan;
        token.amountPaid = user.amountPaid;
        token.withdrawableBalance = user.withdrawableBalance;
        token.totalProfit = user.totalProfit;
        token.totalWithdrawals = user.totalWithdrawals;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      session.user.firstName = token.firstName;
      session.user.secondName = token.secondName;
      session.user.plan = token.plan;
      session.user.amountPaid = token.amountPaid;
      session.user.withdrawableBalance = token.withdrawableBalance;
      session.user.totalProfit = token.totalProfit;
      session.user.totalWithdrawals = token.totalWithdrawals;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
