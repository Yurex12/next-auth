'use client';

import { useTransition } from 'react';
import { Button } from './ui/button';
import { logout } from '@/lib/actions';

export default function LogoutButtonTranstition() {
  const [isPending, startTransition] = useTransition();
  return (
    <Button
      onClick={() => {
        startTransition(() => logout());
      }}
      disabled={isPending}
    >
      {!isPending ? 'Sign Out' : 'Signing out...'}
    </Button>
  );
}
