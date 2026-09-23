import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import { contactEmail } from '@/lib/site';
export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-intro">
          <Logo />
          <p>
            İyi fikirlerin geleceğini
            <br />
            birlikte tasarlıyoruz.
          </p>
          <span className="availability">
            <i /> Yeni fikirlere açığız
          </span>
        </div>
        <div>
          <h3>Hizmetler</h3>
          {[
            ['Web & Yazılım', 'web-yazilim'],
            ['Mobil Uygulama', 'mobil-uygulama'],
            ['Yapay Zeka', 'yapay-zeka'],
            ['SEO & GEO', 'seo-geo'],
          ].map(([name, slug]) => (
            <Link key={slug} href={`/hizmetler/${slug}`}>
              {name}
            </Link>
          ))}
        </div>
        <div>
          <h3>Keşfedin</h3>
          <Link href="/projeler">Projeler</Link>
          <Link href="/hakkimizda">Hakkımızda</Link>
          <Link href="/blog">İçgörüler</Link>
          <Link href="/iletisim">İletişim</Link>
        </div>
        <div>
          <h3>Bir merhaba ile başlar.</h3>
          <Link className="footer-contact" href="/iletisim">
            Fikrinizi konuşalım <ArrowUpRight size={19} />
          </Link>
          {contactEmail && <a href={`mailto:${contactEmail}`}>{contactEmail}</a>}
          <p>Türkiye’den, her yere.</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} ROVA DIGITAL</span>
        <div>
          <Link href="/gizlilik">Gizlilik</Link>
          <Link href="/kvkk">KVKK</Link>
          <Link href="/cerezler">Çerezler</Link>
          <span>Özenle tasarlandı.</span>
        </div>
      </div>
      <div className="footer-wordmark" aria-hidden="true">
        ROVA
      </div>
    </footer>
  );
}
