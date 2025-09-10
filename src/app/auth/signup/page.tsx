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

export default function SignInPage() {
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
        <form action={createUser}>
          <div className='flex flex-col gap-6'>
            <div className='grid gap-2'>
              <Label htmlFor='name'>username</Label>
              <Input
                id='name'
                type='name'
                placeholder='username'
                name='name'
                required
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                name='email'
                placeholder='m@example.com'
                required
              />
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
                required
                placeholder='******'
              />
            </div>
          </div>
          <Button type='submit' className='mt-4 w-full'>
            Sign up
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
