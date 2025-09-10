import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/auth/signin');
  }

  if (session!.user.role !== 'admin') {
    redirect('/users'); // or maybe "/users"
  }

  return (
    <div>
      <h1 className='text-4xl text-bold mt-20'>
        Welcome Admin {session.user.name}
      </h1>
    </div>
  );
}
