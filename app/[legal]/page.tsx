import { notFound } from 'next/navigation';
import { legalPages } from '@/data/legal';
import { metadata } from '@/lib/site';
import { PageIntro } from '@/components/ui/page-intro';
export function generateStaticParams() {
  return Object.keys(legalPages).map((legal) => ({ legal }));
}
export async function generateMetadata({ params }: { params: Promise<{ legal: string }> }) {
  const { legal } = await params;
  const page = legalPages[legal as keyof typeof legalPages];
  return page ? metadata(page.title, page.description, `/${legal}`) : {};
}
export default async function LegalPage({ params }: { params: Promise<{ legal: string }> }) {
  const { legal } = await params;
  if (!Object.hasOwn(legalPages, legal)) notFound();
  const page = legalPages[legal as keyof typeof legalPages];
  return (
    <>
      <PageIntro label="ŞEFFAFLIK" title={page.title} description={page.description} />
      <div className="container page-body legal-page">
        {page.sections.map(([heading, text]) => (
          <section key={heading}>
            <h2>{heading}</h2>
            <p>{text}</p>
          </section>
        ))}
      </div>
    </>
  );
}
