import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Clock3 } from 'lucide-react';
import { articles, type Article } from '@/data/articles';
import { metadata, siteUrl } from '@/lib/site';
import { articleDate, articleImage } from '@/lib/journal';
import { StructuredData } from '@/components/ui/structured-data';
import { CTA } from '@/components/sections/cta';
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug);
  if (!a) return {};
  const base = metadata(a.title, a.excerpt, `/blog/${slug}/`);
  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: 'article',
      publishedTime: a.date,
      authors: ['ZEYNART'],
      images: [{ url: articleImage(a), width: 1672, height: 941 }],
    },
    twitter: { ...base.twitter, images: [articleImage(a)] },
  };
}
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug);
  if (!a) notFound();
  const index = articles.indexOf(a);
  const isRelated = (other: Article) =>
    a.service ? other.service === a.service : other.category === a.category;
  // Listede bu yazıdan sonra gelenlerden başlayarak benzer yazıları seçin.
  const candidates = [...articles.slice(index + 1), ...articles.slice(0, index)];
  const related = [
    ...candidates.filter(isRelated),
    ...candidates.filter((other) => !isRelated(other)),
  ].slice(0, 2);
  const sections = a.sections ?? [];
  return (
    <>
      <article className="journal-article">
        <header className="container journal-article-header">
          <Link className="journal-back" href="/blog/">
            <ArrowLeft size={15} /> ZEYNART JOURNAL’A DÖN
          </Link>
          <p className="eyebrow">{a.category}</p>
          <h1>{a.title}</h1>
          <p className="journal-article-lead">{a.excerpt}</p>
          <div className="journal-author">
            <div className="journal-author-mark">
              <Image src="/images/zeynart-logo.avif" alt="" width={100} height={42} />
            </div>
            <div>
              <strong>Zeynart Web Bilişim</strong>
              <span>Tasarım & teknoloji notları</span>
            </div>
            <time dateTime={a.date}>{articleDate(a.date)}</time>
            <span className="journal-reading-time">
              <Clock3 size={14} />
              {a.read} okuma
            </span>
          </div>
        </header>
        <figure className="container journal-article-cover">
          <Image
            src={articleImage(a)}
            alt={a.html ? a.title : `${a.category} üzerine Zeynart görsel kompozisyonu`}
            width={1672}
            height={941}
            sizes="(max-width: 760px) 100vw, 90vw"
          />
          <figcaption>
            ZEYNART JOURNAL <span>{a.category}</span>
          </figcaption>
        </figure>
        <div className="container journal-reading-layout">
          <aside className="journal-toc">
            <div>
              {sections.length > 0 ? (
                <>
                  <span className="eyebrow">BU YAZIDA</span>
                  <nav aria-label="Yazı içindekiler">
                    {sections.map((s, i) => (
                      <a href={`#bolum-${i + 1}`} key={s.heading}>
                        <span>0{i + 1}</span>
                        {s.heading}
                      </a>
                    ))}
                  </nav>
                </>
              ) : (
                <span className="eyebrow">{a.category}</span>
              )}
              {a.service ? (
                <Link href={`/hizmetler/${a.service}/`} className="journal-service-link">
                  İlgili hizmetimiz <ArrowUpRight size={16} />
                </Link>
              ) : (
                <Link href="/hizmetler/" className="journal-service-link">
                  Hizmetlerimiz <ArrowUpRight size={16} />
                </Link>
              )}
            </div>
          </aside>
          <div className="journal-prose">
            {a.html ? (
              <div className="journal-prose-html" dangerouslySetInnerHTML={{ __html: a.html }} />
            ) : (
              <p className="journal-prose-intro">{a.excerpt}</p>
            )}
            {sections.map((s, i) => (
              <section id={`bolum-${i + 1}`} key={s.heading}>
                <span className="journal-section-number">0{i + 1} /</span>
                <h2>{s.heading}</h2>
                <p>{s.text}</p>
              </section>
            ))}
            <div className="journal-article-end">
              <span>ZEYNART’TAN BİR NOT</span>
              <p>
                Her işletmenin ihtiyacı farklı. Bu fikirleri kendi projenize nasıl
                uyarlayabileceğinizi birlikte değerlendirelim.
              </p>
              <Link href="/iletisim/">
                Projenizi konuşalım <ArrowUpRight size={17} />
              </Link>
            </div>
            <Link href="/blog/" className="journal-back">
              <ArrowLeft size={15} /> Tüm yazılara dön
            </Link>
          </div>
        </div>
      </article>
      <section className="container journal-related">
        <div className="studio-section-heading">
          <div>
            <p className="eyebrow">BİR SONRAKİ FİKİR</p>
            <h2>Bunlar da ilginizi çekebilir.</h2>
          </div>
          <Link href="/blog/" className="text-link">
            Tüm yazılar <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="journal-related-grid">
          {related.map((r) => (
            <Link className="journal-related-card" href={`/blog/${r.slug}/`} key={r.slug}>
              <div>
                <Image
                  src={articleImage(r)}
                  alt=""
                  fill
                  sizes="(max-width: 760px) 100vw, 45vw"
                />
              </div>
              <span className="eyebrow">{r.category}</span>
              <h3>{r.title}</h3>
              <span className="journal-read">
                Okumaya devam et <ArrowUpRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CTA />
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: a.title,
          description: a.excerpt,
          datePublished: a.date,
          dateModified: a.date,
          author: { '@type': 'Organization', name: 'ZEYNART', url: siteUrl },
          publisher: { '@id': `${siteUrl}/#organization` },
          mainEntityOfPage: `${siteUrl}/blog/${slug}/`,
          image: `${siteUrl}${articleImage(a)}`,
          inLanguage: 'tr-TR',
        }}
      />
    </>
  );
}
