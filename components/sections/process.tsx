import { SectionHeading } from '@/components/ui/section-heading';
import { ScanSearch, Route, PenTool, ArrowUpRight, Rocket } from 'lucide-react';
const stepIcons = [ScanSearch, Route, PenTool, Rocket];
const stepOutputs = [
  'İhtiyaç analizi & proje özeti',
  'Yol haritası & kapsam',
  'Tasarım & çalışan ürün',
  'Yayın & sürekli gelişim',
];
export const steps = [
  [
    'Keşif',
    'Önce sizi dinliyoruz. Hedeflerinizi, kullanıcılarınızı ve çözülmesi gereken asıl problemi anlıyoruz.',
  ],
  [
    'Strateji',
    'Doğru sorularla net bir yol çiziyoruz. Kapsamı, teknolojiyi ve başarı kriterlerini birlikte belirliyoruz.',
  ],
  [
    'Tasarım & Geliştirme',
    'Fikrinizi görünür, kullanılabilir ve çalışan bir ürüne dönüştürüyoruz. Her adımda iletişimde kalıyoruz.',
  ],
  [
    'Yayın & Büyüme',
    'Test ediyor, yayına alıyor ve izliyoruz. Ürününüzü gerçek geri bildirimlerle geliştirmeye devam ediyoruz.',
  ],
];
export function Process() {
  return (
    <section className="section container studio-process">
      <SectionHeading
        label="NASIL ÇALIŞIYORUZ?"
        title={
          <>
            Karmaşık olanı çözüyoruz.
            <br />
            <span className="muted">Süreci sade tutuyoruz.</span>
          </>
        }
      >
        <p className="studio-process-intro">
          İlk görüşmeden yayına, her aşaması net.
          <br />
          Aynı hedefe odaklanan tek bir ekip.
        </p>
      </SectionHeading>
      <div className="process-grid">
        {steps.map(([title, copy], i) => {
          const Icon = stepIcons[i];
          return (
            <article className="process-step" key={title}>
              <div className="studio-step-top">
                <span className="step-number">0{i + 1}</span>
                <Icon size={26} strokeWidth={1.3} />
              </div>
              <div className="step-line">
                <i />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
              <div className="studio-step-output">
                <span>{stepOutputs[i]}</span>
                <ArrowUpRight size={16} />
              </div>
            </article>
          );
        })}
      </div>
      <div className="studio-process-footer">
        <span>
          <i /> Her aşamada açık iletişim.
        </span>
        <span>FİKİRDEN YAYINA, BİRLİKTE.</span>
      </div>
    </section>
  );
}
