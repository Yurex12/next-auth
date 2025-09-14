import { CardFooter } from './ui/card';
import { loginWithGithub, loginWithGoogle } from '@/lib/actions';
import LoginGithubButton from './LoginGithubButton';
import LoginGoogleButton from './LoginGoogleButton';

export default function SocialLogin() {
  return (
    <CardFooter className='flex-col gap-2'>
      <form action={loginWithGithub}>
        <LoginGithubButton />
      </form>

      <form action={loginWithGoogle}>
        <LoginGoogleButton />
      </form>
    </CardFooter>
  );
}
