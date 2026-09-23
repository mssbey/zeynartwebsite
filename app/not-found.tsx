import { LinkButton } from '@/components/ui/link-button';
export default function NotFound() {
  return (
    <div className="not-found">
      <p className="eyebrow">404 — YENİ BİR YÖN</p>
      <h1>Bu yol burada bitiyor.</h1>
      <p>
        Aradığınız sayfa taşınmış veya hiç var olmamış olabilir.
        <br />
        Güzel fikirler için ana sayfada buluşalım.
      </p>
      <LinkButton href="/" primary>
        Ana sayfaya dön
      </LinkButton>
    </div>
  );
}
