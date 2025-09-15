// middleware.ts
export { auth as middleware } from '@/auth';

export const config = {
  matcher: [
    '/',
    '/dashboard',
    '/users',
    '/((?!api|_next/static|_next/image|favicon.ico|auth).*)',
  ],
};
