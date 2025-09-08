'use client';
import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';

export default function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button type='submit' disabled={pending}>
      Login with Github
    </Button>
  );
}
