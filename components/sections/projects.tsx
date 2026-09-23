import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { ProjectVisual } from '@/components/ui/project-visual';
import { SectionHeading } from '@/components/ui/section-heading';
import { LinkButton } from '@/components/ui/link-button';
export function ProjectGrid() {
  return (
    <div className="project-grid">
      {projects.map((project, i) => (
        <Link
          href={`/projeler/${project.slug}`}
          key={project.slug}
          className={`project-card project-${i}`}
          data-cursor="project"
        >
          <div className="project-image">
            <ProjectVisual theme={project.theme} />
            <span className="project-open">
              <ArrowUpRight />
            </span>
            <span className="concept-tag">KONSEPT ÇALIŞMA</span>
          </div>
          <div className="project-info">
            <div>
              <h3>
                {project.name}
                <span>®</span>
              </h3>
              <p>{project.type}</p>
            </div>
            <span>
              {project.year} <ArrowUpRight size={20} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
export function Projects() {
  return (
    <section className="section container" id="projeler">
      <SectionHeading
        label="SEÇİLİ ÇALIŞMALAR"
        title={
          <>
            Fikirden deneyime.
            <br />
            <span className="muted">Aradaki fark, yaklaşımımız.</span>
          </>
        }
      >
        <LinkButton href="/projeler">Projeleri keşfet</LinkButton>
      </SectionHeading>
      <ProjectGrid />
      <p className="project-disclaimer">
        Birlikte neler yapabileceğimize dair özgün ürün ve tasarım konseptleri.
      </p>
    </section>
  );
}
