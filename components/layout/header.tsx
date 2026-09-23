'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
const links = [
  ['Hizmetler', '/hizmetler'],
  ['Projeler', '/projeler'],
  ['Hakkımızda', '/hakkimizda'],
  ['Blog', '/blog'],
  ['İletişim', '/iletisim'],
];
export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const el = dialog.current;
    if (open) {
      el?.showModal();
      document.body.style.overflow = 'hidden';
    } else {
      el?.close();
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Ana menü">
            {links.map(([label, url]) => (
              <Link
                key={url}
                href={url}
                aria-current={pathname.startsWith(url) ? 'page' : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <span className="language">TR</span>
            <Link className="button header-contact" href="/iletisim">
              Birlikte çalışalım <ArrowUpRight size={16} />
            </Link>
            <button
              ref={trigger}
              className="menu-toggle"
              aria-label="Menüyü aç"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>
      <dialog
        ref={dialog}
        id="mobile-menu"
        className="mobile-menu"
        aria-label="Ana menü"
        onCancel={() => setOpen(false)}
        onClose={() => {
          setOpen(false);
          trigger.current?.focus();
        }}
      >
        <div className="mobile-menu-top">
          <Logo onClick={() => setOpen(false)} />
          <button className="icon-button" onClick={() => setOpen(false)} aria-label="Menüyü kapat">
            <X />
          </button>
        </div>
        <nav aria-label="Mobil menü">
          {links.map(([label, url], i) => (
            <Link
              style={{ animationDelay: `${i * 60}ms` }}
              key={url}
              href={url}
              onClick={() => setOpen(false)}
              aria-current={pathname.startsWith(url) ? 'page' : undefined}
            >
              <small>0{i + 1}</small>
              {label}
              <ArrowUpRight />
            </Link>
          ))}
        </nav>
        <p className="eyebrow">FİKİRLER. TEKNOLOJİ. DAHA FAZLASI.</p>
      </dialog>
    </>
  );
}
