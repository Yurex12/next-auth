import { auth } from '@/auth';
import { NextRequest, NextResponse } from 'next/server';

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  // Define protected routes
  const protectedRoutes = ['/', '/dashboard', '/users'];
  const isProtectedRoute = protectedRoutes.some(
    (route) =>
      nextUrl.pathname === route || nextUrl.pathname.startsWith(route + '/')
  );

  // If trying to access protected route without auth, redirect to signin
  if (isProtectedRoute && !isLoggedIn) {
    const callbackUrl = encodeURIComponent(nextUrl.pathname + nextUrl.search);
    return NextResponse.redirect(
      new URL(`/auth/signin?callbackUrl=${callbackUrl}`, nextUrl.origin)
    );
  }

  // Allow the request to continue
  return NextResponse.next();
});

export const config = {
  matcher: [
    '/',
    '/dashboard/:path*',
    '/users/:path*',
    // More specific matcher to avoid conflicts
    '/((?!api|_next/static|_next/image|favicon.ico|auth|.*\\.).*)',
  ],
};
