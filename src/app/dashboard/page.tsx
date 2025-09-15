import { auth } from '@/auth';
import RegisteredUserList from '@/components/RegisteredUserList';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

export default async function DashboardPage() {
  // const session = await auth();

  // if (!session?.user) {
  //   redirect('/auth/singin');
  // }

  // if (session.user.role !== 'admin') {
  //   redirect('/users');
  // }

  return (
    <div>
      <h1 className='text-2xl md:text-4xl px-4'>
        {/* <span className='font-black'>Welcome Admin {session.user.name}</span> */}
        welcome
      </h1>

      <Suspense fallback={<p>Loading...</p>}>
        <RegisteredUserList />
      </Suspense>
    </div>
  );
}
