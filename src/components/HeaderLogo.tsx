import Link from 'next/link';
import Image from 'next/image';

export default function HeaderLogo() {
  return (
    <Link href="/">
      <div className="hidden lg:flex items-center gap-1">
        <Image src="/logo.svg" alt="Logo" width={28} height={28} />
        <p className="font-semibold text-white text-2xl">Finance</p>
      </div>
    </Link>
  );
}
