import { ImageResponse } from 'next/og';
export const dynamic = 'force-static';
export const alt = 'Zeynart Web Bilişim — Siz hayal edin, Zeynart tasarlasın.';
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
        background: '#070f12',
        padding: '80px',
        color: '#f5f7fa',
      }}
    >
      <div style={{ display: 'flex', fontSize: 24, letterSpacing: 12, marginBottom: 55 }}>
        ZEYNART
      </div>
      <div style={{ display: 'flex', fontSize: 76, fontWeight: 700, letterSpacing: -3 }}>
        Siz hayal edin,
      </div>
      <div style={{ display: 'flex', fontSize: 80, color: '#16b7c5' }}>Zeynart tasarlasın.</div>
      <div
        style={{ display: 'flex', marginTop: 38, fontSize: 16, letterSpacing: 4, color: '#94a3b8' }}
      >
        WEB · GRAFİK · YAZILIM · HOSTING
      </div>
    </div>,
    size,
  );
}
