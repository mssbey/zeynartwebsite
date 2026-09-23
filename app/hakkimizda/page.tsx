import { metadata } from '@/lib/site';
import { PageIntro } from '@/components/ui/page-intro';
import { Symbol } from '@/components/ui/logo';
import { Process } from '@/components/sections/process';
import { CTA } from '@/components/sections/cta';
export const generateMetadata = () =>
  metadata(
    'Hakkımızda',
    'ROVA Digital; strateji, tasarım, mühendislik ve yapay zekayı bir araya getiren dijital teknoloji ajansı.',
    '/hakkimizda',
  );
export default function AboutPage() {
  return (
    <>
      <PageIntro
        label="BİZ ROVA DIGITAL"
        title={
          <>
            Merakla başlar.
            <br />
            <span className="muted">Değere dönüşür.</span>
          </>
        }
        description="Teknolojinin en iyi halinin, insanlar için anlamlı bir şey ürettiğine inanıyoruz. Stratejiyi, tasarımı ve mühendisliği bu fikir etrafında buluşturuyoruz."
      />
      <div className="container">
        <div className="values-grid">
          {[
            [
              'Bütünü görüyoruz.',
              'Bir arayüzü tek başına ele almıyoruz. İş modelinizi, kullanıcı yolculuğunu ve teknik altyapınızı birlikte düşünerek karar veriyoruz.',
            ],
            [
              'Birlikte üretiyoruz.',
              'Açık iletişimi ve görünür ilerlemeyi önemsiyoruz. Doğru soruları soruyor, alternatifleri konuşuyor ve kararlarımızı gerekçelendiriyoruz.',
            ],
            [
              'Uzun vadeyi düşünüyoruz.',
              'Ürünlerin yayın gününden sonra da yaşadığını biliyoruz. Bakımı yapılabilir kod, tutarlı tasarım ve ölçülebilir süreçler kuruyoruz.',
            ],
          ].map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="brand-story">
          <div className="brand-symbol">
            <Symbol />
          </div>
          <div>
            <p className="eyebrow">BİR SEMBOL, BİRDEN FAZLA BAKIŞ</p>
            <h2>Detaylarda daha fazlası var.</h2>
            <p>
              ROVA’nın sembolü ilk bakışta soyut bir R olarak okunur. Eğik yüzeylerindeki V açısı ve
              üst bölümden diyagonal kesite uzanan Z izi; aynı fikre farklı açılardan bakma
              biçimimizi temsil eder. Sade bir form, katmanlı bir düşünce.
            </p>
            <div className="brand-letters" aria-label="Logonun geometrisindeki harfler">
              <span>R</span>
              <span>V</span>
              <span>Z</span>
            </div>
          </div>
        </div>
      </div>
      <Process />
      <CTA />
    </>
  );
}
