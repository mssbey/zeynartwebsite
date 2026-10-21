import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Clock3 } from 'lucide-react';
import { metadata } from '@/lib/site';
import { articleDate, articleImage } from '@/lib/journal';
import { articles, articleSummaries } from '@/data/articles';
import { BlogExplorer } from '@/components/sections/blog-explorer';
import { CTA } from '@/components/sections/cta';
export const generateMetadata = () =>
  metadata(
    'Blog & İçgörüler',
    'Web tasarım, grafik tasarım, e-ticaret ve yazılım üzerine Zeynart’ın pratik rehberlerini keşfedin.',
    '/blog/',
  );
export default function BlogPage() {
  const featured = articles[0];
  return (
    <>
      <header className="container journal-header">
        <div className="journal-kicker">
          <span className="eyebrow">ZEYNART JOURNAL</span>
          <span>TASARIM. TEKNOLOJİ. BİR ADIM ÖTESİ.</span>
        </div>
        <h1>
          İyi fikirler,
          <br />
          <span>paylaştıkça büyür.</span>
        </h1>
        <div className="journal-header-bottom">
          <p>
            Dijital dünyayı birlikte anlamak için.
            <br />
            İşinize ışık tutan rehberler, yaratıcı bakış açıları ve bizden notlar.
          </p>
          <span>
            KEŞFET / ÖĞREN / İLHAM AL <ArrowUpRight size={19} />
          </span>
        </div>
      </header>
      <section className="container journal-feature" aria-label="Öne çıkan yazı">
        <Link href={`/blog/${featured.slug}/`}>
          <div className="journal-feature-image">
            <Image
              src={articleImage(featured)}
              alt="Modern mimari çizgilerle tasarım ve dijital deneyime bir bakış"
              fill
              sizes="(max-width: 760px) 100vw, 57vw"
            />
            <span>EDİTÖRÜN SEÇİMİ / 01</span>
          </div>
          <div className="journal-feature-copy">
            <span className="eyebrow">{featured.category}</span>
            <h2>{featured.title}</h2>
            <p>{featured.excerpt}</p>
            <div className="journal-feature-meta">
              <time dateTime={featured.date}>{articleDate(featured.date)}</time>
              <span>
                <Clock3 size={13} />
                {featured.read} okuma
              </span>
            </div>
            <span className="journal-feature-link">
              Yazıyı okumaya başlayın <ArrowUpRight size={23} />
            </span>
          </div>
        </Link>
      </section>
      <BlogExplorer articles={articleSummaries} />
      <section className="container journal-note">
        <Image src="/images/sections/journal-banner.webp" alt="" fill sizes="100vw" />
        <div>
          <span className="eyebrow">BİR FİKİRLE BAŞLAR.</span>
          <h2>
            Okumak ilham verir.
            <br />
            <span>Birlikte üretmek iz bırakır.</span>
          </h2>
          <Link href="/iletisim/">
            Sizin hikâyenizi konuşalım <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>
      <CTA />
    </>
  );
}
