import { prisma } from '@/lib/prisma';

export default async function RegisteredUserList() {
  const users = await prisma.user.findMany();

  return (
    <div className='mt-4'>
      <h1 className='text-xl'>Registered users</h1>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <p>
                <span>{user.name}</span> {user.role}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
