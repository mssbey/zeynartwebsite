import Image from 'next/image';
import { ArrowUpRight, Check, Layers, Palette, PenTool, Type } from 'lucide-react';
import { LinkButton } from '@/components/ui/link-button';

const offerings = [
  {
    icon: PenTool,
    title: 'Logo & kurumsal kimlik',
    text: 'Markanızın karakterini yansıtan bir logo ve her temas noktasında aynı dili konuşan bir kimlik.',
    items: [
      'Logo ve alternatif kullanımlar',
      'Renk paleti ve tipografi',
      'Kartvizit, antetli kâğıt ve imza',
    ],
  },
  {
    icon: Layers,
    title: 'Basılı tasarım',
    text: 'Ekranda başlayan fikri, elinize aldığınızda da aynı etkiyi yaratan materyallere dönüştürüyoruz.',
    items: ['Katalog ve ürün föyleri', 'Broşür, afiş ve davetiye', 'Ambalaj ve etiket tasarımı'],
  },
  {
    icon: Palette,
    title: 'Dijital iletişim',
    text: 'Akışta dikkat çeken, markanızla bağ kuran ve farklı mecralara uyum sağlayan tasarımlar.',
    items: [
      'Sosyal medya gönderi ve hikâyeleri',
      'Dijital reklam ve banner setleri',
      'Sunum ve kampanya görselleri',
    ],
  },
  {
    icon: Type,
    title: 'Marka tasarım rehberi',
    text: 'Ekibiniz büyürken de görsel bütünlüğünüzü koruyabileceğiniz, uygulanabilir bir tasarım sistemi.',
    items: [
      'Logo kullanım kuralları',
      'Görsel dil ve kompozisyon',
      'Tekrar kullanılabilir şablonlar',
    ],
  },
];
const steps = [
  [
    'Keşif & strateji',
    'Markanızı, hedef kitlenizi ve iletişim ihtiyacınızı dinliyor; tasarımın yönünü birlikte belirliyoruz.',
  ],
  [
    'Konsept & tasarım',
    'Referans panosu, renk ve tipografi seçimlerinden başlayarak özgün görsel yönler geliştiriyoruz.',
  ],
  [
    'Geri bildirim & geliştirme',
    'Tasarımları gerçek kullanım alanlarında sunuyor, birlikte değerlendirdiğimiz revizyonlarla olgunlaştırıyoruz.',
  ],
  [
    'Teslim & uygulama',
    'Onaylanan çalışmaları, anlaşılan kapsama göre baskı ve dijital kullanıma uygun dosyalarla teslim ediyoruz.',
  ],
];

export function GraphicDesignContent() {
  return (
    <div className="graphic-page">
      <section className="container design-showcase" aria-labelledby="design-showcase-title">
        <div className="design-showcase-top">
          <span>ZEYNART / TASARIM STÜDYOSU</span>
          <span>
            FİKİRDEN GÖRSEL KİMLİĞE <ArrowUpRight size={16} />
          </span>
        </div>
        <div className="design-brand-image">
          <Image
            src="/images/zeynart-identity-still-life.webp"
            alt="Zeynart logosuyla turkuaz kartvizitler, kurumsal dosya ve basılı marka kimliği uygulamaları"
            fill
            sizes="(max-width: 760px) 100vw, 90vw"
          />
          <div className="design-image-label">
            <span>ZEYNART</span>
            <span>BRAND IDENTITY / 01</span>
          </div>
        </div>
        <div className="design-showcase-bottom">
          <h2 id="design-showcase-title">Bir logodan çok daha fazlası.</h2>
          <p>
            Her mecrada tanınan, her detayda size ait bir görsel dünya.
            <br />
            <span>Tasarım yaklaşımımızı yansıtan konsept uygulamalar.</span>
          </p>
        </div>
      </section>
      <section className="container zeynart-art-direction" aria-labelledby="art-direction-title">
        <div className="zeynart-art-direction-copy">
          <p className="eyebrow">BİZİM İMZAMIZ, SİZİN HİKÂYENİZ.</p>
          <h2 id="art-direction-title">
            Tasarımda karakter.
            <br />
            <span className="about-accent">Her detayda Zeynart.</span>
          </h2>
          <p>
            Bir rengin enerjisi, bir çizginin karakteri, bir dokunun hissi. Markanın bütününü
            oluşturan detayları aynı yaratıcı bakışla bir araya getiriyoruz.
          </p>
          <div className="zeynart-palette" aria-label="Zeynart marka renkleri">
            <span>Petrol</span>
            <span>Turkuaz</span>
            <span>Buz beyazı</span>
          </div>
          <LinkButton href="/iletisim?hizmet=grafik-tasarim">
            Markanızın hikâyesini tasarlayalım
          </LinkButton>
        </div>
        <figure className="zeynart-emblem-figure">
          <Image
            src="/images/zeynart-emblem-gallery.webp"
            alt="Zeynart’ın turkuaz cam ve gümüş detaylı Z amblemiyle hazırlanan marka kompozisyonu"
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
          />
          <figcaption>ZEYNART / CREATIVE PERSPECTIVE</figcaption>
        </figure>
      </section>
      <section className="section container" aria-labelledby="design-services-title">
        <div className="studio-section-heading">
          <div>
            <p className="eyebrow">TASARIMIN HER ALANINDA</p>
            <h2 id="design-services-title">
              Bir bütün olarak
              <br />
              <span className="about-accent">markanız.</span>
            </h2>
          </div>
          <p>
            İlk izlenimden günlük iletişime kadar, markanızın ihtiyaç duyduğu görsel dili aynı
            özenle tasarlıyoruz.
          </p>
        </div>
        <div className="design-offerings">
          {offerings.map(({ icon: Icon, title, text, items }, i) => (
            <article key={title}>
              <div className="design-card-top">
                <Icon size={25} />
                <span>0{i + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <ul>
                {items.map((item) => (
                  <li key={item}>
                    <Check size={14} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="container design-manifesto">
        <span className="eyebrow">TASARIMA BAKIŞIMIZ</span>
        <h2>
          Estetik bir başlangıç.
          <br />
          <span>Akılda kalıcı bir bütün.</span>
        </h2>
        <p>
          Güzel görünen bir tasarımın ötesine geçiyor; okunabilirliği, uygulanabilirliği ve
          markanızla kurduğu bağı birlikte düşünüyoruz.
        </p>
        <div className="design-principles">
          <span>01 / Özgün karakter</span>
          <span>02 / Tutarlı görsel dil</span>
          <span>03 / Her mecraya uyum</span>
        </div>
      </section>
      <section className="section container" aria-labelledby="design-process-title">
        <div className="studio-section-heading">
          <div>
            <p className="eyebrow">BİRLİKTE NASIL İLERLİYORUZ?</p>
            <h2 id="design-process-title">Fikirden son dokunuşa.</h2>
          </div>
          <p>
            Beklentileri baştan netleştirdiğimiz, her aşamasında sizin de yer aldığınız şeffaf bir
            tasarım süreci.
          </p>
        </div>
        <div className="design-process">
          {steps.map(([title, text], i) => (
            <article key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="container design-delivery">
        <div>
          <p className="eyebrow">KULLANIMA HAZIR TESLİM</p>
          <h2>
            İyi tasarım, doğru
            <br />
            dosyayla tamamlanır.
          </h2>
          <p>
            Dosya formatları, revizyon kapsamı ve teslim takvimini teklif aşamasında birlikte
            belirliyoruz. İhtiyacınıza göre vektörel dosyalar, baskıya uygun PDF ve dijital
            görseller hazırlıyoruz.
          </p>
          <div className="stack-tags">
            <span>SVG / PDF</span>
            <span>PNG / JPG</span>
            <span>CMYK / RGB</span>
            <span>Marka rehberi</span>
          </div>
        </div>
        <div className="design-delivery-note">
          <PenTool size={32} />
          <h3>
            Markanıza yeni bir
            <br />
            gözle bakalım.
          </h3>
          <p>
            Yeni bir başlangıç ya da mevcut kimliğinize taze bir dokunuş. İhtiyacınızı birlikte
            şekillendirelim.
          </p>
          <LinkButton primary href="/iletisim?hizmet=grafik-tasarim">
            Tasarım projenizi konuşalım
          </LinkButton>
        </div>
      </section>
      <section className="container section faq">
        <h2>Tasarım hakkında merak edilenler.</h2>
        {[
          [
            'Mevcut logomla çalışabilir misiniz?',
            'Evet. Mevcut kimliğinizin güçlü yönlerini koruyarak yeni materyaller tasarlayabilir veya ihtiyacınıza göre görsel kimliğinizi yenileyebiliriz.',
          ],
          [
            'Tasarım için hangi bilgilere ihtiyacınız var?',
            'Markanızın hikâyesi, hedef kitleniz, kullanım alanları, içerikleriniz ve varsa mevcut kurumsal kimlik dosyalarınızla başlıyoruz. Görsel yönü keşif aşamasında birlikte netleştiriyoruz.',
          ],
          [
            'Baskı hizmeti de kapsama dahil mi?',
            'Baskıya uygun tasarım dosyalarını hazırlıyoruz. Baskı üretimi, malzeme seçimi ve matbaa koordinasyonu ihtiyacını ayrıca değerlendirerek teklif kapsamını netleştiriyoruz.',
          ],
          [
            'Teslim süresi ve revizyonlar nasıl belirleniyor?',
            'İşin adedi, kapsamı ve içeriklerin hazır olmasına göre bir takvim oluşturuyoruz. Konsept ve revizyon adımlarını çalışmaya başlamadan önce teklifimizde belirtiyoruz.',
          ],
        ].map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </section>
    </div>
  );
}
