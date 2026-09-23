import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { articles } from '@/data/articles';
import { metadata, siteUrl } from '@/lib/site';
import { StructuredData } from '@/components/ui/structured-data';
import { CTA } from '@/components/sections/cta';
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug);
  if (!a) return {};
  const base = metadata(a.title, a.excerpt, `/blog/${slug}`);
  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: 'article',
      publishedTime: a.date,
      authors: ['ROVA DIGITAL'],
    },
  };
}
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug);
  if (!a) notFound();
  return (
    <>
      <article className="article-page">
        <Link className="breadcrumb" href="/blog">
          <ArrowLeft size={13} /> Tüm yazılar
        </Link>
        <p className="eyebrow">
          <span />
          {a.category}
        </p>
        <h1>{a.title}</h1>
        <div className="article-meta">
          <span>ROVA DIGITAL</span>
          <time dateTime={a.date}>
            {new Intl.DateTimeFormat('tr-TR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
              timeZone: 'UTC',
            }).format(new Date(a.date))}
          </time>
          <span>{a.read} okuma</span>
        </div>
        <p className="article-lead">{a.excerpt}</p>
        {a.sections.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            <p>{s.text}</p>
          </section>
        ))}
        <div className="article-related">
          <span className="muted">Fikrinizi bir adım ileri taşıyın.</span>
          <Link href={`/hizmetler/${a.service}`} className="text-link">
            İlgili hizmeti keşfet <ArrowUpRight size={17} />
          </Link>
        </div>
      </article>
      <CTA />
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: a.title,
          description: a.excerpt,
          datePublished: a.date,
          dateModified: a.date,
          author: { '@type': 'Organization', name: 'ROVA DIGITAL', url: siteUrl },
          publisher: { '@id': `${siteUrl}/#organization` },
          mainEntityOfPage: `${siteUrl}/blog/${slug}`,
          image: `${siteUrl}/opengraph-image`,
          inLanguage: 'tr-TR',
        }}
      />
    </>
  );
}
