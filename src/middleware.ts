export { auth as middleware } from '@/auth';

// export const config = {
//   matcher: [
//     '/((?!api/auth|auth/signup|auth/signin|_next/static|_next/image|favicon.ico).*)',
//   ],
// };

export const config = {
  matcher: ['/dashboard'],
};
