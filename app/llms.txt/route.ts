import { siteUrl } from '@/lib/site';
import { services } from '@/data/services';
export const dynamic = 'force-static';
export function GET() {
  return new Response(
    `# ROVA DIGITAL\n\n> Strateji, tasarım ve yazılım geliştirme hizmetleri sunan dijital teknoloji ajansı. Site dili Türkçedir.\n\n## Hizmetler\n${services.map((s) => `- [${s.title}](${siteUrl}/hizmetler/${s.slug}): ${s.short}`).join('\n')}\n\n## Şirket\n- [Hakkımızda](${siteUrl}/hakkimizda)\n- [İletişim](${siteUrl}/iletisim)\n- [Blog](${siteUrl}/blog)\n- [Projeler](${siteUrl}/projeler): Özgün konsept çalışmalar; gerçek müşteri projesi veya doğrulanmış ticari sonuç olarak sunulmaz.\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
}
