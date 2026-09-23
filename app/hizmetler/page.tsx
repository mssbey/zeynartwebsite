import { metadata } from '@/lib/site';
import { PageIntro } from '@/components/ui/page-intro';
import { ServiceGrid } from '@/components/sections/services';
import { Process } from '@/components/sections/process';
import { CTA } from '@/components/sections/cta';
export const generateMetadata = () =>
  metadata(
    'Hizmetler',
    'Web, mobil uygulama, e-ticaret, yapay zeka, otomasyon ve uçtan uca yazılım çözümleri.',
    '/hizmetler',
  );
export default function ServicesPage() {
  return (
    <>
      <PageIntro
        label="UZMANLIK ALANLARIMIZ"
        title={
          <>
            Dijitalin tüm alanlarında.
            <br />
            <span className="muted">Her adımda yanınızda.</span>
          </>
        }
        description="Bir fikrin ilk çizgisinden milyonlarca satır kodun arkasındaki mimariye. İhtiyacınız olan uzmanlığı tek bir yerde buluşturuyoruz."
      />
      <div className="container page-body">
        <ServiceGrid all />
      </div>
      <Process />
      <CTA />
    </>
  );
}
