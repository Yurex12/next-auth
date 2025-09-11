'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createUser } from '@/lib/actions';
import Link from 'next/link';
import { useActionState } from 'react';

// const initialState = {
//   success: false,
//   message: '',
// };

export default function SignInPage() {
  const [state, action, isPending] = useActionState(createUser, undefined);

  return (
    <Card className='w-full max-w-md'>
      <CardHeader>
        <CardTitle>Sign up to your account</CardTitle>
        <CardDescription>Enter your details to sign up</CardDescription>
        <CardAction>
          <Link href='/login'>Login</Link>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form action={action}>
          <div className='flex flex-col gap-6'>
            <div className='grid gap-2'>
              <Label htmlFor='name'>username</Label>
              <Input
                id='name'
                type='name'
                placeholder='username'
                name='name'
                // defaultValue={state?.inputsData?.name}
                defaultValue='yusuf2'
                // required
              />
              {state?.errors?.fieldErrors?.name && (
                <p className='text-sm text-red-500'>
                  {state.errors.fieldErrors.name}
                </p>
              )}
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                name='email'
                // defaultValue={state?.inputsData?.email}
                defaultValue='yusuf2@gmail.com'
                placeholder='m@example.com'
                // required
              />
              {state?.errors?.fieldErrors?.email && (
                <p className='text-sm text-red-500'>
                  {state.errors.fieldErrors.email}
                </p>
              )}
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='password'>Password</Label>
                <a
                  href='#'
                  className='ml-auto inline-block text-sm underline-offset-4 hover:underline'
                >
                  Forgot your password?
                </a>
              </div>
              <Input
                id='password'
                type='password'
                name='password'
                // defaultValue={state?.inputsData?.password}
                defaultValue='123456'
                // required
                placeholder='******'
              />
            </div>
            {state?.errors?.fieldErrors?.password && (
              <p className='text-sm text-red-500'>
                {state.errors.fieldErrors.password}
              </p>
            )}
          </div>
          <Button type='submit' className='mt-4 w-full'>
            Sign up
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
