import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/data/services';
import { ServiceIcon } from '@/components/ui/service-icon';
import { SectionHeading } from '@/components/ui/section-heading';
import { LinkButton } from '@/components/ui/link-button';
export function ServiceGrid({ all = false }: { all?: boolean }) {
  return (
    <div className="service-grid studio-service-grid">
      {(all ? services : services.slice(0, 6)).map((service, i) => (
        <Link
          className={`service-card studio-service-card studio-service-${service.slug}`}
          key={service.slug}
          href={`/hizmetler/${service.slug}`}
        >
          <div className="service-card-top">
            <ServiceIcon name={service.icon} />
            <span>/{String(i + 1).padStart(2, '0')}</span>
            <ArrowUpRight className="card-arrow" size={20} />
          </div>
          <div className="service-object" aria-hidden="true">
            <div className="service-object-orbit" />
            <div className="service-object-main">
              <span />
              <i />
              <i />
              <i />
            </div>
            <div className="service-object-satellite">
              <ServiceIcon name={service.icon} size={22} />
            </div>
          </div>
          <div className="studio-service-copy">
            <h3>{service.title}</h3>
            <p>{service.short}</p>
            <div className="service-card-bottom">
              <span>{service.stack.slice(0, 2).join(' / ')}</span>
              <ArrowUpRight size={19} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
export function Services() {
  return (
    <section className="section container studio-services" id="hizmetler">
      <SectionHeading
        label="HİZMETLERİMİZ"
        title={
          <>
            Dijitalin tüm alanlarında.
            <br />
            <span className="muted">Her adımda yanınızda.</span>
          </>
        }
      >
        <LinkButton href="/hizmetler">Tüm hizmetler</LinkButton>
      </SectionHeading>
      <ServiceGrid />
    </section>
  );
}
