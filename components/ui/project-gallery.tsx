import { ProjectVisual } from '@/components/ui/project-visual';
export function ProjectGallery({ theme, name }: { theme: string; name: string }) {
  return (
    <section className="case-gallery-section">
      <p className="eyebrow">
        <span />
        DENEYİMDEN DETAYLAR
      </p>
      <h2>Her ekranda aynı özen.</h2>
      <div className="case-gallery">
        <div className={`gallery-mobile gallery-${theme}`}>
          <div className="gallery-phone">
            <div className="phone-notch" />
            <ProjectVisual theme={theme} />
          </div>
          <span>01 / MOBİL DENEYİM KONSEPTİ</span>
        </div>
        <div className={`gallery-interface gallery-${theme}`}>
          <div className="interface-window">
            <div className="interface-header">
              <b>{name.toLowerCase()}</b>
              <span>
                Genel bakış <i>•••</i>
              </span>
            </div>
            <div className="interface-greeting">
              {theme === 'forma'
                ? 'Daha az, daha anlamlı.'
                : theme === 'orbit'
                  ? 'Her şey, daha net.'
                  : 'Bugün birlikte ne yapıyoruz?'}
            </div>
            <div className="interface-blocks">
              {(theme === 'forma'
                ? ['Doğal dokular', 'Zamansız formlar', 'Yeni koleksiyon']
                : theme === 'orbit'
                  ? ['Hesaplarım', 'Harcama özeti', 'Hedeflerim']
                  : ['Projeler', 'Takım alanı', 'Tamamlananlar']
              ).map((label, i) => (
                <div key={label}>
                  <span>0{i + 1}</span>
                  <strong>{label}</strong>
                  <div className="interface-lines">
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              ))}
            </div>
            <div className="interface-footer">
              <span>
                {theme === 'forma'
                  ? 'Koleksiyonu keşfedin'
                  : theme === 'orbit'
                    ? 'Finansal görünümünüz'
                    : 'Çalışma alanınız'}
              </span>
              <span>↗</span>
            </div>
          </div>
          <span>02 / ARAYÜZ VE BİLGİ HİYERARŞİSİ</span>
        </div>
      </div>
    </section>
  );
}
