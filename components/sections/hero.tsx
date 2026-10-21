'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, Play, Pause } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const slides = [
  {
    label: '2014’TEN BERİ YARATICILIK VE VİZYON',
    lines: ['Siz hayal edin,', 'Zeynart'],
    accent: 'tasarlasın.',
    copy: 'Web tasarımından marka kimliğine, yazılımdan hostinge. İşletmenizin dijital dünyadaki imzasını birlikte oluşturuyoruz.',
    note: ['YARATICILIK.', 'VİZYON.', 'ZEYNART.'],
  },
  {
    label: 'MARKANIZIN DİJİTAL İMZASI',
    lines: ['Fark edilmek', 'iyi tasarımla'],
    accent: 'başlar.',
    copy: 'Logo, kurumsal kimlik, banner ve katalog tasarımlarıyla markanızın benzersiz parmak izini görünür kılıyoruz.',
    note: ['HER MARKA', 'KENDİ İZİNİ', 'BIRAKIR.'],
  },
  {
    label: 'İŞİNİZE ÖZEL YAZILIM',
    lines: ['İşinizi anlayan', 'dijital'],
    accent: 'çözümler.',
    copy: 'Stok takip, saha satış, sipariş ve teslimat süreçlerinizi işletmenize özel yazılımlarla bir araya getiriyoruz.',
    note: ['DAHA DÜZENLİ.', 'DAHA VERİMLİ.', 'BİRLİKTE.'],
  },
  {
    label: 'HOSTING VE SUNUCU',
    lines: ['Güçlü altyapı.', 'Güvenilir'],
    accent: 'bir başlangıç.',
    copy: 'Web hosting, bulut sunucu, yedekleme ve teknik destek hizmetleriyle dijital varlığınızın yanındayız.',
    note: ['HIZ.', 'GÜVENLİK.', 'SÜREKLİLİK.'],
  },
];

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (paused || reduced) return;
    const timer = setInterval(() => setActive((i) => (i + 1) % slides.length), 10000);
    return () => clearInterval(timer);
  }, [paused, reduced]);
  const slide = slides[active];
  return (
    <section className={`hero hero-slide-${active}`} aria-label="Zeynart Web Bilişim tanıtımı">
      <div className="hero-background" style={{ opacity: active % 2 === 0 ? 1 : 0 }}>
        <Image
          src="/images/architecture.webp"
          alt="Gün ışığına açılan heykelsi beton yapılar ve kıvrımlı bir yolda insan silüeti"
          fill
          priority
          sizes="100vw"
          quality={85}
        />
      </div>
      <div className="hero-background" style={{ opacity: active % 2 === 1 ? 1 : 0 }}>
        <Image
          src="/images/architecture-atrium.webp"
          alt="Tavandaki dairesel açıklıktan gün ışığı alan anıtsal bir beton atriyum"
          fill
          sizes="100vw"
          quality={85}
        />
      </div>
      <div className="hero-shade" />
      <div className="container hero-inner">
        <div className="hero-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <p className="eyebrow">
                <span />
                {slide.label}
              </p>
              <h1>
                {slide.lines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
                <em>{slide.accent}</em>
              </h1>
              <p className="hero-description">{slide.copy}</p>
            </motion.div>
          </AnimatePresence>
          <div className="hero-buttons">
            <Link href="/iletisim" className="button button-primary" data-magnetic>
              Teklif alın <ArrowRight size={18} />
            </Link>
            <Link href="#hizmetler" className="play-link">
              <span>
                <Play size={13} />
              </span>
              Neler yapıyoruz?
            </Link>
          </div>
        </div>
        <div className="hero-note" aria-hidden="true">
          {slide.note.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
        <div className="slide-controls" aria-label="Tanıtım slaytları">
          {slides.map((s, i) => (
            <button
              key={s.label}
              onClick={() => {
                setActive(i);
                setPaused(true);
              }}
              aria-label={`${i + 1}. slayt: ${s.label}`}
              aria-pressed={i === active}
            >
              <i />
              <span>{String(i + 1).padStart(2, '0')}</span>
            </button>
          ))}
          <button
            className="slide-pause"
            aria-label={paused ? 'Otomatik geçişi başlat' : 'Otomatik geçişi duraklat'}
            onClick={() => setPaused(!paused)}
          >
            {paused ? <Play size={12} /> : <Pause size={12} />}
          </button>
        </div>
        <div className="hero-bottom">
          <a href="#hizmetler" className="scroll-link">
            <ArrowDown size={15} /> KEŞFETMEYE DEVAM ET
          </a>
          <span>WEB · GRAFİK · YAZILIM · HOSTING</span>
          <span className="hero-coordinate">FİKİRLERDEN YENİ OLASILIKLARA.</span>
        </div>
      </div>
    </section>
  );
}
