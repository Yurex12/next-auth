'use server';
import { signIn, signOut } from '@/auth';
import bcrypt from 'bcryptjs';
import { prisma } from './prisma';

import { z } from 'zod';
import { redirect } from 'next/navigation';

const userSchema = z.object({
  email: z.email(),
  name: z.string().min(6, 'Username must be at least 6 characters.'),
  password: z.string().min(6, 'Password must be at least 6 characters.'),
});

export const login = async () => await signIn('github', { redirectTo: '/' });

export const loginWithGoogle = async () =>
  await signIn('google', { redirectTo: '/' });

export const logout = async () => await signOut({ redirectTo: '/auth/signin' });

export async function createUser(_: unknown, formData: FormData) {
  const rawData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const validatedFields = userSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Please Enter correct values',
      errors: z.flattenError(validatedFields.error),
      inputsData: rawData,
    };
  }

  const { email, name, password } = validatedFields.data;

  const user = await prisma.user.findUnique({
    where: { email: email },
    select: { email: true, name: true, id: true },
  });

  if (user) return { success: false, message: 'User already exist.' };

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  console.log(newUser);

  redirect('/auth/signin');

  // return { success: true, message: 'Reistration successful.', user: newUser };
}

export async function loginWithCredential(formData: FormData) {
  await signIn('credentials', {
    email: formData.get('email'),
    password: formData.get('password'),
    redirectTo: '/dashboard',
  });
}
