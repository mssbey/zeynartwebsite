import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
export function LinkButton({
  href,
  children,
  primary = false,
  diagonal = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  diagonal?: boolean;
}) {
  const Icon = diagonal ? ArrowUpRight : ArrowRight;
  return (
    <Link href={href} className={`button ${primary ? 'button-primary' : ''}`} data-magnetic>
      {children}
      <Icon size={17} />
    </Link>
  );
}
