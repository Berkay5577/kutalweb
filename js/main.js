/* KUTAL ARMS — main.js : nav, reveal, counters, parallax bg */
(function () {
  "use strict";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- HEADER ---------- */
  const header = document.querySelector(".site-header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const burger = document.querySelector(".burger");
  const links = document.querySelector(".nav-links");
  const setMenu = (open) => {
    links.classList.toggle("open", open);
    burger.classList.toggle("on", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.classList.toggle("nav-open", open);
  };
  burger.addEventListener("click", () => setMenu(!links.classList.contains("open")));
  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

  /* ---------- SCROLLSPY (aktif menü linki) ---------- */
  const navAnchors = Array.from(links.querySelectorAll("a"));
  const ssMap = new Map();
  navAnchors.forEach((a) => {
    const id = a.getAttribute("href").slice(1);
    const sec = document.getElementById(id);
    if (sec) ssMap.set(sec, a);
  });
  if (ssMap.size) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            navAnchors.forEach((a) => a.classList.remove("active"));
            const a = ssMap.get(e.target);
            if (a) a.classList.add("active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ssMap.forEach((_, sec) => spy.observe(sec));
  }

  /* ---------- REVEAL ON SCROLL ---------- */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
  );
  document.querySelectorAll(".reveal,.reveal-l,.reveal-r,.reveal-zoom").forEach((el) => io.observe(el));

  /* ---------- COUNTERS ---------- */
  const fmt = (n) => n.toLocaleString("tr-TR");
  const runCounter = (el) => {
    const target = parseFloat(el.dataset.count);
    const dur = 1600;
    const t0 = performance.now();
    const step = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = fmt(target);
    };
    requestAnimationFrame(step);
  };
  const cio = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          runCounter(e.target);
          cio.unobserve(e.target);
        }
      });
    },
    { threshold: 0.6 }
  );
  document.querySelectorAll("[data-count]").forEach((el) => cio.observe(el));

  /* ---------- MARQUEE (duplicate for seamless loop) ---------- */
  document.querySelectorAll(".strip .track").forEach((track) => {
    track.innerHTML += track.innerHTML;
  });

  /* ---------- HERO PARALLAX SLIDER ----------
     Yeni slayt eklemek için SLIDES dizisine obje ekleyin:
       { bg:"images/prlx_soldier_background_5.webp",  // sabit arka plan (WebP)
         fg:"images/prlx_soldier_5.webp",             // parallax yapan kesilmiş ön plan (şeffaf/alfa WebP)
         eyebrow, title (HTML olabilir), lead,
         actions:[{label,href,gold}] }
     fg olmadan da çalışır (yalnız arka plan).                                */
  const SLIDES = [
    {
      bg: "images/hero_p556_bg.webp",
      fg: "images/hero_p556_fg.webp",
      anchor: "right",
      eyebrow: "Piyade Tüfeği · KTL P556",
      title: 'SAHADA<br><span class="stroke">KANITLANMIŞ</span> GÜÇ',
      lead: "KTL P556; kısa stroklu gaz pistonlu, modüler ve ergonomik piyade tüfeğiyle yakın ve uzun menzilli görevlerde üstün performans sunar.",
      actions: [
        { label: "KTL P556'yı İncele", href: "urun.html?p=p556", gold: true },
        { label: "Ürünleri Keşfet", href: "urunler.html", gold: false },
      ],
    },
    {
      bg: "images/hero_fsb762pl_bg.webp",
      fg: "images/hero_fsb762pl_fg.webp",
      anchor: "left",
      eyebrow: "Makinalı Tabanca · FSB 762 PL",
      title: 'KOMPAKT<br><span class="stroke">YÜKSEK</span> ATEŞ GÜCÜ',
      lead: "FSB 762 PL; 7.62×25 mm kalibreli, kompakt gövdesi ve yüksek atış kontrolüyle yakın muharebe için ideal makinalı tabanca.",
      actions: [
        { label: "FSB 762 PL'yi İncele", href: "urun.html?p=fsb762-pl", gold: true },
        { label: "Tüm Ürünler", href: "urunler.html", gold: false },
      ],
    },
    {
      bg: "images/hero_b40_bg.webp",
      fg: "images/hero_b40_fg.webp",
      eyebrow: "Bombaatar · KTL B40",
      title: 'YÜKSEK VE<br><span class="stroke">ETKİLİ</span> ATIŞ GÜCÜ',
      lead: "KTL B40; döner tamburlu pompalama sistemi ve 40 mm çapıyla sahada sürekli ve güvenilir atış gücü sunar.",
      actions: [
        { label: "KTL B40'ı İncele", href: "urun.html?p=b40", gold: true },
        { label: "Bombaatarlar", href: "urunler.html#bombaatar", gold: false },
      ],
    },
    {
      bg: "images/hero_s9_bg.webp",
      fg: "images/hero_s9_fg.webp",
      eyebrow: "Makinalı Tabanca · KTL S9",
      title: 'YAKIN MUHAREBEDE<br><span class="stroke">TAM</span> KONTROL',
      lead: "KTL S9; gecikmeli geri tepme sistemi, yüksek atış hızı ve seçici ateşleme moduyla yakın muharebe için üstün kontrol sağlar.",
      actions: [
        { label: "KTL S9'u İncele", href: "urun.html?p=s9", gold: true },
        { label: "Tüm Ürünler", href: "urunler.html", gold: false },
      ],
    },
    {
      bg: "images/hero_p9_bg.webp",
      fg: "images/hero_p9_fg.webp",
      eyebrow: "Tabanca · P9",
      title: 'GÜVENİLİR<br><span class="stroke">HİZMET</span> TABANCASI',
      lead: "P9; 9×19 mm NATO kalibreli, 17+1 kapasiteli polimer çerçeveli hizmet tabancası. Picatinny ray ve çoklu renk seçenekleriyle profesyonel kullanıma yönelik.",
      actions: [
        { label: "P9'u İncele", href: "urun.html?p=p9", gold: true },
        { label: "Ürünleri Keşfet", href: "urunler.html", gold: false },
      ],
    },
  ];

  const slider = document.getElementById("hero-slider");
  if (slider && SLIDES.length) {
    const dotsWrap = document.getElementById("hero-dots");
    const prevBtn = document.getElementById("hero-prev");
    const nextBtn = document.getElementById("hero-next");
    const arrowSvg =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

    slider.innerHTML = SLIDES.map((s, i) => `
      <div class="slide${i === 0 ? " is-active" : ""}" data-i="${i}"${s.anchor ? ` data-anchor="${s.anchor}"` : ""}>
        <div class="slide-stage">
          <div class="slide-bg" style="background-image:url('${s.bg}')"></div>
          <div class="slide-scrim"></div>
          ${s.fg ? `<div class="slide-fg-wrap"><img class="slide-fg" src="${s.fg}" alt="" draggable="false"${s.fgPos ? ` style="object-position:${s.fgPos}"` : ""} /></div>` : ""}
        </div>
        <div class="slide-vig"></div>
        <div class="hero-content"><div class="container">
          ${s.eyebrow ? `<span class="eyebrow">${s.eyebrow}</span>` : ""}
          <h1>${s.title || ""}</h1>
          ${s.lead ? `<p class="lead">${s.lead}</p>` : ""}
          <div class="hero-actions">
            ${(s.actions || []).map((a) =>
              `<a href="${a.href}" class="btn${a.gold ? " btn--gold" : ""}">${a.label}${a.gold ? arrowSvg : ""}</a>`
            ).join("")}
          </div>
        </div></div>
      </div>`).join("");

    const slides = Array.from(slider.querySelectorAll(".slide"));
    const multi = slides.length > 1;
    let idx = 0, timer = null;

    if (multi) {
      dotsWrap.innerHTML = slides
        .map((_, i) => `<button data-i="${i}" class="${i === 0 ? "active" : ""}" aria-label="Slayt ${i + 1}"></button>`)
        .join("");
    } else {
      if (prevBtn) prevBtn.hidden = true;
      if (nextBtn) nextBtn.hidden = true;
      if (dotsWrap) dotsWrap.hidden = true;
    }

    const go = (n) => {
      idx = (n + slides.length) % slides.length;
      slides.forEach((s, i) => s.classList.toggle("is-active", i === idx));
      if (multi) dotsWrap.querySelectorAll("button").forEach((b, i) => b.classList.toggle("active", i === idx));
    };

    if (multi) {
      const start = () => (timer = setInterval(() => go(idx + 1), 6500));
      const restart = () => { clearInterval(timer); start(); };
      nextBtn.addEventListener("click", () => { go(idx + 1); restart(); });
      prevBtn.addEventListener("click", () => { go(idx - 1); restart(); });
      dotsWrap.addEventListener("click", (e) => {
        const b = e.target.closest("button");
        if (b) { go(+b.dataset.i); restart(); }
      });
      start();
    }

    /* parallax — foreground (soldiers) hareket eder, arka plan sabit kalır */
    const hero = document.querySelector(".hero");
    let tx = 0, ty = 0, cx = 0, cy = 0;
    if (!reduce) {
      window.addEventListener("mousemove", (e) => {
        tx = e.clientX / window.innerWidth - 0.5;
        ty = e.clientY / window.innerHeight - 0.5;
      });
    }
    const ploop = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      const sy = window.scrollY || document.documentElement.scrollTop || 0;
      const sc = Math.min(Math.max(sy / (hero.offsetHeight || 1), 0), 1);
      const active = slides[idx];
      if (active) {
        const bg = active.querySelector(".slide-bg");
        const fg = active.querySelector(".slide-fg-wrap");
        // kenara sabit slaytlar (P556/FSB): yatay parallax yok; asker sabit bir miktar
        // kenara doğru kaydırılır (P556 sağa, FSB sola) -> data-shift oranı ile ayarlanır
        const anchor = active.dataset.anchor;
        const shiftR = parseFloat(active.dataset.shift || "0.06");
        const shift = window.innerWidth * shiftR;
        const bgX = anchor ? 0 : cx * -7;
        const fgX = anchor ? (anchor === "right" ? shift : -shift) : cx * 18;
        // arka plan: dinlenmede scale 1.0 (doğal/keskin), fare/scroll'da çok hafif derinlik
        if (bg) bg.style.transform =
          `scale(${(1 + sc * 0.04).toFixed(3)}) translate3d(${bgX.toFixed(1)}px, ${(sc * 8).toFixed(1)}px, 0)`;
        // ön plan (asker): fare + scroll ile hareket eder; ölçek 1.0 (kalite korunur)
        if (fg) fg.style.transform =
          `translate3d(${fgX.toFixed(1)}px, ${(cy * 12 + sc * 30).toFixed(1)}px, 0)`;
      }
      requestAnimationFrame(ploop);
    };
    ploop();
  }

  /* ---------- CINEMATIC REEL (scroll-scrub video) ---------- */
  (function () {
    const canvas = document.getElementById("reel-canvas");
    if (!canvas) return;
    const sticky = canvas.parentElement;
    const section = document.getElementById("reel");
    const hint = document.getElementById("reel-hint");
    const tint = document.getElementById("reel-tint");
    const feats = Array.from(document.querySelectorAll("#reel-feats .reel-feat"));
    const ctx = canvas.getContext("2d");
    const N = 121, frames = new Array(N);

    /* scroll boyunca beliren ürün kartları */
    const FEATURED = ["fsb762", "s9", "s9-plus", "p9", "b40"];
    const cardsWrap = document.getElementById("reel-cards");
    let caps = [];
    if (cardsWrap && window.KUTAL_PRODUCTS) {
      const P = window.KUTAL_PRODUCTS;
      const items = FEATURED.map((s) => P.find((p) => p.slug === s)).filter(Boolean);
      const seg = 1 / items.length;
      cardsWrap.innerHTML = items.map((p, i) => {
        const inP = +(i * seg).toFixed(3);
        const outP = +((i + 1) * seg + (i === items.length - 1 ? 0.02 : 0)).toFixed(3);
        return `<a class="reel-card" href="urun.html?p=${p.slug}" data-in="${inP}" data-out="${outP}">
          <div class="reel-card-inner">
          <div class="reel-card-img"><img src="${p.img}" alt="${p.name}" loading="lazy" /></div>
          <div class="reel-card-body">
            <span class="rc-idx">0${i + 1} / 0${items.length}</span>
            <span class="rc-cal">${p.cal}</span>
            <h3>${p.name}</h3>
            <span class="rc-type">${p.type}</span>
            <span class="rc-cta">İncele <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
          </div>
          </div>
        </a>`;
      }).join("");
      caps = Array.from(cardsWrap.querySelectorAll(".reel-card"));

      /* fareyle 3D eğilme (aktif kart) */
      if (!reduce) {
        const sec = document.getElementById("reel");
        sec.addEventListener("mousemove", (e) => {
          const card = cardsWrap.querySelector(".reel-card.on");
          if (!card) return;
          const inner = card.querySelector(".reel-card-inner");
          const b = card.getBoundingClientRect();
          const px = (e.clientX - b.left) / b.width - 0.5;
          const py = (e.clientY - b.top) / b.height - 0.5;
          inner.style.transform = `rotateY(${5 + px * 12}deg) rotateX(${-py * 12}deg)`;
        });
        sec.addEventListener("mouseleave", () => {
          cardsWrap.querySelectorAll(".reel-card-inner").forEach((el) => (el.style.transform = ""));
        });
      }
    }
    const pad = (n) => String(n).padStart(3, "0");
    for (let i = 0; i < N; i++) { const im = new Image(); im.src = "images/seq/f" + pad(i + 1) + ".webp?t5"; frames[i] = im; }
    let cw = 0, ch = 0, dpr = 1, cur = -1, targetIdx = 0;

    const drawFrame = (im) => {
      if (!im || !im.complete || !im.naturalWidth) return false;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.clearRect(0, 0, cw, ch);
      // "cover": kanvasi tamamen doldur (yanlarda/altta bosluk kalmasin), tasani kirp
      const s = Math.max(cw / im.naturalWidth, ch / im.naturalHeight) * 1.02;
      const w = im.naturalWidth * s, h = im.naturalHeight * s;
      ctx.drawImage(im, (cw - w) / 2, (ch - h) / 2, w, h);
      return true;
    };
    const nearest = (idx) => {
      if (frames[idx] && frames[idx].complete && frames[idx].naturalWidth) return idx;
      for (let d = 1; d < N; d++) {
        const a = idx - d, b = idx + d;
        if (a >= 0 && frames[a].complete && frames[a].naturalWidth) return a;
        if (b < N && frames[b].complete && frames[b].naturalWidth) return b;
      }
      return -1;
    };
    const render = () => { const idx = nearest(targetIdx); if (idx < 0 || idx === cur) return; if (drawFrame(frames[idx])) cur = idx; };
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      cw = sticky.clientWidth; ch = sticky.clientHeight;
      canvas.width = Math.round(cw * dpr); canvas.height = Math.round(ch * dpr);
      canvas.style.width = cw + "px"; canvas.style.height = ch + "px";
      cur = -1; render();
    };
    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const p = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 0;
      targetIdx = Math.round(p * (N - 1));
      render();
      // scroll ilerledikce blur azalir (siyah tint kalir)
      if (tint) tint.style.setProperty("--reel-blur", (16 * Math.max(0, 1 - p * 1.6)).toFixed(1) + "px");
      caps.forEach((c) => c.classList.toggle("on", p >= +c.dataset.in && p < +c.dataset.out));
      feats.forEach((f) => f.classList.toggle("on", p >= +f.dataset.in && p < +f.dataset.out));
      if (hint) hint.classList.toggle("hide", p > 0.04);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize);
    frames.forEach((im) => im.addEventListener("load", () => { if (cur < 0) render(); }, { once: true }));
    resize(); onScroll();
  })();

  /* ---------- EXPLODED REEL (4 sekans, scroll-scrub) ---------- */
  (function () {
    const canvas = document.getElementById("reel2-canvas");
    if (!canvas) return;
    const sticky = canvas.parentElement;
    const section = document.getElementById("reel2");
    const caps = Array.from(section.querySelectorAll(".reel2-cap"));
    const dotsWrap = document.getElementById("reel2-dots");
    const ctx = canvas.getContext("2d");
    const SEQ = [{ d: "1", n: 61 }, { d: "2", n: 61 }, { d: "3", n: 61 }, { d: "4", n: 61 }];
    const pad = (n) => String(n).padStart(3, "0");
    SEQ.forEach((s) => {
      s.frames = new Array(s.n);
      for (let i = 0; i < s.n; i++) { const im = new Image(); im.src = "images/reel2/" + s.d + "/f" + pad(i + 1) + ".webp?t2"; s.frames[i] = im; }
    });
    if (dotsWrap) dotsWrap.innerHTML = SEQ.map((_, i) => `<span class="rd${i === 0 ? " on" : ""}"></span>`).join("");
    const dots = dotsWrap ? Array.from(dotsWrap.children) : [];
    let cw = 0, ch = 0, dpr = 1, curSeg = -1, curIdx = -1;

    const nearest = (arr, idx) => {
      if (arr[idx] && arr[idx].complete && arr[idx].naturalWidth) return arr[idx];
      for (let d = 1; d < arr.length; d++) {
        const a = idx - d, b = idx + d;
        if (a >= 0 && arr[a].complete && arr[a].naturalWidth) return arr[a];
        if (b < arr.length && arr[b].complete && arr[b].naturalWidth) return arr[b];
      }
      return null;
    };
    const drawFrame = (im) => {
      if (!im) return false;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = "high";
      const iw = im.naturalWidth, ih = im.naturalHeight;
      const s = Math.min(cw / iw, ch / ih) * 0.9;
      const w = iw * s, h = ih * s;
      const dx = (cw - w) / 2, dy = (ch - h) / 2;
      const rx = cw - (dx + w), by = ch - (dy + h);
      // kenar piksellerini dışa uzatarak boşlukları doldur (4 kenarda da çizgi olmasın)
      ctx.drawImage(im, 0, 0, 1, 1, 0, 0, dx, dy);                 // sol-üst köşe
      ctx.drawImage(im, iw - 1, 0, 1, 1, dx + w, 0, rx, dy);       // sağ-üst köşe
      ctx.drawImage(im, 0, ih - 1, 1, 1, 0, dy + h, dx, by);       // sol-alt köşe
      ctx.drawImage(im, iw - 1, ih - 1, 1, 1, dx + w, dy + h, rx, by); // sağ-alt köşe
      ctx.drawImage(im, 0, 0, iw, 1, dx, 0, w, dy);                // üst kenar
      ctx.drawImage(im, 0, ih - 1, iw, 1, dx, dy + h, w, by);      // alt kenar
      ctx.drawImage(im, 0, 0, 1, ih, 0, dy, dx, h);               // sol kenar
      ctx.drawImage(im, iw - 1, 0, 1, ih, dx + w, dy, rx, h);      // sağ kenar
      ctx.drawImage(im, dx, dy, w, h);                             // ana görsel
      return true;
    };
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      cw = sticky.clientWidth; ch = sticky.clientHeight;
      canvas.width = Math.round(cw * dpr); canvas.height = Math.round(ch * dpr);
      canvas.style.width = cw + "px"; canvas.style.height = ch + "px";
      curSeg = curIdx = -1; onScroll();
    };
    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const p = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 0;
      const seg = Math.min(Math.floor(p * SEQ.length), SEQ.length - 1);
      const localP = Math.min(Math.max(p * SEQ.length - seg, 0), 1);
      const idx = Math.round(localP * (SEQ[seg].n - 1));
      if (seg !== curSeg || idx !== curIdx) {
        const im = nearest(SEQ[seg].frames, idx);
        if (im && drawFrame(im)) { curSeg = seg; curIdx = idx; }
      }
      caps.forEach((c) => c.classList.toggle("on", +c.dataset.seg === seg));
      dots.forEach((d, i) => d.classList.toggle("on", i === seg));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize);
    SEQ.forEach((s) => s.frames.forEach((im) => im.addEventListener("load", () => { if (curSeg < 0) onScroll(); }, { once: true })));
    resize(); onScroll();
  })();

  /* ---------- FOOTER YEAR ---------- */
  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- FORMLAR: mailto ile gönderim ---------- */
  const buildMailto = (f) => {
    const to = f.dataset.mailto;
    const lines = [];
    f.querySelectorAll("input[name], textarea[name], select[name]").forEach((el) => {
      if (el.type === "checkbox" || el.type === "radio") return;
      const v = (el.value || "").trim();
      if (v) lines.push(el.name + ": " + v);
    });
    const konu = (f.querySelector('[name="Konu"]') || {}).value;
    const subject = f.dataset.subject || (konu ? "İletişim: " + konu : "Kutal Savunma — İletişim Formu");
    return "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(lines.join("\n"));
  };
  document.querySelectorAll("form[data-mailto]").forEach((f) =>
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      if (typeof f.reportValidity === "function" && !f.reportValidity()) return;
      window.location.href = buildMailto(f);
      const note = f.querySelector(".form-note");
      if (note) { note.hidden = false; note.textContent = "E-posta uygulamanız açılıyor… Açılmazsa doğrudan " + f.dataset.mailto + " adresine yazabilirsiniz."; }
      const btn = f.querySelector("button");
      if (btn && !note) { const t = btn.textContent; btn.textContent = "AÇILIYOR…"; setTimeout(() => (btn.textContent = t), 2500); }
    })
  );
  document.querySelectorAll("form[data-noop]").forEach((f) =>
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = f.querySelector("button");
      if (btn) { const t = btn.textContent; btn.textContent = "TEŞEKKÜRLER"; setTimeout(() => (btn.textContent = t), 2200); }
      f.reset();
    })
  );

  /* ---------- SİTE İÇİ ARAMA ---------- */
  (function () {
    const btn = document.getElementById("nav-search");
    const overlay = document.getElementById("search-overlay");
    if (!btn || !overlay) return;
    const input = document.getElementById("search-input");
    const results = document.getElementById("search-results");
    const closeBtn = document.getElementById("search-close");
    const lower = (s) => String(s).toLocaleLowerCase("tr").replace(/×/g, "x").replace(/\s+/g, " ");
    const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

    const idx = [];
    (window.KUTAL_PRODUCTS || []).forEach((p) =>
      idx.push({ t: p.name, sub: (p.cal || "") + " · " + (p.type || ""), u: "urun.html?p=" + encodeURIComponent(p.slug), k: p.supply ? "Tedarik" : "Ürün", blob: lower([p.name, p.cal, p.type, p.cat].join(" ")) }));
    (window.KUTAL_NEWS || []).forEach((n) =>
      idx.push({ t: n.title, sub: n.tag, u: "haber.html?n=" + encodeURIComponent(n.slug), k: "Haber", blob: lower(n.title + " " + n.tag + " " + (n.excerpt || "")) }));
    [["Hakkımızda", "hakkinda.html"], ["Kalite & Sertifikalar", "kalite.html"], ["Kariyer", "kariyer.html"], ["Ürünlerimiz", "urunler.html"], ["Tedariklerimiz", "tedarik.html"], ["Haberler", "haberler.html"], ["İletişim", "iletisim.html"]].forEach((x) =>
      idx.push({ t: x[0], sub: "Sayfa", u: x[1], k: "Sayfa", blob: lower(x[0]) }));

    let cur = [];
    const draw = (q) => {
      const query = lower(q).trim();
      cur = query ? idx.filter((x) => x.blob.includes(query)).slice(0, 12) : [];
      if (!query) { results.innerHTML = '<div class="search-empty">Aramaya başlamak için yazın… Ürün adı, kalibre, haber veya sayfa.</div>'; return; }
      results.innerHTML = cur.length
        ? cur.map((x, i) => `<a class="search-hit${i === 0 ? " on" : ""}" href="${x.u}"><span class="sh-k">${esc(x.k)}</span><span class="sh-t">${esc(x.t)}</span><span class="sh-s">${esc(x.sub)}</span></a>`).join("")
        : `<div class="search-empty">"${esc(q)}" için sonuç bulunamadı.</div>`;
    };
    const open = () => { overlay.hidden = false; document.body.classList.add("nav-open"); setTimeout(() => { overlay.classList.add("in"); input.focus(); }, 10); draw(""); };
    const close = () => { overlay.classList.remove("in"); document.body.classList.remove("nav-open"); setTimeout(() => { overlay.hidden = true; }, 300); input.value = ""; };
    btn.addEventListener("click", open);
    closeBtn.addEventListener("click", close);
    overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
    input.addEventListener("input", () => draw(input.value));
    input.addEventListener("keydown", (e) => { if (e.key === "Enter" && cur[0]) location.href = cur[0].u; });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !overlay.hidden) close(); });
  })();

  /* ---------- ÇEREZ (KVKK) BANNER ---------- */
  (function () {
    var KEY = "kutal_cookie_ok";
    try { if (localStorage.getItem(KEY)) return; } catch (e) {}
    var bar = document.createElement("div");
    bar.className = "cookie-bar";
    bar.innerHTML = '<p>Bu sitede deneyiminizi iyileştirmek için gerekli çerezler kullanılır. Detaylar için <a href="kvk.html">KVKK &amp; Gizlilik</a> metnini inceleyebilirsiniz.</p>' +
      '<div class="cookie-act"><button class="btn btn--gold" data-c="ok">Kabul Et</button><button class="btn" data-c="no">Reddet</button></div>';
    document.body.appendChild(bar);
    requestAnimationFrame(function () { bar.classList.add("in"); });
    bar.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      try { localStorage.setItem(KEY, b.dataset.c); } catch (e2) {}
      bar.classList.remove("in");
      setTimeout(function () { bar.remove(); }, 400);
    });
  })();
})();
