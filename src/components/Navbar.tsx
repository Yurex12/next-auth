import Link from 'next/link';
import { auth } from '../../auth';
import { Button } from './ui/button';
import { logout } from '@/lib/auth';
import LogoutButton from './LogoutButton';
import LogoutButtonTranstition from './LogoutButtonTranstition';

export default async function Navbar() {
  const session = await auth();

  return (
    <nav className='bg-white shadow-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <div className='flex items-center'>
              <div className='h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-lg'>L</span>
              </div>
              <span className='ml-2 text-xl font-semibold text-gray-900'>
                Logo
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          {session?.user ? (
            <>
              <div className='ml-10 flex items-baseline space-x-4'>
                <Link
                  href='/home'
                  className='text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200'
                >
                  Home
                </Link>
                <Link
                  href='/about'
                  className='text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200'
                >
                  About
                </Link>
                <Link
                  href='/services'
                  className='text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200'
                >
                  Services
                </Link>
                <Link
                  href='/contact'
                  className='text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200'
                >
                  Contact
                </Link>
              </div>

              {/* <form action={logout}>
                <Button type='submit'>Signout</Button>
                <LogoutButton />
              </form> */}
              <LogoutButtonTranstition />
            </>
          ) : (
            <>
              <Link
                href='/auth/signin'
                className='border px-4 py-2 border-gray-500 rounded-md'
              >
                Login
              </Link>
            </>
          )}
          {/* Authentication */}
        </div>
      </div>
    </nav>
  );
}
