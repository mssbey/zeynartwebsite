import { ImageResponse } from 'next/og';
export const dynamic = 'force-static';
export const alt = 'ROVA DIGITAL — Dijitalde Daha Fazlası Mümkün.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: '#080c11',
        padding: '80px',
        color: '#f5f7fa',
      }}
    >
      <div style={{ display: 'flex', fontSize: 24, letterSpacing: 12, marginBottom: 55 }}>
        ROVA DIGITAL
      </div>
      <div style={{ display: 'flex', fontSize: 76, fontWeight: 700, letterSpacing: -3 }}>
        Dijitalde Daha Fazlası
      </div>
      <div style={{ display: 'flex', fontSize: 80, color: '#3882f6' }}>Mümkün.</div>
      <div
        style={{ display: 'flex', marginTop: 38, fontSize: 16, letterSpacing: 4, color: '#94a3b8' }}
      >
        STRATEJİ · TASARIM · TEKNOLOJİ
      </div>
    </div>,
    size,
  );
}
