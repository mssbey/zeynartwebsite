import { metadata } from '@/lib/site';
import { PageIntro } from '@/components/ui/page-intro';
import { ProjectGrid } from '@/components/sections/projects';
import { CTA } from '@/components/sections/cta';
export const generateMetadata = () =>
  metadata(
    'Projeler',
    'Fintech, e-ticaret ve SaaS alanlarında Zeynart Web Bilişim ürün ve tasarım konseptlerini keşfedin.',
    '/projeler',
  );
export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        label="SEÇİLİ ÇALIŞMALAR"
        title={
          <>
            Fikirleri dijital
            <br />
            <span className="muted">deneyimlere dönüştürüyoruz.</span>
          </>
        }
        description="Yaklaşımımızı görünür kılan ürün ve tasarım konseptleri. Her biri, birlikte neler yapabileceğimize açılan bir pencere."
      />
      <div className="container page-body">
        <ProjectGrid />
        <p className="project-disclaimer">
          Bu sayfadaki çalışmalar Zeynart Web Bilişim için hazırlanan özgün konseptlerdir. Gerçek
          müşteri ilişkisi veya ölçülmüş ticari sonuç iddiası içermez.
        </p>
      </div>
      <CTA />
    </>
  );
}
