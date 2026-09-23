import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
export function AISection() {
  return (
    <section className="ai-section">
      <div className="container ai-inner">
        <div className="ai-art" aria-hidden="true">
          <div className="ai-orb">
            {Array.from({ length: 12 }, (_, i) => (
              <i key={i} style={{ transform: `rotateY(${i * 15}deg) rotateX(18deg)` }} />
            ))}
          </div>
          <span className="ai-point point-one" />
          <span className="ai-point point-two" />
          <div className="ai-art-label">
            <span>İNSAN ZEKASI × YAPAY ZEKA</span>
            <span>SONSUZ OLASILIK</span>
          </div>
        </div>
        <div className="ai-copy">
          <p className="eyebrow">
            <span />
            YAPAY ZEKA, GERÇEK DEĞER
          </p>
          <h2>
            Sadece dijital değil.
            <br />
            <span className="muted">Daha akıllı.</span>
          </h2>
          <p>
            Teknolojinin yapabileceklerini, işinizin ihtiyaçlarıyla buluşturuyoruz. Yapay zekayı
            gerçek sorunları çözen, günlük işinize değer katan bir güce dönüştürüyoruz.
          </p>
          <div className="ai-features">
            <span>AI asistanları</span>
            <span>Akıllı iş akışları</span>
            <span>Kurumsal bilgi araması</span>
            <span>Doküman işleme</span>
          </div>
          <Link className="text-link" href="/hizmetler/yapay-zeka">
            Yapay zeka çözümlerini keşfet <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
