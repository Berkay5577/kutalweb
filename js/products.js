/* KUTAL ARMS — products.js : ürün & kategori veri seti (kutalarms.com.tr içeriğinden) */
window.KUTAL_CATEGORIES = [
  { key: "tabancalar", name: "Tabancalar",
    desc: "9×19 mm ve 7.62×25 mm kalibrelerde, çelik ve polimer gövdeli yarı otomatik tabanca ailesi." },
  { key: "makinali-tabancalar", name: "Makinalı Tabancalar",
    desc: "Yakın muharebe için yüksek atış kontrollü, seçici ateşli makinalı tabancalar." },
  { key: "hafif-makinali-tufekler", name: "Hafif Makinalı Tüfekler",
    desc: "Teleskopik dipçikli, çok namlu seçenekli hafif ve çok yönlü platformlar." },
  { key: "bombaatar", name: "Bombaatar",
    desc: "40 mm NATO standardında, tekli ve döner tamburlu bombaatar sistemleri." },
  { key: "drone", name: "Sivil Drone Sistemleri",
    desc: "Sivil kullanım için geliştirilen insansız hava sistemleri. Yakında." },
];

window.KUTAL_PRODUCTS = [
  {
    slug: "fsb762", name: "FSB 762", cat: "tabancalar",
    cal: "7.62×25 mm", type: "Yarı Otomatik Tabanca",
    img: "images/products/fsb762.webp", model: "models/fsb.glb",
    desc: "Kutal Savunma'nın özel tasarımı olan FSB 762; 7.62×25 mm Tokarev kalibreli, M57 Zastava tipi şarjörlü ve 9+1 kapasiteli bir yarı otomatik tabancadır. 120 mm uzunluğunda 4140 çelik Melonite kaplamalı namlusu, 480 m/s namlu çıkış hızı ve Picatinny NATO STANAG 4694 uyumlu üst alıcısıyla öne çıkar.",
    specs: {
      "Kalibre": "7.62×25 mm", "Şarjör Tipi": "M57 Zastava tipi", "Kapasite": "9 + 1",
      "Namlu": "120 mm · 4140 çelik Melonite", "Toplam Uzunluk": "201 mm", "Genişlik": "30 mm",
      "Yükseklik": "135 mm", "Ağırlık": "1100 g (boş şarjör)", "Namlu Çıkış Hızı": "480 m/s",
      "Etkili Menzil": "500 m", "Tetik": "Tek hareket · 30–35 N", "Emniyet": "Parmak emniyeti",
      "Nişangah": "Fiber optik ön / ayarlanabilir arka", "Ray": "Picatinny MIL-STD-1913",
      "Yiv Oranı": "1:9,45 (4 yiv)", "Renk": "Siyah",
    },
  },
  {
    slug: "br9", name: "BR9", cat: "tabancalar",
    cal: "9×19 mm", type: "Yarı Otomatik Tabanca",
    img: "images/products/br9.webp", model: null,
    desc: "BR9; 9×19 mm kalibreli, dövme 4140 çelik gövde ve sürgüye sahip yarı otomatik tabancadır. Çift sıralı 15 fişek kapasiteli şarjörü, G10 tutma yeri ve menevişli mavi yüzeyiyle hem dayanıklılık hem de estetik sunar.",
    specs: {
      "Kalibre": "9×19 mm", "Çalışma Sistemi": "Geri tepme, kapalı mekanizma",
      "Kapasite": "15 (çift sıra)", "Namlu": "109 mm (4,5″) · 4140 çelik",
      "Toplam Uzunluk": "194 mm ±10", "Yükseklik": "126 mm", "Genişlik": "38,25 mm",
      "Ağırlık": "840 g (şarjörsüz)", "Tetik": "Tek hareket · 18–20 N",
      "Çerçeve / Sürgü": "4140 çelik", "Tutma Yeri": "G10", "Emniyet": "Tutma emniyeti",
      "Nişangah": "Mekanik", "Yiv Oranı": "1:10", "Renk": "Mavi (meneviş)",
    },
  },
  {
    slug: "gn4", name: "GN4", cat: "tabancalar",
    cal: "9×19 mm", type: "Yarı Otomatik Tabanca",
    img: "images/products/gn4.webp", model: null,
    desc: "GN4; 9×19 mm kalibreli, 'Safe Action' emniyet sistemine sahip polimer çerçeveli kompakt tabancadır. 603 g hafif yapısı, Glock tipi şarjör uyumu ve çöl sarısı/siyah renk seçenekleriyle günlük taşımaya uygundur.",
    specs: {
      "Kalibre": "9×19 mm", "Sistem": "Safe Action", "Çerçeve": "Polimer",
      "Kapasite": "15 (Glock tipi)", "Namlu": "102 mm (4″) · 4140 çelik",
      "Toplam Uzunluk": "185 mm", "Yükseklik": "128 mm", "Genişlik": "32 mm",
      "Ağırlık": "603 g (şarjörsüz)", "Tetik": "Tek hareket · 22 N",
      "Emniyet": "Tutma emniyeti", "Renk": "Çöl sarısı / Siyah",
    },
  },
  {
    slug: "p9-sport", name: "P9 Sport", cat: "tabancalar",
    cal: "9×19 mm", type: "Spor Tabanca",
    img: "images/products/p9sport.webp", model: null,
    desc: "P9 Sport; 9×19 mm NATO/Parabellum kalibreli, 17+1 kapasiteli sportif tabancadır. Sökülebilir tam uzunlukta 7075 alüminyum alt çerçeve, fiber optik nişangah, ateşleme durumu göstergesi ve optiğe hazır kapağıyla atış sporları için tasarlanmıştır.",
    specs: {
      "Kalibre": "9×19 mm", "Kapasite": "17 + 1 (CZ75 Mec-Gar)", "Alt Gövde": "7075 alüminyum",
      "Namlu": "125 mm (5″) · 4140 çelik", "Toplam Uzunluk": "209 mm", "Yükseklik": "146 mm",
      "Genişlik": "33 mm", "Ağırlık": "992 g (şarjörsüz)", "Tetik": "Tek hareket · 23–25 N",
      "Nişangah": "Fiber optik ön / ayarlanabilir arka", "Ray": "Picatinny MIL-STD-1913",
      "Emniyet": "Tutma emniyeti", "Renk": "Turuncu",
    },
  },
  {
    slug: "p9", name: "P9", cat: "tabancalar",
    cal: "9×19 mm", type: "Yarı Otomatik Tabanca",
    img: "images/products/p9.webp", model: null,
    desc: "P9; 9×19 mm NATO/Parabellum kalibreli, 17+1 kapasiteli polimer çerçeveli hizmet tabancasıdır. Picatinny ray sistemi ve askeri yeşil, çöl sarısı ve siyah renk seçenekleriyle profesyonel kullanıma yöneliktir.",
    specs: {
      "Kalibre": "9×19 mm", "Kapasite": "17 + 1 (CZ75 Mec-Gar)", "Alt Gövde": "Polimer",
      "Namlu": "105,5 mm (4″) · 4140 çelik", "Toplam Uzunluk": "191,8 mm", "Genişlik": "32 mm",
      "Ağırlık": "735 g (şarjörsüz)", "Tetik": "Tek hareket · 18–20 N", "Nişangah": "Mekanik",
      "Ray": "Picatinny MIL-STD-1913", "Emniyet": "Tutma emniyeti",
      "Renk": "Askeri yeşil / Çöl sarısı / Siyah",
    },
  },
  {
    slug: "s9", name: "S9", cat: "makinali-tabancalar",
    cal: "9×19 mm", type: "Makinalı Tabanca",
    img: "images/products/s9.webp", model: "models/s9.glb",
    desc: "S9; 9×19 mm kalibreli, gecikmeli geri tepme sistemli makinalı tabancadır. 1000 atış/dk atış hızı, yarı/tam otomatik ateşleme modu ve 6.5″–10″ değiştirilebilir namlu seçenekleriyle yakın muharebe için üstün kontrol sağlar.",
    specs: {
      "Kalibre": "9×19 mm", "Çalışma Sistemi": "Gecikmeli geri tepme",
      "Ateşleme Modu": "Yarı / Tam otomatik", "Atış Hızı": "1000 atış/dk",
      "Kapasite": "32 (Colt tipi)", "Namlu": "6.5″ / 8.5″ / 10″ · 4140 çelik",
      "Namlu Çıkış Hızı": "410 m/s", "Etkili Menzil": "150 m", "Toplam Uzunluk": "388 mm",
      "Ağırlık": "2650 g (6″)", "Gövde": "Alüminyum (6000/7000 serisi)",
      "Ray": "Picatinny MIL-STD-1913", "Tetik": "25–35 N", "Renk": "Siyah",
    },
  },
  {
    slug: "s9-plus", name: "S9+", cat: "hafif-makinali-tufekler",
    cal: "9×19 mm", type: "Hafif Makinalı Tüfek",
    img: "images/products/s9plus.webp", model: "models/s9.glb",
    desc: "S9+; 9×19 mm kalibreli, teleskopik 7 pozisyon ayarlanabilir dipçikli hafif makinalı tüfektir. 900 atış/dk atış hızı, 30 fişek Glock tipi şarjör uyumu ve 6″–10″ namlu seçenekleriyle çok yönlü kullanım sunar.",
    specs: {
      "Kalibre": "9×19 mm", "Namlu": "6″ / 8″ / 10″ · 4140 çelik", "Yiv Oranı": "1:10",
      "Toplam Uzunluk": "575–650 mm (6″)", "Ağırlık": "2650 g (6″)",
      "Dipçik": "Teleskopik, 7 pozisyon", "Kapasite": "30 (Glock tipi)",
      "Atış Hızı": "900 atış/dk", "Namlu Çıkış Hızı": "400 m/s", "Tetik": "35–45 N",
      "Çalışma Sistemi": "Geri tepme, kapalı mekanizma", "Gövde": "Alüminyum (6000/7000 serisi)",
      "Nişangah": "Fiber optik ön / ayarlanabilir arka", "Ray": "Picatinny MIL-STD-1913",
      "Genişlik": "60 mm", "Renk": "Siyah",
    },
  },
  {
    slug: "b40s", name: "B40S", cat: "bombaatar",
    cal: "40×46 mm", type: "Bombaatar",
    img: "images/products/b40s.webp", model: "models/tb40.glb",
    desc: "B40S Bombaatar; güvenlik birimlerine sahada yüksek ve etkili atış gücü sağlamak üzere NATO 40×46 mm standardında tasarlanmıştır. Çift yönlü açılım, ayarlanabilir nişangah ve MIL-STD-1913 Picatinny ray entegrasyonuyla operasyonel esneklik sunar.",
    specs: {
      "Kalibre": "40×46 mm (NATO)", "Ağırlık": "1670 g", "Etkili Menzil": "100–400 m",
      "Namlu": "10″", "Toplam Uzunluk": "323 mm", "Nişangah": "Ayarlanabilir (50–400 m)",
      "Açılım": "Çift yönlü (sağ/sol)", "Ray": "Picatinny MIL-STD-1913",
    },
  },
  {
    slug: "b40", name: "B40", cat: "bombaatar",
    cal: "40 mm", type: "Bombaatar (Döner Tambur)",
    img: "images/products/b40.webp", model: "models/b40.glb",
    desc: "B40; 40 mm pürüzsüz namlulu, döner tamburlu pompalama sistemine sahip bombaatardır. Manuel 4 atış kapasitesi, çift hareketli sonsuz tetik ve teleskopik dipçiğiyle sürekli ve güvenilir atış imkanı sağlar.",
    specs: {
      "Kalibre": "40 mm (pürüzsüz)", "Besleme": "Manuel, 4 atış",
      "Sistem": "Döner tamburlu pompalama", "Tetik": "Çift hareket · 4–5 kg",
      "Ağırlık": "4500 g (±100)", "Namlu": "203,2 mm (8″)", "Tambur": "160 mm",
      "Etkili Menzil": "100–150 m", "Uzunluk": "500 mm (dipçiksiz) / 850 mm",
      "Yükseklik": "156 mm", "Genişlik": "134 mm", "Nişangah": "Mekanik (45°–60°–75°)",
      "Dipçik": "Teleskopik, 2 pozisyon",
    },
  },

  /* ---- TEDARİK ürünleri (kutalarms.com.tr) ---- */
  {
    slug: "p556", name: "KTL P556", cat: "piyade-tufekleri", supply: true, supplyCat: "piyade-tufekleri",
    catName: "5.56×45 mm Piyade Tüfeği", cal: "5.56×45 mm", type: "Piyade Tüfeği",
    img: "images/products/p556.webp", model: null,
    desc: "KUTAL'ın saha deneyimi ve personel geri bildirimleriyle geliştirdiği KTL P556; kısa stroklu gaz pistonlu, 5 pozisyon ayarlanabilir yanak destekli dipçikli ve ambi tetik gruplu ergonomik bir piyade tüfeğidir. Uzun sökülebilir el koruması, polimer toz kapağı ve mermi sayacıyla yakın ve uzak menzilli görevlere uyum sağlar.",
    specs: {
      "Kalibre": "5,56×45 mm", "Çalışma Sistemi": "Gaz sistemi, döner kilit", "Kapasite": "30 (G3 tipi)",
      "Namlu": "7.5″ / 10.5″ / 12″ / 14.5″ / 16″ · 4140 çelik", "Namlu Çıkış Hızı": "750 m/s",
      "Atış Hızı": "800–1000 atış/dk", "Ağırlık": "2500 g (7.5″)", "Dipçik": "Teleskopik",
      "Gövde": "6000/7000 serisi alüminyum", "Ray": "Picatinny MIL-STD-1913", "Tetik": "35–45 N",
      "Yiv Oranı": "1:7", "Ateşleme": "Yarı / Tam otomatik", "Renk": "Siyah",
    },
  },
  {
    slug: "akm47", name: "KTL AKM47", cat: "piyade-tufekleri", supply: true, supplyCat: "piyade-tufekleri",
    catName: "7.62×39 mm Piyade Tüfeği", cal: "7.62×39 mm", type: "Piyade Tüfeği",
    img: "images/products/akm47.webp", model: null,
    desc: "KTL AKM47; efsanevi AK-47 platformunun yüzde yüz yerli olarak üretilen ve modernize edilmiş versiyonudur. Çelik parçalarla güçlendirilmiş şarjör, dipçik ve el kundağıyla tüm iklim koşullarında yüksek performans gösterir.",
    specs: {
      "Kalibre": "7,62×39 mm", "Kapasite": "30 (G3 tipi)", "Namlu": "16,1″ · 4140 çelik",
      "Namlu Çıkış Hızı": "715 m/s", "Atış Hızı": "650 atış/dk", "Etkili Menzil": "400 m",
      "Ağırlık": "4500 g", "Dipçik": "Ahşap", "Toplam Uzunluk": "980 mm", "Yükseklik": "258 mm",
      "Yiv Sayısı": "4 yiv", "Ateşleme": "Yarı / Tam otomatik", "Renk": "Siyah",
    },
  },
  {
    slug: "p762", name: "KTL P762", cat: "piyade-tufekleri", supply: true, supplyCat: "piyade-tufekleri",
    catName: "7.62×51 mm Piyade Tüfeği", cal: "7.62×51 mm", type: "Piyade Tüfeği",
    img: "images/products/p762.webp", model: null,
    desc: "Türk ordusunun yeni nesil piyade tüfeği KTL P762; tamamen yerli kaynaklarla tasarlanmış, 7.62×51 mm NATO standardı mühimmat kullanan bir tüfektir. Modüler raylı el koruması gece görüş, lazer işaretleyici ve aksesuar entegrasyonu sağlar; hafif ve dengeli yapısıyla yüksek isabet sunar.",
    specs: {
      "Kalibre": "7,62×51 mm", "Çalışma Sistemi": "Gaz sistemi, döner kilit", "Kapasite": "20 (G3 tipi)",
      "Namlu": "16″ / 18″ / 20″ · 4140 çelik", "Namlu Çıkış Hızı": "850 m/s", "Atış Hızı": "800–1000 atış/dk",
      "Ağırlık": "4500 g (16″)", "Dipçik": "Teleskopik", "Gövde": "6000/7000 serisi alüminyum",
      "Toplam Uzunluk": "910–980 mm", "Ray": "Picatinny MIL-STD-1913", "Yiv Oranı": "1:10",
      "Ateşleme": "Yarı / Tam otomatik", "Renk": "Siyah",
    },
  },
  {
    slug: "m762", name: "KTL M762", cat: "makinali-tufekler", supply: true, supplyCat: "makinali-tufekler",
    catName: "Makinalı Tüfek", cal: "7.62×51 mm", type: "Makinalı Tüfek",
    img: "images/products/m762.webp", model: null,
    desc: "KTL M762 Makinalı Tüfek; tüm arazi ve iklim koşullarında en iyi sonucu sağlamak üzere tasarlanmıştır. Yüksek isabet oranı, uzun silah ömrü ve 1200 m etkili menzille tam otomatik destek ateşi sunar. Tamamen yerli ve milli üretimdir.",
    specs: {
      "Kalibre": "7,62×51 mm", "Namlu": "600 mm · 4140 çelik", "Atış Hızı": "700–800 atış/dk",
      "Namlu Çıkış Hızı": "900 m/s", "Etkili Menzil": "1200 m", "Silah Ömrü": "25.000 mermi",
      "Namlu Ömrü": "12.500 mermi", "Ağırlık": "9 kg", "Ateşleme": "Tam otomatik",
      "Toplam Uzunluk": "1050 mm", "Yükseklik": "250 mm", "Yiv Sayısı": "4 yiv",
      "Ray": "Picatinny MIL-STD-1913", "Renk": "Siyah",
    },
  },
  {
    slug: "ktl21", name: "KTL 21", cat: "keskin-nisanci-tufekleri", supply: true, supplyCat: "keskin-nisanci-tufekleri",
    catName: "Keskin Nişancı Tüfeği", cal: "7.62×51 mm", type: "Keskin Nişancı Tüfeği",
    img: "images/products/ktl21.webp", model: null,
    desc: "KTL 21; 7.62×51 mm kalibreli keskin nişancı tüfeğidir. 5 veya 10 fişek şarjör seçenekleri, 1100 m etkili menzil ve yüksek isabet kabiliyetiyle uzun menzilli hassas atış görevleri için tasarlanmıştır.",
    specs: {
      "Kalibre": "7,62×51 mm", "Şarjör Kapasitesi": "5 / 10 fişek", "Toplam Uzunluk": "1250 mm",
      "Etkili Menzil": "1100 m", "Namlu Çıkış Hızı": "850 m/s",
    },
  },
  {
    slug: "h81", name: "KTL H81", cat: "havanlar", supply: true, supplyCat: "havanlar",
    catName: "81 mm Havan", cal: "81 mm", type: "Havan Sistemi",
    img: "images/products/h81.webp", model: null,
    desc: "KTL H81; paletli zırhlı araçlara, tekerlekli taktik araçlara ve sabit platformlara entegre edilebilen 81 mm modüler havan sistemidir. Otomatik ateşleme, hassas hedefleme ve geri tepme azaltma mekanizmasına sahiptir; INS ve MGRS ile çok hedefli atış ve otomatik meteorolojik veri desteği sunar.",
    specs: {
      "Kalibre": "81 mm", "Ağırlık": "72 kg", "Atış Hızı": "10–15 atış/dk", "Maksimum Menzil": "5.850 m",
      "Minimum Menzil": "250 m", "Namlu Çıkış Hızı": "330 m/s", "Maks. Gaz Basıncı": "625–700 kg/cm²",
      "Renk": "Siyah",
    },
  },
  {
    slug: "h120", name: "KTL H120", cat: "havanlar", supply: true, supplyCat: "havanlar",
    catName: "120 mm Havan", cal: "120 mm", type: "Havan Sistemi",
    img: "images/products/h120.webp", model: null,
    desc: "KTL H120; paletli/tekerlekli araç ve sabit platformlara entegre edilebilen 120 mm modüler havan sistemidir. Otomatik ateşleme, INS + MGRS ile çok hedefli operasyon, düşük geri tepme (<25 ton) ve bir dakikanın altında ateşleme süresiyle üstün dolaylı atış gücü sağlar.",
    specs: {
      "Kalibre": "120 mm", "Ağırlık": "570 kg", "Namlu": "1900 mm", "Namlu Çıkış Hızı": "365 m/s",
      "Atış Hızı": "8–10 atış/dk", "Minimum Menzil": "1.500 m", "Maksimum Menzil": "8.180 m",
      "Geri Tepme": "< 25 ton", "Azimut": "± 3200 mil", "Elevasyon": "800–1200 mil", "Renk": "Siyah",
    },
  },
];

/* Galeri görselleri (kutalarms.com.tr ürün galerilerinden) — her ürün için ana görsel + ek kareler */
(function () {
  const GP = "images/products/gallery/";
  const g = {
    "fsb762": ["fsb762-1.webp", "fsb762-2.webp", "fsb762-3.webp"],
    "br9": ["br9-1.webp", "br9-2.webp", "br9-3.webp"],
    "gn4": ["gn4-1.webp", "gn4-2.webp"],
    "p9-sport": ["p9sport-2.webp"],
    "p9": ["p9-1.webp", "p9-2.webp"],
    "s9": ["s9-1.webp", "s9-2.webp", "s9-3.webp", "s9-4.webp"],
    "s9-plus": ["s9plus-1.webp"],
    "b40s": ["b40s-1.webp", "b40s-2.webp", "b40s-3.webp", "b40s-4.webp"],
    "b40": ["b40-1.webp", "b40-2.webp", "b40-3.webp", "b40-4.webp"],
  };
  (window.KUTAL_PRODUCTS || []).forEach((p) => {
    p.gallery = [p.img].concat((g[p.slug] || []).map((f) => GP + f));
  });
  // şeffaf görseller için önbellek kırıcı
  const Q = "?t3";
  (window.KUTAL_PRODUCTS || []).forEach((p) => {
    p.img += Q;
    if (p.gallery) p.gallery = p.gallery.map((s) => s + Q);
  });
})();

/* Tedariklerimiz — temin/tedarik kategorileri (ürün listesi yerine yetkinlik açıklamaları) */
window.KUTAL_SUPPLY = [
  { key: "piyade-tufekleri", name: "Piyade Tüfekleri",
    desc: "Güvenlik güçlerinin ihtiyaçlarına yönelik, farklı kalibrelerde yerli üretim piyade tüfekleri.",
    sub: [
      { name: "5.56×45 mm", desc: "NATO standardı 5.56×45 mm kalibreli modern piyade tüfeği.", products: ["p556"] },
      { name: "7.62×39 mm", desc: "Yüksek durdurma gücü sunan 7.62×39 mm kalibreli tüfek.", products: ["akm47"] },
      { name: "7.62×51 mm", desc: "Uzun menzil ve isabet için 7.62×51 mm kalibreli tüfek.", products: ["p762"] },
    ] },
  { key: "makinali-tufekler", name: "Makinalı Tüfekler",
    desc: "Destek ateşi ve sürekli atış gücü için makinalı tüfek sistemleri.", products: ["m762"] },
  { key: "keskin-nisanci-tufekleri", name: "Keskin Nişancı Tüfekleri",
    desc: "Uzun menzilde yüksek isabet gerektiren görevler için keskin nişancı tüfekleri.", products: ["ktl21"] },
  { key: "havanlar", name: "Havanlar",
    desc: "Dolaylı atış desteği sağlayan farklı çaplarda havan sistemleri.", products: ["h81", "h120"] },
];

/* Haberler / Medya */
window.KUTAL_NEWS = [
  {
    slug: "s9-gen2", date: "2026-09-12", tag: "Ürün Lansmanı",
    title: "Yeni Nesil KTL S9 Gen-2 Tanıtıldı",
    excerpt: "Geliştirilmiş ateşleme grubu, yeni ergonomik gövde ve modüler ray sistemiyle KTL S9 Gen-2 sahneye çıktı.",
    icon: "smg",
    body: [
      "Kutal Savunma, makinalı tabanca ailesinin yeni üyesi KTL S9 Gen-2'yi tanıttı. Yeni nesil model; geliştirilmiş gecikmeli geri tepme mekanizması, düşük geri tepme sağlayan yeni tampon sistemi ve tamamen modüler bir üst alıcı ile geliyor.",
      "9×19 mm kalibreli platform, 6.5″, 8.5″ ve 10″ değiştirilebilir namlu seçenekleriyle yakın muharebeden koruma görevlerine kadar geniş bir kullanım yelpazesi sunuyor. MIL-STD-1913 Picatinny ray sistemi sayesinde optik, lazer ve aydınlatma aksesuarları hızla entegre edilebiliyor.",
      "Gen-2 ile birlikte gelen yeni ergonomik tutamak açısı ve dokulu yüzey işlemi, zorlu saha koşullarında dahi üstün silah kontrolü sağlıyor.",
    ],
  },
  {
    slug: "saha-expo-2026", date: "2026-08-28", tag: "Fuar",
    title: "Kutal Savunma, SAHA EXPO 2026'da Yerini Aldı",
    excerpt: "Savunma sanayiinin en büyük buluşmalarından SAHA EXPO'da tüm ürün ailemizi ziyaretçilerle buluşturduk.",
    icon: "expo",
    body: [
      "Kutal Savunma, savunma ve havacılık sanayiinin öncü fuarlarından SAHA EXPO 2026'da standıyla yerini aldı. Fuar boyunca tabanca, makinalı tabanca, hafif makinalı tüfek ve bombaatar ürün ailesi ziyaretçilerin yoğun ilgisiyle karşılaştı.",
      "Yerli ve yabancı heyetlerin ağırlandığı stantta, interaktif 3D ürün deneyimi ve canlı teknik sunumlar gerçekleştirildi. Ekibimiz, kurumsal alım ve tedarik süreçlerine ilişkin görüşmeler yürüttü.",
    ],
  },
  {
    slug: "ihracat-anlasmasi", date: "2026-08-05", tag: "İhracat",
    title: "Taktik Platformlarda Yeni İhracat Anlaşması",
    excerpt: "Kutal Savunma, taktik silah sistemlerinde yeni bir uluslararası tedarik anlaşmasına imza attı.",
    icon: "export",
    body: [
      "Yerli mühendislik ve üstün üretim kalitesini uluslararası pazarlara taşıyan Kutal Savunma, taktik silah platformları alanında yeni bir ihracat anlaşması imzaladı.",
      "Anlaşma kapsamında, NATO standartlarıyla tam uyumlu ürünlerimiz farklı coğrafyalardaki güvenlik güçlerinin envanterine katılacak. Bu iş birliği, ihracat ağımızı genişletme hedefimiz doğrultusunda önemli bir adım oluşturuyor.",
    ],
  },
  {
    slug: "kalite-belgesi", date: "2026-07-18", tag: "Kalite",
    title: "Kalite Yönetim Sistemi Sertifikalarımız Yenilendi",
    excerpt: "Uluslararası kalite yönetim sistemi denetimlerini başarıyla tamamlayarak sertifikalarımızı yeniledik.",
    icon: "quality",
    body: [
      "Kutal Savunma, tasarımdan seri üretime kadar tüm süreçlerini kapsayan kalite yönetim sistemi denetimlerini başarıyla tamamladı. Bağımsız denetim kuruluşları tarafından gerçekleştirilen incelemelerin ardından kalite sertifikalarımız yenilendi.",
      "Mikron seviyesinde tolerans hedefleyen üretim yaklaşımımız ve her ürün için uyguladığımız atış, dayanım ve emniyet doğrulama süreçleri, kalite taahhüdümüzün temelini oluşturuyor.",
    ],
  },
];
