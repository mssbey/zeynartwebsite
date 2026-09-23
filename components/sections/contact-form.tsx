'use client';
import { useState, useRef, type FormEvent } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Download } from 'lucide-react';
import { services } from '@/data/services';
export function ContactFormWithQuery() {
  const query = useSearchParams();
  return (
    <ContactForm
      initialService={query.get('hizmet') ?? ''}
      initialSector={query.get('sektor') ?? ''}
    />
  );
}
export function ContactForm({
  initialService = '',
  initialSector = '',
}: {
  initialService?: string;
  initialSector?: string;
}) {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState('');
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    download();
  }
  function download() {
    if (!form.current?.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form.current));
    const text = `ROVA DIGITAL — PROJE NOTU\n\nAd Soyad: ${data.name}\nE-posta: ${data.email}\nŞirket: ${data.company || 'Belirtilmedi'}\nHizmet: ${data.service}\nBütçe: ${data.budget}\n${initialSector ? `Sektör: ${initialSector}\n` : ''}\nProje fikri:\n${data.message}\n`;
    const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'rova-proje-notu.txt';
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setStatus('Proje notunuz indirildi. Bu işlem mesajınızı ROVA Digital’e göndermez.');
  }
  return (
    <form ref={form} className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label className="form-field">
          Ad soyad *
          <input
            name="name"
            autoComplete="name"
            placeholder="Adınız ve soyadınız"
            required
            minLength={2}
            maxLength={100}
          />
        </label>
        <label className="form-field">
          E-posta adresiniz *
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="siz@sirketiniz.com"
            required
            maxLength={200}
          />
        </label>
      </div>
      <div className="form-row">
        <label className="form-field">
          Şirket / kurum
          <input
            name="company"
            autoComplete="organization"
            placeholder="Şirket veya kurum adı"
            maxLength={150}
          />
        </label>
        <label className="form-field">
          Hizmet alanı *
          <select name="service" defaultValue={initialService || ''} required>
            <option value="" disabled>
              İlgilendiğiniz alanı seçin
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
            <option value="birlikte-belirleyelim">Birlikte belirleyelim</option>
          </select>
        </label>
      </div>
      <label className="form-field">
        Bütçe aralığınız
        <select name="budget" defaultValue="Birlikte değerlendirelim">
          <option>Birlikte değerlendirelim</option>
          <option>100.000 TL altı</option>
          <option>100.000 – 300.000 TL</option>
          <option>300.000 – 750.000 TL</option>
          <option>750.000 TL üzeri</option>
        </select>
      </label>
      <label className="form-field">
        Proje kapsamı ve hedefleriniz *
        <textarea
          name="message"
          placeholder="İş hedefleriniz, ihtiyaç duyduğunuz çözüm ve öngördüğünüz proje takvimi hakkında bilgi paylaşabilirsiniz."
          required
          minLength={15}
          maxLength={5000}
          rows={5}
          defaultValue={
            initialSector ? `${initialSector} sektöründe bir proje geliştirmek istiyorum. ` : ''
          }
        />
      </label>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ display: 'none' }}
      />
      <label className="form-check">
        <input name="consent" type="checkbox" required />
        <span>
          <Link href="/gizlilik">Gizlilik bilgilendirmesini</Link> okudum. Projem hakkında iletişime
          geçilmesini kabul ediyorum.
        </span>
      </label>
      <div className="form-actions">
        <button type="submit" className="button button-primary">
          Proje notunu indir <Download size={16} />
        </button>
      </div>
      <p className="form-hint">
        Formu doldurarak proje notunuzu cihazınıza indirebilirsiniz; bilgileriniz sunucuya
        gönderilmez.
      </p>
      {status && (
        <p role="status" className="form-status">
          {status}
        </p>
      )}
    </form>
  );
}
