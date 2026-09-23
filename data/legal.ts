export const legalPages = {
  gizlilik: {
    title: 'Gizlilik bilgilendirmesi',
    description: 'Bu sitede kullanılan veri akışları hakkında bilgi.',
    sections: [
      [
        'Form bilgileri',
        'Proje formunda adınız, e-posta adresiniz, şirketiniz, ilgilendiğiniz hizmet ve proje açıklamanız istenir. Çevrimiçi gönderim etkin olduğunda bu bilgiler proje talebinizin değerlendirilmesi ve sizinle iletişime geçilmesi amacıyla yapılandırılan alıcı sisteme aktarılır.',
      ],
      [
        'Yerel proje notu',
        '“Proje notunu indir” seçeneği dosyayı doğrudan tarayıcınızda oluşturur. Bu seçenek form bilgilerinizi sunucuya göndermez. İndirdiğiniz dosyanın saklanması ve paylaşılması sizin kontrolünüzdedir.',
      ],
      [
        'Teknik bilgiler',
        'Siteyi sunan altyapı, güvenlik ve hata teşhisi için standart erişim kayıtları oluşturabilir. Bu sürümde reklam, davranışsal izleme veya üçüncü taraf analitik kodu bulunmaz.',
      ],
      [
        'İletişim',
        'Verilerinizle ilgili bir talebiniz varsa iletişim sayfasında sunulan, etkin iletişim kanalını kullanabilirsiniz. İletişim kanalı etkinleştirilmeden bu siteden çevrimiçi form teslimi yapılmaz.',
      ],
    ],
  },
  kvkk: {
    title: 'Kişisel veriler hakkında',
    description: 'Proje talepleri ve kişisel veri akışına ilişkin açıklamalar.',
    sections: [
      [
        'Paylaştığınız bilgiler',
        'Proje görüşmesi için gerekli olan iletişim ve proje bilgilerini paylaşmanız yeterlidir. Form üzerinden özel nitelikli kişisel veri, parola veya ödeme kartı bilgisi paylaşmayın.',
      ],
      [
        'Kullanım kapsamı',
        'İletişim kanalı etkinleştirildiğinde paylaştığınız bilgiler, proje talebinin değerlendirilmesi ve talebinize yanıt verilmesi için kullanılır. Pazarlama listesine otomatik kayıt yapılmaz.',
      ],
      [
        'Bu sürümün durumu',
        'Bu metin mevcut sitenin teknik veri akışını açıklar. İşletmeye ait veri sorumlusu unvanı, adresi, işleme dayanakları, saklama süreleri ve başvuru yöntemi henüz paylaşılmadığı için kapsamlı bir aydınlatma metni yerine geçmez. Bu ayrıntılar işletme tarafından tamamlanmalıdır.',
      ],
    ],
  },
  cerezler: {
    title: 'Çerezler ve yerel depolama',
    description: 'Sitenin tarayıcınızda kullandığı depolama hakkında bilgi.',
    sections: [
      [
        'İsteğe bağlı izleme kullanılmaz',
        'Bu sürüm reklam veya analitik çerezi ayarlamaz. Siteye sonradan eklenecek hizmetler farklı depolama gereksinimleri oluşturabilir; böyle bir değişiklikte bu sayfa güncellenmelidir.',
      ],
      [
        'Açılış animasyonu tercihi',
        'Kısa açılış animasyonunun aynı oturumda tekrar gösterilmemesi için tarayıcının sessionStorage alanında rova-visited adlı bir değer tutulur. Bu değer form bilgisi veya kişisel tanımlayıcı içermez ve sunucuya gönderilmez.',
      ],
      [
        'Kontrol sizde',
        'Tarayıcınızın site verileri ayarlarından yerel depolamayı temizleyebilirsiniz. Depolama kapalı olsa da sitenin içeriklerine erişebilirsiniz. Hareket azaltma tercihiniz açıksa açılış animasyonu ve dekoratif hareketler devre dışı kalır.',
      ],
    ],
  },
};
