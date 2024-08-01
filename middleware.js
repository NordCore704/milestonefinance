import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Log token and request path for debugging
  console.log('Middleware: Token:', token);
  console.log('Middleware: Pathname:', pathname);

  // Define public and protected routes
  const publicRoutes = ['/auth/login', '/admin/login'];
  const adminRoutes = [ '/adminDashboard/:path*'];

  // Allow access to public routes without token
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Check if the user is trying to access admin routes
  const isAccessingAdmin = adminRoutes.some(route => pathname.startsWith(route));

  // If accessing admin routes, ensure the user is an admin
  if (isAccessingAdmin) {
    if (!token || token.role !== 'admin') {
      // Redirect non-admin users to a suitable page, like the login page
      const loginUrl = new URL('/auth/login', req.url);
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next(); // Allow access to admin if user is an admin
  }

  // If accessing non-admin routes, allow any authenticated user
  if (token) {
    return NextResponse.next();
  }

  // For all other cases, redirect to login if not authenticated
  const loginUrl = new URL('/auth/login', req.url);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ['/adminDashboard/:path*', '/dashboard/:path*',],
};
