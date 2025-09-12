import z from 'zod';

export const userSchema = z.object({
  email: z.email(),
  name: z.string().min(6, 'Username must be at least 6 characters.'),
  password: z.string().min(6, 'Password must be at least 6 characters.'),
});

export const signInSchema = z.object({
  email: z.email({ error: 'Email is invalid' }).trim(),
  password: z
    .string()
    .trim()
    .min(1, 'Password is required')
    .min(6, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
});

export type TuserSchema = z.infer<typeof userSchema>;
export type TSignInSchema = z.infer<typeof signInSchema>;
