import { journalArticles } from './journal';
import wpPosts from './wp-posts.json';
export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  read: string;
  date: string;
  service?: string;
  image?: string | null;
  sections?: { heading: string; text: string }[];
  // WordPress'ten aktarılan yazıların temizlenmiş HTML içeriği
  html?: string;
};
export type ArticleSummary = Omit<Article, 'sections' | 'html'>;
const originalArticles = [
  {
    slug: 'fikrinizden-ilk-urune',
    category: 'ÜRÜN STRATEJİSİ',
    title: 'Bir fikirden ilk ürüne: doğru yerden başlamak.',
    excerpt: 'MVP kapsamını belirlerken daha fazla özellik yerine doğru probleme odaklanmak.',
    read: '4 dk',
    date: '2026-09-15',
    sections: [
      {
        heading: 'Önce çözmeye değer problemi bulun',
        text: 'Bir dijital ürünün başlangıç noktası özellik listesi değil, kullanıcının tekrar tekrar karşılaştığı bir ihtiyaçtır. İlk görüşmelerde insanların ne istediğinden çok, bugün işlerini nasıl yaptığını anlamaya çalışın. Mevcut alternatifler ve geçici çözümler, problemin ağırlığını görünür kılar.',
      },
      {
        heading: 'İlk sürümün sınırını çizin',
        text: 'MVP, bütün ürünün küçük bir kopyası olmak zorunda değildir. Temel varsayımınızı sınayacak en kısa kullanıcı yolculuğunu seçin. Örneğin bir rezervasyon ürününde önce arama, uygun saat ve rezervasyon onayını çözmek; sadakat sistemini sonraya bırakmak anlamlı olabilir.',
      },
      {
        heading: 'Başarıyı önceden tanımlayın',
        text: 'Yayına çıkmadan önce ne öğreneceğinizi belirleyin. Kullanıcılar ana görevi tamamlayabiliyor mu? Hangi adımda zorlanıyorlar? Görüşmeler ve görev tamamlama gözlemleri, erken aşamada salt ziyaretçi sayısından daha faydalı olabilir.',
      },
      {
        heading: 'Geliştirmeyi öğrenme döngüsüne dönüştürün',
        text: 'Küçük ve geri alınabilir sürümler yayınlayın. Geri bildirimi, teknik borcu ve kullanıcı ihtiyacını birlikte değerlendirin. Sağlam bir ürün yol haritası, değişen bilgiyi içine alabilecek kadar esnektir.',
      },
    ],
    service: 'web-yazilim',
  },
  {
    slug: 'yapay-zeka-is-surecleri',
    category: 'YAPAY ZEKA',
    title: 'Yapay zekanın işinizde gerçekten değer yarattığı yer.',
    excerpt: 'Bir AI projesini teknoloji gösterisinden iş çözümüne dönüştüren sorular.',
    read: '5 dk',
    date: '2026-09-08',
    sections: [
      {
        heading: 'Teknolojiden değil, iş akışından başlayın',
        text: 'Yapay zeka yatırımı için ilk soru hangi modelin kullanılacağı değildir. Hangi iş akışının gereksiz zaman aldığı, nerede kalite sorunu yaşandığı ve hangi verinin mevcut olduğu daha belirleyicidir. Belge sınıflandırma, kurum içi arama ve taslak yanıt hazırlama iyi başlangıç noktaları olabilir.',
      },
      {
        heading: 'Verinizin sınırlarını tanıyın',
        text: 'Eksik, güncelliğini yitirmiş veya erişim izni belirsiz bir bilgi tabanı doğru yanıt üretimini zorlaştırır. İçeriğin kaynağını, sahibini ve güncelleme sıklığını tanımlayın. Her kullanıcının yalnızca yetkili olduğu bilgilere erişmesini tasarımın başında ele alın.',
      },
      {
        heading: 'İnsan onayını doğru yerde tutun',
        text: 'Düşük riskli sınıflandırma işlemleri otomatik ilerleyebilirken, finansal veya geri döndürülemeyen işlemler insan incelemesi gerektirebilir. Sistemin belirsizliğini göstermesi ve gerektiğinde işi bir uzmana devretmesi önemlidir.',
      },
      {
        heading: 'Küçük bir pilot ile değerlendirin',
        text: 'Temsil edici örneklerden bir değerlendirme kümesi hazırlayın. Doğruluk, yanıt süresi, maliyet ve kullanıcı düzeltmelerini birlikte izleyin. Üretime geçiş kararı yalnızca etkileyici birkaç örneğe değil, tekrarlanabilir sonuçlara dayanmalıdır.',
      },
    ],
    service: 'web-yazilim',
  },
  {
    slug: 'hizli-web-deneyimi',
    category: 'TASARIM & TEKNOLOJİ',
    title: 'Hız, iyi bir dijital deneyimin görünmeyen tasarımıdır.',
    excerpt: 'Performansı projenin sonundaki bir kontrol listesinden çıkarın.',
    read: '3 dk',
    date: '2026-09-01',
    sections: [
      {
        heading: 'Hız bir tasarım kararıdır',
        text: 'Bir sayfanın hızını yalnızca sunucu belirlemez. Görsel boyutları, font seçimleri, animasyonlar ve üçüncü taraf araçlar da kullanıcı deneyimini etkiler. Performans bütçesini tasarım aşamasında konuşmak sonradan yapılacak düzeltmeleri azaltır.',
      },
      {
        heading: 'Önce ana içeriği ulaştırın',
        text: 'Sayfanın ilk görünümünde gerekli olan içerik ile daha sonra yüklenebilecek öğeleri ayırın. Görseller için uygun boyutlar ve modern biçimler kullanın. Ekranın altındaki içerikleri gerektiğinde yükleyin, görsel alanlarını baştan ayırarak yerleşim kaymalarını önleyin.',
      },
      {
        heading: 'Gerçek koşullarda kontrol edin',
        text: 'Hızlı bir bilgisayar ve güçlü bağlantı bütün kullanıcıları temsil etmez. Orta sınıf cihazlar, mobil ağlar ve klavye kullanımıyla deneyimi değerlendirin. Laboratuvar testlerini gerçek kullanıcı geri bildirimleriyle birlikte okuyun.',
      },
    ],
    service: 'web-yazilim',
  },
];
export const articles: Article[] = [
  ...journalArticles,
  ...originalArticles,
  ...(wpPosts as Article[]),
];
// İstemci bileşenlerine yalnızca liste için gereken alanları gönderin.
export const articleSummaries: ArticleSummary[] = articles.map(
  ({ sections: _sections, html: _html, ...summary }) => summary,
);
