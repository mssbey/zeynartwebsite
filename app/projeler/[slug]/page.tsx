import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { metadata } from '@/lib/site';
import { PageIntro } from '@/components/ui/page-intro';
import { ProjectVisual } from '@/components/ui/project-visual';
import { ProjectGallery } from '@/components/ui/project-gallery';
import { CTA } from '@/components/sections/cta';
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return p ? metadata(`${p.name} — Konsept çalışma`, p.description, `/projeler/${slug}`) : {};
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0) notFound();
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];
  return (
    <>
      <PageIntro
        label={`${p.name.toUpperCase()} — KONSEPT ÇALIŞMA`}
        title={p.title}
        description={p.description}
        crumbs={[
          { name: 'Projeler', href: '/projeler' },
          { name: p.name, href: `/projeler/${slug}` },
        ]}
      />
      <div className="container page-body">
        <div className="case-main-visual">
          <ProjectVisual theme={p.theme} large />
        </div>
        <div className="case-meta">
          {[
            ['SEKTÖR', p.category],
            ['KAPSAM', p.type],
            ['YIL', p.year],
            ['ÇALIŞMA TÜRÜ', 'Özgün ürün konsepti'],
          ].map(([name, value]) => (
            <div key={name}>
              <small>{name}</small>
              <p>{value}</p>
            </div>
          ))}
        </div>
        <div className="case-content">
          {[
            ['Genel bakış', p.description],
            ['Problem', p.challenge],
            ['Yaklaşım', p.approach],
            ['Çözüm', p.solution],
            ['Sonuç', p.result],
          ].map(([heading, text]) => (
            <div key={heading}>
              <h2>{heading}</h2>
              <p>{text}</p>
            </div>
          ))}
          <div>
            <h2>Teknoloji</h2>
            <div className="stack-tags" style={{ marginTop: 0 }}>
              {p.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h2>İlgili uzmanlık</h2>
            <Link
              className="text-link"
              href={`/hizmetler/${p.theme === 'forma' ? 'e-ticaret' : p.theme === 'nexus' ? 'web-yazilim' : 'web-tasarim'}`}
            >
              Bu deneyimin arkasındaki yaklaşım <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
        <ProjectGallery theme={p.theme} name={p.name} />
        <Link href={`/projeler/${next.slug}`} className="next-project">
          <div>
            <span>SIRADAKİ ÇALIŞMA</span>
            <h2>{next.name}</h2>
          </div>
          <ArrowUpRight size={38} />
        </Link>
      </div>
      <CTA />
    </>
  );
}
