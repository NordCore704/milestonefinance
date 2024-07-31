import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server"
import bcrypt from 'bcryptjs'

 export async function POST(req) {
    try {
        const {firstName, secondName, email, mobileNumber, password, role } = await req.json()
        const hashedPassword = await bcrypt.hash(password, 10)
        await connectMongoDB()
        await User.create({ firstName, secondName, email, mobileNumber, password: hashedPassword, role })

        console.log('FirstName', firstName);

        return NextResponse.json({ message: 'Admin registered'}, { status: 201 })
} catch (error) {
    return NextResponse.json(
        {
            message: 'An error occurred while registering the user.'
        },
        { status: 500 }
    )
}
 }