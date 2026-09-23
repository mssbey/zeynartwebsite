import { SectionHeading } from '@/components/ui/section-heading';
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
    <section className="section container">
      <SectionHeading
        label="NASIL ÇALIŞIYORUZ?"
        title={
          <>
            Karmaşık olanı çözüyoruz.
            <br />
            <span className="muted">Süreci sade tutuyoruz.</span>
          </>
        }
      />
      <div className="process-grid">
        {steps.map(([title, copy], i) => (
          <article className="process-step" key={title}>
            <span className="step-number">0{i + 1}</span>
            <div className="step-line">
              <i />
            </div>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
