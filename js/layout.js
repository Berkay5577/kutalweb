/* KUTAL ARMS — layout.js : tüm sayfalarda paylaşılan header + footer */
(function () {
  "use strict";
  const PHONE = "+90 535 779 43 85";
  const PHONE_HREF = "tel:+905357794385";
  const EMAIL = "info@kutalarms.com.tr";
  const ADDR_FACTORY = "Başak Mh. Konya Ereğli Cad. No: 46D Karatay/KONYA";
  const ADDR_IST = "Tantavi Mh. Estergon Cad. No: 24 Suryapı Exen Residence Kat: 29 D: 333 Ümraniye/İstanbul";
  const MAPS = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Kutal Savunma Konya Ereğli Caddesi Karatay Konya");

  const ig = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>';
  const yt = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z" fill="currentColor"/></svg>';
  const li = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 17v-7"/></svg>';
  const xx = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 3h3l-7 8 8 10h-6l-5-6-5 6H3l8-9L3 3h6l4 5z"/></svg>';
  const caret = '<svg class="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 9l6 6 6-6"/></svg>';
  const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  const searchIco = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>';

  // Dil seçici — ülke bayrakları (inline SVG; her platformda güvenilir şekilde görünür)
  const FLAGS = {
    tr: '<svg class="flag" viewBox="0 0 20 14" aria-hidden="true"><rect width="20" height="14" fill="#E30A17"/><circle cx="8" cy="7" r="3.1" fill="#fff"/><circle cx="9" cy="7" r="2.5" fill="#E30A17"/><polygon fill="#fff" points="12,5.3 12.41,6.43 13.62,6.47 12.67,7.22 13,8.38 12,7.7 11,8.38 11.33,7.22 10.38,6.47 11.59,6.43"/></svg>',
    en: '<svg class="flag" viewBox="0 0 20 14" aria-hidden="true"><rect width="20" height="14" fill="#012169"/><path d="M0 0l20 14M20 0L0 14" stroke="#fff" stroke-width="2.8"/><path d="M0 0l20 14M20 0L0 14" stroke="#C8102E" stroke-width="1.4"/><path d="M10 0v14M0 7h20" stroke="#fff" stroke-width="4"/><path d="M10 0v14M0 7h20" stroke="#C8102E" stroke-width="2.2"/></svg>',
    ru: '<svg class="flag" viewBox="0 0 20 14" aria-hidden="true"><rect width="20" height="14" fill="#fff"/><rect y="4.67" width="20" height="4.67" fill="#0039A6"/><rect y="9.33" width="20" height="4.67" fill="#D52B1E"/></svg>',
    ar: '<svg class="flag" viewBox="0 0 20 14" aria-hidden="true"><rect width="20" height="14" fill="#006C35"/><rect x="3" y="8.9" width="14" height=".85" rx=".42" fill="#fff"/><g fill="#fff"><rect x="4.2" y="5.2" width="1.4" height="1.9" rx=".3"/><rect x="6.2" y="5.2" width="1.4" height="1.9" rx=".3"/><rect x="8.2" y="5.2" width="1.4" height="1.9" rx=".3"/><rect x="10.2" y="5.2" width="1.4" height="1.9" rx=".3"/><rect x="12.2" y="5.2" width="1.4" height="1.9" rx=".3"/></g></svg>',
  };
  const langBtn = (code, label, on) => `<button type="button" data-lang="${code}" class="lang-btn${on ? " on" : ""}" aria-label="${label}">${FLAGS[code]}<span>${label}</span></button>`;
  const langHTML = () => langBtn("tr", "TR", true) + langBtn("en", "EN") + langBtn("ru", "RU") + langBtn("ar", "AR");
  // Sosyal medya adresleri — gerçek hesap adreslerinizle güncelleyin
  const SOCIAL = {
    ig: "https://www.instagram.com/kutalarms",
    yt: "https://www.youtube.com/@kutalarms",
    li: "https://www.linkedin.com/company/kutal-savunma",
    xx: "https://x.com/kutalarms",
  };
  const socLinks = () =>
    `<a href="${SOCIAL.ig}" target="_blank" rel="noopener" aria-label="Instagram">${ig}</a>` +
    `<a href="${SOCIAL.yt}" target="_blank" rel="noopener" aria-label="YouTube">${yt}</a>` +
    `<a href="${SOCIAL.li}" target="_blank" rel="noopener" aria-label="LinkedIn">${li}</a>` +
    `<a href="${SOCIAL.xx}" target="_blank" rel="noopener" aria-label="X">${xx}</a>`;

  const page = document.body.dataset.page || "";
  const act = (p) => (p === page ? " active" : "");

  const header = `
  <header class="site-header" id="site-header">
    <div class="topbar">
      <div class="container">
        <div class="topbar-left">
          <a href="${PHONE_HREF}" class="tb-item phone">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5c0 8 7 15 15 15l2.5-3.5-4.5-2-2 2c-3-1.5-5.5-4-7-7l2-2-2-4.5L4 5z"/></svg>${PHONE}</a>
          <a href="mailto:${EMAIL}" class="tb-item email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>${EMAIL}</a>
        </div>
        <div class="topbar-right">
          <span class="lang">${langHTML()}</span>
          <span class="tb-sep"></span>
          <div class="tb-social">${socLinks()}</div>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="container">
        <a href="index.html" class="brand"><img src="images/logo_kutal.png" alt="Kutal Savunma" /></a>
        <nav class="nav-links" id="nav-links">
          <a href="index.html" class="${act("home").trim()}">Anasayfa</a>
          <div class="nav-item">
            <a href="hakkinda.html" class="${["about", "kalite", "kariyer"].includes(page) ? "active" : ""}">Kurumsal ${caret}</a>
            <div class="sub">
              <a href="hakkinda.html">Hakkımızda</a>
              <a href="kalite.html">Kalite & Sertifikalar</a>
              <a href="kariyer.html">Kariyer</a>
              <a href="kvk.html">KVK</a>
            </div>
          </div>
          <div class="nav-item">
            <a href="urunler.html" class="${act("products").trim()}">Ürünlerimiz ${caret}</a>
            <div class="sub">
              <a href="urunler.html#tabancalar">Tabancalar</a>
              <a href="urunler.html#makinali-tabancalar">Makinalı Tabancalar</a>
              <a href="urunler.html#piyade-tufekleri">Piyade Tüfekleri</a>
              <a href="urunler.html#bombaatar">Bombaatarlar</a>
              <a href="urunler.html#anti-riotlar">Anti-Riotlar</a>
            </div>
          </div>
          <div class="nav-item">
            <a href="tedarik.html" class="${act("supply").trim()}">Tedariklerimiz ${caret}</a>
            <div class="sub">
              <a href="tedarik.html#piyade-tufekleri">Piyade Tüfekleri</a>
              <a href="tedarik.html#makinali-tufekler">Makinalı Tüfekler</a>
              <a href="tedarik.html#keskin-nisanci-tufekleri">Keskin Nişancı Tüfekleri</a>
              <a href="tedarik.html#havanlar">Havanlar</a>
            </div>
          </div>
          <a href="haberler.html" class="${act("news").trim()}">Haberler</a>
          <a href="iletisim.html" class="${act("contact").trim()}">İletişim</a>
          <span class="lang lang-m">${langHTML()}</span>
        </nav>
        <div class="nav-cta">
          <button class="nav-search" id="nav-search" aria-label="Ara">${searchIco}</button>
          <a href="iletisim.html" class="btn btn--gold nav-quote">Teklif Al ${arrow}</a>
          <button class="burger" aria-label="Menü" aria-controls="nav-links" aria-expanded="false"><span></span><span></span><span></span></button>
        </div>
      </div>
    </div>
  </header>
  <div class="search-overlay" id="search-overlay" hidden>
    <div class="search-panel">
      <div class="search-in">${searchIco}<input type="search" id="search-input" placeholder="Ürün, haber veya sayfa arayın…" autocomplete="off" aria-label="Site içi arama" />
        <button class="search-close" id="search-close" aria-label="Kapat">✕</button></div>
      <div class="search-results" id="search-results"></div>
    </div>
  </div>`;

  const footer = `
  <footer class="footer">
    <div class="container">
      <div class="foot-grid">
        <div class="foot-brand">
          <a href="index.html" class="brand"><img src="images/logo_kutal.png" alt="Kutal Savunma" style="height:48px" /></a>
          <p style="margin-top:18px">Türkiye'nin savunma ve silah sanayisinde öncü ve yenilikçi bir kuruluş. Yerli mühendislik, üstün üretim kalitesi.</p>
          <div class="foot-social">${socLinks()}</div>
        </div>
        <div class="foot-col">
          <h4>Ürünler</h4>
          <a href="urunler.html#tabancalar">Tabancalar</a>
          <a href="urunler.html#makinali-tabancalar">Makinalı Tabancalar</a>
          <a href="urunler.html#piyade-tufekleri">Piyade Tüfekleri</a>
          <a href="urunler.html#bombaatar">Bombaatarlar</a>
          <a href="urunler.html#anti-riotlar">Anti-Riotlar</a>
          <a href="tedarik.html">Tedariklerimiz</a>
        </div>
        <div class="foot-col">
          <h4>Kurumsal</h4>
          <a href="hakkinda.html">Hakkımızda</a>
          <a href="kalite.html">Kalite & Sertifikalar</a>
          <a href="kariyer.html">Kariyer</a>
          <a href="haberler.html">Haberler</a>
          <a href="iletisim.html">İletişim</a>
        </div>
        <div class="foot-news">
          <h4 style="font-family:Rajdhani,sans-serif;text-transform:uppercase;letter-spacing:.16em;font-size:14px;color:var(--muted-2);margin-bottom:16px">İletişim</h4>
          <p><a href="${MAPS}" target="_blank" rel="noopener" style="color:var(--muted)">${ADDR_FACTORY}</a></p>
          <p style="margin-top:10px"><a href="${PHONE_HREF}" class="gold">${PHONE}</a><br>
             <a href="mailto:${EMAIL}">${EMAIL}</a></p>
          <form class="foot-form" data-mailto="${EMAIL}" data-subject="E-Bülten Aboneliği" style="margin-top:16px">
            <input type="email" name="E-Posta" placeholder="E-bülten için e-posta" required />
            <button type="submit">KAYIT</button>
          </form>
        </div>
      </div>
      <div class="foot-bottom">
        <span>© <span id="year">2026</span> Kutal Savunma ve Silah Sanayi A.Ş. Tüm hakları saklıdır.</span>
        <div class="links">
          <a href="kvk.html">KVKK</a>
          <a href="kvk.html">Gizlilik Bildirimi</a>
          <a href="kvk.html">Yasal Uyarı</a>
        </div>
      </div>
    </div>
  </footer>`;

  const hm = document.getElementById("site-header-mount");
  const fm = document.getElementById("site-footer-mount");
  if (hm) hm.outerHTML = header;
  if (fm) fm.outerHTML = footer;
})();
