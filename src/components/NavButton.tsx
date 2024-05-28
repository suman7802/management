import ch from 'clsx';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

type props = {
  href: string;
  label: string;
  isActive: boolean;
};

export default function NavButton({ href, label, isActive }: props) {
  return (
    <Button
      asChild
      size="sm"
      variant="outline"
      className={ch(
        'w-full lg:w-auto justify-between font-normal hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition',
        isActive ? 'bg-white/10 text-white' : 'bg-transparent'
      )}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
}
