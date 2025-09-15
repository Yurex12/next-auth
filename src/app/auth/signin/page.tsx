import SigninForm from '@/components/SigninForm';
import SocialLogin from '@/components/SocialLogin';

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
          <Link href='/auth/signup'>Sign Up</Link>
        </CardAction>
      </CardHeader>
      <CardContent>
        <SigninForm />
      </CardContent>
      <SocialLogin />
    </Card>
  );
}
