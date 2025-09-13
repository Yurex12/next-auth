export { auth as middleware } from '@/auth';

export const config = {
  matcher: [
    '/((?!api|_next/static|signin|signup|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
