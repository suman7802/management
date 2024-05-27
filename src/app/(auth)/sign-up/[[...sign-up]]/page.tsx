import Image from 'next/image';
import { Loader2 } from 'lucide-react';
import { SignUp, ClerkLoaded, ClerkLoading } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="flex items-center justify-center">
        <ClerkLoading>
          <Loader2 className="animate-spin text-muted-foreground" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignUp />
        </ClerkLoaded>
      </div>
      <div className="hidden lg:flex items-center justify-center bg-primary-foreground">
        <Image src="/logo.svg" alt="logo" height={500} width={500} />
      </div>
    </div>
  );
}
