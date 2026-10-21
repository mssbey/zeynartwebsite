import { metadata, contactEmail, contactPhone } from '@/lib/site';
import { PageIntro } from '@/components/ui/page-intro';
import { Suspense } from 'react';
import { ContactForm, ContactFormWithQuery } from '@/components/sections/contact-form';
import { ArrowUpRight, Phone, Mail } from 'lucide-react';
export const generateMetadata = () =>
  metadata(
    'İletişim',
    'Dijital ürün, kurumsal yazılım ve teknoloji projeleriniz için Zeynart Web Bilişim ile iletişime geçin. 0850 305 0 533.',
    '/iletisim',
  );
export default function ContactPage() {
  return (
    <div className="contact-page">
      <PageIntro
        background="/images/banners/contact.webp"
        label="İLETİŞİM"
        title={
          <>
            Büyük hedefler.
            <br />
            <span className="muted">Doğru başlangıç.</span>
          </>
        }
        description="Dijital dönüşüm, yeni bir ürün veya kurumsal yazılım yatırımı. Hedeflerinizi dinleyelim, ihtiyacınıza uygun çözümü ve yol haritasını birlikte belirleyelim."
      />
      <div className="container contact-layout">
        <aside className="contact-info">
          <p className="eyebrow">
            <span />
            BİRLİKTE ÇALIŞALIM
          </p>
          <h2>Doğrudan iletişim.</h2>
          <p>
            Yeni projeleriniz, teknoloji ihtiyaçlarınız ve iş birliği talepleriniz için bizimle
            iletişime geçin.
          </p>
          <a className="contact-channel" href={contactPhone.href}>
            <span className="contact-channel-icon">
              <Phone size={21} strokeWidth={1.4} />
            </span>
            <span className="contact-channel-copy">
              <small>TELEFON</small>
              <strong>{contactPhone.display}</strong>
            </span>
            <ArrowUpRight className="contact-channel-arrow" size={20} />
          </a>
          {contactEmail && (
            <a className="contact-channel contact-channel-email" href={`mailto:${contactEmail}`}>
              <span className="contact-channel-icon">
                <Mail size={21} strokeWidth={1.4} />
              </span>
              <span className="contact-channel-copy">
                <small>E-POSTA</small>
                <strong>{contactEmail}</strong>
              </span>
              <ArrowUpRight className="contact-channel-arrow" size={20} />
            </a>
          )}
          <div className="contact-next-steps">
            <h3>İlk görüşmeden yol haritasına.</h3>
            <ol>
              <li>
                <span>01</span>
                <div>
                  <h4>İhtiyacınızı anlıyoruz.</h4>
                  <p>Hedeflerinizi, mevcut yapınızı ve önceliklerinizi değerlendiriyoruz.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h4>Kapsamı netleştiriyoruz.</h4>
                  <p>
                    İş hedeflerinize uygun çözümü ve proje gereksinimlerini birlikte belirliyoruz.
                  </p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h4>Yol haritasını oluşturuyoruz.</h4>
                  <p>Teslimatları, takvimi ve çalışma modelini açık bir çerçevede sunuyoruz.</p>
                </div>
              </li>
            </ol>
          </div>
        </aside>
        <section className="contact-form-panel" aria-labelledby="project-form-title">
          <div className="contact-form-heading">
            <p className="eyebrow">
              <span />
              PROJE TALEBİ
            </p>
            <h2 id="project-form-title">Hedeflerinizi paylaşın.</h2>
            <p>
              Projenizin kapsamını ve önceliklerinizi aktarın. Birlikte doğru başlangıcı
              planlayalım.
            </p>
          </div>
          <Suspense fallback={<ContactForm />}>
            <ContactFormWithQuery />
          </Suspense>
        </section>
      </div>
    </div>
  );
}
