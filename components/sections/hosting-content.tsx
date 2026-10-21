import { Check, Cloud, ShieldCheck } from 'lucide-react';
import {
  hostingSolutions,
  hostingBenefits,
  hostingPackages,
  hostingFeatures,
} from '@/data/hosting';
import { LinkButton } from '@/components/ui/link-button';
export function HostingContent() {
  return (
    <div className="container hosting-content">
      <section className="hosting-overview">
        <p className="eyebrow">HOSTING VE SUNUCU HİZMETLERİ</p>
        <h2>
          Önceliğimiz hız.
          <br />
          <span className="about-accent">Temelimiz güven.</span>
        </h2>
        <p className="section-copy">
          Küçük işletmelerden büyük organizasyonlara kadar yüksek performanslı, güvenilir ve
          ölçeklenebilir hosting ve sunucu çözümleri sunuyoruz. Modern veri merkezleriyle
          desteklenen altyapımızı işletmenizin ihtiyaçlarına göre şekillendiriyoruz.
        </p>
      </section>
      <section className="section" aria-labelledby="hosting-solutions">
        <h2 id="hosting-solutions">Neler yapıyoruz?</h2>
        <div className="hosting-solutions">
          {hostingSolutions.map((s, i) => (
            <article key={s.title}>
              <Cloud size={24} />
              <span className="hosting-index">0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="hosting-package-section" aria-labelledby="hosting-packages">
        <p className="eyebrow">İHTİYACINIZA UYGUN ALAN</p>
        <h2 id="hosting-packages">Web hosting paketleri.</h2>
        <div className="hosting-packages">
          {hostingPackages.map((p) => (
            <article
              className={p.name === 'Eko' ? 'hosting-package featured' : 'hosting-package'}
              key={p.name}
            >
              <p className="eyebrow">{p.name.toLocaleUpperCase('tr-TR')}</p>
              <h3>{p.disk}</h3>
              <p className="muted">Disk alanı</p>
              <ul>
                {hostingFeatures.map((f) => (
                  <li key={f}>
                    <Check size={15} />
                    {f}
                  </li>
                ))}
              </ul>
              <LinkButton
                primary={p.name === 'Eko'}
                href={`/iletisim?hizmet=hosting&paket=${p.name}`}
              >
                {p.name} için teklif alın
              </LinkButton>
            </article>
          ))}
        </div>
      </section>
      <section className="section" aria-labelledby="hosting-why">
        <h2 id="hosting-why">Neden Zeynart?</h2>
        <div className="hosting-benefits">
          {hostingBenefits.map(([title, text]) => (
            <article key={title}>
              <ShieldCheck size={23} />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
