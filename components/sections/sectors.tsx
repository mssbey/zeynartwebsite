'use client';
import { useState } from 'react';
import {
  Landmark,
  HeartPulse,
  GraduationCap,
  ShoppingCart,
  Building2,
  Plane,
  Factory,
  House,
  Car,
  Plus,
  ArrowUpRight,
} from 'lucide-react';
import Link from 'next/link';
const sectors = [
  {
    name: 'Fintech',
    icon: Landmark,
    text: 'Güven veren finansal deneyimler, anlaşılır veri panelleri ve ölçeklenebilir ödeme altyapıları.',
  },
  {
    name: 'Sağlık',
    icon: HeartPulse,
    text: 'Randevu, hasta iletişimi ve operasyonları bir araya getiren erişilebilir dijital deneyimler.',
  },
  {
    name: 'Eğitim',
    icon: GraduationCap,
    text: 'Öğrenmeyi her yere taşıyan eğitim platformları ve kişiselleştirilmiş içerik akışları.',
  },
  {
    name: 'E-Ticaret',
    icon: ShoppingCart,
    text: 'Ürün keşfinden teslimata kadar, her adımda tutarlı bir alışveriş deneyimi.',
  },
  {
    name: 'Kurumsal',
    icon: Building2,
    text: 'İş süreçlerinizi sadeleştiren özel yazılımlar, ERP bağlantıları ve yönetim panelleri.',
  },
  {
    name: 'Turizm',
    icon: Plane,
    text: 'Keşfetme, planlama ve rezervasyon deneyimlerini bir araya getiren platformlar.',
  },
  {
    name: 'Üretim',
    icon: Factory,
    text: 'Üretim verilerini görünür kılan takip sistemleri ve operasyon otomasyonları.',
  },
  {
    name: 'Gayrimenkul',
    icon: House,
    text: 'Portföy yönetimi ve mülk keşfi için markanıza özel dijital çözümler.',
  },
  {
    name: 'Otomotiv',
    icon: Car,
    text: 'Araç keşfi, servis randevusu ve müşteri ilişkileri için bağlantılı deneyimler.',
  },
];
export function Sectors() {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(false);
  return (
    <section className="container sectors-section">
      <div>
        <p className="eyebrow">
          <span />
          SEKTÖRLER
        </p>
        <h2>
          Her sektör için
          <br />
          <span className="muted">gerçek çözümler.</span>
        </h2>
      </div>
      <div className="sector-content">
        <div className="sector-chips">
          {sectors.slice(0, expanded ? 9 : 5).map((s, i) => (
            <button key={s.name} aria-pressed={selected === i} onClick={() => setSelected(i)}>
              <s.icon size={17} />
              {s.name}
            </button>
          ))}
          <button onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
            <Plus size={17} />
            {expanded ? 'Daha az' : 'Daha fazlası'}
          </button>
        </div>
        <p className="sector-description" aria-live="polite">
          {sectors[selected].text}
        </p>
        <Link
          className="text-link"
          href={`/iletisim?sektor=${encodeURIComponent(sectors[selected].name)}`}
        >
          Sektörünüze özel konuşalım <ArrowUpRight size={15} />
        </Link>
      </div>
    </section>
  );
}
