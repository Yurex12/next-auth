import { auth } from '@/auth';

import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function Home() {
  // const session = await auth();

  // if (!session?.user) {
  //   redirect('/login');
  // }
  return (
    <div className='text-center px-4 space-y-4'>
      <h1 className='text-4xl font-bold'>Welcome to the homepage</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        ullam quaerat quibusdam fuga ut odit molestias officia ratione quod
        incidunt at quae consectetur hic in alias, ex facilis possimus
        molestiae.
      </p>
      <Link
        href='/dashboard'
        className='border px-4 py-2 border-gray-500 rounded-md'
      >
        click me
      </Link>
    </div>
  );
}
