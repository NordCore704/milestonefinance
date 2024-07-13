import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth";
import bcrypt from 'bcryptjs'
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        Credentials({
            name: 'credentials',
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                const { email, password } = credentials

                try {
                    await connectMongoDB()
                   const user = await User.findOne({ email })

                   if (!user) {
                    return null
                   }

                  const matchPassword = await bcrypt.compare(password, user.password)

                  if (!matchPassword) {
                    return null
                  }

                  return user
                } catch (error) {
                    console.log('Error: ', error);
                }
            }
        })
    ],
    session: {
        strategy: 'jwt',
    },
    secret: process.env.AUTH_SECRET,
    pages: {
        signIn: '/dashboard'
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.firstName = user.firstName
            }
            return token; 
        },
        async session({ session, token }) {
            session.user.id = token.id;
            session.user.firstName = token.firstName
            return session;
        }
    },
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
