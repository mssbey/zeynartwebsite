'use client';
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="not-found">
      <p className="eyebrow">KISA BİR ARA</p>
      <h1>Bir şeyler yolunda gitmedi.</h1>
      <p>Sayfayı yeniden yükleyerek devam edebilirsiniz.</p>
      <button className="button button-primary" onClick={reset}>
        Tekrar dene
      </button>
    </div>
  );
}
