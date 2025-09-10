import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await auth();

  if (!session?.user) {
    redirect('/auth/signin');
  }

  return <p className='mt-40'>Welcome {session.user.name}, you are a user</p>;
}
