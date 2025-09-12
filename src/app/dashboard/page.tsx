import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/auth/signin');
  }

  if (session!.user.role !== 'admin') {
    redirect('/users');
  }

  const users = await prisma.user.findMany();

  return (
    <div>
      <h1 className='text-2xl md:text-4xl px-4'>
        <span className='font-black'>Welcome Admin {session.user.name}</span>
      </h1>

      {users && (
        <div className='mt-4'>
          <h1 className='text-xl'>Registered users</h1>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <p className=''>
                  <span>{user.name} </span> {user.role}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
