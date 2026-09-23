import { LinkButton } from '@/components/ui/link-button';
export function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-glow" aria-hidden="true" />
      <div className="container">
        <p className="eyebrow">BİR FİKRİNİZ Mİ VAR?</p>
        <h2>
          Birlikte
          <br />
          hayata <span>geçirelim.</span>
        </h2>
        <LinkButton href="/iletisim" primary diagonal>
          Projenizi anlatın
        </LinkButton>
        <span className="cta-side">BİR MERHABA, YENİ BİR BAŞLANGIÇ.</span>
      </div>
    </section>
  );
}
