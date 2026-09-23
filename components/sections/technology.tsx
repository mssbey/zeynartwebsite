import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
const groups = [
  ['Kurumsal Yazılım', 'İş süreçlerine özel, ölçeklenebilir sistemler'],
  ['Dijital Deneyim', 'Tutarlı, erişilebilir ve yüksek performanslı ürünler'],
  ['Entegrasyon', 'Bütünleşik sistemler ve güvenilir veri akışı'],
  ['Yapay Zeka', 'Karar destek sistemleri ve akıllı otomasyon'],
  ['Veri & Analitik', 'Güçlü veri mimarisi ve stratejik içgörüler'],
  ['Altyapı & Güvenlik', 'İş sürekliliği ve operasyonel dayanıklılık'],
];
export function Technology() {
  return (
    <section className="section container technology-section">
      <div>
        <p className="eyebrow">
          <span />
          TEKNOLOJİ & MÜHENDİSLİK
        </p>
        <h2>
          Güçlü mühendislik.
          <br />
          <span className="muted">Kalıcı değer.</span>
        </h2>
        <p className="section-copy">
          İş hedeflerinizi teknoloji stratejisine dönüştürüyoruz. Karmaşık süreçleri bütünleşik
          sistemlerle yönetiyor; güvenlik, performans ve ölçeklenebilirliği her projenin temeline
          yerleştiriyoruz.
        </p>
        <Link className="text-link" href="/hizmetler">
          Uzmanlık alanlarımız <ArrowUpRight size={17} />
        </Link>
      </div>
      <div className="tech-list">
        {groups.map(([name, description], i) => (
          <div key={name}>
            <span className="tech-number">0{i + 1}</span>
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
