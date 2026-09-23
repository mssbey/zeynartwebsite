import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { StructuredData } from '@/components/ui/structured-data';
import { siteUrl } from '@/lib/site';
export function PageIntro({
  label,
  title,
  description,
  crumbs = [],
}: {
  label: string;
  title: React.ReactNode;
  description?: string;
  crumbs?: { name: string; href: string }[];
}) {
  return (
    <div className="container page-intro">
      {crumbs.length > 0 && (
        <>
          <nav aria-label="Sayfa yolu" className="breadcrumb">
            <Link href="/">Ana sayfa</Link>
            {crumbs.map((c, i) => (
              <span key={c.href} style={{ display: 'contents' }}>
                <ChevronRight size={10} />
                {i === crumbs.length - 1 ? (
                  <span aria-current="page">{c.name}</span>
                ) : (
                  <Link href={c.href}>{c.name}</Link>
                )}
              </span>
            ))}
          </nav>
          <StructuredData
            data={{
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [{ name: 'Ana sayfa', href: '/' }, ...crumbs].map((c, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: c.name,
                item: `${siteUrl}${c.href}`,
              })),
            }}
          />
        </>
      )}
      <p className="eyebrow">
        <span />
        {label}
      </p>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
}
