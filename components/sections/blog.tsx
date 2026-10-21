import Link from 'next/link';
import Image from 'next/image';
import { articleImage } from '@/lib/journal';
import { ArrowUpRight } from 'lucide-react';
import { articles } from '@/data/articles';
import { SectionHeading } from '@/components/ui/section-heading';
import { LinkButton } from '@/components/ui/link-button';
export function ArticleGrid() {
  return (
    <div className="article-grid">
      {articles.slice(0, 3).map((article) => (
        <Link href={`/blog/${article.slug}`} className="article-card" key={article.slug}>
          <div className="article-art journal-home-art" aria-hidden="true">
            <Image
              src={articleImage(article)}
              alt=""
              fill
              sizes="(max-width: 760px) 100vw, 30vw"
            />
          </div>
          <div className="article-meta">
            <span>{article.category}</span>
            <span>{article.read} okuma</span>
          </div>
          <h3>{article.title}</h3>
          <div className="article-bottom">
            <span>Yazıyı oku</span>
            <ArrowUpRight size={19} />
          </div>
        </Link>
      ))}
    </div>
  );
}
export function Blog() {
  return (
    <section className="section container">
      <SectionHeading
        label="İÇGÖRÜLER"
        title={
          <>
            Biraz fikir.
            <br />
            <span className="muted">Biraz gelecek.</span>
          </>
        }
      >
        <LinkButton href="/blog">Tüm yazılar</LinkButton>
      </SectionHeading>
      <ArticleGrid />
    </section>
  );
}
