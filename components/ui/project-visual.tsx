export function ProjectVisual({ theme, large = false }: { theme: string; large?: boolean }) {
  return (
    <div aria-hidden="true" className={`project-visual ${theme} ${large ? 'large' : ''}`}>
      {theme === 'orbit' ? (
        <>
          <div className="orbit-halo" />
          <div className="finance-card">
            <div className="finance-top">
              <b>
                orbit<span>®</span>
              </b>
              <span>•••</span>
            </div>
            <small>TOPLAM BAKİYE</small>
            <strong>
              ₺ 284.650<span>,00</span>
            </strong>
            <div className="finance-chart">
              {[25, 40, 31, 52, 45, 66, 57, 72, 68, 85, 76, 96].map((v, i) => (
                <i key={i} style={{ height: `${v}%` }} />
              ))}
            </div>
            <div className="finance-bottom">
              <span>Finansın, senin elinde.</span>
              <span>↗</span>
            </div>
          </div>
          <span className="visual-caption">DAHA NET BİR FİNANSAL GELECEK.</span>
        </>
      ) : theme === 'forma' ? (
        <>
          <span className="forma-title">
            forma<span>yaşamın doğal hali.</span>
          </span>
          <div className="sculpture">
            <div className="vase vase-one" />
            <div className="vase vase-two" />
            <div className="sculpture-base" />
          </div>
          <span className="visual-caption">AZ. ÖZ. ZAMANSIZ.</span>
        </>
      ) : (
        <>
          <div className="nexus-orbits">
            <i />
            <i />
            <i />
          </div>
          <span className="nexus-title">
            nexus<span>Birlikte. Daha ileri.</span>
          </span>
          <div className="task-float task-one">
            <i /> Tasarımdan gerçeğe <span>↗</span>
          </div>
          <div className="task-float task-two">
            <span>✳</span> Yeni bir çalışma biçimi.
          </div>
          <span className="visual-caption">FİKİRLERE YER AÇIN.</span>
        </>
      )}
    </div>
  );
}
