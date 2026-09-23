import Link from 'next/link';
export function Symbol({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="44"
      height="44"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <path d="M6 9H40C53 9 60 18 55 29L43 43L34 31L42 23H19L6 9Z" fill="currentColor" />
      <path d="M12 31H28L51 58H34L12 31Z" fill="currentColor" />
      <path d="M39 13H49L36 27H26L39 13Z" fill="currentColor" opacity=".22" />
    </svg>
  );
}
export function Logo({ onClick }: { onClick?: () => void } = {}) {
  return (
    <Link href="/" onClick={onClick} className="brand" aria-label="ROVA Digital ana sayfa">
      <Symbol />
      <span className="brand-type">
        ROVA<small>DIGITAL</small>
      </span>
    </Link>
  );
}
