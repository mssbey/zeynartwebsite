import Link from 'next/link';
import Image from 'next/image';
export function Symbol({ className = '' }: { className?: string }) {
  return (
    <span className={`zeynart-symbol ${className}`}>
      <Image src="/images/zeynart-logo.avif" alt="" width={320} height={133} />
    </span>
  );
}
export function Logo({ onClick }: { onClick?: () => void } = {}) {
  return (
    <Link href="/" onClick={onClick} className="brand" aria-label="Zeynart Web Bilişim ana sayfa">
      <Image
        className="zeynart-logo"
        src="/images/zeynart-logo.avif"
        alt="Zeynart Web Bilişim Hizmetleri"
        width={320}
        height={133}
        priority
      />
    </Link>
  );
}
