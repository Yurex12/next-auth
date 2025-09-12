'use client';
import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';

export default function LoginGithubButton() {
  const { pending } = useFormStatus();
  return (
    <Button type='submit' disabled={pending}>
      Login with Github
    </Button>
  );
}
