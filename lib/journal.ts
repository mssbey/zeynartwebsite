const articleImages: Record<string, string> = {
  'web-sitesi-yaptirmadan-once': '/images/journal/web-planning.webp',
  'logo-ve-kurumsal-kimlik-farki': '/images/journal/brand-system.webp',
  'e-ticaret-urun-sayfasi': '/images/journal/ecommerce.webp',
  'hosting-secerken-dikkat-edilecekler': '/images/journal/hosting.webp',
  'ozel-yazilim-ne-zaman-gerekir': '/images/journal/custom-software.webp',
  'fikrinizden-ilk-urune': '/images/journal/mvp.webp',
  'yapay-zeka-is-surecleri': '/images/journal/ai-workflow.webp',
  'hizli-web-deneyimi': '/images/journal/web-performance.webp',
};

export function articleImage(article: { slug: string; image?: string | null }) {
  return article.image ?? articleImages[article.slug] ?? '/images/journal/web-planning.webp';
}

export function articleDate(date: string) {
  return new Intl.DateTimeFormat('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date));
}
