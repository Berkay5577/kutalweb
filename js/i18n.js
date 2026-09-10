/* KUTAL ARMS — i18n.js : TR (kaynak) ↔ EN dil değiştirici (markup gerektirmez) */
(function () {
  "use strict";
  var STORE = "kutal_lang";
  var norm = function (s) { return String(s).replace(/\s+/g, " ").trim(); };

  /* Türkçe (kaynak) → hedef dil sözlükleri. Anahtarlar boşlukları sadeleştirilmiş TR metinlerdir. */
  var DICT = {};
  DICT.en = {
    // --- Topbar / genel ---
    "Anasayfa": "Home", "Kurumsal": "Corporate", "Hakkımızda": "About Us", "Hakkında": "About",
    "Kalite & Sertifikalar": "Quality & Certificates", "Kariyer": "Career", "KVK": "Data Policy",
    "Ürünlerimiz": "Products", "Ürünler": "Products", "Tedariklerimiz": "Supply", "Bayilik": "Dealership",
    "Haberler": "News", "İletişim": "Contact", "Teklif Al": "Get a Quote", "Ara": "Search",
    "Tabancalar": "Pistols", "Makinalı Tabancalar": "Machine Pistols", "Hafif Makinalı Tüfekler": "Light Machine Guns",
    "Bombaatar": "Grenade Launchers", "Sivil Drone Sistemleri": "Civil Drone Systems",
    "Piyade Tüfekleri": "Infantry Rifles", "Makinalı Tüfekler": "Machine Guns",
    "Keskin Nişancı Tüfekleri": "Sniper Rifles", "Havanlar": "Mortars",
    // --- Butonlar / etiketler ---
    "İncele": "Explore", "İncele →": "Explore →", "Görüntüle →": "View →", "Detayları Gör": "View Details",
    "Tüm Haberler": "All News", "Tümü": "All", "Filtrele": "Filter", "Filtreler": "Filters", "Temizle": "Clear",
    "Kategori": "Category", "Kalibre": "Caliber", "Ürün Tipi": "Product Type", "ürün": "products",
    "Seçili filtrelere uygun ürün bulunamadı.": "No products match the selected filters.",
    "Talep Et": "Request", "Talep Et →": "Request →", "Başvuruyu Gönder": "Submit Application",
    "Mesajı Gönder": "Send Message", "Başvur →": "Apply →", "Kabul Et": "Accept", "Reddet": "Decline",
    "KAYIT": "SUBSCRIBE", "KAYDIR": "SCROLL", "KAYDIRIN": "SCROLL",
    "Ürün Hakkında": "Overview", "Özellikler": "Specifications", "Galeri": "Gallery", "Dokümanlar": "Documents",
    "Renk Seçeneği": "Color Option", "Paylaş": "Share", "Fotoğraf": "Photo", "3D Model": "3D Model",
    "İndir": "Download", "İndir →": "Download →", "Ürünün teknik özelliklerini içeren belgeyi indirin.": "Download the document with the product's technical specifications.",
    "Önceki slayt": "Previous slide", "Sonraki slayt": "Next slide", "Menü": "Menu", "Kapat": "Close",
    "Anasayfa'ya dön": "Back to home",
    "Aramaya başlamak için yazın… Ürün adı, kalibre, haber veya sayfa.": "Start typing to search… product, caliber, news or page.",
    "Ürün, haber veya sayfa arayın…": "Search products, news or pages…",
    "Ürün": "Product", "Haber": "News", "Sayfa": "Page", "Tedarik": "Supply",
    // --- Hero (anasayfa) ---
    "Türk Savunma Sanayii": "Turkish Defense Industry",
    "Kutal Savunma, güvenlik güçlerinin yanında. Tabancadan piyade tüfeğine uzanan ürün gamıyla; zorlu saha koşullarında test edilmiş, güvenilir silah sistemleri.":
      "Kutal Defense stands with security forces. From pistols to infantry rifles — reliable weapon systems, field-tested under the harshest conditions.",
    "Ürünleri Keşfet": "Explore Products", "İletişime Geç": "Contact Us", "İletişime Geçin": "Contact Us",
    // hero başlık parçaları (stilize) + slayt metinleri
    "SAHADA": "FIELD-PROVEN", "KANITLANMIŞ": "", "GÜÇ": "POWER",
    "YAKIN MUHAREBEDE": "CLOSE-COMBAT", "TAM": "TOTAL", "KONTROL": "CONTROL",
    "YÜKSEK VE": "HIGH &", "ETKİLİ": "EFFECTIVE", "ATIŞ GÜCÜ": "FIREPOWER",
    "SAHAYA": "SEAMLESS", "KESİNTİSİZ": "", "TEDARİK": "SUPPLY",
    "Makinalı Tabancalar": "Machine Pistols", "Bombaatar Sistemleri": "Grenade Launcher Systems", "Tedarik & Temin": "Supply & Procurement",
    "KTL S9; gecikmeli geri tepme sistemi, yüksek atış hızı ve seçici ateşleme moduyla yakın muharebe için üstün kontrol sağlar.":
      "The KTL S9 delivers superior close-combat control with its delayed-blowback system, high rate of fire and selective fire mode.",
    "KTL B40; döner tamburlu pompalama sistemi ve 40 mm çapıyla sahada sürekli ve güvenilir atış gücü sunar.":
      "The KTL B40 offers continuous, reliable firepower in the field with its revolving-drum pump system and 40 mm caliber.",
    "Piyade tüfeklerinden havanlara, keskin nişancı sistemlerinden makinalı tüfeklere; güvenlik güçlerinin ihtiyaçlarına uçtan uca tedarik çözümleri.":
      "From infantry rifles to mortars, from sniper systems to machine guns — end-to-end supply solutions for the needs of security forces.",
    "KTL S9'u İncele": "Explore KTL S9", "Tüm Ürünler": "All Products", "KTL B40'ı İncele": "Explore KTL B40", "Bombaatarlar": "Grenade Launchers",
    // --- Şerit ---
    "YERLİ ÜRETİM": "DOMESTIC PRODUCTION", "STANDARTLAR": "STANDARDS", "HASSAS İŞLEME": "PRECISION MACHINING",
    "ÜLKEYE İHRACAT": "EXPORT COUNTRIES", "UYUMLU KALİBRELER": "COMPATIBLE CALIBERS", "TESTLİ GÜVENİLİRLİK": "TESTED RELIABILITY",
    // --- Bölüm başlıkları / eyebrow (anasayfa) ---
    "Ürün Ailesi": "Product Family", "Silahlarımızı": "Discover Our", "Keşfedin": "Weapons",
    "Aşağı kaydırdıkça öne çıkan modellerimizi inceleyin.": "Scroll down to explore our featured models.",
    "Silah": "Weapon", "Kategorileri": "Categories",
    "Profesyonel, askeri ve sportif ihtiyaçların tamamına yönelik, tek çatı altında tasarlanan ve üretilen kapsamlı ürün yelpazesi.":
      "A comprehensive range designed and produced under one roof for professional, military and sporting needs.",
    "9×19 ve 7.62×25 mm; çelik ve polimer gövdeli yarı otomatik tabancalar.": "9×19 and 7.62×25 mm; steel and polymer-framed semi-automatic pistols.",
    "Yakın muharebe için seçici ateşli, yüksek kontrollü platformlar.": "Selective-fire, high-control platforms for close combat.",
    "Teleskopik dipçikli, çok namlu seçenekli çok yönlü sistemler.": "Versatile systems with telescopic stock and multiple barrel options.",
    "40 mm NATO standardında tekli ve döner tamburlu bombaatarlar.": "Single and revolving-drum grenade launchers in 40 mm NATO standard.",
    "Sivil kullanım için geliştirilen insansız hava sistemleri. Yakında.": "Unmanned aerial systems developed for civil use. Coming soon.",
    "Piyade tüfekleri, makinalı tüfekler, keskin nişancı ve havan tedariki.": "Supply of infantry rifles, machine guns, sniper rifles and mortars.",
    "İnteraktif 3D Vitrin": "Interactive 3D Showcase", "Her Detayı": "Inspect Every", "Yakından": "Detail", "İnceleyin": "Up Close",
    "Gerçek CAD verilerinden üretilmiş 3D modeller. Döndürün, yakınlaştırın ve mühendislik detaylarını keşfedin.":
      "3D models built from real CAD data. Rotate, zoom and explore the engineering.",
    "◐ Sürükleyerek döndürün · tekerlekle yakınlaştırın": "◐ Drag to rotate · scroll to zoom", "YÜKLENİYOR": "LOADING",
    "Bileşen Mimarisi": "Component Architecture", "Her Parça": "Every Part", "Mühendislik": "Engineered",
    "Her ürün, hassasiyetle tasarlanmış onlarca bileşenden oluşur.": "Each product is built from dozens of precision-designed components.",
    "Kusursuz Uyum": "Perfect Fit", "Milimetrik": "Millimetric", "Tolerans": "Tolerance",
    "Parçalar, mikron seviyesinde toleransla birbirine kusursuz oturur.": "Parts fit together flawlessly at micron-level tolerance.",
    "Dayanıklılık": "Durability", "Zorlu Koşula": "Ready for", "Hazır": "Harsh Conditions",
    "Yüksek dayanımlı malzeme ve titiz işçilikle üretilir.": "Made with high-strength materials and meticulous craftsmanship.",
    "Test Edilmiş": "Proven", "Güven": "Trust", "Ürünleri İncele": "Explore Products",
    // --- Kurumsal / anasayfa about ---
    "Mühendislik Mirası,": "Engineering Heritage,", "Geleceğin Gücü": "The Power of the Future",
    "Kutal Arms, tasarımdan seri üretime kadar tüm süreçleri kendi bünyesinde yürüten entegre bir savunma sanayi kuruluşudur. Ar-Ge odaklı yaklaşımı ve hassas imalat altyapısıyla, kullanıcısına yalnızca bir silah değil; güven, dayanıklılık ve üstünlük sunar.":
      "Kutal Arms is an integrated defense company that carries out every process in-house, from design to serial production. With its R&D-driven approach and precision manufacturing, it offers users not just a weapon, but trust, durability and superiority.",
    "Malzeme biliminden balistik testlere, ergonomiden yüzey işlemlerine kadar her aşamada uluslararası standartları esas alırız. Amacımız; sahada fark yaratan, ömür boyu güvenilir sistemler üretmektir.":
      "From materials science to ballistic testing, from ergonomics to surface treatment, we base every stage on international standards. Our goal is to produce field-proven systems that stay reliable for a lifetime.",
    "Üretim Kabiliyetlerimiz": "Our Manufacturing Capabilities", "KALİTE SİSTEMİ": "QUALITY SYSTEM",
    "Ürün Modeli": "Product Models", "İhracat Ülkesi": "Export Countries", "Yerli Tasarım": "Domestic Design", "Atış Dayanım Testi": "Firing Endurance Tests",
    "Üretim Kabiliyetleri": "Manufacturing Capabilities", "Uçtan Uca": "End-to-End", "Entegre Üretim": "Integrated Production",
    "Tasarım, prototipleme, seri üretim ve kalite kontrol; tüm zincir tek tesiste, tam kontrol altında.":
      "Design, prototyping, serial production and quality control; the entire chain in one facility, fully controlled.",
    "Ar-Ge & Tasarım": "R&D & Design", "CAD/CAM tabanlı ürün geliştirme ve balistik simülasyon.": "CAD/CAM-based product development and ballistic simulation.",
    "CNC Hassas İşleme": "CNC Precision Machining", "Mikron seviyesinde tolerans, yüksek tekrarlanabilirlik.": "Micron-level tolerance, high repeatability.",
    "Yüzey & Isıl İşlem": "Surface & Heat Treatment", "Korozyon direnci ve aşınma dayanımı için ileri kaplama.": "Advanced coatings for corrosion resistance and wear durability.",
    "Test & Kalite Kontrol": "Testing & Quality Control", "Her ürün için atış, dayanım ve emniyet doğrulaması.": "Firing, endurance and safety verification for every product.",
    "Medya & Haberler": "Media & News", "Kutal Arms": "Kutal Arms", "Dünyasından": "World",
    "Fuar katılımları, yeni ürün lansmanları ve savunma sanayiine dair gelişmeler.": "Exhibitions, new product launches and developments in the defense industry.",
    "Ürün Lansmanı": "Product Launch", "Fuar": "Exhibition", "İhracat": "Export", "Kalite": "Quality",
    "Yeni Nesil KTL S9 Gen-2 Tanıtıldı": "Next-Generation KTL S9 Gen-2 Unveiled",
    "Kutal Arms, SAHA EXPO 2026'da Yerini Aldı": "Kutal Arms Took Its Place at SAHA EXPO 2026",
    "Taktik Platformlarda Yeni İhracat Anlaşması": "New Export Agreement on Tactical Platforms",
    "Kalite Yönetim Sistemi Sertifikalarımız Yenilendi": "Our Quality Management System Certificates Renewed",
    "Bize Ulaşın": "Reach Us", "Projeniz İçin": "The Right Partner", "Doğru Ortak": "for Your Project",
    "Kurumsal alımlar ve teknik iş birlikleri için Kutal Arms ekibiyle iletişime geçin.":
      "Contact the Kutal Arms team for corporate procurement and technical partnerships.",
    "Kataloğu İncele": "View Catalog",
    // --- Sayfa hero intro'ları ---
    "Ürün ailesi": "Product Family",
    "Kutal Savunma'nın kendi tasarım ve üretimi olan silah sistemleri. Her ürün, uluslararası standartlarda mühendislik ve saha testleriyle geliştirilmiştir.":
      "Weapon systems designed and manufactured by Kutal Defense. Every product is developed with international-standard engineering and field testing.",
    "Tedarik & Temin": "Supply & Procurement", "Tedariklerimiz": "Our Supply",
    "Güvenlik güçlerinin operasyonel ihtiyaçlarına yönelik geniş bir silah sistemi yelpazesinde tedarik ve temin çözümleri sunuyoruz.":
      "We provide supply and procurement solutions across a wide range of weapon systems for the operational needs of security forces.",
    "Tedarik İçin İletişime Geçin": "Contact Us for Supply",
    "Kurumsal": "Corporate", "Savunma teknolojilerinde dünya standartlarını yakalayan, yerli ve yenilikçi bir üreticidir.": "",
    "Bize Ulaşın": "Reach Us", "Bize ulaşın": "Reach us",
    "Kurumsal alımlar, tedarik ve teknik iş birlikleri için Kutal Savunma ekibiyle iletişime geçin.":
      "Contact the Kutal Defense team for corporate procurement, supply and technical partnerships.",
    "Fabrika · Konya": "Factory · Konya", "Ofis · İstanbul": "Office · İstanbul", "Telefon": "Phone", "E-Posta": "E-mail",
    // --- Form alanları ---
    "Ad Soyad": "Full Name", "Kurum": "Company", "Konu": "Subject", "Mesajınız": "Your Message",
    "Adınız Soyadınız": "Your Full Name", "Kurum / Firma": "Company / Organization", "ornek@eposta.com": "example@email.com",
    "Talebinizin konusu": "Subject of your request", "Talebinizi detaylandırın...": "Describe your request...",
    "Firma Adı": "Company Name", "Yetkili Kişi": "Contact Person", "Şehir / Ülke": "City / Country",
    "Faaliyet Alanı": "Field of Activity", "Pozisyon": "Position", "Ön Yazı": "Cover Letter",
    "Deneyiminiz ve talebiniz hakkında kısa bilgi...": "Brief info about your experience and request...",
    "Kendinizden ve deneyiminizden kısaca bahsedin...": "Briefly tell us about yourself and your experience...",
    "E-bülten için e-posta": "Email for newsletter",
    "CV'nizi, e-posta uygulamanız açıldığında ekleyebilirsiniz.": "You can attach your CV when your email app opens.",
    // --- KVKK / çerez ---
    "Bu sitede deneyiminizi iyileştirmek için gerekli çerezler kullanılır. Detaylar için KVKK & Gizlilik metnini inceleyebilirsiniz.":
      "This site uses necessary cookies to improve your experience. See our Data & Privacy notice for details.",
    "KVKK & Gizlilik": "Data & Privacy",
    // --- Kalite sayfası ---
    "Kalite Güvencesi": "Quality Assurance",
    "Tasarımdan teslimata her aşamada uluslararası standartları esas alan, ölçülebilir ve izlenebilir bir kalite yönetim anlayışı.":
      "A measurable, traceable quality management approach based on international standards at every stage from design to delivery.",
    "Standartlar": "Standards", "Uyum Sağladığımız": "Standards We", "Standartlar": "Comply With",
    "Kalite yönetim sistemimiz, savunma sanayii ve endüstriyel üretimin öncü standartları esas alınarak yapılandırılmıştır.":
      "Our quality management system is structured around the leading standards of the defense industry and industrial production.",
    "Kalite Yönetim Sistemi": "Quality Management System", "Süreç odaklı, sürekli iyileştirmeye dayalı kalite yönetimi.": "Process-oriented quality management based on continuous improvement.",
    "Çevre Yönetim Sistemi": "Environmental Management System", "Enerji verimliliği ve sürdürülebilir üretim ilkeleri.": "Energy efficiency and sustainable production principles.",
    "NATO Kalite Güvencesi": "NATO Quality Assurance", "Tasarım, geliştirme ve üretimde NATO kalite gereksinimleri.": "NATO quality requirements in design, development and production.",
    "CE Uygunluk": "CE Conformity", "Avrupa uygunluk kriterlerine göre ürün güvenliği.": "Product safety per European conformity criteria.",
    "Türk Standartları": "Turkish Standards", "Ulusal standartlara uygun üretim ve test.": "Production and testing compliant with national standards.",
    "Askeri Standartlar": "Military Standards", "MIL-STD-1913 ve ilgili askeri test standartlarına uyum.": "Compliance with MIL-STD-1913 and related military test standards.",
    "* Sertifika kapsam ve numaraları güncel belgelerimize göre düzenlenmektedir.": "* Certificate scope and numbers are arranged according to our current documents.",
    "Doğrulama": "Verification", "Test &": "Testing &", "Kalite Kontrol": "Quality Control",
    "Her ürün, envantere girmeden önce çok aşamalı test ve doğrulamadan geçer.": "Every product undergoes multi-stage testing and verification before entering inventory.",
    "Malzeme Doğrulama": "Material Verification", "Gelen hammadde ve yarı mamullerde kimyasal ve mekanik test.": "Chemical and mechanical testing of incoming raw and semi-finished materials.",
    "Boyutsal Kontrol": "Dimensional Control", "CMM ve hassas ölçüm cihazlarıyla mikron seviyesinde tolerans denetimi.": "Micron-level tolerance inspection with CMM and precision measurement.",
    "Atış & Dayanım Testi": "Firing & Endurance Test", "Balistik atış, ömür ve çevresel dayanıklılık testleri.": "Ballistic firing, service-life and environmental endurance tests.",
    "Nihai Muayene": "Final Inspection", "Emniyet ve fonksiyon doğrulaması sonrası izlenebilir seri kaydı.": "Traceable serial record after safety and function verification.",
    "Kalite Belgelerimizi Talep Edin": "Request Our Quality Documents",
    // --- Bayilik ---
    "İş Ortaklığı": "Partnership", "Bayilik & Distribütörlük": "Dealership & Distribution",
    "Kutal Savunma ürün ailesini kendi pazarınıza taşıyın. Yurt içi ve yurt dışı iş ortaklarımızı büyüyen ağımıza davet ediyoruz.":
      "Bring the Kutal Defense product family to your market. We invite domestic and international partners to our growing network.",
    "Neden Kutal": "Why Kutal", "İş Ortaklığı": "Partnership", "Avantajları": "Advantages",
    "Yerli Üretim Gücü": "Domestic Production Power", "Tasarımdan üretime tam entegre, güvenilir tedarik zinciri.": "Fully integrated, reliable supply chain from design to production.",
    "Pazarlama Desteği": "Marketing Support", "Ürün görselleri, teknik dokümanlar ve satış materyalleri.": "Product visuals, technical documents and sales materials.",
    "Rekabetçi Koşullar": "Competitive Terms", "Bölgesel münhasırlık ve avantajlı tedarik koşulları.": "Regional exclusivity and advantageous supply terms.",
    "Teknik & Satış Sonrası": "Technical & After-Sales", "Eğitim, yedek parça ve sürekli teknik destek.": "Training, spare parts and continuous technical support.",
    "Başvuru": "Application", "Bayilik": "Dealership", "Başvuru Formu": "Application Form",
    "Formu doldurun; iş geliştirme ekibimiz en kısa sürede sizinle iletişime geçsin.": "Fill out the form and our business development team will contact you shortly.",
    "Başvuruyu Gönder": "Submit Application",
    // --- Kariyer ---
    "İnsan Kaynakları": "Human Resources",
    "Savunma sanayiinin geleceğini birlikte inşa edelim. Mühendislikten üretime, yetenekli ekip arkadaşlarını Kutal ailesine davet ediyoruz.":
      "Let's build the future of the defense industry together. From engineering to production, we invite talented colleagues to the Kutal family.",
    "Birlikte": "Growing", "Büyüyoruz": "Together", "Ar-Ge Kültürü": "R&D Culture",
    "Yenilikçi projelerde çalışma ve sürekli öğrenme fırsatı.": "The chance to work on innovative projects and keep learning.",
    "Gelişim & Eğitim": "Development & Training", "Teknik ve kişisel gelişim programlarıyla kariyer yolculuğu.": "A career journey with technical and personal development programs.",
    "Fırsatlar": "Opportunities", "Açık": "Open", "Pozisyonlar": "Positions",
    "Makine Mühendisi (Ar-Ge)": "Mechanical Engineer (R&D)", "CNC Operatörü": "CNC Operator",
    "Kalite Kontrol Teknikeri": "Quality Control Technician", "Dış Ticaret Uzmanı": "Foreign Trade Specialist",
    "Tam Zamanlı": "Full-Time",
    "Bize": "Join", "Katıl": "Us",
    "Uygun pozisyon bulamadıysanız bile CV'nizi bize iletin; ihtiyaç doğduğunda sizinle iletişime geçelim.":
      "Even if you can't find a suitable role, send us your CV and we'll reach out when a need arises.",
    // --- Haberler / detay ---
    "Görüntüle": "View", "Diğer": "Other", "Haberler": "News", "Tüm Haberler": "All News",
    // --- 404 ---
    "Hata 404": "Error 404", "Sayfa Bulunamadı": "Page Not Found",
    "Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Aşağıdaki bağlantılardan devam edebilirsiniz.":
      "The page you're looking for may have moved or been removed. Continue from the links below.",
    // --- Footer ---
    "Türkiye'nin savunma ve silah sanayisinde öncü ve yenilikçi bir kuruluş. Yerli mühendislik, üstün üretim kalitesi.":
      "A pioneering and innovative company in Turkey's defense and arms industry. Domestic engineering, superior production quality.",
    "Tüm hakları saklıdır.": "All rights reserved.", "KVKK": "Data Policy", "Gizlilik Bildirimi": "Privacy Notice", "Yasal Uyarı": "Legal Notice",
    // --- Ürün tipleri / spec anahtarları ---
    "Yarı Otomatik Tabanca": "Semi-Automatic Pistol", "Spor Tabanca": "Sport Pistol", "Makinalı Tabanca": "Machine Pistol",
    "Hafif Makinalı Tüfek": "Light Machine Gun", "Bombaatar (Döner Tambur)": "Grenade Launcher (Revolving Drum)",
    "Piyade Tüfeği": "Infantry Rifle", "Makinalı Tüfek": "Machine Gun", "Keskin Nişancı Tüfeği": "Sniper Rifle",
    "81 mm Havan": "81 mm Mortar", "120 mm Havan": "120 mm Mortar",
    "Kalibre": "Caliber", "Kapasite": "Capacity", "Namlu": "Barrel", "Namlu Çıkış Hızı": "Muzzle Velocity",
    "Atış Hızı": "Rate of Fire", "Etkili Menzil": "Effective Range", "Maksimum Menzil": "Maximum Range",
    "Minimum Menzil": "Minimum Range", "Ağırlık": "Weight", "Toplam Uzunluk": "Overall Length", "Genişlik": "Width",
    "Yükseklik": "Height", "Tetik": "Trigger", "Emniyet": "Safety", "Nişangah": "Sights", "Ray": "Rail",
    "Yiv Oranı": "Twist Rate", "Renk": "Color", "Çalışma Sistemi": "Operating System", "Ateşleme Modu": "Fire Mode",
    "Şarjör Tipi": "Magazine Type", "Sistem": "System", "Çerçeve": "Frame", "Gövde": "Body", "Alt Gövde": "Lower Frame",
    "Dipçik": "Stock", "Besleme": "Feed", "Açılım": "Opening", "Tutma Yeri": "Grip", "Çerçeve / Sürgü": "Frame / Slide",
    // --- Hakkımızda sayfası ---
    "KUTAL Savunma ve Silah Sanayi A.Ş., savunma teknolojilerinde dünya standartlarını yakalayan, yerli ve yenilikçi bir üreticidir.":
      "KUTAL Defense and Arms Industry Inc. is a domestic, innovative manufacturer meeting world standards in defense technologies.",
    "Vizyonumuz": "Our Vision", "Misyonumuz": "Our Mission",
    "KUTAL Savunma ve Silah Sanayi A.Ş. olarak dünya çapında tanınan; yenilikçi, güvenilir ve sürdürülebilir savunma çözümleri sunan bir lider olmayı hedefliyoruz.":
      "As KUTAL Defense, we aim to be a globally recognized leader offering innovative, reliable and sustainable defense solutions.",
    "Milli güvenliğimizi ve savunma kabiliyetimizi artırmak amacıyla, en yüksek kalitede savunma sistemleri ve silah teknolojileri üretmek ve geliştirmek için çalışıyoruz.":
      "We work to produce and develop the highest-quality defense systems and weapon technologies to enhance our national security and defense capability.",
    "Kutal Savunma": "Kutal Defense", "Geleceğin Gücü": "The Power of the Future",
    "KUTAL, Türkiye'nin savunma ve silah sanayisinde öncü ve yenilikçi bir şirket olarak yurt içi ve yurt dışı pazarlarda güvenilirliğini kanıtlamıştır. Ar-Ge yatırımlarına öncelik veren kuruluşumuz, mühendislik uzmanlığını teknolojik gelişmelerle sürekli bütünleştirir.":
      "As a pioneering and innovative company in Turkey's defense and arms industry, KUTAL has proven its reliability in domestic and international markets. Prioritizing R&D, we continuously integrate engineering expertise with technological advances.",
    "Kalite güvencesi; uluslararası standartları esas alan titiz test süreçleriyle sağlanır. Üretim yaklaşımımız çevreye duyarlıdır; enerji verimliliği ve sürdürülebilirlik ilkelerini önceler. Amacımız, sahada fark yaratan ömür boyu güvenilir sistemler üretmektir.":
      "Quality assurance is ensured through rigorous testing based on international standards. Our production is environmentally conscious, prioritizing energy efficiency and sustainability. Our goal is to produce field-proven systems reliable for a lifetime.",
    "Ürünlerimizi İnceleyin": "Explore Our Products",
    "Genel Kalite Politikası": "General Quality Policy", "Kalite": "Quality", "Taahhüdümüz": "Commitment",
    "Tasarımdan teslimata her aşamada benimsediğimiz ilkeler.": "The principles we uphold at every stage from design to delivery.",
    "Tüm süreçlerde müşterinin ihtiyaç ve beklentilerini tam olarak karşılayan, güvenilir bir anlayış benimsemeyi.": "To adopt a reliable approach that fully meets customer needs and expectations in all processes.",
    "Maliyetleri düşürmek ve kârlılığı artırmak için teknolojik gelişmeleri yakından takip etmeyi.": "To closely follow technological advances to reduce costs and increase profitability.",
    "Kalite sistemleri çerçevesinde tüm çalışanların yetkinliklerini en üst seviyede kullanabilmesini sağlamayı.": "To enable all employees to use their competencies to the fullest within the quality system.",
    "Tüm çalışanlarda kalite bilincini tesis etmeyi.": "To establish quality awareness in all employees.",
    "Tedarikçilerle güvene dayalı bir iş birliği içinde olmayı.": "To maintain trust-based cooperation with suppliers.",
    "Firmamızın ve Türkiye'nin adını dünyaya daha çok duyurmaya hizmet etmeyi.": "To help spread the name of our company and Turkey across the world.",
    "En uygun, en doğru ve en ekonomik çözümleri en hızlı biçimde üretmeyi.": "To deliver the most suitable, accurate and economical solutions as fast as possible.",
    "Başlanan her projeyi zamanında, en üst düzey tekniklerle ve istenen kalitede tamamlamayı.": "To complete every project on time, with top-level techniques and the desired quality.",
    "İçinde bulunduğumuz topluma ve çevreye saygılı, örnek bir kuruluş olmayı.": "To be an exemplary organization respectful of our community and environment.",
    "Konum": "Location", "Ofis &": "Office &", "Fabrika": "Factory",
    "Kutal Savunma amblem": "Kutal Defense emblem", "SAVUNMA SANAYİ": "DEFENSE INDUSTRY",
    // --- Haber gövdeleri ---
    "Kutal Savunma, makinalı tabanca ailesinin yeni üyesi KTL S9 Gen-2'yi tanıttı. Yeni nesil model; geliştirilmiş gecikmeli geri tepme mekanizması, düşük geri tepme sağlayan yeni tampon sistemi ve tamamen modüler bir üst alıcı ile geliyor.":
      "Kutal Defense has unveiled the KTL S9 Gen-2, the newest member of its machine-pistol family. The new-generation model features an improved delayed-blowback mechanism, a new low-recoil buffer system and a fully modular upper receiver.",
    "9×19 mm kalibreli platform, 6.5″, 8.5″ ve 10″ değiştirilebilir namlu seçenekleriyle yakın muharebeden koruma görevlerine kadar geniş bir kullanım yelpazesi sunuyor. MIL-STD-1913 Picatinny ray sistemi sayesinde optik, lazer ve aydınlatma aksesuarları hızla entegre edilebiliyor.":
      "The 9×19 mm platform offers a wide range of use — from close combat to protection duties — with 6.5″, 8.5″ and 10″ interchangeable barrels. Its MIL-STD-1913 Picatinny rail allows quick integration of optics, lasers and lighting accessories.",
    "Gen-2 ile birlikte gelen yeni ergonomik tutamak açısı ve dokulu yüzey işlemi, zorlu saha koşullarında dahi üstün silah kontrolü sağlıyor.":
      "The new ergonomic grip angle and textured surface finish of the Gen-2 provide superior weapon control even in the harshest field conditions.",
    "Kutal Savunma, savunma ve havacılık sanayiinin öncü fuarlarından SAHA EXPO 2026'da standıyla yerini aldı. Fuar boyunca tabanca, makinalı tabanca, hafif makinalı tüfek ve bombaatar ürün ailesi ziyaretçilerin yoğun ilgisiyle karşılaştı.":
      "Kutal Defense took its place with a booth at SAHA EXPO 2026, one of the leading fairs of the defense and aerospace industry. Throughout the fair, its pistol, machine-pistol, light-machine-gun and grenade-launcher families drew strong visitor interest.",
    "Yerli ve yabancı heyetlerin ağırlandığı stantta, interaktif 3D ürün deneyimi ve canlı teknik sunumlar gerçekleştirildi. Ekibimiz, kurumsal alım ve tedarik süreçlerine ilişkin görüşmeler yürüttü.":
      "At the booth, which hosted domestic and foreign delegations, interactive 3D product experiences and live technical presentations were held. Our team held talks on corporate procurement and supply processes.",
    "Yerli mühendislik ve üstün üretim kalitesini uluslararası pazarlara taşıyan Kutal Savunma, taktik silah platformları alanında yeni bir ihracat anlaşması imzaladı.":
      "Carrying its domestic engineering and superior production quality to international markets, Kutal Defense has signed a new export agreement in the field of tactical weapon platforms.",
    "Anlaşma kapsamında, NATO standartlarıyla tam uyumlu ürünlerimiz farklı coğrafyalardaki güvenlik güçlerinin envanterine katılacak. Bu iş birliği, ihracat ağımızı genişletme hedefimiz doğrultusunda önemli bir adım oluşturuyor.":
      "Under the agreement, our products — fully compliant with NATO standards — will join the inventories of security forces in different geographies. This partnership marks an important step toward our goal of expanding our export network.",
    "Kutal Savunma, tasarımdan seri üretime kadar tüm süreçlerini kapsayan kalite yönetim sistemi denetimlerini başarıyla tamamladı. Bağımsız denetim kuruluşları tarafından gerçekleştirilen incelemelerin ardından kalite sertifikalarımız yenilendi.":
      "Kutal Defense has successfully completed quality management system audits covering all its processes from design to serial production. Following reviews by independent auditing bodies, our quality certificates have been renewed.",
    "Mikron seviyesinde tolerans hedefleyen üretim yaklaşımımız ve her ürün için uyguladığımız atış, dayanım ve emniyet doğrulama süreçleri, kalite taahhüdümüzün temelini oluşturuyor.":
      "Our production approach targeting micron-level tolerance, together with the firing, endurance and safety verification we apply to every product, forms the foundation of our quality commitment.",
    // haber excerpt'leri
    "Geliştirilmiş ateşleme grubu, yeni ergonomik gövde ve modüler ray sistemiyle KTL S9 Gen-2 sahneye çıktı.":
      "The KTL S9 Gen-2 arrives with an improved trigger group, a new ergonomic body and a modular rail system.",
    "Savunma sanayiinin en büyük buluşmalarından SAHA EXPO'da tüm ürün ailemizi ziyaretçilerle buluşturduk.":
      "We showcased our entire product family to visitors at SAHA EXPO, one of the defense industry's largest gatherings.",
    "Kutal Savunma, taktik silah sistemlerinde yeni bir uluslararası tedarik anlaşmasına imza attı.":
      "Kutal Defense has signed a new international supply agreement in tactical weapon systems.",
    "Uluslararası kalite yönetim sistemi denetimlerini başarıyla tamamlayarak sertifikalarımızı yeniledik.":
      "We renewed our certificates by successfully completing international quality management system audits.",
    "Kutal Savunma": "Kutal Defense",
  };

  /* ============ РУССКИЙ ============ */
  DICT.ru = {
    "Anasayfa": "Главная", "Kurumsal": "О компании", "Hakkımızda": "О нас", "Hakkında": "О нас",
    "Kalite & Sertifikalar": "Качество и сертификаты", "Kariyer": "Карьера", "KVK": "Политика данных",
    "Ürünlerimiz": "Продукция", "Ürünler": "Продукция", "Tedariklerimiz": "Поставки", "Bayilik": "Дилерство",
    "Haberler": "Новости", "İletişim": "Контакты", "Teklif Al": "Запросить цену", "Ara": "Поиск",
    "Tabancalar": "Пистолеты", "Makinalı Tabancalar": "Пистолеты-пулемёты", "Hafif Makinalı Tüfekler": "Ручные пулемёты",
    "Bombaatar": "Гранатомёты", "Sivil Drone Sistemleri": "Гражданские дроны",
    "Piyade Tüfekleri": "Штурмовые винтовки", "Makinalı Tüfekler": "Пулемёты",
    "Keskin Nişancı Tüfekleri": "Снайперские винтовки", "Havanlar": "Миномёты",
    "İncele": "Подробнее", "İncele →": "Подробнее →", "Görüntüle →": "Смотреть →", "Detayları Gör": "Подробнее",
    "Tüm Haberler": "Все новости", "Tümü": "Все", "Filtrele": "Фильтр", "Filtreler": "Фильтры", "Temizle": "Очистить",
    "Kategori": "Категория", "Kalibre": "Калибр", "Ürün Tipi": "Тип продукта", "ürün": "продуктов",
    "Seçili filtrelere uygun ürün bulunamadı.": "Нет продуктов по выбранным фильтрам.",
    "Talep Et": "Запросить", "Talep Et →": "Запросить →", "Başvuruyu Gönder": "Отправить заявку",
    "Mesajı Gönder": "Отправить сообщение", "Başvur →": "Откликнуться →", "Kabul Et": "Принять", "Reddet": "Отклонить",
    "KAYIT": "ПОДПИСАТЬСЯ", "KAYDIR": "ЛИСТАЙТЕ", "KAYDIRIN": "ЛИСТАЙТЕ",
    "Ürün Hakkında": "О продукте", "Özellikler": "Характеристики", "Galeri": "Галерея", "Dokümanlar": "Документы",
    "Renk Seçeneği": "Вариант цвета", "Paylaş": "Поделиться", "Fotoğraf": "Фото", "3D Model": "3D-модель",
    "İndir": "Скачать", "İndir →": "Скачать →", "Ürünün teknik özelliklerini içeren belgeyi indirin.": "Скачайте документ с техническими характеристиками продукта.",
    "Önceki slayt": "Предыдущий слайд", "Sonraki slayt": "Следующий слайд", "Menü": "Меню", "Kapat": "Закрыть",
    "Aramaya başlamak için yazın… Ürün adı, kalibre, haber veya sayfa.": "Начните вводить для поиска… продукт, калибр, новость или страница.",
    "Ürün, haber veya sayfa arayın…": "Искать продукты, новости или страницы…",
    "Ürün": "Продукт", "Haber": "Новость", "Sayfa": "Страница", "Tedarik": "Поставка",
    "Türk Savunma Sanayii": "Оборонная промышленность Турции",
    "Kutal Savunma, güvenlik güçlerinin yanında. Tabancadan piyade tüfeğine uzanan ürün gamıyla; zorlu saha koşullarında test edilmiş, güvenilir silah sistemleri.":
      "Kutal Defense — рядом с силовыми структурами. Линейка от пистолетов до штурмовых винтовок: надёжные системы вооружения, испытанные в тяжёлых полевых условиях.",
    "Ürünleri Keşfet": "Смотреть продукцию", "İletişime Geç": "Связаться", "İletişime Geçin": "Связаться",
    "SAHADA": "ПРОВЕРЕНО", "KANITLANMIŞ": "", "GÜÇ": "В БОЮ",
    "YAKIN MUHAREBEDE": "БЛИЖНИЙ БОЙ", "TAM": "ПОЛНЫЙ", "KONTROL": "КОНТРОЛЬ",
    "YÜKSEK VE": "МОЩНАЯ И", "ETKİLİ": "ЭФФЕКТИВНАЯ", "ATIŞ GÜCÜ": "ОГНЕВАЯ МОЩЬ",
    "SAHAYA": "БЕСПЕРЕБОЙНЫЕ", "KESİNTİSİZ": "", "TEDARİK": "ПОСТАВКИ",
    "Makinalı Tabancalar": "Пистолеты-пулемёты", "Bombaatar Sistemleri": "Гранатомётные системы", "Tedarik & Temin": "Снабжение и поставки",
    "KTL S9; gecikmeli geri tepme sistemi, yüksek atış hızı ve seçici ateşleme moduyla yakın muharebe için üstün kontrol sağlar.":
      "KTL S9 обеспечивает превосходный контроль в ближнем бою благодаря системе с замедленной отдачей, высокому темпу стрельбы и селективному режиму огня.",
    "KTL B40; döner tamburlu pompalama sistemi ve 40 mm çapıyla sahada sürekli ve güvenilir atış gücü sunar.":
      "KTL B40 обеспечивает непрерывную и надёжную огневую мощь в поле благодаря барабанной помповой системе и калибру 40 мм.",
    "Piyade tüfeklerinden havanlara, keskin nişancı sistemlerinden makinalı tüfeklere; güvenlik güçlerinin ihtiyaçlarına uçtan uca tedarik çözümleri.":
      "От штурмовых винтовок до миномётов, от снайперских систем до пулемётов — комплексные решения по поставкам для нужд силовых структур.",
    "KTL S9'u İncele": "Подробнее о KTL S9", "Tüm Ürünler": "Вся продукция", "KTL B40'ı İncele": "Подробнее о KTL B40", "Bombaatarlar": "Гранатомёты",
    "Ürün Ailesi": "Линейка продукции", "Silahlarımızı": "Откройте для себя", "Keşfedin": "наше оружие",
    "Aşağı kaydırdıkça öne çıkan modellerimizi inceleyin.": "Прокручивайте вниз, чтобы увидеть избранные модели.",
    "Silah": "Категории", "Kategorileri": "оружия",
    "Profesyonel, askeri ve sportif ihtiyaçların tamamına yönelik, tek çatı altında tasarlanan ve üretilen kapsamlı ürün yelpazesi.":
      "Широкий ассортимент, разработанный и произведённый под одной крышей для профессиональных, военных и спортивных нужд.",
    "9×19 ve 7.62×25 mm; çelik ve polimer gövdeli yarı otomatik tabancalar.": "9×19 и 7,62×25 мм; самозарядные пистолеты со стальной и полимерной рамой.",
    "Yakın muharebe için seçici ateşli, yüksek kontrollü platformlar.": "Платформы с селективным огнём и высокой управляемостью для ближнего боя.",
    "Teleskopik dipçikli, çok namlu seçenekli çok yönlü sistemler.": "Универсальные системы с телескопическим прикладом и сменными стволами.",
    "40 mm NATO standardında tekli ve döner tamburlu bombaatarlar.": "Одноствольные и барабанные гранатомёты стандарта НАТО 40 мм.",
    "Sivil kullanım için geliştirilen insansız hava sistemleri. Yakında.": "Беспилотные авиационные системы для гражданского применения. Скоро.",
    "Piyade tüfekleri, makinalı tüfekler, keskin nişancı ve havan tedariki.": "Поставка штурмовых винтовок, пулемётов, снайперских винтовок и миномётов.",
    "İnteraktif 3D Vitrin": "Интерактивная 3D-витрина", "Her Detayı": "Изучите каждую", "Yakından": "деталь", "İnceleyin": "вблизи",
    "Gerçek CAD verilerinden üretilmiş 3D modeller. Döndürün, yakınlaştırın ve mühendislik detaylarını keşfedin.":
      "3D-модели на основе реальных CAD-данных. Вращайте, приближайте и изучайте инженерию.",
    "◐ Sürükleyerek döndürün · tekerlekle yakınlaştırın": "◐ Перетаскивайте для вращения · колесо для масштаба", "YÜKLENİYOR": "ЗАГРУЗКА",
    "Bileşen Mimarisi": "Архитектура компонентов", "Her Parça": "Каждая деталь —", "Mühendislik": "инженерия",
    "Her ürün, hassasiyetle tasarlanmış onlarca bileşenden oluşur.": "Каждое изделие состоит из десятков точно спроектированных компонентов.",
    "Kusursuz Uyum": "Идеальная посадка", "Milimetrik": "Микронный", "Tolerans": "допуск",
    "Parçalar, mikron seviyesinde toleransla birbirine kusursuz oturur.": "Детали идеально прилегают друг к другу с допуском на уровне микрон.",
    "Dayanıklılık": "Прочность", "Zorlu Koşula": "Готово к суровым", "Hazır": "условиям",
    "Yüksek dayanımlı malzeme ve titiz işçilikle üretilir.": "Изготовлено из высокопрочных материалов с тщательной обработкой.",
    "Test Edilmiş": "Проверенная", "Güven": "надёжность", "Ürünleri İncele": "Смотреть продукцию",
    "Mühendislik Mirası,": "Инженерное наследие,", "Geleceğin Gücü": "сила будущего",
    "Kutal Arms, tasarımdan seri üretime kadar tüm süreçleri kendi bünyesinde yürüten entegre bir savunma sanayi kuruluşudur. Ar-Ge odaklı yaklaşımı ve hassas imalat altyapısıyla, kullanıcısına yalnızca bir silah değil; güven, dayanıklılık ve üstünlük sunar.":
      "Kutal Arms — интегрированное оборонное предприятие, выполняющее все процессы собственными силами: от проектирования до серийного производства. Благодаря подходу с упором на НИОКР и точному производству мы предлагаем не просто оружие, а надёжность, прочность и превосходство.",
    "Malzeme biliminden balistik testlere, ergonomiden yüzey işlemlerine kadar her aşamada uluslararası standartları esas alırız. Amacımız; sahada fark yaratan, ömür boyu güvenilir sistemler üretmektir.":
      "От материаловедения до баллистических испытаний, от эргономики до обработки поверхностей — на каждом этапе мы опираемся на международные стандарты. Наша цель — создавать системы, надёжные на протяжении всего срока службы.",
    "Üretim Kabiliyetlerimiz": "Наши производственные возможности", "KALİTE SİSTEMİ": "СИСТЕМА КАЧЕСТВА",
    "Ürün Modeli": "Моделей продукции", "İhracat Ülkesi": "Стран экспорта", "Yerli Tasarım": "Отечественная разработка", "Atış Dayanım Testi": "Ресурсных отстрелов",
    "Üretim Kabiliyetleri": "Производственные возможности", "Uçtan Uca": "Полностью", "Entegre Üretim": "интегрированное производство",
    "Tasarım, prototipleme, seri üretim ve kalite kontrol; tüm zincir tek tesiste, tam kontrol altında.":
      "Проектирование, прототипирование, серийное производство и контроль качества — вся цепочка на одном предприятии, под полным контролем.",
    "Ar-Ge & Tasarım": "НИОКР и проектирование", "CAD/CAM tabanlı ürün geliştirme ve balistik simülasyon.": "Разработка на базе CAD/CAM и баллистическое моделирование.",
    "CNC Hassas İşleme": "Точная обработка ЧПУ", "Mikron seviyesinde tolerans, yüksek tekrarlanabilirlik.": "Допуск на уровне микрон, высокая повторяемость.",
    "Yüzey & Isıl İşlem": "Обработка поверхности и термообработка", "Korozyon direnci ve aşınma dayanımı için ileri kaplama.": "Современные покрытия для стойкости к коррозии и износу.",
    "Test & Kalite Kontrol": "Испытания и контроль качества", "Her ürün için atış, dayanım ve emniyet doğrulaması.": "Проверка стрельбой, на прочность и безопасность для каждого изделия.",
    "Medya & Haberler": "Медиа и новости", "Kutal Arms": "Kutal Arms", "Dünyasından": "из мира",
    "Fuar katılımları, yeni ürün lansmanları ve savunma sanayiine dair gelişmeler.": "Участие в выставках, запуски новых продуктов и события оборонной отрасли.",
    "Ürün Lansmanı": "Запуск продукта", "Fuar": "Выставка", "İhracat": "Экспорт", "Kalite": "Качество",
    "Yeni Nesil KTL S9 Gen-2 Tanıtıldı": "Представлен KTL S9 Gen-2 нового поколения",
    "Kutal Arms, SAHA EXPO 2026'da Yerini Aldı": "Kutal Arms принял участие в SAHA EXPO 2026",
    "Taktik Platformlarda Yeni İhracat Anlaşması": "Новое экспортное соглашение по тактическим платформам",
    "Kalite Yönetim Sistemi Sertifikalarımız Yenilendi": "Сертификаты нашей системы менеджмента качества обновлены",
    "Bize Ulaşın": "Свяжитесь с нами", "Projeniz İçin": "Надёжный партнёр", "Doğru Ortak": "для вашего проекта",
    "Kurumsal alımlar ve teknik iş birlikleri için Kutal Arms ekibiyle iletişime geçin.":
      "Свяжитесь с командой Kutal Arms по вопросам корпоративных закупок и технического сотрудничества.",
    "Kataloğu İncele": "Смотреть каталог",
    "Kutal Savunma'nın kendi tasarım ve üretimi olan silah sistemleri. Her ürün, uluslararası standartlarda mühendislik ve saha testleriyle geliştirilmiştir.":
      "Системы вооружения собственной разработки и производства Kutal Defense. Каждое изделие создано с инженерией мирового уровня и полевыми испытаниями.",
    "Tedarik & Temin": "Снабжение и поставки", "Tedariklerimiz": "Наши поставки",
    "Güvenlik güçlerinin operasyonel ihtiyaçlarına yönelik geniş bir silah sistemi yelpazesinde tedarik ve temin çözümleri sunuyoruz.":
      "Мы предлагаем решения по снабжению и поставкам в широком спектре систем вооружения для оперативных нужд силовых структур.",
    "Tedarik İçin İletişime Geçin": "Свяжитесь для поставок",
    "Bize Ulaşın": "Свяжитесь с нами", "Bize ulaşın": "Свяжитесь с нами",
    "Kurumsal alımlar, tedarik ve teknik iş birlikleri için Kutal Savunma ekibiyle iletişime geçin.":
      "Свяжитесь с командой Kutal Defense по вопросам корпоративных закупок, поставок и технического сотрудничества.",
    "Fabrika · Konya": "Завод · Конья", "Ofis · İstanbul": "Офис · Стамбул", "Telefon": "Телефон", "E-Posta": "Эл. почта",
    "Ad Soyad": "Имя и фамилия", "Kurum": "Организация", "Konu": "Тема", "Mesajınız": "Ваше сообщение",
    "Adınız Soyadınız": "Ваше имя и фамилия", "Kurum / Firma": "Организация / компания", "ornek@eposta.com": "example@email.com",
    "Talebinizin konusu": "Тема вашего запроса", "Talebinizi detaylandırın...": "Опишите ваш запрос...",
    "Firma Adı": "Название компании", "Yetkili Kişi": "Контактное лицо", "Şehir / Ülke": "Город / страна",
    "Faaliyet Alanı": "Сфера деятельности", "Pozisyon": "Должность", "Ön Yazı": "Сопроводительное письмо",
    "Deneyiminiz ve talebiniz hakkında kısa bilgi...": "Кратко о вашем опыте и запросе...",
    "Kendinizden ve deneyiminizden kısaca bahsedin...": "Кратко расскажите о себе и своём опыте...",
    "E-bülten için e-posta": "Эл. почта для рассылки",
    "CV'nizi, e-posta uygulamanız açıldığında ekleyebilirsiniz.": "Вы можете прикрепить резюме, когда откроется почтовое приложение.",
    "Bu sitede deneyiminizi iyileştirmek için gerekli çerezler kullanılır. Detaylar için KVKK & Gizlilik metnini inceleyebilirsiniz.":
      "На этом сайте используются необходимые файлы cookie для улучшения работы. Подробнее — в разделе «Данные и конфиденциальность».",
    "KVKK & Gizlilik": "Данные и конфиденциальность",
    "Kalite Güvencesi": "Гарантия качества",
    "Tasarımdan teslimata her aşamada uluslararası standartları esas alan, ölçülebilir ve izlenebilir bir kalite yönetim anlayışı.":
      "Измеримый и прослеживаемый подход к управлению качеством на основе международных стандартов на каждом этапе — от проектирования до поставки.",
    "Standartlar": "Стандарты", "Uyum Sağladığımız": "Стандарты, которым мы", "Comply With": "",
    "Kalite yönetim sistemimiz, savunma sanayii ve endüstriyel üretimin öncü standartları esas alınarak yapılandırılmıştır.":
      "Наша система менеджмента качества выстроена на ведущих стандартах оборонной отрасли и промышленного производства.",
    "Kalite Yönetim Sistemi": "Система менеджмента качества", "Süreç odaklı, sürekli iyileştirmeye dayalı kalite yönetimi.": "Процессно-ориентированное управление качеством на основе постоянного улучшения.",
    "Çevre Yönetim Sistemi": "Система экологического менеджмента", "Enerji verimliliği ve sürdürülebilir üretim ilkeleri.": "Принципы энергоэффективности и устойчивого производства.",
    "NATO Kalite Güvencesi": "Гарантия качества НАТО", "Tasarım, geliştirme ve üretimde NATO kalite gereksinimleri.": "Требования качества НАТО в проектировании, разработке и производстве.",
    "CE Uygunluk": "Соответствие CE", "Avrupa uygunluk kriterlerine göre ürün güvenliği.": "Безопасность продукции по европейским критериям соответствия.",
    "Türk Standartları": "Турецкие стандарты", "Ulusal standartlara uygun üretim ve test.": "Производство и испытания по национальным стандартам.",
    "Askeri Standartlar": "Военные стандарты", "MIL-STD-1913 ve ilgili askeri test standartlarına uyum.": "Соответствие MIL-STD-1913 и связанным военным стандартам испытаний.",
    "* Sertifika kapsam ve numaraları güncel belgelerimize göre düzenlenmektedir.": "* Область и номера сертификатов приводятся согласно нашим актуальным документам.",
    "Doğrulama": "Верификация", "Test &": "Испытания и", "Kalite Kontrol": "контроль качества",
    "Her ürün, envantere girmeden önce çok aşamalı test ve doğrulamadan geçer.": "Каждое изделие проходит многоэтапные испытания и верификацию перед постановкой на учёт.",
    "Malzeme Doğrulama": "Проверка материалов", "Gelen hammadde ve yarı mamullerde kimyasal ve mekanik test.": "Химические и механические испытания входящего сырья и полуфабрикатов.",
    "Boyutsal Kontrol": "Размерный контроль", "CMM ve hassas ölçüm cihazlarıyla mikron seviyesinde tolerans denetimi.": "Контроль допусков на уровне микрон с помощью КИМ и точных приборов.",
    "Atış & Dayanım Testi": "Отстрел и ресурсные испытания", "Balistik atış, ömür ve çevresel dayanıklılık testleri.": "Баллистический отстрел, ресурсные и климатические испытания.",
    "Nihai Muayene": "Финальный контроль", "Emniyet ve fonksiyon doğrulaması sonrası izlenebilir seri kaydı.": "Прослеживаемый серийный учёт после проверки безопасности и функций.",
    "Kalite Belgelerimizi Talep Edin": "Запросить наши сертификаты качества",
    "İş Ortaklığı": "Партнёрство", "Bayilik & Distribütörlük": "Дилерство и дистрибуция",
    "Kutal Savunma ürün ailesini kendi pazarınıza taşıyın. Yurt içi ve yurt dışı iş ortaklarımızı büyüyen ağımıza davet ediyoruz.":
      "Представьте линейку Kutal Defense на своём рынке. Приглашаем отечественных и зарубежных партнёров в нашу растущую сеть.",
    "Neden Kutal": "Почему Kutal", "Avantajları": "Преимущества",
    "Yerli Üretim Gücü": "Сила отечественного производства", "Tasarımdan üretime tam entegre, güvenilir tedarik zinciri.": "Полностью интегрированная надёжная цепочка от проектирования до производства.",
    "Pazarlama Desteği": "Маркетинговая поддержка", "Ürün görselleri, teknik dokümanlar ve satış materyalleri.": "Изображения продукции, техническая документация и торговые материалы.",
    "Rekabetçi Koşullar": "Конкурентные условия", "Bölgesel münhasırlık ve avantajlı tedarik koşulları.": "Региональная эксклюзивность и выгодные условия поставок.",
    "Teknik & Satış Sonrası": "Техническая и послепродажная поддержка", "Eğitim, yedek parça ve sürekli teknik destek.": "Обучение, запчасти и постоянная техническая поддержка.",
    "Başvuru": "Заявка", "Başvuru Formu": "форма заявки",
    "Formu doldurun; iş geliştirme ekibimiz en kısa sürede sizinle iletişime geçsin.": "Заполните форму, и наша команда по развитию свяжется с вами в ближайшее время.",
    "İnsan Kaynakları": "Отдел кадров",
    "Savunma sanayiinin geleceğini birlikte inşa edelim. Mühendislikten üretime, yetenekli ekip arkadaşlarını Kutal ailesine davet ediyoruz.":
      "Построим будущее оборонной отрасли вместе. От инженерии до производства — приглашаем талантливых коллег в семью Kutal.",
    "Birlikte": "Растём", "Büyüyoruz": "вместе", "Ar-Ge Kültürü": "Культура НИОКР",
    "Yenilikçi projelerde çalışma ve sürekli öğrenme fırsatı.": "Возможность работать над инновационными проектами и постоянно учиться.",
    "Gelişim & Eğitim": "Развитие и обучение", "Teknik ve kişisel gelişim programlarıyla kariyer yolculuğu.": "Карьерный путь с программами технического и личного развития.",
    "Fırsatlar": "Возможности", "Açık": "Открытые", "Pozisyonlar": "вакансии",
    "Makine Mühendisi (Ar-Ge)": "Инженер-механик (НИОКР)", "CNC Operatörü": "Оператор ЧПУ",
    "Kalite Kontrol Teknikeri": "Техник контроля качества", "Dış Ticaret Uzmanı": "Специалист по ВЭД", "Tam Zamanlı": "Полная занятость",
    "Bize": "Присоединяйтесь", "Katıl": "к нам",
    "Uygun pozisyon bulamadıysanız bile CV'nizi bize iletin; ihtiyaç doğduğunda sizinle iletişime geçelim.":
      "Даже если подходящей вакансии нет, пришлите резюме — мы свяжемся, когда появится потребность.",
    "Görüntüle": "Смотреть", "Diğer": "Другие",
    "Hata 404": "Ошибка 404", "Sayfa Bulunamadı": "Страница не найдена",
    "Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Aşağıdaki bağlantılardan devam edebilirsiniz.":
      "Запрашиваемая страница могла быть перемещена или удалена. Продолжите по ссылкам ниже.",
    "Türkiye'nin savunma ve silah sanayisinde öncü ve yenilikçi bir kuruluş. Yerli mühendislik, üstün üretim kalitesi.":
      "Ведущее и инновационное предприятие оборонной и оружейной промышленности Турции. Отечественная инженерия, высокое качество производства.",
    "Tüm hakları saklıdır.": "Все права защищены.", "KVKK": "Политика данных", "Gizlilik Bildirimi": "Уведомление о конфиденциальности", "Yasal Uyarı": "Правовая оговорка",
    "Yarı Otomatik Tabanca": "Самозарядный пистолет", "Spor Tabanca": "Спортивный пистолет", "Makinalı Tabanca": "Пистолет-пулемёт",
    "Hafif Makinalı Tüfek": "Ручной пулемёт", "Bombaatar (Döner Tambur)": "Гранатомёт (барабанный)",
    "Piyade Tüfeği": "Штурмовая винтовка", "Makinalı Tüfek": "Пулемёт", "Keskin Nişancı Tüfeği": "Снайперская винтовка",
    "81 mm Havan": "81-мм миномёт", "120 mm Havan": "120-мм миномёт",
    "Kalibre": "Калибр", "Kapasite": "Ёмкость", "Namlu": "Ствол", "Namlu Çıkış Hızı": "Начальная скорость",
    "Atış Hızı": "Темп стрельбы", "Etkili Menzil": "Прицельная дальность", "Maksimum Menzil": "Макс. дальность",
    "Minimum Menzil": "Мин. дальность", "Ağırlık": "Масса", "Toplam Uzunluk": "Общая длина", "Genişlik": "Ширина",
    "Yükseklik": "Высота", "Tetik": "Спуск", "Emniyet": "Предохранитель", "Nişangah": "Прицел", "Ray": "Планка",
    "Yiv Oranı": "Шаг нарезов", "Renk": "Цвет", "Çalışma Sistemi": "Принцип работы", "Ateşleme Modu": "Режим огня",
    "Şarjör Tipi": "Тип магазина", "Sistem": "Система", "Çerçeve": "Рама", "Gövde": "Корпус", "Alt Gövde": "Нижняя рама",
    "Dipçik": "Приклад", "Besleme": "Питание", "Açılım": "Открывание", "Tutma Yeri": "Рукоятка", "Çerçeve / Sürgü": "Рама / затвор",
    "KUTAL Savunma ve Silah Sanayi A.Ş., savunma teknolojilerinde dünya standartlarını yakalayan, yerli ve yenilikçi bir üreticidir.":
      "KUTAL Defense and Arms Industry Inc. — отечественный инновационный производитель, соответствующий мировым стандартам в оборонных технологиях.",
    "Vizyonumuz": "Наше видение", "Misyonumuz": "Наша миссия",
    "KUTAL Savunma ve Silah Sanayi A.Ş. olarak dünya çapında tanınan; yenilikçi, güvenilir ve sürdürülebilir savunma çözümleri sunan bir lider olmayı hedefliyoruz.":
      "Мы стремимся стать всемирно признанным лидером, предлагающим инновационные, надёжные и устойчивые оборонные решения.",
    "Milli güvenliğimizi ve savunma kabiliyetimizi artırmak amacıyla, en yüksek kalitede savunma sistemleri ve silah teknolojileri üretmek ve geliştirmek için çalışıyoruz.":
      "Мы работаем над созданием и совершенствованием оборонных систем и оружейных технологий высочайшего качества ради укрепления национальной безопасности и обороноспособности.",
    "Kutal Savunma": "Kutal Defense", "Geleceğin Gücü": "сила будущего",
    "KUTAL, Türkiye'nin savunma ve silah sanayisinde öncü ve yenilikçi bir şirket olarak yurt içi ve yurt dışı pazarlarda güvenilirliğini kanıtlamıştır. Ar-Ge yatırımlarına öncelik veren kuruluşumuz, mühendislik uzmanlığını teknolojik gelişmelerle sürekli bütünleştirir.":
      "Как ведущая и инновационная компания оборонной отрасли Турции, KUTAL доказала свою надёжность на внутреннем и внешних рынках. Отдавая приоритет НИОКР, мы постоянно объединяем инженерный опыт с технологическим прогрессом.",
    "Kalite güvencesi; uluslararası standartları esas alan titiz test süreçleriyle sağlanır. Üretim yaklaşımımız çevreye duyarlıdır; enerji verimliliği ve sürdürülebilirlik ilkelerini önceler. Amacımız, sahada fark yaratan ömür boyu güvenilir sistemler üretmektir.":
      "Гарантия качества обеспечивается строгими испытаниями по международным стандартам. Наше производство бережно к окружающей среде и ставит во главу угла энергоэффективность и устойчивость. Наша цель — системы, надёжные на протяжении всего срока службы.",
    "Ürünlerimizi İnceleyin": "Смотреть нашу продукцию",
    "Genel Kalite Politikası": "Общая политика качества", "Taahhüdümüz": "обязательство",
    "Tasarımdan teslimata her aşamada benimsediğimiz ilkeler.": "Принципы, которых мы придерживаемся на каждом этапе — от проектирования до поставки.",
    "Tüm süreçlerde müşterinin ihtiyaç ve beklentilerini tam olarak karşılayan, güvenilir bir anlayış benimsemeyi.": "Придерживаться надёжного подхода, полностью отвечающего потребностям и ожиданиям клиента во всех процессах.",
    "Maliyetleri düşürmek ve kârlılığı artırmak için teknolojik gelişmeleri yakından takip etmeyi.": "Внимательно следить за технологическим прогрессом ради снижения затрат и роста прибыльности.",
    "Kalite sistemleri çerçevesinde tüm çalışanların yetkinliklerini en üst seviyede kullanabilmesini sağlamayı.": "Обеспечивать максимальное раскрытие компетенций всех сотрудников в рамках системы качества.",
    "Tüm çalışanlarda kalite bilincini tesis etmeyi.": "Формировать культуру качества у всех сотрудников.",
    "Tedarikçilerle güvene dayalı bir iş birliği içinde olmayı.": "Поддерживать сотрудничество с поставщиками на основе доверия.",
    "Firmamızın ve Türkiye'nin adını dünyaya daha çok duyurmaya hizmet etmeyi.": "Способствовать продвижению имени нашей компании и Турции в мире.",
    "En uygun, en doğru ve en ekonomik çözümleri en hızlı biçimde üretmeyi.": "Предлагать наиболее подходящие, точные и экономичные решения максимально быстро.",
    "Başlanan her projeyi zamanında, en üst düzey tekniklerle ve istenen kalitede tamamlamayı.": "Завершать каждый проект в срок, на высшем техническом уровне и с требуемым качеством.",
    "İçinde bulunduğumuz topluma ve çevreye saygılı, örnek bir kuruluş olmayı.": "Быть образцовой организацией, уважающей общество и окружающую среду.",
    "Konum": "Расположение", "Ofis &": "Офис и", "Fabrika": "Завод",
    "Kutal Savunma amblem": "эмблема Kutal Defense", "SAVUNMA SANAYİ": "ОБОРОННАЯ ПРОМЫШЛЕННОСТЬ",
    "Kutal Savunma, makinalı tabanca ailesinin yeni üyesi KTL S9 Gen-2'yi tanıttı. Yeni nesil model; geliştirilmiş gecikmeli geri tepme mekanizması, düşük geri tepme sağlayan yeni tampon sistemi ve tamamen modüler bir üst alıcı ile geliyor.":
      "Kutal Defense представила KTL S9 Gen-2 — новинку семейства пистолетов-пулемётов. Модель нового поколения оснащена улучшенным механизмом замедленной отдачи, новой буферной системой с низкой отдачей и полностью модульной верхней ствольной коробкой.",
    "9×19 mm kalibreli platform, 6.5″, 8.5″ ve 10″ değiştirilebilir namlu seçenekleriyle yakın muharebeden koruma görevlerine kadar geniş bir kullanım yelpazesi sunuyor. MIL-STD-1913 Picatinny ray sistemi sayesinde optik, lazer ve aydınlatma aksesuarları hızla entegre edilebiliyor.":
      "Платформа калибра 9×19 мм со сменными стволами 6,5″, 8,5″ и 10″ охватывает широкий спектр задач — от ближнего боя до охранных функций. Планка MIL-STD-1913 Picatinny позволяет быстро устанавливать оптику, лазеры и осветительные приборы.",
    "Gen-2 ile birlikte gelen yeni ergonomik tutamak açısı ve dokulu yüzey işlemi, zorlu saha koşullarında dahi üstün silah kontrolü sağlıyor.":
      "Новый эргономичный угол рукоятки и текстурированная поверхность Gen-2 обеспечивают превосходный контроль оружия даже в тяжёлых полевых условиях.",
    "Kutal Savunma, savunma ve havacılık sanayiinin öncü fuarlarından SAHA EXPO 2026'da standıyla yerini aldı. Fuar boyunca tabanca, makinalı tabanca, hafif makinalı tüfek ve bombaatar ürün ailesi ziyaretçilerin yoğun ilgisiyle karşılaştı.":
      "Kutal Defense представила свой стенд на SAHA EXPO 2026 — одной из ведущих выставок оборонной и аэрокосмической отрасли. Семейства пистолетов, пистолетов-пулемётов, ручных пулемётов и гранатомётов вызвали большой интерес посетителей.",
    "Yerli ve yabancı heyetlerin ağırlandığı stantta, interaktif 3D ürün deneyimi ve canlı teknik sunumlar gerçekleştirildi. Ekibimiz, kurumsal alım ve tedarik süreçlerine ilişkin görüşmeler yürüttü.":
      "На стенде, принимавшем отечественные и зарубежные делегации, прошли интерактивные 3D-презентации продукции и живые технические демонстрации. Наша команда провела переговоры по корпоративным закупкам и поставкам.",
    "Yerli mühendislik ve üstün üretim kalitesini uluslararası pazarlara taşıyan Kutal Savunma, taktik silah platformları alanında yeni bir ihracat anlaşması imzaladı.":
      "Продвигая отечественную инженерию и высокое качество на международные рынки, Kutal Defense подписала новое экспортное соглашение в области тактических оружейных платформ.",
    "Anlaşma kapsamında, NATO standartlarıyla tam uyumlu ürünlerimiz farklı coğrafyalardaki güvenlik güçlerinin envanterine katılacak. Bu iş birliği, ihracat ağımızı genişletme hedefimiz doğrultusunda önemli bir adım oluşturuyor.":
      "В рамках соглашения наша продукция, полностью соответствующая стандартам НАТО, войдёт в арсеналы силовых структур в разных регионах. Это партнёрство — важный шаг к расширению нашей экспортной сети.",
    "Kutal Savunma, tasarımdan seri üretime kadar tüm süreçlerini kapsayan kalite yönetim sistemi denetimlerini başarıyla tamamladı. Bağımsız denetim kuruluşları tarafından gerçekleştirilen incelemelerin ardından kalite sertifikalarımız yenilendi.":
      "Kutal Defense успешно прошла аудиты системы менеджмента качества, охватывающие все процессы от проектирования до серийного производства. По итогам проверок независимыми органами наши сертификаты качества обновлены.",
    "Mikron seviyesinde tolerans hedefleyen üretim yaklaşımımız ve her ürün için uyguladığımız atış, dayanım ve emniyet doğrulama süreçleri, kalite taahhüdümüzün temelini oluşturuyor.":
      "Наш производственный подход с допуском на уровне микрон и процедуры проверки стрельбой, на прочность и безопасность для каждого изделия — основа нашего обязательства по качеству.",
    "Geliştirilmiş ateşleme grubu, yeni ergonomik gövde ve modüler ray sistemiyle KTL S9 Gen-2 sahneye çıktı.":
      "KTL S9 Gen-2 выходит с улучшенным ударно-спусковым механизмом, новым эргономичным корпусом и модульной планкой.",
    "Savunma sanayiinin en büyük buluşmalarından SAHA EXPO'da tüm ürün ailemizi ziyaretçilerle buluşturduk.":
      "Мы представили посетителям всю нашу линейку на SAHA EXPO — одном из крупнейших событий оборонной отрасли.",
    "Kutal Savunma, taktik silah sistemlerinde yeni bir uluslararası tedarik anlaşmasına imza attı.":
      "Kutal Defense подписала новое международное соглашение о поставках тактических систем вооружения.",
    "Uluslararası kalite yönetim sistemi denetimlerini başarıyla tamamlayarak sertifikalarımızı yeniledik.":
      "Мы обновили сертификаты, успешно пройдя международные аудиты системы менеджмента качества.",
    "İndir": "Скачать",
  };

  /* ============ العربية ============ */
  DICT.ar = {
    "Anasayfa": "الرئيسية", "Kurumsal": "الشركة", "Hakkımızda": "من نحن", "Hakkında": "حول",
    "Kalite & Sertifikalar": "الجودة والشهادات", "Kariyer": "الوظائف", "KVK": "سياسة البيانات",
    "Ürünlerimiz": "منتجاتنا", "Ürünler": "المنتجات", "Tedariklerimiz": "الإمدادات", "Bayilik": "الوكالات",
    "Haberler": "الأخبار", "İletişim": "اتصل بنا", "Teklif Al": "اطلب عرض سعر", "Ara": "بحث",
    "Tabancalar": "المسدسات", "Makinalı Tabancalar": "المسدسات الرشاشة", "Hafif Makinalı Tüfekler": "الرشاشات الخفيفة",
    "Bombaatar": "قاذفات القنابل", "Sivil Drone Sistemleri": "أنظمة الطائرات المدنية",
    "Piyade Tüfekleri": "بنادق المشاة", "Makinalı Tüfekler": "الرشاشات",
    "Keskin Nişancı Tüfekleri": "بنادق القنص", "Havanlar": "مدافع الهاون",
    "İncele": "استكشف", "İncele →": "استكشف →", "Görüntüle →": "عرض →", "Detayları Gör": "عرض التفاصيل",
    "Tüm Haberler": "كل الأخبار", "Tümü": "الكل", "Filtrele": "تصفية", "Filtreler": "عوامل التصفية", "Temizle": "مسح",
    "Kategori": "الفئة", "Kalibre": "العيار", "Ürün Tipi": "نوع المنتج", "ürün": "منتج",
    "Seçili filtrelere uygun ürün bulunamadı.": "لا توجد منتجات مطابقة للفلاتر المحددة.",
    "Talep Et": "طلب", "Talep Et →": "طلب →", "Başvuruyu Gönder": "إرسال الطلب",
    "Mesajı Gönder": "إرسال الرسالة", "Başvur →": "تقديم →", "Kabul Et": "قبول", "Reddet": "رفض",
    "KAYIT": "اشتراك", "KAYDIR": "مرّر", "KAYDIRIN": "مرّر",
    "Ürün Hakkında": "نظرة عامة", "Özellikler": "المواصفات", "Galeri": "المعرض", "Dokümanlar": "المستندات",
    "Renk Seçeneği": "خيار اللون", "Paylaş": "مشاركة", "Fotoğraf": "صورة", "3D Model": "نموذج ثلاثي الأبعاد",
    "İndir": "تحميل", "İndir →": "تحميل →", "Ürünün teknik özelliklerini içeren belgeyi indirin.": "حمّل المستند الذي يحتوي على المواصفات الفنية للمنتج.",
    "Önceki slayt": "الشريحة السابقة", "Sonraki slayt": "الشريحة التالية", "Menü": "القائمة", "Kapat": "إغلاق",
    "Aramaya başlamak için yazın… Ürün adı, kalibre, haber veya sayfa.": "ابدأ الكتابة للبحث… منتج، عيار، خبر أو صفحة.",
    "Ürün, haber veya sayfa arayın…": "ابحث عن منتجات أو أخبار أو صفحات…",
    "Ürün": "منتج", "Haber": "خبر", "Sayfa": "صفحة", "Tedarik": "إمداد",
    "Türk Savunma Sanayii": "الصناعة الدفاعية التركية",
    "Kutal Savunma, güvenlik güçlerinin yanında. Tabancadan piyade tüfeğine uzanan ürün gamıyla; zorlu saha koşullarında test edilmiş, güvenilir silah sistemleri.":
      "كوتال ديفنس إلى جانب قوات الأمن. من المسدسات إلى بنادق المشاة؛ أنظمة أسلحة موثوقة اختُبرت في أقسى الظروف الميدانية.",
    "Ürünleri Keşfet": "استكشف المنتجات", "İletişime Geç": "تواصل معنا", "İletişime Geçin": "تواصل معنا",
    "SAHADA": "قوة", "KANITLANMIŞ": "", "GÜÇ": "مُثبتة ميدانيًا",
    "YAKIN MUHAREBEDE": "قتال قريب", "TAM": "سيطرة", "KONTROL": "تامة",
    "YÜKSEK VE": "قوة نيران", "ETKİLİ": "عالية", "ATIŞ GÜCÜ": "وفعّالة",
    "SAHAYA": "إمداد", "KESİNTİSİZ": "", "TEDARİK": "متواصل",
    "Makinalı Tabancalar": "المسدسات الرشاشة", "Bombaatar Sistemleri": "أنظمة قاذفات القنابل", "Tedarik & Temin": "التوريد والإمداد",
    "KTL S9; gecikmeli geri tepme sistemi, yüksek atış hızı ve seçici ateşleme moduyla yakın muharebe için üstün kontrol sağlar.":
      "يوفّر KTL S9 تحكّمًا فائقًا في القتال القريب بفضل نظام الارتداد المتأخّر ومعدّل الإطلاق العالي ووضع الإطلاق الانتقائي.",
    "KTL B40; döner tamburlu pompalama sistemi ve 40 mm çapıyla sahada sürekli ve güvenilir atış gücü sunar.":
      "يقدّم KTL B40 قوة نيران مستمرة وموثوقة في الميدان بفضل نظام الأسطوانة الدوّارة وعيار 40 مم.",
    "Piyade tüfeklerinden havanlara, keskin nişancı sistemlerinden makinalı tüfeklere; güvenlik güçlerinin ihtiyaçlarına uçtan uca tedarik çözümleri.":
      "من بنادق المشاة إلى مدافع الهاون، ومن أنظمة القنص إلى الرشاشات؛ حلول توريد متكاملة لاحتياجات قوات الأمن.",
    "KTL S9'u İncele": "استكشف KTL S9", "Tüm Ürünler": "كل المنتجات", "KTL B40'ı İncele": "استكشف KTL B40", "Bombaatarlar": "قاذفات القنابل",
    "Ürün Ailesi": "عائلة المنتجات", "Silahlarımızı": "اكتشف", "Keşfedin": "أسلحتنا",
    "Aşağı kaydırdıkça öne çıkan modellerimizi inceleyin.": "مرّر لأسفل لاستكشاف موديلاتنا المميّزة.",
    "Silah": "فئات", "Kategorileri": "الأسلحة",
    "Profesyonel, askeri ve sportif ihtiyaçların tamamına yönelik, tek çatı altında tasarlanan ve üretilen kapsamlı ürün yelpazesi.":
      "تشكيلة شاملة مصمّمة ومصنّعة تحت سقف واحد لتلبية جميع الاحتياجات الاحترافية والعسكرية والرياضية.",
    "9×19 ve 7.62×25 mm; çelik ve polimer gövdeli yarı otomatik tabancalar.": "9×19 و7.62×25 مم؛ مسدسات نصف آلية بهيكل فولاذي وبوليمري.",
    "Yakın muharebe için seçici ateşli, yüksek kontrollü platformlar.": "منصّات انتقائية الإطلاق وعالية التحكّم للقتال القريب.",
    "Teleskopik dipçikli, çok namlu seçenekli çok yönlü sistemler.": "أنظمة متعددة الاستخدامات بأخمص تلسكوبي وخيارات سبطانة متعددة.",
    "40 mm NATO standardında tekli ve döner tamburlu bombaatarlar.": "قاذفات قنابل مفردة وأسطوانية دوّارة بمعيار الناتو 40 مم.",
    "Sivil kullanım için geliştirilen insansız hava sistemleri. Yakında.": "أنظمة جوية بدون طيار للاستخدام المدني. قريبًا.",
    "Piyade tüfekleri, makinalı tüfekler, keskin nişancı ve havan tedariki.": "توريد بنادق المشاة والرشاشات وبنادق القنص ومدافع الهاون.",
    "İnteraktif 3D Vitrin": "عرض ثلاثي الأبعاد تفاعلي", "Her Detayı": "افحص كل", "Yakından": "تفصيل", "İnceleyin": "عن قرب",
    "Gerçek CAD verilerinden üretilmiş 3D modeller. Döndürün, yakınlaştırın ve mühendislik detaylarını keşfedin.":
      "نماذج ثلاثية الأبعاد من بيانات CAD حقيقية. أدِرها وقرّبها واكتشف تفاصيل الهندسة.",
    "◐ Sürükleyerek döndürün · tekerlekle yakınlaştırın": "◐ اسحب للتدوير · استخدم العجلة للتكبير", "YÜKLENİYOR": "جارٍ التحميل",
    "Bileşen Mimarisi": "معمارية المكوّنات", "Her Parça": "كل قطعة", "Mühendislik": "هندسة",
    "Her ürün, hassasiyetle tasarlanmış onlarca bileşenden oluşur.": "يتكوّن كل منتج من عشرات المكوّنات المصمّمة بدقّة.",
    "Kusursuz Uyum": "تطابق مثالي", "Milimetrik": "دقّة", "Tolerans": "ميكرونية",
    "Parçalar, mikron seviyesinde toleransla birbirine kusursuz oturur.": "تتلاءم القطع بعضها مع بعض بدقّة على مستوى الميكرون.",
    "Dayanıklılık": "المتانة", "Zorlu Koşula": "جاهزة للظروف", "Hazır": "القاسية",
    "Yüksek dayanımlı malzeme ve titiz işçilikle üretilir.": "تُصنع من مواد عالية المتانة وبحرفية دقيقة.",
    "Test Edilmiş": "ثقة", "Güven": "مُختبَرة", "Ürünleri İncele": "استكشف المنتجات",
    "Mühendislik Mirası,": "إرث هندسي،", "Geleceğin Gücü": "قوة المستقبل",
    "Kutal Arms, tasarımdan seri üretime kadar tüm süreçleri kendi bünyesinde yürüten entegre bir savunma sanayi kuruluşudur. Ar-Ge odaklı yaklaşımı ve hassas imalat altyapısıyla, kullanıcısına yalnızca bir silah değil; güven, dayanıklılık ve üstünlük sunar.":
      "كوتال آرمز مؤسسة صناعية دفاعية متكاملة تدير جميع العمليات داخليًا، من التصميم إلى الإنتاج المتسلسل. وبفضل نهجها القائم على البحث والتطوير وبنيتها التصنيعية الدقيقة، تقدّم للمستخدم ليس مجرد سلاح، بل الثقة والمتانة والتفوّق.",
    "Malzeme biliminden balistik testlere, ergonomiden yüzey işlemlerine kadar her aşamada uluslararası standartları esas alırız. Amacımız; sahada fark yaratan, ömür boyu güvenilir sistemler üretmektir.":
      "من علم المواد إلى اختبارات الباليستيك، ومن بيئة العمل إلى معالجات الأسطح، نعتمد المعايير الدولية في كل مرحلة. هدفنا إنتاج أنظمة موثوقة مدى الحياة تُحدث فرقًا في الميدان.",
    "Üretim Kabiliyetlerimiz": "قدراتنا الإنتاجية", "KALİTE SİSTEMİ": "نظام الجودة",
    "Ürün Modeli": "موديل منتج", "İhracat Ülkesi": "دولة تصدير", "Yerli Tasarım": "تصميم محلي", "Atış Dayanım Testi": "اختبار تحمّل الإطلاق",
    "Üretim Kabiliyetleri": "القدرات الإنتاجية", "Uçtan Uca": "إنتاج متكامل", "Entegre Üretim": "من البداية للنهاية",
    "Tasarım, prototipleme, seri üretim ve kalite kontrol; tüm zincir tek tesiste, tam kontrol altında.":
      "التصميم والنمذجة والإنتاج المتسلسل ومراقبة الجودة؛ السلسلة كاملة في منشأة واحدة وتحت سيطرة تامّة.",
    "Ar-Ge & Tasarım": "البحث والتطوير والتصميم", "CAD/CAM tabanlı ürün geliştirme ve balistik simülasyon.": "تطوير المنتجات بتقنية CAD/CAM والمحاكاة الباليستية.",
    "CNC Hassas İşleme": "تصنيع دقيق CNC", "Mikron seviyesinde tolerans, yüksek tekrarlanabilirlik.": "تفاوت على مستوى الميكرون وقابلية تكرار عالية.",
    "Yüzey & Isıl İşlem": "معالجة الأسطح والحرارة", "Korozyon direnci ve aşınma dayanımı için ileri kaplama.": "طلاءات متقدّمة لمقاومة التآكل والبلى.",
    "Test & Kalite Kontrol": "الاختبار ومراقبة الجودة", "Her ürün için atış, dayanım ve emniyet doğrulaması.": "التحقق من الإطلاق والتحمّل والأمان لكل منتج.",
    "Medya & Haberler": "الإعلام والأخبار", "Kutal Arms": "كوتال آرمز", "Dünyasından": "من عالم",
    "Fuar katılımları, yeni ürün lansmanları ve savunma sanayiine dair gelişmeler.": "المشاركة في المعارض وإطلاق المنتجات الجديدة وتطوّرات الصناعة الدفاعية.",
    "Ürün Lansmanı": "إطلاق منتج", "Fuar": "معرض", "İhracat": "تصدير", "Kalite": "الجودة",
    "Yeni Nesil KTL S9 Gen-2 Tanıtıldı": "الكشف عن KTL S9 Gen-2 من الجيل الجديد",
    "Kutal Arms, SAHA EXPO 2026'da Yerini Aldı": "كوتال آرمز تشارك في معرض SAHA EXPO 2026",
    "Taktik Platformlarda Yeni İhracat Anlaşması": "اتفاقية تصدير جديدة في المنصّات التكتيكية",
    "Kalite Yönetim Sistemi Sertifikalarımız Yenilendi": "تجديد شهادات نظام إدارة الجودة لدينا",
    "Bize Ulaşın": "تواصل معنا", "Projeniz İçin": "الشريك المناسب", "Doğru Ortak": "لمشروعك",
    "Kurumsal alımlar ve teknik iş birlikleri için Kutal Arms ekibiyle iletişime geçin.":
      "تواصل مع فريق كوتال آرمز بشأن المشتريات المؤسسية والتعاون الفني.",
    "Kataloğu İncele": "تصفّح الكتالوج",
    "Kutal Savunma'nın kendi tasarım ve üretimi olan silah sistemleri. Her ürün, uluslararası standartlarda mühendislik ve saha testleriyle geliştirilmiştir.":
      "أنظمة أسلحة من تصميم وإنتاج كوتال ديفنس. طُوِّر كل منتج بهندسة بمعايير دولية واختبارات ميدانية.",
    "Tedarik & Temin": "التوريد والإمداد", "Tedariklerimiz": "إمداداتنا",
    "Güvenlik güçlerinin operasyonel ihtiyaçlarına yönelik geniş bir silah sistemi yelpazesinde tedarik ve temin çözümleri sunuyoruz.":
      "نقدّم حلول توريد وإمداد ضمن تشكيلة واسعة من أنظمة الأسلحة لتلبية الاحتياجات التشغيلية لقوات الأمن.",
    "Tedarik İçin İletişime Geçin": "تواصل معنا للتوريد",
    "Bize ulaşın": "تواصل معنا",
    "Kurumsal alımlar, tedarik ve teknik iş birlikleri için Kutal Savunma ekibiyle iletişime geçin.":
      "تواصل مع فريق كوتال ديفنس بشأن المشتريات المؤسسية والتوريد والتعاون الفني.",
    "Fabrika · Konya": "المصنع · قونية", "Ofis · İstanbul": "المكتب · إسطنبول", "Telefon": "الهاتف", "E-Posta": "البريد الإلكتروني",
    "Ad Soyad": "الاسم الكامل", "Kurum": "المؤسسة", "Konu": "الموضوع", "Mesajınız": "رسالتك",
    "Adınız Soyadınız": "اسمك الكامل", "Kurum / Firma": "المؤسسة / الشركة", "ornek@eposta.com": "example@email.com",
    "Talebinizin konusu": "موضوع طلبك", "Talebinizi detaylandırın...": "اشرح طلبك...",
    "Firma Adı": "اسم الشركة", "Yetkili Kişi": "الشخص المسؤول", "Şehir / Ülke": "المدينة / الدولة",
    "Faaliyet Alanı": "مجال النشاط", "Pozisyon": "الوظيفة", "Ön Yazı": "خطاب التقديم",
    "Deneyiminiz ve talebiniz hakkında kısa bilgi...": "معلومات موجزة عن خبرتك وطلبك...",
    "Kendinizden ve deneyiminizden kısaca bahsedin...": "عرّف بنفسك وخبرتك باختصار...",
    "E-bülten için e-posta": "البريد للنشرة الإخبارية",
    "CV'nizi, e-posta uygulamanız açıldığında ekleyebilirsiniz.": "يمكنك إرفاق سيرتك الذاتية عند فتح تطبيق البريد.",
    "Bu sitede deneyiminizi iyileştirmek için gerekli çerezler kullanılır. Detaylar için KVKK & Gizlilik metnini inceleyebilirsiniz.":
      "يستخدم هذا الموقع ملفات تعريف الارتباط الضرورية لتحسين تجربتك. للمزيد راجع سياسة البيانات والخصوصية.",
    "KVKK & Gizlilik": "البيانات والخصوصية",
    "Kalite Güvencesi": "ضمان الجودة",
    "Tasarımdan teslimata her aşamada uluslararası standartları esas alan, ölçülebilir ve izlenebilir bir kalite yönetim anlayışı.":
      "نهج لإدارة الجودة قابل للقياس والتتبّع يعتمد المعايير الدولية في كل مرحلة من التصميم إلى التسليم.",
    "Standartlar": "المعايير", "Uyum Sağladığımız": "المعايير التي", "Comply With": "نلتزم بها",
    "Kalite yönetim sistemimiz, savunma sanayii ve endüstriyel üretimin öncü standartları esas alınarak yapılandırılmıştır.":
      "بُني نظام إدارة الجودة لدينا على المعايير الرائدة في الصناعة الدفاعية والإنتاج الصناعي.",
    "Kalite Yönetim Sistemi": "نظام إدارة الجودة", "Süreç odaklı, sürekli iyileştirmeye dayalı kalite yönetimi.": "إدارة جودة قائمة على العمليات والتحسين المستمر.",
    "Çevre Yönetim Sistemi": "نظام الإدارة البيئية", "Enerji verimliliği ve sürdürülebilir üretim ilkeleri.": "مبادئ كفاءة الطاقة والإنتاج المستدام.",
    "NATO Kalite Güvencesi": "ضمان الجودة وفق الناتو", "Tasarım, geliştirme ve üretimde NATO kalite gereksinimleri.": "متطلبات جودة الناتو في التصميم والتطوير والإنتاج.",
    "CE Uygunluk": "مطابقة CE", "Avrupa uygunluk kriterlerine göre ürün güvenliği.": "سلامة المنتج وفق معايير المطابقة الأوروبية.",
    "Türk Standartları": "المعايير التركية", "Ulusal standartlara uygun üretim ve test.": "إنتاج واختبار وفق المعايير الوطنية.",
    "Askeri Standartlar": "المعايير العسكرية", "MIL-STD-1913 ve ilgili askeri test standartlarına uyum.": "الالتزام بـ MIL-STD-1913 ومعايير الاختبار العسكرية ذات الصلة.",
    "* Sertifika kapsam ve numaraları güncel belgelerimize göre düzenlenmektedir.": "* يُحدَّد نطاق الشهادات وأرقامها وفق مستنداتنا الحالية.",
    "Doğrulama": "التحقق", "Test &": "الاختبار و", "Kalite Kontrol": "مراقبة الجودة",
    "Her ürün, envantere girmeden önce çok aşamalı test ve doğrulamadan geçer.": "يخضع كل منتج لاختبارات وتحقّق متعدّد المراحل قبل إدخاله المخزون.",
    "Malzeme Doğrulama": "التحقق من المواد", "Gelen hammadde ve yarı mamullerde kimyasal ve mekanik test.": "اختبارات كيميائية وميكانيكية للمواد الخام ونصف المصنّعة الواردة.",
    "Boyutsal Kontrol": "الفحص الأبعادي", "CMM ve hassas ölçüm cihazlarıyla mikron seviyesinde tolerans denetimi.": "فحص التفاوت على مستوى الميكرون بأجهزة CMM والقياس الدقيق.",
    "Atış & Dayanım Testi": "اختبار الإطلاق والتحمّل", "Balistik atış, ömür ve çevresel dayanıklılık testleri.": "اختبارات الإطلاق الباليستي والعمر والتحمّل البيئي.",
    "Nihai Muayene": "الفحص النهائي", "Emniyet ve fonksiyon doğrulaması sonrası izlenebilir seri kaydı.": "تسجيل تسلسلي قابل للتتبّع بعد التحقق من الأمان والوظائف.",
    "Kalite Belgelerimizi Talep Edin": "اطلب شهادات الجودة الخاصة بنا",
    "İş Ortaklığı": "الشراكة", "Bayilik & Distribütörlük": "الوكالات والتوزيع",
    "Kutal Savunma ürün ailesini kendi pazarınıza taşıyın. Yurt içi ve yurt dışı iş ortaklarımızı büyüyen ağımıza davet ediyoruz.":
      "انقل عائلة منتجات كوتال ديفنس إلى سوقك. ندعو شركاءنا المحليين والدوليين إلى شبكتنا المتنامية.",
    "Neden Kutal": "لماذا كوتال", "Avantajları": "المزايا",
    "Yerli Üretim Gücü": "قوة الإنتاج المحلي", "Tasarımdan üretime tam entegre, güvenilir tedarik zinciri.": "سلسلة توريد موثوقة ومتكاملة تمامًا من التصميم إلى الإنتاج.",
    "Pazarlama Desteği": "دعم تسويقي", "Ürün görselleri, teknik dokümanlar ve satış materyalleri.": "صور المنتجات والمستندات الفنية ومواد البيع.",
    "Rekabetçi Koşullar": "شروط تنافسية", "Bölgesel münhasırlık ve avantajlı tedarik koşulları.": "حصرية إقليمية وشروط توريد مميّزة.",
    "Teknik & Satış Sonrası": "الدعم الفني وما بعد البيع", "Eğitim, yedek parça ve sürekli teknik destek.": "تدريب وقطع غيار ودعم فني مستمر.",
    "Başvuru": "التقديم", "Başvuru Formu": "نموذج التقديم",
    "Formu doldurun; iş geliştirme ekibimiz en kısa sürede sizinle iletişime geçsin.": "املأ النموذج وسيتواصل معك فريق تطوير الأعمال في أقرب وقت.",
    "İnsan Kaynakları": "الموارد البشرية",
    "Savunma sanayiinin geleceğini birlikte inşa edelim. Mühendislikten üretime, yetenekli ekip arkadaşlarını Kutal ailesine davet ediyoruz.":
      "لنبنِ معًا مستقبل الصناعة الدفاعية. من الهندسة إلى الإنتاج، ندعو الزملاء الموهوبين إلى عائلة كوتال.",
    "Birlikte": "ننمو", "Büyüyoruz": "معًا", "Ar-Ge Kültürü": "ثقافة البحث والتطوير",
    "Yenilikçi projelerde çalışma ve sürekli öğrenme fırsatı.": "فرصة للعمل في مشاريع مبتكرة والتعلّم المستمر.",
    "Gelişim & Eğitim": "التطوير والتدريب", "Teknik ve kişisel gelişim programlarıyla kariyer yolculuğu.": "مسار مهني مع برامج تطوير فني وشخصي.",
    "Fırsatlar": "الفرص", "Açık": "الوظائف", "Pozisyonlar": "الشاغرة",
    "Makine Mühendisi (Ar-Ge)": "مهندس ميكانيكي (بحث وتطوير)", "CNC Operatörü": "مشغّل CNC",
    "Kalite Kontrol Teknikeri": "فني مراقبة جودة", "Dış Ticaret Uzmanı": "أخصائي تجارة خارجية", "Tam Zamanlı": "دوام كامل",
    "Bize": "انضم", "Katıl": "إلينا",
    "Uygun pozisyon bulamadıysanız bile CV'nizi bize iletin; ihtiyaç doğduğunda sizinle iletişime geçelim.":
      "حتى إن لم تجد وظيفة مناسبة، أرسل سيرتك الذاتية وسنتواصل معك عند ظهور حاجة.",
    "Görüntüle": "عرض", "Diğer": "أخرى",
    "Hata 404": "خطأ 404", "Sayfa Bulunamadı": "الصفحة غير موجودة",
    "Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Aşağıdaki bağlantılardan devam edebilirsiniz.":
      "قد تكون الصفحة التي تبحث عنها نُقلت أو حُذفت. تابع عبر الروابط أدناه.",
    "Türkiye'nin savunma ve silah sanayisinde öncü ve yenilikçi bir kuruluş. Yerli mühendislik, üstün üretim kalitesi.":
      "مؤسسة رائدة ومبتكرة في الصناعة الدفاعية والتسليحية في تركيا. هندسة محلية وجودة إنتاج فائقة.",
    "Tüm hakları saklıdır.": "جميع الحقوق محفوظة.", "KVKK": "سياسة البيانات", "Gizlilik Bildirimi": "إشعار الخصوصية", "Yasal Uyarı": "إشعار قانوني",
    "Yarı Otomatik Tabanca": "مسدس نصف آلي", "Spor Tabanca": "مسدس رياضي", "Makinalı Tabanca": "مسدس رشّاش",
    "Hafif Makinalı Tüfek": "رشّاش خفيف", "Bombaatar (Döner Tambur)": "قاذف قنابل (أسطوانة دوّارة)",
    "Piyade Tüfeği": "بندقية مشاة", "Makinalı Tüfek": "رشّاش", "Keskin Nişancı Tüfeği": "بندقية قنص",
    "81 mm Havan": "هاون 81 مم", "120 mm Havan": "هاون 120 مم",
    "Kalibre": "العيار", "Kapasite": "السعة", "Namlu": "السبطانة", "Namlu Çıkış Hızı": "سرعة الفوهة",
    "Atış Hızı": "معدّل الإطلاق", "Etkili Menzil": "المدى الفعّال", "Maksimum Menzil": "أقصى مدى",
    "Minimum Menzil": "أدنى مدى", "Ağırlık": "الوزن", "Toplam Uzunluk": "الطول الكلي", "Genişlik": "العرض",
    "Yükseklik": "الارتفاع", "Tetik": "الزناد", "Emniyet": "الأمان", "Nişangah": "أجهزة التصويب", "Ray": "السكة",
    "Yiv Oranı": "معدّل الخزق", "Renk": "اللون", "Çalışma Sistemi": "نظام العمل", "Ateşleme Modu": "وضع الإطلاق",
    "Şarjör Tipi": "نوع المخزن", "Sistem": "النظام", "Çerçeve": "الهيكل", "Gövde": "الجسم", "Alt Gövde": "الهيكل السفلي",
    "Dipçik": "الأخمص", "Besleme": "التغذية", "Açılım": "الفتح", "Tutma Yeri": "المقبض", "Çerçeve / Sürgü": "الهيكل / المزلاج",
    "KUTAL Savunma ve Silah Sanayi A.Ş., savunma teknolojilerinde dünya standartlarını yakalayan, yerli ve yenilikçi bir üreticidir.":
      "شركة كوتال للصناعات الدفاعية والتسليحية مُصنّع محلي مبتكر يواكب المعايير العالمية في تقنيات الدفاع.",
    "Vizyonumuz": "رؤيتنا", "Misyonumuz": "مهمتنا",
    "KUTAL Savunma ve Silah Sanayi A.Ş. olarak dünya çapında tanınan; yenilikçi, güvenilir ve sürdürülebilir savunma çözümleri sunan bir lider olmayı hedefliyoruz.":
      "نطمح في كوتال ديفنس إلى أن نكون رائدًا معترفًا به عالميًا يقدّم حلولًا دفاعية مبتكرة وموثوقة ومستدامة.",
    "Milli güvenliğimizi ve savunma kabiliyetimizi artırmak amacıyla, en yüksek kalitede savunma sistemleri ve silah teknolojileri üretmek ve geliştirmek için çalışıyoruz.":
      "نعمل على إنتاج وتطوير أنظمة دفاعية وتقنيات تسليح بأعلى جودة لتعزيز أمننا الوطني وقدراتنا الدفاعية.",
    "Kutal Savunma": "كوتال ديفنس", "Geleceğin Gücü": "قوة المستقبل",
    "KUTAL, Türkiye'nin savunma ve silah sanayisinde öncü ve yenilikçi bir şirket olarak yurt içi ve yurt dışı pazarlarda güvenilirliğini kanıtlamıştır. Ar-Ge yatırımlarına öncelik veren kuruluşumuz, mühendislik uzmanlığını teknolojik gelişmelerle sürekli bütünleştirir.":
      "أثبتت كوتال، بصفتها شركة رائدة ومبتكرة في الصناعة الدفاعية والتسليحية التركية، موثوقيتها في الأسواق المحلية والدولية. ومع إعطاء الأولوية للبحث والتطوير، ندمج خبرتنا الهندسية باستمرار مع التطورات التقنية.",
    "Kalite güvencesi; uluslararası standartları esas alan titiz test süreçleriyle sağlanır. Üretim yaklaşımımız çevreye duyarlıdır; enerji verimliliği ve sürdürülebilirlik ilkelerini önceler. Amacımız, sahada fark yaratan ömür boyu güvenilir sistemler üretmektir.":
      "يُضمن الجودة عبر عمليات اختبار دقيقة تستند إلى المعايير الدولية. إنتاجنا صديق للبيئة ويعطي الأولوية لكفاءة الطاقة والاستدامة. هدفنا إنتاج أنظمة موثوقة مدى الحياة تُحدث فرقًا في الميدان.",
    "Ürünlerimizi İnceleyin": "استكشف منتجاتنا",
    "Genel Kalite Politikası": "سياسة الجودة العامة", "Taahhüdümüz": "التزامنا",
    "Tasarımdan teslimata her aşamada benimsediğimiz ilkeler.": "المبادئ التي نلتزم بها في كل مرحلة من التصميم إلى التسليم.",
    "Tüm süreçlerde müşterinin ihtiyaç ve beklentilerini tam olarak karşılayan, güvenilir bir anlayış benimsemeyi.": "اعتماد نهج موثوق يلبّي احتياجات العميل وتوقعاته بالكامل في جميع العمليات.",
    "Maliyetleri düşürmek ve kârlılığı artırmak için teknolojik gelişmeleri yakından takip etmeyi.": "متابعة التطورات التقنية عن كثب لخفض التكاليف وزيادة الربحية.",
    "Kalite sistemleri çerçevesinde tüm çalışanların yetkinliklerini en üst seviyede kullanabilmesini sağlamayı.": "تمكين جميع الموظفين من استخدام كفاءاتهم بأقصى مستوى ضمن نظام الجودة.",
    "Tüm çalışanlarda kalite bilincini tesis etmeyi.": "ترسيخ وعي الجودة لدى جميع الموظفين.",
    "Tedarikçilerle güvene dayalı bir iş birliği içinde olmayı.": "الحفاظ على تعاون قائم على الثقة مع المورّدين.",
    "Firmamızın ve Türkiye'nin adını dünyaya daha çok duyurmaya hizmet etmeyi.": "الإسهام في التعريف باسم شركتنا وتركيا في العالم.",
    "En uygun, en doğru ve en ekonomik çözümleri en hızlı biçimde üretmeyi.": "تقديم أنسب الحلول وأدقّها وأكثرها اقتصادية بأسرع شكل.",
    "Başlanan her projeyi zamanında, en üst düzey tekniklerle ve istenen kalitede tamamlamayı.": "إنجاز كل مشروع في وقته وبأعلى التقنيات وبالجودة المطلوبة.",
    "İçinde bulunduğumuz topluma ve çevreye saygılı, örnek bir kuruluş olmayı.": "أن نكون مؤسسة نموذجية تحترم المجتمع والبيئة.",
    "Konum": "الموقع", "Ofis &": "المكتب و", "Fabrika": "المصنع",
    "Kutal Savunma amblem": "شعار كوتال ديفنس", "SAVUNMA SANAYİ": "الصناعة الدفاعية",
    "Kutal Savunma, makinalı tabanca ailesinin yeni üyesi KTL S9 Gen-2'yi tanıttı. Yeni nesil model; geliştirilmiş gecikmeli geri tepme mekanizması, düşük geri tepme sağlayan yeni tampon sistemi ve tamamen modüler bir üst alıcı ile geliyor.":
      "كشفت كوتال ديفنس عن KTL S9 Gen-2، أحدث أفراد عائلة المسدسات الرشاشة. يأتي طراز الجيل الجديد بآلية ارتداد متأخّر مُحسّنة ونظام مخمّد جديد منخفض الارتداد وعلبة مغلاق علوية معيارية بالكامل.",
    "9×19 mm kalibreli platform, 6.5″, 8.5″ ve 10″ değiştirilebilir namlu seçenekleriyle yakın muharebeden koruma görevlerine kadar geniş bir kullanım yelpazesi sunuyor. MIL-STD-1913 Picatinny ray sistemi sayesinde optik, lazer ve aydınlatma aksesuarları hızla entegre edilebiliyor.":
      "تقدّم المنصّة بعيار 9×19 مم، بخيارات سبطانة قابلة للتبديل 6.5″ و8.5″ و10″، مجالًا واسعًا من الاستخدام — من القتال القريب إلى مهام الحماية. وتتيح سكة MIL-STD-1913 Picatinny دمج البصريات والليزر وأجهزة الإضاءة بسرعة.",
    "Gen-2 ile birlikte gelen yeni ergonomik tutamak açısı ve dokulu yüzey işlemi, zorlu saha koşullarında dahi üstün silah kontrolü sağlıyor.":
      "توفّر زاوية المقبض المريحة الجديدة والمعالجة السطحية المحكّمة في Gen-2 تحكّمًا فائقًا بالسلاح حتى في أقسى الظروف الميدانية.",
    "Kutal Savunma, savunma ve havacılık sanayiinin öncü fuarlarından SAHA EXPO 2026'da standıyla yerini aldı. Fuar boyunca tabanca, makinalı tabanca, hafif makinalı tüfek ve bombaatar ürün ailesi ziyaretçilerin yoğun ilgisiyle karşılaştı.":
      "شاركت كوتال ديفنس بجناحها في SAHA EXPO 2026، أحد أبرز معارض الصناعة الدفاعية والفضائية. وطوال المعرض، حظيت عائلات المسدسات والمسدسات الرشاشة والرشاشات الخفيفة وقاذفات القنابل باهتمام كبير من الزوّار.",
    "Yerli ve yabancı heyetlerin ağırlandığı stantta, interaktif 3D ürün deneyimi ve canlı teknik sunumlar gerçekleştirildi. Ekibimiz, kurumsal alım ve tedarik süreçlerine ilişkin görüşmeler yürüttü.":
      "في الجناح الذي استقبل وفودًا محلية وأجنبية، قُدِّمت تجربة منتجات ثلاثية الأبعاد تفاعلية وعروض فنية حيّة. وأجرى فريقنا محادثات حول عمليات الشراء المؤسسي والتوريد.",
    "Yerli mühendislik ve üstün üretim kalitesini uluslararası pazarlara taşıyan Kutal Savunma, taktik silah platformları alanında yeni bir ihracat anlaşması imzaladı.":
      "وقّعت كوتال ديفنس، التي تنقل هندستها المحلية وجودة إنتاجها الفائقة إلى الأسواق الدولية، اتفاقية تصدير جديدة في مجال منصّات الأسلحة التكتيكية.",
    "Anlaşma kapsamında, NATO standartlarıyla tam uyumlu ürünlerimiz farklı coğrafyalardaki güvenlik güçlerinin envanterine katılacak. Bu iş birliği, ihracat ağımızı genişletme hedefimiz doğrultusunda önemli bir adım oluşturuyor.":
      "بموجب الاتفاقية، ستنضمّ منتجاتنا المتوافقة تمامًا مع معايير الناتو إلى مخزون قوات الأمن في مناطق مختلفة. وتُعدّ هذه الشراكة خطوة مهمة نحو هدفنا في توسيع شبكة التصدير.",
    "Kutal Savunma, tasarımdan seri üretime kadar tüm süreçlerini kapsayan kalite yönetim sistemi denetimlerini başarıyla tamamladı. Bağımsız denetim kuruluşları tarafından gerçekleştirilen incelemelerin ardından kalite sertifikalarımız yenilendi.":
      "أكملت كوتال ديفنس بنجاح عمليات تدقيق نظام إدارة الجودة التي تغطّي جميع عملياتها من التصميم إلى الإنتاج المتسلسل. وبعد مراجعات أجرتها جهات تدقيق مستقلة، جُدِّدت شهادات الجودة لدينا.",
    "Mikron seviyesinde tolerans hedefleyen üretim yaklaşımımız ve her ürün için uyguladığımız atış, dayanım ve emniyet doğrulama süreçleri, kalite taahhüdümüzün temelini oluşturuyor.":
      "يشكّل نهجنا الإنتاجي الذي يستهدف تفاوتًا على مستوى الميكرون، إلى جانب إجراءات التحقق من الإطلاق والتحمّل والأمان لكل منتج، أساس التزامنا بالجودة.",
    "Geliştirilmiş ateşleme grubu, yeni ergonomik gövde ve modüler ray sistemiyle KTL S9 Gen-2 sahneye çıktı.":
      "يظهر KTL S9 Gen-2 بمجموعة إطلاق مُحسّنة وجسم مريح جديد ونظام سكة معياري.",
    "Savunma sanayiinin en büyük buluşmalarından SAHA EXPO'da tüm ürün ailemizi ziyaretçilerle buluşturduk.":
      "عرضنا عائلة منتجاتنا كاملة على الزوّار في SAHA EXPO، أحد أكبر ملتقيات الصناعة الدفاعية.",
    "Kutal Savunma, taktik silah sistemlerinde yeni bir uluslararası tedarik anlaşmasına imza attı.":
      "وقّعت كوتال ديفنس اتفاقية توريد دولية جديدة في أنظمة الأسلحة التكتيكية.",
    "Uluslararası kalite yönetim sistemi denetimlerini başarıyla tamamlayarak sertifikalarımızı yeniledik.":
      "جدّدنا شهاداتنا بعد اجتياز عمليات تدقيق نظام إدارة الجودة الدولية بنجاح.",
  };

  /* ============ EK: ürün açıklamaları · teknik değerler · tedarik · KVK ============ */
  var EXTRA = {
    en: {
      // ürün açıklamaları
      "Kutal Savunma'nın özel tasarımı olan FSB 762; 7.62×25 mm Tokarev kalibreli, M57 Zastava tipi şarjörlü ve 9+1 kapasiteli bir yarı otomatik tabancadır. 120 mm uzunluğunda 4140 çelik Melonite kaplamalı namlusu, 480 m/s namlu çıkış hızı ve Picatinny NATO STANAG 4694 uyumlu üst alıcısıyla öne çıkar.":
        "A proprietary Kutal Defense design, the FSB 762 is a 7.62×25 mm Tokarev semi-automatic pistol with an M57 Zastava-type magazine and 9+1 capacity. It stands out with its 120 mm Melonite-coated 4140-steel barrel, 480 m/s muzzle velocity and a Picatinny NATO STANAG 4694-compatible upper receiver.",
      "BR9; 9×19 mm kalibreli, dövme 4140 çelik gövde ve sürgüye sahip yarı otomatik tabancadır. Çift sıralı 15 fişek kapasiteli şarjörü, G10 tutma yeri ve menevişli mavi yüzeyiyle hem dayanıklılık hem de estetik sunar.":
        "The BR9 is a 9×19 mm semi-automatic pistol with a forged 4140-steel frame and slide. Its double-stack 15-round magazine, G10 grips and nitre-blued finish combine durability with aesthetics.",
      "GN4; 9×19 mm kalibreli, 'Safe Action' emniyet sistemine sahip polimer çerçeveli kompakt tabancadır. 603 g hafif yapısı, Glock tipi şarjör uyumu ve çöl sarısı/siyah renk seçenekleriyle günlük taşımaya uygundur.":
        "The GN4 is a 9×19 mm compact pistol with a polymer frame and a 'Safe Action' safety system. Its light 603 g build, Glock-type magazine compatibility and desert-tan/black color options make it ideal for everyday carry.",
      "P9 Sport; 9×19 mm NATO/Parabellum kalibreli, 17+1 kapasiteli sportif tabancadır. Sökülebilir tam uzunlukta 7075 alüminyum alt çerçeve, fiber optik nişangah, ateşleme durumu göstergesi ve optiğe hazır kapağıyla atış sporları için tasarlanmıştır.":
        "The P9 Sport is a 9×19 mm NATO/Parabellum sporting pistol with 17+1 capacity. Designed for shooting sports, it features a removable full-length 7075-aluminum lower frame, fiber-optic sights, a loaded-chamber indicator and an optics-ready slide.",
      "P9; 9×19 mm NATO/Parabellum kalibreli, 17+1 kapasiteli polimer çerçeveli hizmet tabancasıdır. Picatinny ray sistemi ve askeri yeşil, çöl sarısı ve siyah renk seçenekleriyle profesyonel kullanıma yöneliktir.":
        "The P9 is a 9×19 mm NATO/Parabellum polymer-framed service pistol with 17+1 capacity. Its Picatinny rail and military-green, desert-tan and black color options make it suited to professional use.",
      "S9; 9×19 mm kalibreli, gecikmeli geri tepme sistemli makinalı tabancadır. 1000 atış/dk atış hızı, yarı/tam otomatik ateşleme modu ve 6.5″–10″ değiştirilebilir namlu seçenekleriyle yakın muharebe için üstün kontrol sağlar.":
        "The S9 is a 9×19 mm machine pistol with a delayed-blowback system. With a 1000 rounds/min rate of fire, semi/full-auto fire modes and 6.5″–10″ interchangeable barrels, it delivers superior close-combat control.",
      "S9+; 9×19 mm kalibreli, teleskopik 7 pozisyon ayarlanabilir dipçikli hafif makinalı tüfektir. 900 atış/dk atış hızı, 30 fişek Glock tipi şarjör uyumu ve 6″–10″ namlu seçenekleriyle çok yönlü kullanım sunar.":
        "The S9+ is a 9×19 mm light machine gun with a telescopic 7-position adjustable stock. With a 900 rounds/min rate of fire, 30-round Glock-type magazine compatibility and 6″–10″ barrel options, it offers versatile use.",
      "B40S Bombaatar; güvenlik birimlerine sahada yüksek ve etkili atış gücü sağlamak üzere NATO 40×46 mm standardında tasarlanmıştır. Çift yönlü açılım, ayarlanabilir nişangah ve MIL-STD-1913 Picatinny ray entegrasyonuyla operasyonel esneklik sunar.":
        "The B40S grenade launcher is designed to the NATO 40×46 mm standard to give security units high, effective firepower in the field. Bidirectional opening, adjustable sights and MIL-STD-1913 Picatinny rail integration provide operational flexibility.",
      "B40; 40 mm pürüzsüz namlulu, döner tamburlu pompalama sistemine sahip bombaatardır. Manuel 4 atış kapasitesi, çift hareketli sonsuz tetik ve teleskopik dipçiğiyle sürekli ve güvenilir atış imkanı sağlar.":
        "The B40 is a 40 mm smoothbore grenade launcher with a revolving-drum pump system. Its manual 4-round capacity, double-action endless trigger and telescopic stock enable continuous, reliable fire.",
      "KUTAL'ın saha deneyimi ve personel geri bildirimleriyle geliştirdiği KTL P556; kısa stroklu gaz pistonlu, 5 pozisyon ayarlanabilir yanak destekli dipçikli ve ambi tetik gruplu ergonomik bir piyade tüfeğidir. Uzun sökülebilir el koruması, polimer toz kapağı ve mermi sayacıyla yakın ve uzak menzilli görevlere uyum sağlar.":
        "Developed by KUTAL through field experience and personnel feedback, the KTL P556 is an ergonomic infantry rifle with a short-stroke gas piston, a 5-position adjustable cheek-rest stock and an ambidextrous trigger group. Its long removable handguard, polymer dust cover and round counter adapt it to both close- and long-range missions.",
      "KTL AKM47; efsanevi AK-47 platformunun yüzde yüz yerli olarak üretilen ve modernize edilmiş versiyonudur. Çelik parçalarla güçlendirilmiş şarjör, dipçik ve el kundağıyla tüm iklim koşullarında yüksek performans gösterir.":
        "The KTL AKM47 is a fully domestically produced, modernized version of the legendary AK-47 platform. With a steel-reinforced magazine, stock and handguard, it performs strongly in all climate conditions.",
      "Türk ordusunun yeni nesil piyade tüfeği KTL P762; tamamen yerli kaynaklarla tasarlanmış, 7.62×51 mm NATO standardı mühimmat kullanan bir tüfektir. Modüler raylı el koruması gece görüş, lazer işaretleyici ve aksesuar entegrasyonu sağlar; hafif ve dengeli yapısıyla yüksek isabet sunar.":
        "The new-generation infantry rifle of the Turkish military, the KTL P762 is designed entirely from domestic resources and uses 7.62×51 mm NATO-standard ammunition. Its modular railed handguard supports night vision, laser designators and accessory integration; its light, balanced build delivers high accuracy.",
      "KTL M762 Makinalı Tüfek; tüm arazi ve iklim koşullarında en iyi sonucu sağlamak üzere tasarlanmıştır. Yüksek isabet oranı, uzun silah ömrü ve 1200 m etkili menzille tam otomatik destek ateşi sunar. Tamamen yerli ve milli üretimdir.":
        "The KTL M762 machine gun is designed for the best results in all terrain and climate conditions. It provides full-auto support fire with high accuracy, long service life and a 1200 m effective range. It is a fully domestic, national product.",
      "KTL 21; 7.62×51 mm kalibreli keskin nişancı tüfeğidir. 5 veya 10 fişek şarjör seçenekleri, 1100 m etkili menzil ve yüksek isabet kabiliyetiyle uzun menzilli hassas atış görevleri için tasarlanmıştır.":
        "The KTL 21 is a 7.62×51 mm sniper rifle. With 5- or 10-round magazine options, a 1100 m effective range and high accuracy, it is designed for long-range precision-shooting missions.",
      "KTL H81; paletli zırhlı araçlara, tekerlekli taktik araçlara ve sabit platformlara entegre edilebilen 81 mm modüler havan sistemidir. Otomatik ateşleme, hassas hedefleme ve geri tepme azaltma mekanizmasına sahiptir; INS ve MGRS ile çok hedefli atış ve otomatik meteorolojik veri desteği sunar.":
        "The KTL H81 is an 81 mm modular mortar system that can be integrated into tracked armored vehicles, wheeled tactical vehicles and fixed platforms. It features automatic firing, precise targeting and a recoil-reduction mechanism; with INS and MGRS it offers multi-target fire and automatic meteorological data support.",
      "KTL H120; paletli/tekerlekli araç ve sabit platformlara entegre edilebilen 120 mm modüler havan sistemidir. Otomatik ateşleme, INS + MGRS ile çok hedefli operasyon, düşük geri tepme (<25 ton) ve bir dakikanın altında ateşleme süresiyle üstün dolaylı atış gücü sağlar.":
        "The KTL H120 is a 120 mm modular mortar system that can be integrated into tracked/wheeled vehicles and fixed platforms. With automatic firing, multi-target operation via INS + MGRS, low recoil (<25 tons) and a sub-one-minute firing time, it delivers superior indirect firepower.",
      // tedarik
      "Güvenlik güçlerinin ihtiyaçlarına yönelik, farklı kalibrelerde yerli üretim piyade tüfekleri.": "Domestically produced infantry rifles in various calibers for the needs of security forces.",
      "NATO standardı 5.56×45 mm kalibreli modern piyade tüfeği.": "Modern infantry rifle in NATO-standard 5.56×45 mm caliber.",
      "Yüksek durdurma gücü sunan 7.62×39 mm kalibreli tüfek.": "7.62×39 mm caliber rifle offering high stopping power.",
      "Uzun menzil ve isabet için 7.62×51 mm kalibreli tüfek.": "7.62×51 mm caliber rifle for long range and accuracy.",
      "Destek ateşi ve sürekli atış gücü için makinalı tüfek sistemleri.": "Machine-gun systems for support fire and sustained firepower.",
      "Uzun menzilde yüksek isabet gerektiren görevler için keskin nişancı tüfekleri.": "Sniper rifles for missions requiring high accuracy at long range.",
      "Dolaylı atış desteği sağlayan farklı çaplarda havan sistemleri.": "Mortar systems in various calibers providing indirect fire support.",
      // teknik değerler
      "120 mm · 4140 çelik Melonite": "120 mm · 4140 steel, Melonite", "1100 g (boş şarjör)": "1100 g (empty mag)",
      "Tek hareket · 30–35 N": "Single action · 30–35 N", "Parmak emniyeti": "Trigger safety",
      "Fiber optik ön / ayarlanabilir arka": "Fiber-optic front / adjustable rear", "Siyah": "Black",
      "Geri tepme, kapalı mekanizma": "Blowback, closed bolt", "15 (çift sıra)": "15 (double-stack)",
      "109 mm (4,5″) · 4140 çelik": "109 mm (4.5″) · 4140 steel", "840 g (şarjörsüz)": "840 g (without mag)",
      "Tek hareket · 18–20 N": "Single action · 18–20 N", "4140 çelik": "4140 steel", "Tutma emniyeti": "Grip safety",
      "Mekanik": "Mechanical", "Mavi (meneviş)": "Blue (nitre)", "102 mm (4″) · 4140 çelik": "102 mm (4″) · 4140 steel",
      "603 g (şarjörsüz)": "603 g (without mag)", "Tek hareket · 22 N": "Single action · 22 N", "Çöl sarısı / Siyah": "Desert Tan / Black",
      "7075 alüminyum": "7075 aluminum", "125 mm (5″) · 4140 çelik": "125 mm (5″) · 4140 steel", "992 g (şarjörsüz)": "992 g (without mag)",
      "Tek hareket · 23–25 N": "Single action · 23–25 N", "Turuncu": "Orange", "105,5 mm (4″) · 4140 çelik": "105.5 mm (4″) · 4140 steel",
      "735 g (şarjörsüz)": "735 g (without mag)", "Askeri yeşil / Çöl sarısı / Siyah": "Military Green / Desert Tan / Black",
      "Gecikmeli geri tepme": "Delayed blowback", "Yarı / Tam otomatik": "Semi / Full auto", "1000 atış/dk": "1000 rounds/min",
      "6.5″ / 8.5″ / 10″ · 4140 çelik": "6.5″ / 8.5″ / 10″ · 4140 steel", "Alüminyum (6000/7000 serisi)": "Aluminum (6000/7000 series)",
      "6″ / 8″ / 10″ · 4140 çelik": "6″ / 8″ / 10″ · 4140 steel", "900 atış/dk": "900 rounds/min",
      "Ayarlanabilir (50–400 m)": "Adjustable (50–400 m)", "Çift yönlü (sağ/sol)": "Bidirectional (right/left)",
      "40 mm (pürüzsüz)": "40 mm (smoothbore)", "Manuel, 4 atış": "Manual, 4 rounds", "Döner tamburlu pompalama": "Revolving-drum pump",
      "Çift hareket · 4–5 kg": "Double action · 4–5 kg", "500 mm (dipçiksiz) / 850 mm": "500 mm (no stock) / 850 mm",
      "Mekanik (45°–60°–75°)": "Mechanical (45°–60°–75°)", "Gaz sistemi, döner kilit": "Gas system, rotating bolt",
      "7.5″ / 10.5″ / 12″ / 14.5″ / 16″ · 4140 çelik": "7.5″ / 10.5″ / 12″ / 14.5″ / 16″ · 4140 steel", "800–1000 atış/dk": "800–1000 rounds/min",
      "6000/7000 serisi alüminyum": "6000/7000 series aluminum", "16,1″ · 4140 çelik": "16.1″ · 4140 steel", "650 atış/dk": "650 rounds/min",
      "Ahşap": "Wood", "16″ / 18″ / 20″ · 4140 çelik": "16″ / 18″ / 20″ · 4140 steel", "600 mm · 4140 çelik": "600 mm · 4140 steel",
      "700–800 atış/dk": "700–800 rounds/min", "Tam otomatik": "Full auto", "5 / 10 fişek": "5 / 10 rounds",
      "10–15 atış/dk": "10–15 rounds/min", "8–10 atış/dk": "8–10 rounds/min",
      // KVK
      "Yasal": "Legal", "Kişisel Verilerin Korunması": "Protection of Personal Data",
      "6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında aydınlatma metni.": "Information notice under Law No. 6698 on the Protection of Personal Data (KVKK).",
      "1. Veri Sorumlusu": "1. Data Controller", "2. İşlenen Kişisel Veriler": "2. Personal Data Processed",
      "3. Kişisel Verilerin İşlenme Amaçları": "3. Purposes of Processing", "4. Kişisel Verilerin Aktarılması": "4. Transfer of Personal Data",
      "5. Toplama Yöntemi ve Hukuki Sebep": "5. Collection Method and Legal Basis", "6. İlgili Kişinin Hakları (KVKK md. 11)": "6. Rights of the Data Subject (KVKK Art. 11)",
      "7. Başvuru ve İletişim": "7. Application and Contact",
      "Şirketimizle olan ilişkinizin niteliğine göre aşağıdaki kişisel verileriniz işlenebilmektedir:": "Depending on the nature of your relationship with our company, the following personal data may be processed:",
      "Kimlik bilgileri (ad, soyad vb.)": "Identity data (name, surname, etc.)",
      "İletişim bilgileri (telefon, e-posta, adres)": "Contact data (phone, e-mail, address)",
      "Müşteri/tedarikçi işlem bilgileri (talep, teklif ve sipariş kayıtları)": "Customer/supplier transaction data (request, quote and order records)",
      "İnternet sitesi üzerinden ilettiğiniz form ve mesaj içerikleri": "Form and message content you submit through the website",
      "Hukuki işlem ve mevzuata uyum kapsamında elde edilen bilgiler": "Information obtained for legal proceedings and regulatory compliance",
      "Ürün ve hizmet taleplerinizin karşılanması ve tekliflerin oluşturulması": "Fulfilling your product and service requests and preparing quotes",
      "Sözleşmesel ve yasal yükümlülüklerin yerine getirilmesi": "Fulfilling contractual and legal obligations",
      "Müşteri ve tedarikçi ilişkilerinin yürütülmesi": "Managing customer and supplier relations",
      "Talep ve şikayetlerin değerlendirilmesi, iletişim faaliyetlerinin yürütülmesi": "Assessing requests and complaints, and conducting communication activities",
      "Bilgi güvenliği süreçlerinin ve yasal mevzuata uyumun sağlanması": "Ensuring information-security processes and legal compliance",
      "Kişisel verileriniz; yalnızca yukarıda belirtilen amaçlarla sınırlı olmak üzere, KVKK'nın 8. ve 9. maddelerinde öngörülen şartlar çerçevesinde yetkili kamu kurum ve kuruluşlarına, iş ortaklarımıza ve hizmet sağlayıcılarımıza aktarılabilir. Savunma sanayii mevzuatı gereği ilgili resmi mercilerle paylaşım yapılabilir.": "Your personal data may be transferred, limited to the purposes stated above, to authorized public institutions, our business partners and service providers within the conditions set out in Articles 8 and 9 of the KVKK. Sharing with relevant official authorities may occur as required by defense-industry legislation.",
      "Kişisel verileriniz; internet sitesi iletişim formları, e-posta, telefon ve fiziki/elektronik ortamda iletilen belgeler aracılığıyla; KVKK'nın 5. ve 6. maddelerinde belirtilen hukuki sebeplere (sözleşmenin kurulması/ifası, hukuki yükümlülük, meşru menfaat ve açık rıza) dayanılarak toplanır ve işlenir.": "Your personal data is collected and processed through website contact forms, e-mail, telephone and documents submitted physically/electronically, based on the legal grounds set out in Articles 5 and 6 of the KVKK (establishment/performance of a contract, legal obligation, legitimate interest and explicit consent).",
      "KVKK'nın 11. maddesi uyarınca kişisel veri sahibi olarak aşağıdaki haklara sahipsiniz:": "Under Article 11 of the KVKK, as a data subject you have the following rights:",
      "Kişisel verilerinizin işlenip işlenmediğini öğrenme ve buna ilişkin bilgi talep etme": "To learn whether your personal data is processed and to request information thereon",
      "İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme": "To learn the purpose of processing and whether it is used accordingly",
      "Yurt içinde/yurt dışında aktarıldığı üçüncü kişileri bilme": "To know the third parties to whom it is transferred domestically/abroad",
      "Eksik veya yanlış işlenmişse düzeltilmesini isteme": "To request correction if processed incompletely or inaccurately",
      "Kanundaki şartlar çerçevesinde silinmesini veya yok edilmesini isteme": "To request deletion or destruction within the conditions of the law",
      "İşlenen verilerin münhasıran otomatik sistemlerle analiz edilmesine itiraz etme": "To object to analysis exclusively by automated systems",
      "Kanuna aykırı işleme nedeniyle zarara uğramanız halinde zararın giderilmesini talep etme": "To request compensation for damages arising from unlawful processing",
      "Haklarınıza ilişkin taleplerinizi": "You may submit requests regarding your rights to",
      "adresine veya Başak Mh. Konya Ereğli Cad. No: 46D Karatay/KONYA adresine yazılı olarak iletebilirsiniz. Başvurularınız, KVKK'da öngörülen süreler içerisinde sonuçlandırılacaktır.": "or in writing to Başak Mh. Konya Ereğli Cad. No: 46D Karatay/KONYA. Your applications will be concluded within the periods stipulated by the KVKK.",
    },
    ru: {
      "Kutal Savunma'nın özel tasarımı olan FSB 762; 7.62×25 mm Tokarev kalibreli, M57 Zastava tipi şarjörlü ve 9+1 kapasiteli bir yarı otomatik tabancadır. 120 mm uzunluğunda 4140 çelik Melonite kaplamalı namlusu, 480 m/s namlu çıkış hızı ve Picatinny NATO STANAG 4694 uyumlu üst alıcısıyla öne çıkar.":
        "FSB 762 — фирменная разработка Kutal Defense: самозарядный пистолет под 7,62×25 мм Tokarev с магазином типа M57 Zastava и ёмкостью 9+1. Отличается стволом длиной 120 мм из стали 4140 с покрытием Melonite, начальной скоростью 480 м/с и верхней ствольной коробкой, совместимой с Picatinny NATO STANAG 4694.",
      "BR9; 9×19 mm kalibreli, dövme 4140 çelik gövde ve sürgüye sahip yarı otomatik tabancadır. Çift sıralı 15 fişek kapasiteli şarjörü, G10 tutma yeri ve menevişli mavi yüzeyiyle hem dayanıklılık hem de estetik sunar.":
        "BR9 — самозарядный пистолет калибра 9×19 мм с рамой и затвором из кованой стали 4140. Двухрядный магазин на 15 патронов, накладки G10 и воронёная синяя поверхность сочетают надёжность и эстетику.",
      "GN4; 9×19 mm kalibreli, 'Safe Action' emniyet sistemine sahip polimer çerçeveli kompakt tabancadır. 603 g hafif yapısı, Glock tipi şarjör uyumu ve çöl sarısı/siyah renk seçenekleriyle günlük taşımaya uygundur.":
        "GN4 — компактный пистолет 9×19 мм с полимерной рамой и системой безопасности «Safe Action». Малый вес 603 г, совместимость с магазинами типа Glock и варианты «песочный/чёрный» делают его удобным для повседневного ношения.",
      "P9 Sport; 9×19 mm NATO/Parabellum kalibreli, 17+1 kapasiteli sportif tabancadır. Sökülebilir tam uzunlukta 7075 alüminyum alt çerçeve, fiber optik nişangah, ateşleme durumu göstergesi ve optiğe hazır kapağıyla atış sporları için tasarlanmıştır.":
        "P9 Sport — спортивный пистолет 9×19 мм NATO/Parabellum ёмкостью 17+1. Съёмная полноразмерная нижняя рама из алюминия 7075, оптоволоконные прицельные, индикатор патрона в патроннике и затвор под оптику — создан для стрелкового спорта.",
      "P9; 9×19 mm NATO/Parabellum kalibreli, 17+1 kapasiteli polimer çerçeveli hizmet tabancasıdır. Picatinny ray sistemi ve askeri yeşil, çöl sarısı ve siyah renk seçenekleriyle profesyonel kullanıma yöneliktir.":
        "P9 — служебный пистолет 9×19 мм NATO/Parabellum с полимерной рамой и ёмкостью 17+1. Планка Picatinny и варианты цвета «военный зелёный», «песочный» и «чёрный» ориентированы на профессиональное применение.",
      "S9; 9×19 mm kalibreli, gecikmeli geri tepme sistemli makinalı tabancadır. 1000 atış/dk atış hızı, yarı/tam otomatik ateşleme modu ve 6.5″–10″ değiştirilebilir namlu seçenekleriyle yakın muharebe için üstün kontrol sağlar.":
        "S9 — пистолет-пулемёт 9×19 мм с системой замедленной отдачи. Темп 1000 выстр./мин, режимы полу-/полного автомата и сменные стволы 6,5″–10″ обеспечивают превосходный контроль в ближнем бою.",
      "S9+; 9×19 mm kalibreli, teleskopik 7 pozisyon ayarlanabilir dipçikli hafif makinalı tüfektir. 900 atış/dk atış hızı, 30 fişek Glock tipi şarjör uyumu ve 6″–10″ namlu seçenekleriyle çok yönlü kullanım sunar.":
        "S9+ — ручной пулемёт 9×19 мм с телескопическим прикладом на 7 положений. Темп 900 выстр./мин, совместимость с магазинами типа Glock на 30 патронов и стволы 6″–10″ обеспечивают универсальность.",
      "B40S Bombaatar; güvenlik birimlerine sahada yüksek ve etkili atış gücü sağlamak üzere NATO 40×46 mm standardında tasarlanmıştır. Çift yönlü açılım, ayarlanabilir nişangah ve MIL-STD-1913 Picatinny ray entegrasyonuyla operasyonel esneklik sunar.":
        "Гранатомёт B40S разработан по стандарту НАТО 40×46 мм, чтобы обеспечить силовым подразделениям высокую и эффективную огневую мощь в поле. Двустороннее открывание, регулируемый прицел и планка MIL-STD-1913 Picatinny дают оперативную гибкость.",
      "B40; 40 mm pürüzsüz namlulu, döner tamburlu pompalama sistemine sahip bombaatardır. Manuel 4 atış kapasitesi, çift hareketli sonsuz tetik ve teleskopik dipçiğiyle sürekli ve güvenilir atış imkanı sağlar.":
        "B40 — гранатомёт с гладким стволом 40 мм и барабанной помповой системой. Ручная ёмкость на 4 выстрела, спуск двойного действия и телескопический приклад обеспечивают непрерывный и надёжный огонь.",
      "KUTAL'ın saha deneyimi ve personel geri bildirimleriyle geliştirdiği KTL P556; kısa stroklu gaz pistonlu, 5 pozisyon ayarlanabilir yanak destekli dipçikli ve ambi tetik gruplu ergonomik bir piyade tüfeğidir. Uzun sökülebilir el koruması, polimer toz kapağı ve mermi sayacıyla yakın ve uzak menzilli görevlere uyum sağlar.":
        "KTL P556, созданный KUTAL на основе полевого опыта и отзывов личного состава, — эргономичная штурмовая винтовка с газовым поршнем короткого хода, прикладом с регулируемой на 5 положений щекой и двусторонним УСМ. Длинное съёмное цевьё, полимерная крышка ствольной коробки и счётчик патронов адаптируют её к задачам ближнего и дальнего боя.",
      "KTL AKM47; efsanevi AK-47 platformunun yüzde yüz yerli olarak üretilen ve modernize edilmiş versiyonudur. Çelik parçalarla güçlendirilmiş şarjör, dipçik ve el kundağıyla tüm iklim koşullarında yüksek performans gösterir.":
        "KTL AKM47 — полностью отечественная модернизированная версия легендарной платформы АК-47. Усиленные стальными деталями магазин, приклад и цевьё обеспечивают высокие характеристики в любых климатических условиях.",
      "Türk ordusunun yeni nesil piyade tüfeği KTL P762; tamamen yerli kaynaklarla tasarlanmış, 7.62×51 mm NATO standardı mühimmat kullanan bir tüfektir. Modüler raylı el koruması gece görüş, lazer işaretleyici ve aksesuar entegrasyonu sağlar; hafif ve dengeli yapısıyla yüksek isabet sunar.":
        "Штурмовая винтовка нового поколения турецкой армии KTL P762 полностью разработана из отечественных ресурсов и использует боеприпасы стандарта НАТО 7,62×51 мм. Модульное цевьё с планками обеспечивает интеграцию ночной оптики, лазерного целеуказателя и аксессуаров; лёгкая и сбалансированная конструкция даёт высокую точность.",
      "KTL M762 Makinalı Tüfek; tüm arazi ve iklim koşullarında en iyi sonucu sağlamak üzere tasarlanmıştır. Yüksek isabet oranı, uzun silah ömrü ve 1200 m etkili menzille tam otomatik destek ateşi sunar. Tamamen yerli ve milli üretimdir.":
        "Пулемёт KTL M762 создан для наилучших результатов в любых условиях местности и климата. Обеспечивает автоматический огонь поддержки с высокой точностью, большим ресурсом и прицельной дальностью 1200 м. Полностью отечественного производства.",
      "KTL 21; 7.62×51 mm kalibreli keskin nişancı tüfeğidir. 5 veya 10 fişek şarjör seçenekleri, 1100 m etkili menzil ve yüksek isabet kabiliyetiyle uzun menzilli hassas atış görevleri için tasarlanmıştır.":
        "KTL 21 — снайперская винтовка калибра 7,62×51 мм. Магазины на 5 или 10 патронов, прицельная дальность 1100 м и высокая точность делают её пригодной для дальних задач высокоточной стрельбы.",
      "KTL H81; paletli zırhlı araçlara, tekerlekli taktik araçlara ve sabit platformlara entegre edilebilen 81 mm modüler havan sistemidir. Otomatik ateşleme, hassas hedefleme ve geri tepme azaltma mekanizmasına sahiptir; INS ve MGRS ile çok hedefli atış ve otomatik meteorolojik veri desteği sunar.":
        "KTL H81 — модульная 81-мм миномётная система, интегрируемая в гусеничные бронемашины, колёсные тактические машины и стационарные платформы. Оснащена автоматическим ведением огня, точным наведением и механизмом снижения отдачи; с INS и MGRS обеспечивает многоцелевой огонь и автоматическую метеоподдержку.",
      "KTL H120; paletli/tekerlekli araç ve sabit platformlara entegre edilebilen 120 mm modüler havan sistemidir. Otomatik ateşleme, INS + MGRS ile çok hedefli operasyon, düşük geri tepme (<25 ton) ve bir dakikanın altında ateşleme süresiyle üstün dolaylı atış gücü sağlar.":
        "KTL H120 — модульная 120-мм миномётная система, интегрируемая в гусеничные/колёсные машины и стационарные платформы. Автоматический огонь, многоцелевые операции через INS + MGRS, низкая отдача (<25 тонн) и время открытия огня менее минуты обеспечивают превосходную мощь непрямого огня.",
      "Güvenlik güçlerinin ihtiyaçlarına yönelik, farklı kalibrelerde yerli üretim piyade tüfekleri.": "Отечественные штурмовые винтовки различных калибров для нужд силовых структур.",
      "NATO standardı 5.56×45 mm kalibreli modern piyade tüfeği.": "Современная штурмовая винтовка калибра НАТО 5,56×45 мм.",
      "Yüksek durdurma gücü sunan 7.62×39 mm kalibreli tüfek.": "Винтовка калибра 7,62×39 мм с высоким останавливающим действием.",
      "Uzun menzil ve isabet için 7.62×51 mm kalibreli tüfek.": "Винтовка калибра 7,62×51 мм для дальности и точности.",
      "Destek ateşi ve sürekli atış gücü için makinalı tüfek sistemleri.": "Пулемётные системы для огня поддержки и непрерывной огневой мощи.",
      "Uzun menzilde yüksek isabet gerektiren görevler için keskin nişancı tüfekleri.": "Снайперские винтовки для задач, требующих высокой точности на дальней дистанции.",
      "Dolaylı atış desteği sağlayan farklı çaplarda havan sistemleri.": "Миномётные системы разных калибров для непрямого огня поддержки.",
      "120 mm · 4140 çelik Melonite": "120 мм · сталь 4140, Melonite", "1100 g (boş şarjör)": "1100 г (без патронов)",
      "Tek hareket · 30–35 N": "Одинарного действия · 30–35 Н", "Parmak emniyeti": "Предохранитель на спуске",
      "Fiber optik ön / ayarlanabilir arka": "Оптоволоконная мушка / регулируемый целик", "Siyah": "Чёрный",
      "Geri tepme, kapalı mekanizma": "Отдача, закрытый затвор", "15 (çift sıra)": "15 (двухрядный)",
      "109 mm (4,5″) · 4140 çelik": "109 мм (4,5″) · сталь 4140", "840 g (şarjörsüz)": "840 г (без магазина)",
      "Tek hareket · 18–20 N": "Одинарного действия · 18–20 Н", "4140 çelik": "сталь 4140", "Tutma emniyeti": "Предохранитель рукоятки",
      "Mekanik": "Механический", "Mavi (meneviş)": "Синий (воронение)", "102 mm (4″) · 4140 çelik": "102 мм (4″) · сталь 4140",
      "603 g (şarjörsüz)": "603 г (без магазина)", "Tek hareket · 22 N": "Одинарного действия · 22 Н", "Çöl sarısı / Siyah": "Песочный / Чёрный",
      "7075 alüminyum": "алюминий 7075", "125 mm (5″) · 4140 çelik": "125 мм (5″) · сталь 4140", "992 g (şarjörsüz)": "992 г (без магазина)",
      "Tek hareket · 23–25 N": "Одинарного действия · 23–25 Н", "Turuncu": "Оранжевый", "105,5 mm (4″) · 4140 çelik": "105,5 мм (4″) · сталь 4140",
      "735 g (şarjörsüz)": "735 г (без магазина)", "Askeri yeşil / Çöl sarısı / Siyah": "Военный зелёный / Песочный / Чёрный",
      "Gecikmeli geri tepme": "Замедленная отдача", "Yarı / Tam otomatik": "Полу / полный автомат", "1000 atış/dk": "1000 выстр./мин",
      "6.5″ / 8.5″ / 10″ · 4140 çelik": "6,5″ / 8,5″ / 10″ · сталь 4140", "Alüminyum (6000/7000 serisi)": "Алюминий (серия 6000/7000)",
      "6″ / 8″ / 10″ · 4140 çelik": "6″ / 8″ / 10″ · сталь 4140", "900 atış/dk": "900 выстр./мин",
      "Ayarlanabilir (50–400 m)": "Регулируемый (50–400 м)", "Çift yönlü (sağ/sol)": "Двусторонний (право/лево)",
      "40 mm (pürüzsüz)": "40 мм (гладкоствольный)", "Manuel, 4 atış": "Ручное, 4 выстрела", "Döner tamburlu pompalama": "Барабанная помпа",
      "Çift hareket · 4–5 kg": "Двойного действия · 4–5 кг", "500 mm (dipçiksiz) / 850 mm": "500 мм (без приклада) / 850 мм",
      "Mekanik (45°–60°–75°)": "Механический (45°–60°–75°)", "Gaz sistemi, döner kilit": "Газовый, поворотный затвор",
      "7.5″ / 10.5″ / 12″ / 14.5″ / 16″ · 4140 çelik": "7,5″ / 10,5″ / 12″ / 14,5″ / 16″ · сталь 4140", "800–1000 atış/dk": "800–1000 выстр./мин",
      "6000/7000 serisi alüminyum": "алюминий серии 6000/7000", "16,1″ · 4140 çelik": "16,1″ · сталь 4140", "650 atış/dk": "650 выстр./мин",
      "Ahşap": "Дерево", "16″ / 18″ / 20″ · 4140 çelik": "16″ / 18″ / 20″ · сталь 4140", "600 mm · 4140 çelik": "600 мм · сталь 4140",
      "700–800 atış/dk": "700–800 выстр./мин", "Tam otomatik": "Полный автомат", "5 / 10 fişek": "5 / 10 патронов",
      "10–15 atış/dk": "10–15 выстр./мин", "8–10 atış/dk": "8–10 выстр./мин",
      "Yasal": "Юридическое", "Kişisel Verilerin Korunması": "Защита персональных данных",
      "6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında aydınlatma metni.": "Информационное уведомление в соответствии с Законом № 6698 о защите персональных данных (KVKK).",
      "1. Veri Sorumlusu": "1. Оператор данных", "2. İşlenen Kişisel Veriler": "2. Обрабатываемые персональные данные",
      "3. Kişisel Verilerin İşlenme Amaçları": "3. Цели обработки", "4. Kişisel Verilerin Aktarılması": "4. Передача персональных данных",
      "5. Toplama Yöntemi ve Hukuki Sebep": "5. Способ сбора и правовое основание", "6. İlgili Kişinin Hakları (KVKK md. 11)": "6. Права субъекта данных (ст. 11 KVKK)",
      "7. Başvuru ve İletişim": "7. Обращение и контакты",
      "Şirketimizle olan ilişkinizin niteliğine göre aşağıdaki kişisel verileriniz işlenebilmektedir:": "В зависимости от характера ваших отношений с компанией могут обрабатываться следующие персональные данные:",
      "Kimlik bilgileri (ad, soyad vb.)": "Идентификационные данные (имя, фамилия и т. п.)",
      "İletişim bilgileri (telefon, e-posta, adres)": "Контактные данные (телефон, эл. почта, адрес)",
      "Müşteri/tedarikçi işlem bilgileri (talep, teklif ve sipariş kayıtları)": "Данные операций клиентов/поставщиков (запросы, предложения и заказы)",
      "İnternet sitesi üzerinden ilettiğiniz form ve mesaj içerikleri": "Содержимое форм и сообщений, отправленных через сайт",
      "Hukuki işlem ve mevzuata uyum kapsamında elde edilen bilgiler": "Сведения, полученные для юридических процедур и соответствия законодательству",
      "Ürün ve hizmet taleplerinizin karşılanması ve tekliflerin oluşturulması": "Выполнение ваших запросов на продукты и услуги и подготовка предложений",
      "Sözleşmesel ve yasal yükümlülüklerin yerine getirilmesi": "Исполнение договорных и юридических обязательств",
      "Müşteri ve tedarikçi ilişkilerinin yürütülmesi": "Ведение отношений с клиентами и поставщиками",
      "Talep ve şikayetlerin değerlendirilmesi, iletişim faaliyetlerinin yürütülmesi": "Рассмотрение запросов и жалоб, ведение коммуникаций",
      "Bilgi güvenliği süreçlerinin ve yasal mevzuata uyumun sağlanması": "Обеспечение процессов информационной безопасности и соответствия закону",
      "Kişisel verileriniz; yalnızca yukarıda belirtilen amaçlarla sınırlı olmak üzere, KVKK'nın 8. ve 9. maddelerinde öngörülen şartlar çerçevesinde yetkili kamu kurum ve kuruluşlarına, iş ortaklarımıza ve hizmet sağlayıcılarımıza aktarılabilir. Savunma sanayii mevzuatı gereği ilgili resmi mercilerle paylaşım yapılabilir.": "Ваши персональные данные могут передаваться — исключительно в указанных выше целях — уполномоченным государственным органам, нашим партнёрам и поставщикам услуг в рамках условий статей 8 и 9 KVKK. В соответствии с законодательством об оборонной промышленности возможен обмен с соответствующими официальными органами.",
      "Kişisel verileriniz; internet sitesi iletişim formları, e-posta, telefon ve fiziki/elektronik ortamda iletilen belgeler aracılığıyla; KVKK'nın 5. ve 6. maddelerinde belirtilen hukuki sebeplere (sözleşmenin kurulması/ifası, hukuki yükümlülük, meşru menfaat ve açık rıza) dayanılarak toplanır ve işlenir.": "Ваши персональные данные собираются и обрабатываются через контактные формы сайта, эл. почту, телефон и документы, переданные в физической/электронной форме, на основании правовых оснований статей 5 и 6 KVKK (заключение/исполнение договора, юридическая обязанность, законный интерес и явное согласие).",
      "KVKK'nın 11. maddesi uyarınca kişisel veri sahibi olarak aşağıdaki haklara sahipsiniz:": "Согласно статье 11 KVKK как субъект данных вы имеете следующие права:",
      "Kişisel verilerinizin işlenip işlenmediğini öğrenme ve buna ilişkin bilgi talep etme": "Узнавать, обрабатываются ли ваши данные, и запрашивать информацию об этом",
      "İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme": "Узнавать цель обработки и используются ли данные по назначению",
      "Yurt içinde/yurt dışında aktarıldığı üçüncü kişileri bilme": "Знать третьих лиц, которым данные переданы внутри страны/за рубежом",
      "Eksik veya yanlış işlenmişse düzeltilmesini isteme": "Требовать исправления при неполной или неверной обработке",
      "Kanundaki şartlar çerçevesinde silinmesini veya yok edilmesini isteme": "Требовать удаления или уничтожения в рамках условий закона",
      "İşlenen verilerin münhasıran otomatik sistemlerle analiz edilmesine itiraz etme": "Возражать против анализа исключительно автоматизированными системами",
      "Kanuna aykırı işleme nedeniyle zarara uğramanız halinde zararın giderilmesini talep etme": "Требовать возмещения ущерба, возникшего вследствие незаконной обработки",
      "Haklarınıza ilişkin taleplerinizi": "Запросы относительно ваших прав вы можете направить на",
      "adresine veya Başak Mh. Konya Ereğli Cad. No: 46D Karatay/KONYA adresine yazılı olarak iletebilirsiniz. Başvurularınız, KVKK'da öngörülen süreler içerisinde sonuçlandırılacaktır.": "или письменно по адресу Başak Mh. Konya Ereğli Cad. No: 46D Karatay/KONYA. Ваши обращения будут рассмотрены в сроки, предусмотренные KVKK.",
    },
    ar: {
      "Kutal Savunma'nın özel tasarımı olan FSB 762; 7.62×25 mm Tokarev kalibreli, M57 Zastava tipi şarjörlü ve 9+1 kapasiteli bir yarı otomatik tabancadır. 120 mm uzunluğunda 4140 çelik Melonite kaplamalı namlusu, 480 m/s namlu çıkış hızı ve Picatinny NATO STANAG 4694 uyumlu üst alıcısıyla öne çıkar.":
        "FSB 762 تصميم خاص من كوتال ديفنس؛ مسدس نصف آلي بعيار 7.62×25 مم توكاريف بمخزن من نوع M57 Zastava وسعة 9+1. يتميّز بسبطانة طولها 120 مم من فولاذ 4140 بطلاء مِلونايت، وسرعة فوهة 480 م/ث، وعلبة مغلاق علوية متوافقة مع Picatinny NATO STANAG 4694.",
      "BR9; 9×19 mm kalibreli, dövme 4140 çelik gövde ve sürgüye sahip yarı otomatik tabancadır. Çift sıralı 15 fişek kapasiteli şarjörü, G10 tutma yeri ve menevişli mavi yüzeyiyle hem dayanıklılık hem de estetik sunar.":
        "BR9 مسدس نصف آلي بعيار 9×19 مم بهيكل ومزلاج من فولاذ 4140 المطروق. يجمع بين المتانة والجمال بمخزن مزدوج الصف سعة 15 طلقة، ومقابض G10، وسطح أزرق مُزرَق.",
      "GN4; 9×19 mm kalibreli, 'Safe Action' emniyet sistemine sahip polimer çerçeveli kompakt tabancadır. 603 g hafif yapısı, Glock tipi şarjör uyumu ve çöl sarısı/siyah renk seçenekleriyle günlük taşımaya uygundur.":
        "GN4 مسدس مدمج بعيار 9×19 مم بهيكل بوليمري ونظام أمان 'Safe Action'. بنيته الخفيفة 603 غ، وتوافقه مع مخازن نوع Glock، وخيارا اللون أصفر صحراوي/أسود تجعله مناسبًا للحمل اليومي.",
      "P9 Sport; 9×19 mm NATO/Parabellum kalibreli, 17+1 kapasiteli sportif tabancadır. Sökülebilir tam uzunlukta 7075 alüminyum alt çerçeve, fiber optik nişangah, ateşleme durumu göstergesi ve optiğe hazır kapağıyla atış sporları için tasarlanmıştır.":
        "P9 Sport مسدس رياضي بعيار 9×19 مم NATO/Parabellum وسعة 17+1. صُمّم لرياضات الرماية بهيكل سفلي كامل الطول قابل للفك من ألمنيوم 7075، وشعيرة ألياف بصرية، ومؤشّر وجود طلقة، ومزلاج جاهز للبصريات.",
      "P9; 9×19 mm NATO/Parabellum kalibreli, 17+1 kapasiteli polimer çerçeveli hizmet tabancasıdır. Picatinny ray sistemi ve askeri yeşil, çöl sarısı ve siyah renk seçenekleriyle profesyonel kullanıma yöneliktir.":
        "P9 مسدس خدمة بهيكل بوليمري بعيار 9×19 مم NATO/Parabellum وسعة 17+1. سكة Picatinny وخيارات الألوان أخضر عسكري وأصفر صحراوي وأسود تجعله موجّهًا للاستخدام الاحترافي.",
      "S9; 9×19 mm kalibreli, gecikmeli geri tepme sistemli makinalı tabancadır. 1000 atış/dk atış hızı, yarı/tam otomatik ateşleme modu ve 6.5″–10″ değiştirilebilir namlu seçenekleriyle yakın muharebe için üstün kontrol sağlar.":
        "S9 مسدس رشّاش بعيار 9×19 مم بنظام ارتداد متأخّر. يوفّر تحكّمًا فائقًا في القتال القريب بمعدّل إطلاق 1000 طلقة/دقيقة، ووضعي إطلاق نصف/آلي كامل، وسبطانات قابلة للتبديل 6.5″–10″.",
      "S9+; 9×19 mm kalibreli, teleskopik 7 pozisyon ayarlanabilir dipçikli hafif makinalı tüfektir. 900 atış/dk atış hızı, 30 fişek Glock tipi şarjör uyumu ve 6″–10″ namlu seçenekleriyle çok yönlü kullanım sunar.":
        "S9+ رشّاش خفيف بعيار 9×19 مم بأخمص تلسكوبي قابل للضبط على 7 مواضع. يقدّم استخدامًا متعدّدًا بمعدّل إطلاق 900 طلقة/دقيقة، وتوافق مع مخازن نوع Glock سعة 30 طلقة، وسبطانات 6″–10″.",
      "B40S Bombaatar; güvenlik birimlerine sahada yüksek ve etkili atış gücü sağlamak üzere NATO 40×46 mm standardında tasarlanmıştır. Çift yönlü açılım, ayarlanabilir nişangah ve MIL-STD-1913 Picatinny ray entegrasyonuyla operasyonel esneklik sunar.":
        "قاذف القنابل B40S مصمّم وفق معيار الناتو 40×46 مم لتزويد وحدات الأمن بقوة نيران عالية وفعّالة في الميدان. يوفّر مرونة تشغيلية بفتح ثنائي الاتجاه، وأجهزة تصويب قابلة للضبط، ودمج سكة MIL-STD-1913 Picatinny.",
      "B40; 40 mm pürüzsüz namlulu, döner tamburlu pompalama sistemine sahip bombaatardır. Manuel 4 atış kapasitesi, çift hareketli sonsuz tetik ve teleskopik dipçiğiyle sürekli ve güvenilir atış imkanı sağlar.":
        "B40 قاذف قنابل بسبطانة ملساء 40 مم ونظام ضخّ بأسطوانة دوّارة. تتيح سعته اليدوية 4 طلقات، وزناده اللانهائي مزدوج الحركة، وأخمصه التلسكوبي إطلاقًا متواصلًا وموثوقًا.",
      "KUTAL'ın saha deneyimi ve personel geri bildirimleriyle geliştirdiği KTL P556; kısa stroklu gaz pistonlu, 5 pozisyon ayarlanabilir yanak destekli dipçikli ve ambi tetik gruplu ergonomik bir piyade tüfeğidir. Uzun sökülebilir el koruması, polimer toz kapağı ve mermi sayacıyla yakın ve uzak menzilli görevlere uyum sağlar.":
        "KTL P556، الذي طوّرته كوتال بخبرة ميدانية وملاحظات الأفراد، بندقية مشاة مريحة بمكبس غازي قصير الشوط، وأخمص بمسند خدّ قابل للضبط على 5 مواضع، ومجموعة زناد لكلتا اليدين. تتكيّف مع مهام القرب والبعد بواقيها الطويل القابل للفك، وغطاء الغبار البوليمري، وعدّاد الطلقات.",
      "KTL AKM47; efsanevi AK-47 platformunun yüzde yüz yerli olarak üretilen ve modernize edilmiş versiyonudur. Çelik parçalarla güçlendirilmiş şarjör, dipçik ve el kundağıyla tüm iklim koşullarında yüksek performans gösterir.":
        "KTL AKM47 نسخة محلّية بالكامل ومُحدّثة من منصّة AK-47 الأسطورية. يقدّم أداءً عاليًا في جميع الظروف المناخية بمخزن وأخمص وحاضنة معزّزة بأجزاء فولاذية.",
      "Türk ordusunun yeni nesil piyade tüfeği KTL P762; tamamen yerli kaynaklarla tasarlanmış, 7.62×51 mm NATO standardı mühimmat kullanan bir tüfektir. Modüler raylı el koruması gece görüş, lazer işaretleyici ve aksesuar entegrasyonu sağlar; hafif ve dengeli yapısıyla yüksek isabet sunar.":
        "KTL P762 بندقية مشاة من الجيل الجديد للجيش التركي، مصمّمة بالكامل من موارد محلّية وتستخدم ذخيرة بمعيار الناتو 7.62×51 مم. يتيح الواقي المعياري المزوّد بسكك دمج الرؤية الليلية ومؤشّر الليزر والملحقات؛ وتوفّر بنيتها الخفيفة المتوازنة دقّة عالية.",
      "KTL M762 Makinalı Tüfek; tüm arazi ve iklim koşullarında en iyi sonucu sağlamak üzere tasarlanmıştır. Yüksek isabet oranı, uzun silah ömrü ve 1200 m etkili menzille tam otomatik destek ateşi sunar. Tamamen yerli ve milli üretimdir.":
        "الرشّاش KTL M762 مصمّم لتحقيق أفضل النتائج في جميع تضاريس وظروف المناخ. يوفّر نيران دعم آلية كاملة بدقّة عالية وعمر خدمة طويل ومدى فعّال 1200 م. إنتاج محلّي ووطني بالكامل.",
      "KTL 21; 7.62×51 mm kalibreli keskin nişancı tüfeğidir. 5 veya 10 fişek şarjör seçenekleri, 1100 m etkili menzil ve yüksek isabet kabiliyetiyle uzun menzilli hassas atış görevleri için tasarlanmıştır.":
        "KTL 21 بندقية قنص بعيار 7.62×51 مم. صُمّمت لمهام الرماية الدقيقة بعيدة المدى بخيارات مخزن 5 أو 10 طلقات، ومدى فعّال 1100 م، وقدرة إصابة عالية.",
      "KTL H81; paletli zırhlı araçlara, tekerlekli taktik araçlara ve sabit platformlara entegre edilebilen 81 mm modüler havan sistemidir. Otomatik ateşleme, hassas hedefleme ve geri tepme azaltma mekanizmasına sahiptir; INS ve MGRS ile çok hedefli atış ve otomatik meteorolojik veri desteği sunar.":
        "KTL H81 نظام هاون معياري عيار 81 مم يمكن دمجه في المركبات المدرّعة المجنزرة والمركبات التكتيكية ذات العجلات والمنصّات الثابتة. يمتلك إطلاقًا آليًا واستهدافًا دقيقًا وآلية لتقليل الارتداد؛ ويوفّر مع INS وMGRS إطلاقًا متعدّد الأهداف ودعمًا آليًا للبيانات الجوية.",
      "KTL H120; paletli/tekerlekli araç ve sabit platformlara entegre edilebilen 120 mm modüler havan sistemidir. Otomatik ateşleme, INS + MGRS ile çok hedefli operasyon, düşük geri tepme (<25 ton) ve bir dakikanın altında ateşleme süresiyle üstün dolaylı atış gücü sağlar.":
        "KTL H120 نظام هاون معياري عيار 120 مم يمكن دمجه في المركبات المجنزرة/ذات العجلات والمنصّات الثابتة. يوفّر قوة نيران غير مباشرة فائقة بإطلاق آلي، وعمليات متعدّدة الأهداف عبر INS + MGRS، وارتداد منخفض (<25 طنًا)، وزمن فتح نيران أقل من دقيقة.",
      "Güvenlik güçlerinin ihtiyaçlarına yönelik, farklı kalibrelerde yerli üretim piyade tüfekleri.": "بنادق مشاة محلّية الصنع بعيارات مختلفة لاحتياجات قوات الأمن.",
      "NATO standardı 5.56×45 mm kalibreli modern piyade tüfeği.": "بندقية مشاة حديثة بعيار الناتو 5.56×45 مم.",
      "Yüksek durdurma gücü sunan 7.62×39 mm kalibreli tüfek.": "بندقية بعيار 7.62×39 مم توفّر قوة إيقاف عالية.",
      "Uzun menzil ve isabet için 7.62×51 mm kalibreli tüfek.": "بندقية بعيار 7.62×51 مم للمدى البعيد والدقّة.",
      "Destek ateşi ve sürekli atış gücü için makinalı tüfek sistemleri.": "أنظمة رشّاشات لنيران الدعم والقوة النارية المتواصلة.",
      "Uzun menzilde yüksek isabet gerektiren görevler için keskin nişancı tüfekleri.": "بنادق قنص للمهام التي تتطلّب دقّة عالية على المدى البعيد.",
      "Dolaylı atış desteği sağlayan farklı çaplarda havan sistemleri.": "أنظمة هاون بعيارات مختلفة توفّر دعم النيران غير المباشرة.",
      "120 mm · 4140 çelik Melonite": "120 مم · فولاذ 4140 مِلونايت", "1100 g (boş şarjör)": "1100 غ (مخزن فارغ)",
      "Tek hareket · 30–35 N": "حركة واحدة · 30–35 نيوتن", "Parmak emniyeti": "أمان الزناد",
      "Fiber optik ön / ayarlanabilir arka": "شعيرة ألياف بصرية / فريضة قابلة للضبط", "Siyah": "أسود",
      "Geri tepme, kapalı mekanizma": "ارتداد، مغلاق مغلق", "15 (çift sıra)": "15 (صف مزدوج)",
      "109 mm (4,5″) · 4140 çelik": "109 مم (4.5″) · فولاذ 4140", "840 g (şarjörsüz)": "840 غ (بدون مخزن)",
      "Tek hareket · 18–20 N": "حركة واحدة · 18–20 نيوتن", "4140 çelik": "فولاذ 4140", "Tutma emniyeti": "أمان المقبض",
      "Mekanik": "ميكانيكي", "Mavi (meneviş)": "أزرق (مُزرَق)", "102 mm (4″) · 4140 çelik": "102 مم (4″) · فولاذ 4140",
      "603 g (şarjörsüz)": "603 غ (بدون مخزن)", "Tek hareket · 22 N": "حركة واحدة · 22 نيوتن", "Çöl sarısı / Siyah": "أصفر صحراوي / أسود",
      "7075 alüminyum": "ألمنيوم 7075", "125 mm (5″) · 4140 çelik": "125 مم (5″) · فولاذ 4140", "992 g (şarjörsüz)": "992 غ (بدون مخزن)",
      "Tek hareket · 23–25 N": "حركة واحدة · 23–25 نيوتن", "Turuncu": "برتقالي", "105,5 mm (4″) · 4140 çelik": "105.5 مم (4″) · فولاذ 4140",
      "735 g (şarjörsüz)": "735 غ (بدون مخزن)", "Askeri yeşil / Çöl sarısı / Siyah": "أخضر عسكري / أصفر صحراوي / أسود",
      "Gecikmeli geri tepme": "ارتداد متأخّر", "Yarı / Tam otomatik": "نصف / آلي كامل", "1000 atış/dk": "1000 طلقة/دقيقة",
      "6.5″ / 8.5″ / 10″ · 4140 çelik": "6.5″ / 8.5″ / 10″ · فولاذ 4140", "Alüminyum (6000/7000 serisi)": "ألمنيوم (سلسلة 6000/7000)",
      "6″ / 8″ / 10″ · 4140 çelik": "6″ / 8″ / 10″ · فولاذ 4140", "900 atış/dk": "900 طلقة/دقيقة",
      "Ayarlanabilir (50–400 m)": "قابل للضبط (50–400 م)", "Çift yönlü (sağ/sol)": "ثنائي الاتجاه (يمين/يسار)",
      "40 mm (pürüzsüz)": "40 مم (أملس)", "Manuel, 4 atış": "يدوي، 4 طلقات", "Döner tamburlu pompalama": "ضخّ بأسطوانة دوّارة",
      "Çift hareket · 4–5 kg": "حركة مزدوجة · 4–5 كغ", "500 mm (dipçiksiz) / 850 mm": "500 مم (بدون أخمص) / 850 مم",
      "Mekanik (45°–60°–75°)": "ميكانيكي (45°–60°–75°)", "Gaz sistemi, döner kilit": "نظام غازي، مغلاق دوّار",
      "7.5″ / 10.5″ / 12″ / 14.5″ / 16″ · 4140 çelik": "7.5″ / 10.5″ / 12″ / 14.5″ / 16″ · فولاذ 4140", "800–1000 atış/dk": "800–1000 طلقة/دقيقة",
      "6000/7000 serisi alüminyum": "ألمنيوم سلسلة 6000/7000", "16,1″ · 4140 çelik": "16.1″ · فولاذ 4140", "650 atış/dk": "650 طلقة/دقيقة",
      "Ahşap": "خشب", "16″ / 18″ / 20″ · 4140 çelik": "16″ / 18″ / 20″ · فولاذ 4140", "600 mm · 4140 çelik": "600 مم · فولاذ 4140",
      "700–800 atış/dk": "700–800 طلقة/دقيقة", "Tam otomatik": "آلي كامل", "5 / 10 fişek": "5 / 10 طلقات",
      "10–15 atış/dk": "10–15 طلقة/دقيقة", "8–10 atış/dk": "8–10 طلقة/دقيقة",
      "Yasal": "قانوني", "Kişisel Verilerin Korunması": "حماية البيانات الشخصية",
      "6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında aydınlatma metni.": "إشعار توضيحي بموجب القانون رقم 6698 لحماية البيانات الشخصية (KVKK).",
      "1. Veri Sorumlusu": "1. المتحكّم في البيانات", "2. İşlenen Kişisel Veriler": "2. البيانات الشخصية المعالَجة",
      "3. Kişisel Verilerin İşlenme Amaçları": "3. أغراض المعالجة", "4. Kişisel Verilerin Aktarılması": "4. نقل البيانات الشخصية",
      "5. Toplama Yöntemi ve Hukuki Sebep": "5. طريقة الجمع والأساس القانوني", "6. İlgili Kişinin Hakları (KVKK md. 11)": "6. حقوق صاحب البيانات (المادة 11 من KVKK)",
      "7. Başvuru ve İletişim": "7. التقديم والتواصل",
      "Şirketimizle olan ilişkinizin niteliğine göre aşağıdaki kişisel verileriniz işlenebilmektedir:": "بحسب طبيعة علاقتك بشركتنا، قد تُعالَج البيانات الشخصية التالية:",
      "Kimlik bilgileri (ad, soyad vb.)": "بيانات الهوية (الاسم واللقب وغيرها)",
      "İletişim bilgileri (telefon, e-posta, adres)": "بيانات التواصل (الهاتف، البريد الإلكتروني، العنوان)",
      "Müşteri/tedarikçi işlem bilgileri (talep, teklif ve sipariş kayıtları)": "بيانات معاملات العملاء/المورّدين (سجلات الطلبات والعروض والأوامر)",
      "İnternet sitesi üzerinden ilettiğiniz form ve mesaj içerikleri": "محتوى النماذج والرسائل التي ترسلها عبر الموقع",
      "Hukuki işlem ve mevzuata uyum kapsamında elde edilen bilgiler": "المعلومات المحصّلة في إطار الإجراءات القانونية والامتثال للتشريعات",
      "Ürün ve hizmet taleplerinizin karşılanması ve tekliflerin oluşturulması": "تلبية طلبات المنتجات والخدمات وإعداد العروض",
      "Sözleşmesel ve yasal yükümlülüklerin yerine getirilmesi": "الوفاء بالالتزامات التعاقدية والقانونية",
      "Müşteri ve tedarikçi ilişkilerinin yürütülmesi": "إدارة علاقات العملاء والمورّدين",
      "Talep ve şikayetlerin değerlendirilmesi, iletişim faaliyetlerinin yürütülmesi": "تقييم الطلبات والشكاوى وإدارة أنشطة التواصل",
      "Bilgi güvenliği süreçlerinin ve yasal mevzuata uyumun sağlanması": "ضمان عمليات أمن المعلومات والامتثال القانوني",
      "Kişisel verileriniz; yalnızca yukarıda belirtilen amaçlarla sınırlı olmak üzere, KVKK'nın 8. ve 9. maddelerinde öngörülen şartlar çerçevesinde yetkili kamu kurum ve kuruluşlarına, iş ortaklarımıza ve hizmet sağlayıcılarımıza aktarılabilir. Savunma sanayii mevzuatı gereği ilgili resmi mercilerle paylaşım yapılabilir.": "قد تُنقل بياناتك الشخصية — بما يقتصر على الأغراض المذكورة أعلاه — إلى المؤسسات العامة المختصّة وشركائنا ومزوّدي خدماتنا ضمن الشروط المنصوص عليها في المادتين 8 و9 من KVKK. وقد تُشارك مع الجهات الرسمية المعنية وفقًا لتشريعات الصناعة الدفاعية.",
      "Kişisel verileriniz; internet sitesi iletişim formları, e-posta, telefon ve fiziki/elektronik ortamda iletilen belgeler aracılığıyla; KVKK'nın 5. ve 6. maddelerinde belirtilen hukuki sebeplere (sözleşmenin kurulması/ifası, hukuki yükümlülük, meşru menfaat ve açık rıza) dayanılarak toplanır ve işlenir.": "تُجمع بياناتك الشخصية وتُعالَج عبر نماذج التواصل في الموقع والبريد الإلكتروني والهاتف والمستندات المقدّمة ورقيًا/إلكترونيًا، استنادًا إلى الأسس القانونية في المادتين 5 و6 من KVKK (إبرام/تنفيذ العقد، الالتزام القانوني، المصلحة المشروعة، والموافقة الصريحة).",
      "KVKK'nın 11. maddesi uyarınca kişisel veri sahibi olarak aşağıdaki haklara sahipsiniz:": "وفقًا للمادة 11 من KVKK، تتمتّع بصفتك صاحب بيانات بالحقوق التالية:",
      "Kişisel verilerinizin işlenip işlenmediğini öğrenme ve buna ilişkin bilgi talep etme": "معرفة ما إذا كانت بياناتك تُعالَج وطلب معلومات بشأن ذلك",
      "İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme": "معرفة غرض المعالجة وما إذا كانت تُستخدم وفق الغرض",
      "Yurt içinde/yurt dışında aktarıldığı üçüncü kişileri bilme": "معرفة الأطراف الثالثة التي نُقلت إليها داخل البلاد/خارجها",
      "Eksik veya yanlış işlenmişse düzeltilmesini isteme": "طلب التصحيح في حال المعالجة الناقصة أو الخاطئة",
      "Kanundaki şartlar çerçevesinde silinmesini veya yok edilmesini isteme": "طلب الحذف أو الإتلاف ضمن شروط القانون",
      "İşlenen verilerin münhasıran otomatik sistemlerle analiz edilmesine itiraz etme": "الاعتراض على التحليل حصريًا عبر الأنظمة الآلية",
      "Kanuna aykırı işleme nedeniyle zarara uğramanız halinde zararın giderilmesini talep etme": "طلب تعويض الضرر الناتج عن معالجة مخالفة للقانون",
      "Haklarınıza ilişkin taleplerinizi": "يمكنك إرسال طلباتك المتعلّقة بحقوقك إلى",
      "adresine veya Başak Mh. Konya Ereğli Cad. No: 46D Karatay/KONYA adresine yazılı olarak iletebilirsiniz. Başvurularınız, KVKK'da öngörülen süreler içerisinde sonuçlandırılacaktır.": "أو كتابيًا إلى العنوان Başak Mh. Konya Ereğli Cad. No: 46D Karatay/KONYA. وسيتم البتّ في طلباتك ضمن المدد المنصوص عليها في KVKK.",
    },
  };
  EXTRA.ar["İşbu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (\"KVKK\") uyarınca veri sorumlusu sıfatıyla KUTAL Savunma ve Silah Sanayi A.Ş. (\"Kutal Savunma\" / \"Şirket\") tarafından, kişisel verilerinizin işlenmesine ilişkin olarak sizleri bilgilendirmek amacıyla hazırlanmıştır."] =
    "أُعِدّ هذا الإشعار من قِبل KUTAL Savunma ve Silah Sanayi A.Ş. (\"Kutal Savunma\" / \"الشركة\") بصفتها المتحكّم في البيانات بموجب القانون رقم 6698 لحماية البيانات الشخصية (\"KVKK\")، بهدف إعلامك بشأن معالجة بياناتك الشخصية.";
  EXTRA.ru["İşbu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (\"KVKK\") uyarınca veri sorumlusu sıfatıyla KUTAL Savunma ve Silah Sanayi A.Ş. (\"Kutal Savunma\" / \"Şirket\") tarafından, kişisel verilerinizin işlenmesine ilişkin olarak sizleri bilgilendirmek amacıyla hazırlanmıştır."] =
    "Настоящее уведомление подготовлено компанией KUTAL Savunma ve Silah Sanayi A.Ş. (\"Kutal Savunma\" / «Компания») как оператором данных в соответствии с Законом № 6698 о защите персональных данных (\"KVKK\") с целью информировать вас об обработке ваших персональных данных.";
  EXTRA.en["İşbu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (\"KVKK\") uyarınca veri sorumlusu sıfatıyla KUTAL Savunma ve Silah Sanayi A.Ş. (\"Kutal Savunma\" / \"Şirket\") tarafından, kişisel verilerinizin işlenmesine ilişkin olarak sizleri bilgilendirmek amacıyla hazırlanmıştır."] =
    "This information notice has been prepared by KUTAL Savunma ve Silah Sanayi A.Ş. (\"Kutal Savunma\" / the \"Company\"), as data controller under Law No. 6698 on the Protection of Personal Data (\"KVKK\"), to inform you about the processing of your personal data.";

  ["en", "ru", "ar"].forEach(function (l) { var e = EXTRA[l]; for (var k in e) DICT[l][k] = e[k]; });

  var origText = new WeakMap();   // node -> orijinal TR text
  var origAttr = new WeakMap();   // el -> {attr: value}
  var ATTRS = ["placeholder", "aria-label", "title", "alt"];

  function translateText(map) {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var node, list = [];
    while ((node = walker.nextNode())) list.push(node);
    list.forEach(function (n) {
      var p = n.parentNode; if (!p) return;
      var tag = p.nodeName; if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT") return;
      if (!origText.has(n)) origText.set(n, n.nodeValue);
      var orig = origText.get(n);
      var key = norm(orig);
      if (!key) return;
      if (map && map[key] !== undefined) n.nodeValue = orig.replace(key, map[key]);
      else n.nodeValue = orig;
    });
  }
  function translateAttrs(map) {
    document.querySelectorAll("[placeholder],[aria-label],[title],[alt]").forEach(function (el) {
      var store = origAttr.get(el);
      if (!store) { store = {}; ATTRS.forEach(function (a) { if (el.hasAttribute(a)) store[a] = el.getAttribute(a); }); origAttr.set(el, store); }
      ATTRS.forEach(function (a) {
        if (store[a] == null) return;
        var key = norm(store[a]);
        if (map && map[key] !== undefined && map[key] !== "") el.setAttribute(a, map[key]);
        else el.setAttribute(a, store[a]);
      });
    });
  }
  var RTL = { ar: 1 };
  function apply(lang) {
    var map = DICT[lang] || null;
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL[lang] ? "rtl" : "ltr";
    document.body.classList.toggle("rtl", !!RTL[lang]);
    translateText(map);
    translateAttrs(map);
    document.querySelectorAll(".lang [data-lang]").forEach(function (b) {
      b.classList.toggle("on", b.dataset.lang === lang);
    });
  }
  function get() { try { return localStorage.getItem(STORE) || "tr"; } catch (e) { return "tr"; } }
  function set(l) { try { localStorage.setItem(STORE, l); } catch (e) {} }

  window.KUTAL_applyLang = function () { apply(get()); };

  document.addEventListener("click", function (e) {
    var b = e.target.closest(".lang [data-lang]"); if (!b) return;
    set(b.dataset.lang); apply(b.dataset.lang);
  });

  apply(get());
})();
