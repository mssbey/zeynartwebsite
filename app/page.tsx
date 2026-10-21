import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { Process } from '@/components/sections/process';
import { About } from '@/components/sections/about';
import { CTA } from '@/components/sections/cta';
export default function Home() {
  return (
    <>
      <Hero />
      <section className="zeynart-intro studio-intro container" aria-label="Zeynart yaklaşımı">
        <div className="studio-intro-origin">
          <span className="eyebrow">2014’TEN BUGÜNE</span>
          <span className="studio-year">
            2014<span>↗</span>
          </span>
          <span>Tasarım tutkusu. Teknoloji gücü.</span>
        </div>
        <div className="studio-intro-message">
          <p>Her markanın bir hikâyesi var.</p>
          <h2>
            Biz, ona <em>iz bırakan</em>
            <br />
            bir gelecek tasarlarız.
          </h2>
          <div className="studio-intro-bottom">
            <span>STRATEJİ / TASARIM / TEKNOLOJİ</span>
            <Link href="/hakkimizda">
              Zeynart’ı tanıyın <ArrowUpRight size={22} />
            </Link>
          </div>
        </div>
      </section>
      <Services />
      <About />
      <Process />
      <CTA />
    </>
  );
}
