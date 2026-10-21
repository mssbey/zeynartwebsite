'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Search, X } from 'lucide-react';
import type { ArticleSummary } from '@/data/articles';
import { articleDate, articleImage } from '@/lib/journal';
const PAGE_SIZE = 24;
export function BlogExplorer({ articles }: { articles: ArticleSummary[] }) {
  const [category, setCategory] = useState('TÜMÜ');
  const [query, setQuery] = useState('');
  const [visible, setVisible] = useState(PAGE_SIZE);
  const categories = ['TÜMÜ', ...new Set(articles.map((a) => a.category))];
  const filtered = articles.filter(
    (a) =>
      (category === 'TÜMÜ' || a.category === category) &&
      `${a.title} ${a.excerpt} ${a.category}`
        .toLocaleLowerCase('tr-TR')
        .includes(query.trim().toLocaleLowerCase('tr-TR')),
  );
  return (
    <section className="container journal-library" aria-labelledby="journal-library-title">
      <div className="journal-library-heading">
        <div>
          <p className="eyebrow">ZEYNART’TAN NOTLAR</p>
          <h2 id="journal-library-title">Keşfetmeye devam edin.</h2>
        </div>
        <label className="journal-search">
          <Search size={18} />
          <span className="sr-only">Yazılarda ara</span>
          <input
            type="search"
            placeholder="Bir konu arayın…"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setVisible(PAGE_SIZE);
            }}
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setVisible(PAGE_SIZE);
              }}
              aria-label="Aramayı temizle"
            >
              <X size={16} />
            </button>
          )}
        </label>
      </div>
      <div className="journal-filters" aria-label="Yazı kategorileri">
        {categories.map((c) => (
          <button
            type="button"
            key={c}
            aria-pressed={category === c}
            onClick={() => {
              setCategory(c);
              setVisible(PAGE_SIZE);
            }}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="journal-results" aria-live="polite">
        {filtered.length} yazı
        {query ? ` · “${query}” için sonuçlar` : ' · Tasarım, teknoloji ve dijital üzerine'}
      </p>
      <div className="journal-card-grid">
        {filtered.slice(0, visible).map((a) => (
          <Link href={`/blog/${a.slug}/`} className="journal-card" key={a.slug}>
            <div className="journal-card-cover">
              <Image
                src={articleImage(a)}
                alt=""
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1050px) 45vw, 30vw"
              />
              <span>{a.category}</span>
              <i>
                <ArrowUpRight size={20} />
              </i>
            </div>
            <div className="journal-card-copy">
              <div className="journal-card-meta">
                <time dateTime={a.date}>{articleDate(a.date)}</time>
                <span>{a.read} okuma</span>
              </div>
              <h3>{a.title}</h3>
              <p>{a.excerpt}</p>
              <span className="journal-read">
                Yazıyı keşfet <ArrowUpRight size={16} />
              </span>
            </div>
          </Link>
        ))}
      </div>
      {filtered.length > visible && (
        <div className="journal-more">
          <button type="button" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
            Daha fazla yazı göster ({filtered.length - visible} kaldı)
            <ArrowUpRight size={16} />
          </button>
        </div>
      )}
      {filtered.length === 0 && (
        <div className="journal-empty">
          <Search size={30} />
          <h3>Bu aramada bir yazı bulamadık.</h3>
          <p>Başka bir kelime deneyin veya tüm yazılara göz atın.</p>
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setCategory('TÜMÜ');
              setVisible(PAGE_SIZE);
            }}
          >
            Tüm yazıları göster <ArrowUpRight size={16} />
          </button>
        </div>
      )}
    </section>
  );
}
