import { metadata } from '@/lib/site';
import { PageIntro } from '@/components/ui/page-intro';
import { ArticleGrid } from '@/components/sections/blog';
import { CTA } from '@/components/sections/cta';
export const generateMetadata = () =>
  metadata(
    'Blog & İçgörüler',
    'Dijital ürün geliştirme, tasarım ve yapay zeka üzerine ROVA Digital bakış açısı.',
    '/blog',
  );
export default function BlogPage() {
  return (
    <>
      <PageIntro
        label="İÇGÖRÜLER"
        title={
          <>
            Biraz fikir.
            <br />
            <span className="muted">Biraz gelecek.</span>
          </>
        }
        description="Üretirken öğrendiklerimiz, üzerinde düşündüklerimiz ve dijitalin bir sonraki adımına dair notlarımız."
      />
      <div className="container page-body">
        <ArticleGrid />
      </div>
      <CTA />
    </>
  );
}
