import { auth } from '../../../auth';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) redirect('/');

  return (
    <div>
      <h1 className='text-4xl font-bold'>Welcome, {session.user.name}</h1>
    </div>
  );
}
