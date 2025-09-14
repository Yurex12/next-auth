// middleware.ts
export { auth as middleware } from '@/auth';

export const config = {
  // Run middleware on all pages, except API routes, Next.js internals, and static files
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
