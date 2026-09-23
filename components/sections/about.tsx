import { LinkButton } from '@/components/ui/link-button';
import { Symbol } from '@/components/ui/logo';
export function About() {
  return (
    <section className="about-section container">
      <div className="about-symbol" aria-hidden="true">
        <Symbol />
        <span>BAKIŞ AÇIMIZ FARKLI.</span>
      </div>
      <div>
        <p className="eyebrow">
          <span />
          BİZ ROVA DIGITAL
        </p>
        <h2>
          Teknolojiyle
          <br />
          <span className="muted">değer üretiyoruz.</span>
        </h2>
        <p className="section-copy">
          Stratejik düşünceyi, iyi tasarımı ve güçlü mühendisliği aynı masada buluşturuyoruz. Bir
          web sitesinden çok daha fazlasını; işinizin bir sonraki adımını birlikte inşa ediyoruz.
        </p>
        <LinkButton href="/hakkimizda">Bizi tanıyın</LinkButton>
      </div>
    </section>
  );
}
