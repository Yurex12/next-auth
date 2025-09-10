'use server';
import { signIn, signOut } from '@/auth';
import { prisma } from './prisma';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';

export const login = async () => await signIn('github', { redirectTo: '/' });

export const loginWithGoogle = async () =>
  await signIn('google', { redirectTo: '/' });

export const logout = async () => await signOut({ redirectTo: '/auth/signin' });

export async function createUser(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  redirect('/');
}
// export async function createUser(formData: FormData) {
//   try {
//     const name = formData.get('name') as string;
//     const email = formData.get('email') as string;
//     const password = formData.get('password') as string;

//     if (!name || !email || !password)
//       return { success: false, message: 'User already exist.' };

//     const userExist = await prisma.user.findUnique({ where: { email: email } });

//     if (userExist) return { success: false, message: 'User already exist.' };

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = await prisma.user.create({
//       data: {
//         name,
//         email,
//         password: hashedPassword,
//       },
//     });

//     console.log('successful');

//     return {
//       success: true,
//       message: 'User created successfully',
//       user: {
//         id: newUser.id,
//         name: newUser.name,
//         email: newUser.email,
//         createdAt: newUser.createdAt,
//       },
//     };
//   } catch (error) {
//     console.error('Error creating user:', error);
//     return {
//       success: false,
//       message: 'Something went wrong while creating user',
//     };
//   }
// }
