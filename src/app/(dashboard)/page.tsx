import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-end p-5">
      <UserButton />
    </div>
  );
}
