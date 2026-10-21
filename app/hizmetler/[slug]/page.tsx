import { GraphicDesignContent } from '@/components/sections/graphic-design-content';
import { HostingContent } from '@/components/sections/hosting-content';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Check, ArrowUpRight } from 'lucide-react';
import { services } from '@/data/services';
import { articles } from '@/data/articles';
import { metadata, siteUrl } from '@/lib/site';
import { PageIntro } from '@/components/ui/page-intro';
import { LinkButton } from '@/components/ui/link-button';
import { StructuredData } from '@/components/ui/structured-data';
import { CTA } from '@/components/sections/cta';
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  return s ? metadata(s.title, s.description, `/hizmetler/${slug}`) : {};
}
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const article = articles.find((a) => a.service === slug);
  return (
    <>
      <PageIntro
        label={service.title.toLocaleUpperCase('tr-TR')}
        title={service.headline}
        description={service.description}
        crumbs={[
          { name: 'Hizmetler', href: '/hizmetler' },
          { name: service.title, href: `/hizmetler/${slug}` },
        ]}
      />
      <div className="container detail-hero">
        <LinkButton primary href={`/iletisim?hizmet=${slug}`}>
          Projenizi konuşalım
        </LinkButton>
      </div>
      {slug === 'grafik-tasarim' ? (
        <GraphicDesignContent />
      ) : slug === 'hosting' ? (
        <HostingContent />
      ) : (
        <div className="container page-body">
          <div className="detail-grid">
            <div>
              <p className="eyebrow">NELER YAPIYORUZ?</p>
              <h2>
                İhtiyacınıza özel.
                <br />
                <span className="muted">Her detay düşünülmüş.</span>
              </h2>
              <div className="deliverables">
                {service.deliverables.map((d) => (
                  <span key={d}>
                    <Check size={16} />
                    {d}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow">YAKLAŞIMIMIZ</p>
              <h2>
                Doğru araçlar.
                <br />
                <span className="muted">Sürdürülebilir sonuçlar.</span>
              </h2>
              <p className="section-copy">
                Önce iş hedefinizi ve mevcut altyapınızı değerlendiriyoruz. Kapsamı birlikte
                netleştiriyor, kısa geliştirme döngüleriyle ilerliyor ve her aşamada somut çıktılar
                paylaşıyoruz.
              </p>
              <div className="stack-tags">
                {service.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="faq">
            <h2>Merak edilenler.</h2>
            <details>
              <summary>Proje süreci nasıl başlıyor?</summary>
              <p>
                İlk görüşmede ihtiyacınızı, hedef kitlenizi ve mevcut sistemlerinizi anlıyoruz.
                Ardından kapsam, teslimatlar ve takvimi içeren bir yol haritasını birlikte
                netleştiriyoruz.
              </p>
            </details>
            <details>
              <summary>Proje süresi ve bütçesi nasıl belirleniyor?</summary>
              <p>
                Süre ve bütçe; kapsam, entegrasyonlar ve teknik gereksinimlere göre belirlenir.
                Keşif aşamasından sonra size özel, açık bir teklif hazırlıyoruz. Kapsam
                değişikliklerini birlikte değerlendiriyoruz.
              </p>
            </details>
            <details>
              <summary>Yayın sonrasında destek veriyor musunuz?</summary>
              <p>
                Bakım, izleme ve yeni geliştirme ihtiyaçlarını projenin başında konuşuyoruz. İşinize
                uygun destek kapsamını, iletişim düzenini ve sorumlulukları teklif içinde
                tanımlıyoruz.
              </p>
            </details>
          </div>
          {article && (
            <div className="article-related" style={{ marginTop: 45 }}>
              <span className="muted">Konuyla ilgili bir bakış açısı</span>
              <Link className="text-link" href={`/blog/${article.slug}`}>
                {article.title}
                <ArrowUpRight size={17} />
              </Link>
            </div>
          )}
        </div>
      )}
      <CTA />
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          description: service.description,
          serviceType: service.title,
          provider: { '@id': `${siteUrl}/#organization` },
          url: `${siteUrl}/hizmetler/${slug}`,
        }}
      />
    </>
  );
}
