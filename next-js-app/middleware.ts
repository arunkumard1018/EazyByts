// middleware.js
import { NextRequest, NextResponse } from 'next/server';

// paths that do not require authentication
const publicPaths = ['/', '/login', '/register'];

export function middleware(req: NextRequest, resp: NextResponse) {
    const { cookies, url } = req;
    const currentPath = req.nextUrl.pathname;

    // Accessing JWt Token from HttpOnly Cookie
    const jwt = cookies.get('token');

    // if user already Logged in and trying to access login and Register
    if (jwt && currentPath === "/register") return NextResponse.redirect(new URL('/dashboard', req.url));
    if (jwt && currentPath === "/login") return NextResponse.redirect(new URL('/dashboard', req.url))

    // If the user is trying to access a public path, allow it
    if (publicPaths.includes(new URL(url).pathname)) {
        return NextResponse.next();
    }

    // If JWT token is present, allow the user to access the protected route
    if (jwt) return NextResponse.next();


    // If not authenticated, redirect to login page
    return NextResponse.redirect(new URL('/login', req.url));
}

export const config = {
    matcher: ['/dashboard/:path*', "/dashboard", '/login', '/register', '/protected-route-2'], // Add protected routes here '/:path*'
};
