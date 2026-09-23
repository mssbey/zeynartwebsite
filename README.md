# ROVA DIGITAL

Türkçe, sinematik bir dijital teknoloji ajansı sitesi. Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion ve Lucide ile hazırlanmıştır.

## Çalıştırma

Node.js 20.9 veya üzeri gerekir.

```bash
npm install
npm run dev
```

Site: http://localhost:3000

```bash
npm run typecheck
npm run lint
npm run build   # statik çıktı: out/
```

## Yapı

- `app/`: ana sayfa, hizmetler, projeler, blog, hakkımızda, iletişim ve bilgi sayfaları.
- `components/sections/`: yeniden kullanılabilir sayfa bölümleri.
- `components/layout/`: başlık, mobil menü, altbilgi ve etkileşimler.
- `components/ui/`: özgün SVG logo, butonlar, kart görselleri ve yapılandırılmış veri.
- `data/`: hizmet, proje, makale ve bilgi sayfası içerikleri.
- `public/images/`: yerel, optimize edilmiş mimari görsel.
- `lib/site.ts`: site URL’si, iletişim adresi, metadata ve gelecekteki dil desteği için yerel ayar tanımı. Görünür arayüz şu anda Türkçedir; İngilizce çeviri henüz sunulmaz.

## Yayına alma ayarları

`.env.example` dosyasını `.env.local` olarak kopyalayın. `NEXT_PUBLIC_SITE_URL` değerini doğrulanmış alan adınızla değiştirin; canonical, sitemap, robots ve JSON-LD bu adresi kullanır. Mevcut `https://rovadigital.com` değeri yapılandırma varsayımıdır, alan adı sahipliği doğrulanmamıştır.

`NEXT_PUBLIC_CONTACT_EMAIL` alanına doğrulanmış iş e-postanızı ekleyin. Sosyal hesaplar verilmediği için doğrulanmamış profil bağlantıları eklenmemiştir.

Site `output: 'export'` ile tamamen statik üretilir (`out/` klasörü) ve Vercel'de sunucu gerektirmeden yayınlanır. Bu nedenle sunucu tarafı API yoktur; iletişim formu yalnızca yerel `.txt` proje notu indirir ve gönderim iddiasında bulunmaz. Çevrimiçi gönderim gerekirse Formspree gibi harici bir form servisi bağlanabilir.

Vercel: repoyu içe aktarın, framework olarak Next.js otomatik algılanır. `NEXT_PUBLIC_SITE_URL` ve `NEXT_PUBLIC_CONTACT_EMAIL` değişkenlerini proje ayarlarından tanımlayın; bu değerler build sırasında sayfalara gömülür.

Orbit, Forma ve Nexus özgün konsept çalışmalardır; gerçek müşteri projesi ve doğrulanmış sonuç olarak sunulmaz. Gerçek portföyünüzü `data/projects.ts` üzerinden ekleyin. Şirketin veri sorumlusu bilgileri, adresi, saklama süreleri ve başvuru kanalları verilmediği için KVKK sayfası yalnızca mevcut durumu açıklar; işletme bilgileriyle tamamlanmalıdır.

## Görsel kaydı

Ana mimari görsel yerleşik `image_gen` aracıyla üretildi. Optimize dosya: `public/images/architecture.webp` (1672 × 941, yaklaşık 111 KB). Kaynak görsel: `assets/architecture-source.png`. İstem: `assets/image-generation-prompt.txt`.

İkinci sahne: `public/images/architecture-atrium.webp`. Kaynak görsel: `assets/architecture-atrium-source.png`. Yerleşik `image_gen` üretim istemi: `assets/image-generation-atrium-prompt.txt`.

Logo ve proje görselleri özgün SVG/CSS geometrisiyle oluşturulmuştur. Platform isimleri teknoloji desteğini anlatır; müşteri veya iş ortaklığı iddiası değildir.

## Davranış ve erişilebilirlik

- Slayt denetimleri ve duraklatma düğmesi.
- Native `dialog` tabanlı, Escape ile kapanan ve odağı geri veren mobil menü.
- Klavye odakları, içerik atlama bağlantısı, alan etiketleri ve durum bildirimleri.
- Hareket azaltma desteği; dokunmatik cihazlarda dekoratif imleç kapalıdır.
- Yerel font sunumu, `next/image`, statik içerik sayfaları, sitemap, robots, OpenGraph ve llms.txt.
- Tek oturumluk kısa intro için `sessionStorage`; analitik veya reklam takip kodu yoktur.

## Görsel özelleştirme

Renkler ve duyarlı düzenler `app/globals.css` içindedir. Ana görseli aynı dosya adıyla değiştirerek güncelleyebilirsiniz. Hizmet sayfaları, proje incelemeleri ve blog yazıları ortak bileşenler ve veri dosyalarından üretilir.

## Doğrulama

`npm run build`, `npm run typecheck` ve `npm run lint` başarıyla geçti. `npm audit` kurulu bağımlılıklarda güvenlik açığı bildirmedi.

Çalışan üretim sunucusu üzerinde `node scripts/verify-http.mjs` ile 27 içerik sayfası, 40 iç bağlantı ve toplam 54 HTTP kontrolü doğrulandı. Kontrol; başlık, canonical, açıklama, OpenGraph, JSON-LD, görsel yanıtları, sayfa içi bağlantılar, bulunmayan sayfaların 404 yanıtları ve yapılandırılmamış iletişim formunun gönderim iddiasında bulunmamasını kapsar.

Bu çalışma oturumunda bağlı bir tarayıcı bulunmadığından gerçek tarayıcıda ekran görüntüsü, mobil menü etkileşimi, konsol ve Lighthouse ölçümü yapılamadı. Responsive CSS ve erişilebilirlik davranışları uygulanmıştır; görsel doğrulama tamamlanmış sayılmamalıdır. Formun canlı sağlayıcıyla teslim testi, gerçek iletişim ayarları tanımlandıktan sonra yapılmalıdır.
