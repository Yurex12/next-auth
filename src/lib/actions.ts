'use server';
import { auth, signIn, signOut } from '@/auth';
import bcrypt from 'bcryptjs';
import { prisma } from './prisma';

import { z } from 'zod';
import { TuserSchema, userSchema } from './schemas';

export const loginWithGithub = async () =>
  await signIn('github', { redirectTo: '/' });

export const loginWithGoogle = async () =>
  await signIn('google', { redirectTo: '/' });

export const logout = async () => await signOut({ redirectTo: '/auth/signin' });

export async function createUser(userDetails: TuserSchema) {
  try {
    const validatedFields = userSchema.safeParse(userDetails);

    if (!validatedFields.success) {
      return {
        success: false,
        message: 'Please Enter correct values',
        errors: z.flattenError(validatedFields.error),
      };
    }

    const { email, name, password } = validatedFields.data;

    const user = await prisma.user.findUnique({
      where: { email: email },
      select: { email: true, name: true, id: true },
    });

    if (user)
      return {
        success: false,
        message: 'User already exist.',
      };

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
      select: { id: true, email: true, name: true },
    });

    return { success: true, message: 'Reistration successful.', user: newUser };
  } catch (error) {
    return {
      success: false,
      message: 'Something went wrong. Please try again.',
    };
  }
}

// export async function changeRole() {
//  try {
//    const session = await auth()
//   const updateUser = await prisma.user.update({
//     where: {id: session?.user?.id},
//     data: {role: 'admin'}
//   })

//  } catch (error) {

//  }

// }
