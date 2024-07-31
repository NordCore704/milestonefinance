import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";


export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });

  

  if (!token) {
    // Redirect to sign-in page
    const signInUrl = new URL('/auth/login', req.url);
    return NextResponse.redirect(signInUrl);
  }

  const role = token.role
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/adminDashboard/:path*'],
};