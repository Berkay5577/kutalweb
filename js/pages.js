/* KUTAL ARMS — pages.js : katalog, ürün detay ve tedarik sayfalarını products.js'ten üretir */
(function () {
  "use strict";
  const P = window.KUTAL_PRODUCTS || [];
  const C = window.KUTAL_CATEGORIES || [];
  const S = window.KUTAL_SUPPLY || [];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  function card(p) {
    return `
      <a class="pcard reveal" href="urun.html?p=${encodeURIComponent(p.slug)}">
        ${p.model ? '<span class="pc3d">3D</span>' : ""}
        <div class="pcard-img"><img src="${p.img}" alt="${esc(p.name)}" loading="lazy" /></div>
        <div class="pcard-body">
          <span class="pcard-cal">${esc(p.cal)}</span>
          <h3>${esc(p.name)}</h3>
          <span class="pcard-type">${esc(p.type)}</span>
          <span class="pcard-cta">İncele ${arrow}</span>
        </div>
      </a>`;
  }

  /* -------- kategori sekmeleri (ortak) -------- */
  const ICONS = {
    all: '<rect x="6" y="6" width="14" height="14"/><rect x="28" y="6" width="14" height="14"/><rect x="6" y="28" width="14" height="14"/><rect x="28" y="28" width="14" height="14"/>',
    "tabancalar": '<path d="M10 16h22v10H20l-2 8h-6l2-8h-4z"/><path d="M32 16h6v6"/>',
    "makinali-tabancalar": '<path d="M8 18h26l6 4v8H20l-4-6H8z"/><path d="M16 30v6h8v-6"/>',
    "hafif-makinali-tufekler": '<path d="M6 20h30l6 6v6H14l-8-6z"/><path d="M14 32v6h8v-6"/><path d="M34 20v-6h6"/>',
    "bombaatar": '<rect x="8" y="18" width="30" height="8"/><path d="M14 26v8M32 26v8"/><path d="M38 22h4"/>',
    "drone": '<circle cx="24" cy="24" r="6"/><path d="M24 18V8M24 30v10M18 24H8M30 24h10"/><circle cx="8" cy="8" r="3"/><circle cx="40" cy="8" r="3"/><circle cx="8" cy="40" r="3"/><circle cx="40" cy="40" r="3"/>',
    "piyade-tufekleri": '<path d="M6 20h30l6 6v6H14l-8-6z"/><path d="M14 32v6h8v-6"/><path d="M34 20v-6h6"/>',
    "makinali-tufekler": '<path d="M6 18h28l8 5v7H16l-4-6H6z"/><path d="M16 30v7h8v-7"/><path d="M26 12v6"/>',
    "keskin-nisanci-tufekleri": '<circle cx="24" cy="24" r="13"/><path d="M24 5v8M24 35v8M5 24h8M35 24h8M24 24h.01"/>',
    "havanlar": '<path d="M9 41l26-27"/><path d="M29 8l9 9"/><path d="M6 39h9"/><path d="M20 41h20"/>',
  };
  const svgIco = (k) => `<svg class="ct-ico" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.7">${ICONS[k] || ICONS.all}</svg>`;
  const tabBtn = (key, name, count) => `<button class="cat-tab" data-cat="${key}" role="tab" aria-selected="false">
      ${svgIco(key)}<span class="ct-name">${esc(name)}</span>${count != null ? `<span class="ct-cnt">${count}</span>` : ""}</button>`;
  /* sekme filtre davranışını bir konteynıra bağlar */
  function wireTabs(container) {
    const tabEls = Array.from(container.querySelectorAll(".cat-tab"));
    const blockEls = Array.from(container.querySelectorAll(".cat-block"));
    const navH = () => parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 78;
    const applyFilter = (key, scroll) => {
      tabEls.forEach((t) => {
        const on = t.dataset.cat === key;
        t.classList.toggle("active", on);
        t.setAttribute("aria-selected", on ? "true" : "false");
      });
      blockEls.forEach((b) => {
        const show = key === "all" || b.id === key;
        b.hidden = !show;
        if (show) b.classList.add("in");
      });
      if (scroll) {
        const y = container.getBoundingClientRect().top + window.scrollY - navH() - 24;
        window.scrollTo({ top: Math.max(y, 0), behavior: "smooth" });
      }
    };
    tabEls.forEach((t) =>
      t.addEventListener("click", () => {
        applyFilter(t.dataset.cat, true);
        history.replaceState(null, "", t.dataset.cat === "all" ? location.pathname : "#" + t.dataset.cat);
      })
    );
    const hashKey = location.hash.slice(1);
    if (hashKey && blockEls.some((b) => b.id === hashKey)) applyFilter(hashKey, true);
    else applyFilter("all", false);
  }

  /* -------- CATALOG (urunler.html) — sol filtre paneli -------- */
  const catalog = document.getElementById("catalog");
  if (catalog) buildShop(catalog, P.filter((p) => C.some((c) => c.key === p.cat)), { catList: C });

  /* ürün ızgarası + sol filtre (kategori · kalibre · tip) */
  function buildShop(root, ITEMS, opts) {
    const catList = opts.catList || [];
    const filterIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/><circle cx="9" cy="6" r="2.4" fill="currentColor" stroke="none"/><circle cx="15" cy="12" r="2.4" fill="currentColor" stroke="none"/><circle cx="8" cy="18" r="2.4" fill="currentColor" stroke="none"/></svg>';
    const uniq = (a) => Array.from(new Set(a));
    const calList = uniq(ITEMS.map((p) => p.cal)).sort((a, b) => a.localeCompare(b, "tr", { numeric: true }));
    const typeList = uniq(ITEMS.map((p) => p.type)).sort((a, b) => a.localeCompare(b, "tr"));
    const catName = (k) => (catList.find((c) => c.key === k) || {}).name || k;

    const opt = (f, value, label, n) => `<label class="fopt">
        <input type="checkbox" data-f="${f}" value="${esc(value)}"><span class="fx-box"></span>
        <span class="fx-name">${esc(label)}</span><b class="fx-n">${n}</b></label>`;
    const group = (title, html) => `<div class="fgroup"><h4>${title}</h4>${html}</div>`;

    const side = `<aside class="shop-side" id="shop-side">
      <div class="shop-side-head"><h3>Filtrele</h3>
        <button class="fx-clear" id="fx-clear" hidden>Temizle</button>
        <button class="side-close" id="side-close" aria-label="Kapat">✕</button></div>
      ${catList.length ? group("Kategori", catList.map((c) => opt("cat", c.key, c.name, ITEMS.filter((p) => p.cat === c.key).length)).join("")) : ""}
      ${group("Kalibre", calList.map((v) => opt("cal", v, v, ITEMS.filter((p) => p.cal === v).length)).join(""))}
      ${group("Ürün Tipi", typeList.map((v) => opt("type", v, v, ITEMS.filter((p) => p.type === v).length)).join(""))}
    </aside>`;
    const main = `<div class="shop-main">
      <div class="shop-bar">
        <button class="filt-toggle" id="filt-toggle" aria-expanded="false">${filterIcon}<span>Filtreler</span><span class="ft-n" id="ft-n" hidden></span></button>
        <span class="shop-count" id="shop-count"></span>
        <div class="shop-chips" id="shop-chips"></div>
      </div>
      <div class="catalog" id="shop-grid"></div>
      <div class="cat-empty" id="shop-empty" hidden>Seçili filtrelere uygun ürün bulunamadı.</div>
    </div>`;
    root.classList.add("shop");
    root.innerHTML = side + main;

    const state = { cat: new Set(), cal: new Set(), type: new Set() };
    const $ = (id) => document.getElementById(id);
    const grid = $("shop-grid"), empty = $("shop-empty"), countEl = $("shop-count"),
      chipsEl = $("shop-chips"), clearBtn = $("fx-clear"), ftN = $("ft-n"),
      sideEl = $("shop-side"), toggle = $("filt-toggle"), closeBtn = $("side-close");
    const chipText = (f, v) => (f === "cat" ? catName(v) : v);

    const render = () => {
      const active = state.cat.size + state.cal.size + state.type.size;
      const list = ITEMS.filter((p) =>
        (!state.cat.size || state.cat.has(p.cat)) &&
        (!state.cal.size || state.cal.has(p.cal)) &&
        (!state.type.size || state.type.has(p.type)));
      grid.innerHTML = list.map(card).join("");
      grid.querySelectorAll(".pcard").forEach((c) => c.classList.add("in"));
      empty.hidden = list.length > 0;
      countEl.innerHTML = list.length + ' <span>ürün</span>';
      const chips = [];
      ["cat", "cal", "type"].forEach((f) => state[f].forEach((v) =>
        chips.push(`<button class="fchip" data-f="${f}" data-v="${esc(v)}">${esc(chipText(f, v))} <span>✕</span></button>`)));
      chipsEl.innerHTML = chips.join("");
      clearBtn.hidden = active === 0;
      ftN.hidden = active === 0; ftN.textContent = active;
      if (window.KUTAL_applyLang) window.KUTAL_applyLang();
    };

    root.querySelectorAll('input[type="checkbox"]').forEach((inp) =>
      inp.addEventListener("change", () => { state[inp.dataset.f][inp.checked ? "add" : "delete"](inp.value); render(); }));
    chipsEl.addEventListener("click", (e) => {
      const b = e.target.closest(".fchip"); if (!b) return;
      state[b.dataset.f].delete(b.dataset.v);
      const inp = root.querySelector(`input[data-f="${b.dataset.f}"][value="${CSS.escape(b.dataset.v)}"]`);
      if (inp) inp.checked = false;
      render();
    });
    clearBtn.addEventListener("click", () => {
      state.cat.clear(); state.cal.clear(); state.type.clear();
      root.querySelectorAll('input[type="checkbox"]').forEach((i) => (i.checked = false));
      render();
    });
    const setDrawer = (open) => { sideEl.classList.toggle("open", open); toggle.setAttribute("aria-expanded", open ? "true" : "false"); document.body.classList.toggle("nav-open", open); };
    toggle.addEventListener("click", () => setDrawer(!sideEl.classList.contains("open")));
    closeBtn.addEventListener("click", () => setDrawer(false));

    const hk = location.hash.slice(1);
    if (hk && catList.some((c) => c.key === hk)) {
      state.cat.add(hk);
      const inp = root.querySelector(`input[data-f="cat"][value="${CSS.escape(hk)}"]`);
      if (inp) inp.checked = true;
    }
    render();
  }

  /* -------- SUPPLY (tedarik.html) — ürünler sayfasıyla aynı sol filtre -------- */
  const supply = document.getElementById("supply");
  if (supply) {
    const supplyCats = S.map((s) => ({ key: s.key, name: s.name }));
    buildShop(supply, P.filter((p) => p.supply), { catList: supplyCats });
  }

  /* -------- HABERLER (haberler.html / haber.html) -------- */
  const NEWS = window.KUTAL_NEWS || [];
  const NEWS_ICONS = {
    smg: '<path d="M6 20h30l6 6v6H14l-8-6z"/><path d="M14 32v6h8v-6"/><path d="M34 20v-6h6"/>',
    expo: '<rect x="6" y="10" width="36" height="28" rx="2"/><path d="M6 18h36M14 10V4M34 10V4"/>',
    export: '<path d="M24 6l16 9v18l-16 9-16-9V15z"/><path d="M24 24l16-9M24 24v18M24 24L8 15"/>',
    quality: '<circle cx="24" cy="24" r="16"/><path d="M17 24l5 5 9-10"/>',
    default: '<rect x="8" y="8" width="32" height="32" rx="2"/><path d="M16 18h16M16 24h16M16 30h10"/>',
  };
  const trDate = (iso) => {
    const M = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];
    const d = new Date(iso); return { d: d.getDate(), m: M[d.getMonth()], y: d.getFullYear() };
  };
  const newsThumb = (n) => `<div class="news-thumb"><div class="date"><b>${trDate(n.date).d}</b> ${trDate(n.date).m.toUpperCase()} ${trDate(n.date).y}</div>
      <div class="ph"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4">${NEWS_ICONS[n.icon] || NEWS_ICONS.default}</svg></div></div>`;
  const newsCard = (n) => `<a class="news-card reveal" href="haber.html?n=${encodeURIComponent(n.slug)}">
      ${newsThumb(n)}
      <div class="news-body"><span class="tag">${esc(n.tag)}</span><h3>${esc(n.title)}</h3>
        <p class="news-ex">${esc(n.excerpt)}</p><span class="more">Görüntüle ${arrow}</span></div></a>`;

  const newsList = document.getElementById("news-list");
  if (newsList) newsList.innerHTML = NEWS.map(newsCard).join("");

  const newsMount = document.getElementById("news-mount");
  if (newsMount) {
    const nslug = new URLSearchParams(location.search).get("n");
    const n = NEWS.find((x) => x.slug === nslug);
    if (!n) {
      newsMount.innerHTML = `<div class="cat-empty">Haber bulunamadı. <a href="haberler.html" class="gold">Tüm haberler →</a></div>`;
    } else {
      document.title = `${n.title} — KUTAL Savunma`;
      const dt = trDate(n.date);
      const others = NEWS.filter((x) => x.slug !== n.slug).slice(0, 3);
      newsMount.innerHTML = `
        <article class="article reveal">
          <span class="tag">${esc(n.tag)}</span>
          <h1>${esc(n.title)}</h1>
          <div class="article-meta">${dt.d} ${dt.m} ${dt.y} · Kutal Savunma</div>
          <div class="article-hero"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.2">${NEWS_ICONS[n.icon] || NEWS_ICONS.default}</svg></div>
          <div class="article-body">${n.body.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
          <div class="article-share">
            <a href="https://wa.me/?text=${encodeURIComponent(n.title + " " + location.href)}" target="_blank" rel="noopener" class="pcard-cta">WhatsApp'ta paylaş ${arrow}</a>
            <a href="haberler.html" class="pcard-cta" style="color:var(--gold)">← Tüm Haberler</a>
          </div>
        </article>
        ${others.length ? `<div class="pd-related"><div class="cat-head"><div><h2>Diğer <span class="gold">Haberler</span></h2></div></div>
          <div class="news-grid">${others.map(newsCard).join("")}</div></div>` : ""}`;
    }
  }

  /* -------- PRODUCT DETAIL (urun.html) — Sarsılmaz tarzı -------- */
  const mount = document.getElementById("product-mount");
  if (mount) {
    const slug = new URLSearchParams(location.search).get("p");
    const p = P.find((x) => x.slug === slug);
    const catName = p ? (p.catName || (C.find((c) => c.key === p.cat) || {}).name || "") : "";
    const catLink = p ? (p.supply ? "tedarik.html#" + p.supplyCat : "urunler.html#" + p.cat) : "";

    if (!p) {
      mount.innerHTML = `<div class="cat-empty">Ürün bulunamadı. <a href="urunler.html" class="gold">Tüm ürünler →</a></div>`;
    } else {
      document.title = `${p.name} — KUTAL Savunma`;
      const crumbEl = document.getElementById("pd-crumb");
      if (crumbEl) crumbEl.innerHTML =
        `<a href="index.html">Anasayfa</a><span class="s">/</span>` +
        `<a href="${catLink}">${esc(catName)}</a><span class="s">/</span><span>${esc(p.name)}</span>`;
      const titleEl = document.getElementById("pd-title");
      if (titleEl) titleEl.textContent = p.name;

      // ikonlar (hızlı özellikler için)
      const I = {
        bullet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 10h9l5-4v12l-5-4H4z"/><path d="M18 8h2M18 16h2"/></svg>',
        mag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="8" y="3" width="8" height="7"/><path d="M9 10l-1 9a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2l-1-9"/></svg>',
        barrel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 11h16l2-2v6l-2-2H3z"/></svg>',
        rate: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg>',
        target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 1v4M12 19v4M1 12h4M19 12h4"/></svg>',
        weight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 8h10l2 12H5z"/><circle cx="12" cy="6" r="2.5"/></svg>',
        ruler: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="8" width="20" height="8"/><path d="M6 8v3M10 8v4M14 8v3M18 8v4"/></svg>',
        fire: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2c1 4-3 5-3 9a3 3 0 0 0 6 0c0-2-1-3-1-3 3 1 4 4 4 6a6 6 0 0 1-12 0c0-5 6-7 6-12z"/></svg>',
        diamond: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l4 9-4 9-4-9z" opacity=".9"/></svg>',
      };
      const iconFor = (k) => {
        const s = k.toLocaleLowerCase("tr");
        if (s.includes("kalibre")) return I.bullet;
        if (s.includes("kapasite") || s.includes("şarjör")) return I.mag;
        if (s.includes("çıkış")) return I.rate;
        if (s.includes("namlu")) return I.barrel;
        if (s.includes("atış hız") || s.includes("atım")) return I.rate;
        if (s.includes("menzil")) return I.target;
        if (s.includes("ağırlık")) return I.weight;
        if (s.includes("uzunluk")) return I.ruler;
        if (s.includes("ateşleme") || s.includes("sistem")) return I.fire;
        return I.diamond;
      };
      // hızlı özellikler: tercih sırasına göre en fazla 6
      const pref = ["Kalibre", "Kapasite", "Namlu", "Namlu Çıkış Hızı", "Atış Hızı", "Etkili Menzil", "Ağırlık", "Toplam Uzunluk", "Ateşleme Modu"];
      const keys = Object.keys(p.specs);
      const qsKeys = [];
      pref.forEach((k) => { if (p.specs[k] && qsKeys.length < 6) qsKeys.push(k); });
      keys.forEach((k) => { if (!qsKeys.includes(k) && qsKeys.length < 6) qsKeys.push(k); });
      const quick = qsKeys.map((k) =>
        `<div class="qs"><span class="qs-ico">${iconFor(k)}</span><div><div class="qs-v">${esc(p.specs[k])}</div><div class="qs-l">${esc(k)}</div></div></div>`).join("");

      const gal = p.gallery && p.gallery.length ? p.gallery : [p.img];
      const cube = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 12l9-5M12 12v10M12 12L3 7"/></svg>';
      const photoI = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M3 17l5-4 4 3 3-2 6 5"/></svg>';

      // renk seçenekleri (Renk özelliğinden)
      const colorMap = { "siyah": "#1b1b1b", "çöl sarısı": "#c2a26a", "askeri yeşil": "#4b5320", "yeşil": "#4b5320", "turuncu": "#e07b1f", "mavi": "#33518c", "meneviş": "#33518c", "gri": "#9aa0a8", "kırmızı": "#b23b3b" };
      const renkVal = p.specs["Renk"] || p.specs["Renk Seçenekleri"] || "";
      const colors = renkVal.split("/").map((s) => s.trim()).filter(Boolean);
      const swatches = colors.map((c) => {
        const key = c.toLocaleLowerCase("tr"); let hex = "#888";
        for (const k in colorMap) { if (key.includes(k)) { hex = colorMap[k]; break; } }
        return `<span class="sw" title="${esc(c)}" style="background:${hex}"></span>`;
      }).join("");

      const rows = Object.entries(p.specs)
        .map(([k, v]) => `<tr><td class="k">${esc(k)}</td><td class="v">${esc(v)}</td></tr>`).join("");

      const shareUrl = encodeURIComponent(location.href);
      const shareTxt = encodeURIComponent(p.name + " — KUTAL Savunma");
      const wa = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2zm0 2a8 8 0 1 1-4.2 14.8l-.3-.2-2.6.8.8-2.5-.2-.3A8 8 0 0 1 12 4zm4.6 10.3c-.2.5-1.2 1-1.7 1-.4 0-.9.1-2.8-.8-2.4-1-3.9-3.5-4-3.7-.1-.2-1-1.3-1-2.4s.6-1.7.8-1.9c.2-.2.4-.3.6-.3h.5c.2 0 .4 0 .6.5l.7 1.7c.1.2.1.4 0 .5l-.3.5-.3.3c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2 1.3 2.3 1.5.2.1.4.1.5-.1l.7-.8c.2-.2.3-.2.6-.1l1.6.8c.3.1.4.2.5.3.1.2.1.7-.1 1.2z"/></svg>';
      const xx = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 3h3l-7 8 8 10h-6l-5-6-5 6H3l8-9L3 3h6l4 5z"/></svg>';
      const ml = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>';

      const related = P.filter((x) => x.cat === p.cat && x.slug !== p.slug);
      const relatedHtml = related.length ? `
        <div class="pd-related">
          <div class="cat-head"><div><h2>${esc(catName)} · Diğer Ürünler</h2></div>
            <a href="${catLink}" class="pcard-cta" style="color:var(--gold)">Tümü ${arrow}</a></div>
          <div class="catalog">${related.map(card).join("")}</div>
        </div>` : "";

      mount.innerHTML = `
        <div class="pd-top${gal.length > 1 ? "" : " single"}">
          <div class="pd-thumbs${gal.length > 1 ? "" : " empty"}" id="gal-thumbs">
            ${gal.map((s, i) => `<button class="${i === 0 ? "active" : ""}" data-src="${s}"><img src="${s}" alt="" loading="lazy" /></button>`).join("")}
          </div>
          <div class="pd-stagecol reveal">
            ${p.model ? `<div class="gal-toggle" id="gal-toggle">
              <button class="gal-btn active" data-v="foto">${photoI} Fotoğraf</button>
              <button class="gal-btn" data-v="3d">${cube} 3D Model</button>
            </div>` : ""}
            <div class="gal-stage" id="gal-stage">
              <img id="gal-main" src="${gal[0]}" alt="${esc(p.name)}" />
              ${gal.length > 1 ? `<button class="gal-arrow gal-prev" id="gal-prev" aria-label="Önceki görsel">&#8249;</button>
              <button class="gal-arrow gal-next" id="gal-next" aria-label="Sonraki görsel">&#8250;</button>` : ""}
              <span class="gal-hint" id="gal-hint" hidden>◐ Sürükleyerek döndürün · tekerlekle yakınlaştırın</span>
            </div>
          </div>
          <div class="pd-info reveal d1">
            <div class="pd-type">${esc(catName)}</div>
            <h1 class="pd-name">${esc(p.name)}</h1>
            <p class="pd-lead">${esc(p.desc.split(". ")[0])}.</p>
            ${swatches ? `<div class="pd-colors"><span class="pd-colors-l">Renk Seçeneği</span><div class="sw-row">${swatches}</div></div>` : ""}
            <div class="quick-specs">${quick}</div>
            <div class="pd-actbar">
              <a href="iletisim.html" class="btn btn--gold">Teklif Al ${arrow}</a>
              <div class="pd-share">
                <span class="pd-share-l">Paylaş</span>
                <a href="https://wa.me/?text=${shareTxt}%20${shareUrl}" target="_blank" rel="noopener" aria-label="WhatsApp">${wa}</a>
                <a href="https://twitter.com/intent/tweet?text=${shareTxt}&url=${shareUrl}" target="_blank" rel="noopener" aria-label="X">${xx}</a>
                <a href="mailto:?subject=${shareTxt}&body=${shareUrl}" aria-label="E-posta">${ml}</a>
              </div>
            </div>
          </div>
        </div>

        <div class="pd-tabs" id="pd-tabs">
          <button class="active" data-tab="hakkinda">Ürün Hakkında</button>
          <button data-tab="ozellikler">Özellikler</button>
          <button data-tab="galeri">Galeri</button>
          <button data-tab="dokuman">Dokümanlar</button>
        </div>
        <div class="pd-panels">
          <div class="pd-panel active" data-tab="hakkinda">
            <div class="pd-about-lead">${esc(p.name)}, ${esc(p.type.toLocaleLowerCase("tr"))} sınıfında ${esc(p.cal)} kalibreli bir Kutal Savunma ürünüdür.</div>
            <div class="pd-body"><p>${esc(p.desc)}</p></div>
          </div>
          <div class="pd-panel" data-tab="ozellikler">
            <table class="spectbl">${rows}</table>
          </div>
          <div class="pd-panel" data-tab="galeri">
            <div class="pd-gal-grid" id="pd-gal-grid">
              ${gal.map((s, i) => `<button data-i="${i}"><img src="${s}" alt="${esc(p.name)} ${i + 1}" loading="lazy" /></button>`).join("")}
            </div>
          </div>
          <div class="pd-panel" data-tab="dokuman">
            <div class="pd-docs">
              <span class="pd-doc-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></svg></span>
              <div><h4>${esc(p.name)} Teknik Föy (PDF)</h4><p>Ürünün teknik özelliklerini içeren belgeyi indirin.</p></div>
              <a href="docs/${encodeURIComponent(p.slug)}.pdf" download class="btn btn--gold" style="margin-left:auto">İndir ${arrow}</a>
            </div>
          </div>
        </div>
        ${relatedHtml}`;

      // sekme geçişleri
      const tabs = mount.querySelector("#pd-tabs");
      tabs.addEventListener("click", (e) => {
        const b = e.target.closest("button"); if (!b) return;
        const t = b.dataset.tab;
        tabs.querySelectorAll("button").forEach((x) => x.classList.toggle("active", x === b));
        mount.querySelectorAll(".pd-panel").forEach((x) => x.classList.toggle("active", x.dataset.tab === t));
      });

      // galeri + 3D geçişi
      const stage = mount.querySelector("#gal-stage");
      if (stage) {
        const mainImg = mount.querySelector("#gal-main");
        const hint = mount.querySelector("#gal-hint");
        const thumbs = mount.querySelector("#gal-thumbs");
        const toggle = mount.querySelector("#gal-toggle");
        const arrows = [mount.querySelector("#gal-prev"), mount.querySelector("#gal-next")].filter(Boolean);
        let canvas = null, overlay = null, loaded = false;

        const showFoto = () => {
          if (canvas) canvas.style.display = "none";
          if (overlay) overlay.style.display = "none";
          mainImg.style.display = "";
          arrows.forEach((a) => (a.style.display = ""));
          if (hint) hint.hidden = true;
          if (toggle) toggle.querySelectorAll("button").forEach((b) => b.classList.toggle("active", b.dataset.v === "foto"));
        };
        const show3D = () => {
          mainImg.style.display = "none";
          arrows.forEach((a) => (a.style.display = "none"));
          if (hint) hint.hidden = false;
          if (toggle) toggle.querySelectorAll("button").forEach((b) => b.classList.toggle("active", b.dataset.v === "3d"));
          if (loaded) { if (canvas) canvas.style.display = ""; return; }
          loaded = true;
          canvas = document.createElement("canvas");
          canvas.id = "product-canvas";
          stage.appendChild(canvas);
          overlay = document.createElement("div");
          overlay.className = "gal-load";
          overlay.innerHTML = '<div class="ring"></div><div class="pct">%0</div><div class="lbl">3D Model Yükleniyor</div>';
          stage.appendChild(overlay);
          const pctEl = overlay.querySelector(".pct");
          const start = () => {
            if (!window.KUTAL_mountModel) { setTimeout(start, 80); return; }
            window.KUTAL_mountModel(canvas, p.model, (v) => {
              if (v < 0) { overlay.querySelector(".lbl").textContent = "Model yüklenemedi"; overlay.querySelector(".ring").style.display = "none"; return; }
              pctEl.textContent = "%" + Math.round(v * 100);
              if (v >= 1) overlay.style.display = "none";
            });
          };
          start();
        };
        if (toggle) toggle.addEventListener("click", (e) => {
          const b = e.target.closest("button"); if (!b) return;
          if (b.dataset.v === "3d") show3D(); else showFoto();
        });
        let curIdx = 0;
        const setMain = (i) => {
          curIdx = (i + gal.length) % gal.length;
          mainImg.src = gal[curIdx];
          if (thumbs) thumbs.querySelectorAll("button").forEach((x, j) => x.classList.toggle("active", j === curIdx));
          showFoto();
        };
        if (thumbs) thumbs.addEventListener("click", (e) => {
          const b = e.target.closest("button"); if (!b) return;
          setMain([...thumbs.children].indexOf(b));
        });
        const prevBtn = mount.querySelector("#gal-prev");
        const nextBtn = mount.querySelector("#gal-next");
        if (prevBtn) prevBtn.addEventListener("click", () => setMain(curIdx - 1));
        if (nextBtn) nextBtn.addEventListener("click", () => setMain(curIdx + 1));

        /* ---- Lightbox (büyük görsel) ---- */
        let lb = document.getElementById("kutal-lightbox");
        if (!lb) {
          lb = document.createElement("div");
          lb.id = "kutal-lightbox";
          lb.className = "lightbox";
          lb.innerHTML =
            '<button class="lb-close" aria-label="Kapat">&#10005;</button>' +
            '<button class="lb-nav lb-prev" aria-label="Önceki">&#8249;</button>' +
            '<img class="lb-img" alt="" />' +
            '<button class="lb-nav lb-next" aria-label="Sonraki">&#8250;</button>' +
            '<div class="lb-count"></div>';
          document.body.appendChild(lb);
        }
        const lbImg = lb.querySelector(".lb-img");
        const lbCount = lb.querySelector(".lb-count");
        if (gal.length <= 1) {
          lb.querySelector(".lb-prev").style.display = "none";
          lb.querySelector(".lb-next").style.display = "none";
          lbCount.style.display = "none";
        }
        const lbShow = () => { lbImg.src = gal[curIdx]; lbCount.textContent = (curIdx + 1) + " / " + gal.length; };
        const openLB = () => { lbShow(); lb.classList.add("open"); document.body.style.overflow = "hidden"; };
        const closeLB = () => { lb.classList.remove("open"); document.body.style.overflow = ""; };
        const lbStep = (d) => { curIdx = (curIdx + d + gal.length) % gal.length; if (thumbs) thumbs.querySelectorAll("button").forEach((x, j) => x.classList.toggle("active", j === curIdx)); mainImg.src = gal[curIdx]; lbShow(); };

        mainImg.style.cursor = "zoom-in";
        mainImg.addEventListener("click", () => { if (mainImg.style.display !== "none") openLB(); });
        lb.querySelector(".lb-close").addEventListener("click", closeLB);
        lb.querySelector(".lb-prev").addEventListener("click", (e) => { e.stopPropagation(); lbStep(-1); });
        lb.querySelector(".lb-next").addEventListener("click", (e) => { e.stopPropagation(); lbStep(1); });
        lb.addEventListener("click", (e) => { if (e.target === lb) closeLB(); });
        document.addEventListener("keydown", (e) => {
          if (!lb.classList.contains("open")) return;
          if (e.key === "Escape") closeLB();
          else if (e.key === "ArrowRight") lbStep(1);
          else if (e.key === "ArrowLeft") lbStep(-1);
        });

        // Galeri sekmesi grid -> lightbox
        const galGrid = mount.querySelector("#pd-gal-grid");
        if (galGrid) galGrid.addEventListener("click", (e) => {
          const b = e.target.closest("button"); if (!b) return;
          curIdx = +b.dataset.i; openLB();
        });
      }
    }
  }

  /* reveal animasyonlarını yeni eklenen kartlar için tetikle */
  if (window.KUTAL_initReveal) window.KUTAL_initReveal();
})();
