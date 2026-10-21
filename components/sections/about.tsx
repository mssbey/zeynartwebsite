import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { LinkButton } from '@/components/ui/link-button';

export function About() {
  return (
    <section className="brand-scene container" aria-labelledby="about-zeynart-title">
      <div className="brand-scene-panel">
        <Image
          className="brand-scene-image"
          src="/images/sections/journal-banner.webp"
          alt=""
          fill
          sizes="(max-width: 760px) 100vw, 92vw"
        />
        <div className="brand-scene-top">
          <p className="eyebrow">
            <span /> BİZ ZEYNART
          </p>
          <span>BAĞIMSIZ FİKİRLER. BÜTÜNSEL ÇÖZÜMLER.</span>
        </div>
        <div className="brand-scene-copy">
          <span className="brand-scene-kicker">TASARIMIN CESARETİ. TEKNOLOJİNİN GÜCÜ.</span>
          <h2 id="about-zeynart-title">
            Sıradanın
            <br />
            ötesinde.
            <br />
            <em>Size özgü.</em>
          </h2>
          <p>
            Markanızın hikâyesini güçlü bir kimliğe,
            <br className="brand-scene-break" /> iz bırakan dijital deneyimlere dönüştürüyoruz.
          </p>
          <LinkButton href="/hakkimizda">Zeynart’ı keşfedin</LinkButton>
        </div>
        <div className="brand-scene-caption" aria-hidden="true">
          <span>FİKİRDEN İZE.</span>
          <ArrowUpRight size={31} strokeWidth={1} />
        </div>
        <div className="brand-scene-bottom">
          <div className="brand-scene-origin">
            <strong>
              2014<span>↗</span>
            </strong>
            <span>
              O günden bugüne.
              <br />
              Hep bir adım ileriye.
            </span>
          </div>
          <div>
            <span>01 / YARATICILIK</span>
            <strong>Özgün bir bakış.</strong>
          </div>
          <div>
            <span>02 / MÜHENDİSLİK</span>
            <strong>Sağlam bir temel.</strong>
          </div>
          <div>
            <span>03 / İŞ BİRLİĞİ</span>
            <strong>Ortak bir hedef.</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
