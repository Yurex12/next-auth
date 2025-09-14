import LoginGithubButton from '@/components/LoginGithubButton';
import LoginGoogleButton from '@/components/LoginGoogleButton';
import SigninForm from '@/components/SigninForm';

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { loginWithGithub, loginWithGoogle } from '@/lib/actions';
import Link from 'next/link';

export default function SignInPage() {
  return (
    <Card className='w-full max-w-md'>
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Link href='/register'>Sign Up</Link>
        </CardAction>
      </CardHeader>
      <CardContent>
        <SigninForm />
      </CardContent>
      <CardFooter className='flex-col gap-2'>
        <form action={loginWithGithub}>
          <LoginGithubButton />
        </form>

        <form action={loginWithGoogle}>
          <LoginGoogleButton />
        </form>
      </CardFooter>
    </Card>
  );
}
