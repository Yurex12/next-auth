'use client';
import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';

export default function LogoutButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type='submit'>
      {!pending ? 'Sign Out' : 'Signing out...'}
    </Button>
  );
}
