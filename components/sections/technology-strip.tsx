export function TechnologyStrip() {
  return (
    <section
      className="technology-strip container"
      id="teknolojiler"
      aria-label="Kullandığımız platformlar"
    >
      <div className="strip-label">
        <p className="eyebrow">BİRLİKTE DAHA GÜÇLÜYÜZ</p>
        <span>Güvendiğimiz teknolojiler ve platformlar.</span>
      </div>
      <div className="platforms">
        <span className="shopify">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="m5 7 2-1c0-6 9-6 9 0l3 1 2 15-18-2L5 7Zm5-1 4-1c-1-4-4-3-4 1Z"
              fill="currentColor"
            />
            <text x="8" y="17" fill="#080c11" fontSize="11" fontWeight="bold">
              S
            </text>
          </svg>
          shopify
        </span>
        <span className="stripe">stripe</span>
        <span className="aws">
          aws
          <svg viewBox="0 0 55 12" aria-hidden="true">
            <path
              d="M3 2Q25 17 49 3M44 2 51 2 49 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </span>
        <span className="vercel">
          <i />
          Vercel
        </span>
        <span className="figma">
          <svg viewBox="0 0 22 32" aria-hidden="true">
            <path
              d="M6 1a5 5 0 0 0 0 10h5V1H6Zm5 0h5a5 5 0 0 1 0 10h-5V1ZM6 11a5 5 0 0 0 0 10h5V11H6Zm5 5a5 5 0 1 0 10 0 5 5 0 0 0-10 0ZM6 21a5 5 0 1 0 5 5v-5H6Z"
              fill="currentColor"
            />
          </svg>
          figma
        </span>
        <span className="google">Google Cloud</span>
      </div>
    </section>
  );
}
