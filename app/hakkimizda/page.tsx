import Image from 'next/image';
import { ArrowUpRight, Compass, Gem, Handshake } from 'lucide-react';
import { metadata } from '@/lib/site';
import { PageIntro } from '@/components/ui/page-intro';
import { CTA } from '@/components/sections/cta';
import { LinkButton } from '@/components/ui/link-button';
import { companyParagraphs, customerReviews, clients, softwareProjects } from '@/data/company';
export const generateMetadata = () =>
  metadata(
    'Zeynart Kimdir?',
    '2014 yılında kurulan Zeynart Web Bilişim’i, müşterilerini ve web yazılım projelerini tanıyın.',
    '/hakkimizda',
  );
export default function AboutPage() {
  return (
    <>
      <PageIntro
        label="ZEYNART KİMDİR?"
        title={
          <>
            Amatör bir ruh.
            <br />
            <span className="about-accent">Profesyonel bir bakış.</span>
          </>
        }
        description="Biz kimiz, neler yapmışız, neler yapabiliriz? Zeynart’ın hikâyesini ve dijital dünyada birlikte yol aldığımız markaları keşfedin."
      />
      <div className="container company-signature">
        <span>BAĞIMSIZ FİKİRLER. BÜTÜNSEL ÇÖZÜMLER.</span>
        <span>
          TASARIM VE TEKNOLOJİ BİR ARADA <ArrowUpRight size={15} />
        </span>
      </div>
      <section className="container company-brand-hero" aria-label="Zeynart marka dünyası">
        <Image
          src="/images/zeynart-emblem-gallery.webp"
          alt="Zeynart’ın turkuaz cam ve metal detaylarla tasarlanan üç boyutlu amblemi"
          fill
          sizes="(max-width: 760px) 100vw, 90vw"
        />
        <div className="company-brand-hero-copy">
          <span className="eyebrow">ZEYNART WEB BİLİŞİM</span>
          <h2>
            Fikirden
            <br />
            <span>dijital etkiye.</span>
          </h2>
          <p>
            Tasarımın karakteri.
            <br />
            Teknolojinin gücü.
          </p>
        </div>
        <div className="company-brand-hero-footer">
          <span>YARATICI BAKIŞ. GÜÇLÜ BİR İMZA.</span>
          <span>EST. 2014</span>
        </div>
      </section>
      <section className="container company-story">
        <div className="company-art">
          <Image
            src="/images/zeynart-identity-still-life.webp"
            alt="Zeynart’ın kendi logosuyla hazırlanmış kurumsal kimlik ve basılı tasarım konsepti"
            width={1672}
            height={941}
            sizes="(max-width: 760px) 100vw, 40vw"
          />
          <span>ZEYNART / KENDİ HİKÂYEMİZ, KENDİ İMZAMIZ.</span>
        </div>
        <div>
          <p className="eyebrow">HİKÂYEMİZ</p>
          <h2>
            Dijitalleşmeye adanmış
            <br />
            <span className="muted">yaratıcı bir ekip.</span>
          </h2>
          {companyParagraphs.slice(2, 5).map((p) => (
            <p className="company-paragraph" key={p}>
              {p}
            </p>
          ))}
          <LinkButton href="/iletisim">Birlikte çalışalım</LinkButton>
        </div>
      </section>
      <section className="container company-values" aria-label="Çalışma ilkelerimiz">
        {[
          {
            icon: Compass,
            title: 'Önce sizi anlıyoruz.',
            text: 'Her projeye işinizi ve hedeflerinizi dinleyerek başlıyoruz.',
          },
          {
            icon: Gem,
            title: 'Detaylara önem veriyoruz.',
            text: 'Tasarımın karakterini ve teknolojinin gücünü, özenli bir uygulamada buluşturuyoruz.',
          },
          {
            icon: Handshake,
            title: 'Birlikte ilerliyoruz.',
            text: 'Açık iletişim ve karşılıklı güvenle, uzun vadeli iş birliklerine değer veriyoruz.',
          },
        ].map(({ icon: Icon, title, text }) => (
          <article key={title}>
            <Icon size={25} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>
      <section className="section container company-clients" aria-labelledby="clients-title">
        <p className="eyebrow">BİRLİKTE DEĞER ÜRETİYORUZ</p>
        <div className="studio-section-heading">
          <h2 id="clients-title">
            Farklı sektörler.
            <br />
            <span className="about-accent">Ortak bir güven.</span>
          </h2>
          <p>
            Her markanın hikâyesi farklı. Dijital dünyada birlikte yol aldığımız müşterilerimizle
            tanışın.
          </p>
        </div>
        <div className="company-client-meta">
          <span>MARKALAR & İŞ BİRLİKLERİ</span>
          <span>{clients.length} marka, farklı hikâyeler</span>
        </div>
        <div className="client-logo-grid">
          {clients.map((c) => (
            <a
              href={c.url}
              key={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="client-logo-card"
              aria-label={`${c.name} web sitesini aç`}
            >
              <Image
                src={c.image}
                alt={c.name}
                width={400}
                height={220}
                sizes="(max-width: 760px) 45vw, (max-width: 1000px) 30vw, 23vw"
              />
              <span>
                {c.name}
                <ArrowUpRight size={13} aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      </section>
      <section className="container company-vision">
        <div>
          <p className="eyebrow">2014’TEN BUGÜNE</p>
          <h2>
            Teknoloji değişir.
            <br />
            <span>İyi bir iş ortaklığı kalır.</span>
          </h2>
          <p>
            Bir web sitesinden işinize özel yazılımlara kadar; tasarımı, teknolojiyi ve iletişimi
            aynı masada buluşturuyoruz. Sizin için anlamlı olan çözümü birlikte geliştiriyoruz.
          </p>
          <LinkButton href="/hizmetler">Hizmetlerimizi keşfedin</LinkButton>
        </div>
        <div className="company-vision-art">
          <Image
            src="/images/zeynart-brand-art.webp"
            alt="Zeynart ambleminin turkuaz marka kompozisyonu"
            fill
            sizes="(max-width: 760px) 100vw, 45vw"
          />
          <span>YENİ BAKIŞ AÇILARI. GÜÇLÜ TEMELLER.</span>
        </div>
      </section>
      <section className="section container" aria-labelledby="software-title">
        <p className="eyebrow">İŞİNİZE ÖZEL ÇÖZÜMLER</p>
        <h2 id="software-title">Web yazılım projelerimiz.</h2>
        <div className="company-software-grid">
          {softwareProjects.map((p, i) => (
            <article key={p}>
              <span>0{i + 1}</span>
              <h3>{p}</h3>
            </article>
          ))}
        </div>
        <LinkButton href="/hizmetler/web-yazilim">Yazılım çözümlerini keşfedin</LinkButton>
      </section>
      <section className="section container" aria-labelledby="reviews-title">
        <p className="eyebrow">MÜŞTERİ DENEYİMLERİ</p>
        <h2 id="reviews-title">Birlikte çalıştıklarımızdan.</h2>
        <p className="section-copy">
          Zeynart’ın mevcut sitesinde paylaşılan Google değerlendirmeleri.
        </p>
        <div className="company-reviews">
          {customerReviews.map((r) => (
            <figure key={r.name}>
              <span className="company-quote" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote>{r.text}</blockquote>
              <figcaption>
                <strong>{r.name}</strong>
                <span>{r.date} · Google</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <a
          className="text-link"
          href="https://zeynart.com/zeynart-kimdir/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kaynak sayfayı görüntüleyin ↗
        </a>
      </section>
      <CTA />
    </>
  );
}
