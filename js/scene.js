/* KUTAL ARMS — scene.js : Three.js 3D parallax hero + interactive showcase */
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

const REDUCE = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const loader = new GLTFLoader();
const cache = new Map();

/* shared environment map -> realistic reflections on metal */
let _envTex = null;
function envMap(renderer) {
  if (_envTex) return _envTex;
  const pmrem = new THREE.PMREMGenerator(renderer);
  _envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  return _envTex;
}

/* gunmetal material with a faint warm sheen */
function gunmetal() {
  return new THREE.MeshStandardMaterial({
    color: 0x2b2e34,
    metalness: 0.92,
    roughness: 0.42,
  });
}

/* orient so longest dim -> X, tallest -> Y, thinnest -> Z; center at origin */
function normalizeModel(obj) {
  obj.updateMatrixWorld(true);
  let box = new THREE.Box3().setFromObject(obj);
  let size = box.getSize(new THREE.Vector3());
  if (size.z > size.x) { obj.rotation.y += Math.PI / 2; obj.updateMatrixWorld(true); }
  box = new THREE.Box3().setFromObject(obj);
  size = box.getSize(new THREE.Vector3());
  if (size.y > size.x) { obj.rotation.z += Math.PI / 2; obj.updateMatrixWorld(true); }
  // recenter
  box = new THREE.Box3().setFromObject(obj);
  const c = box.getCenter(new THREE.Vector3());
  obj.position.sub(c);
  return obj;
}

function loadModel(url) {
  if (cache.has(url)) return Promise.resolve(cache.get(url).clone(true));
  return new Promise((res, rej) => {
    loader.load(
      url,
      (gltf) => {
        const root = gltf.scene;
        const mat = gunmetal();
        root.traverse((n) => {
          if (n.isMesh) {
            n.material = mat;
            n.castShadow = n.receiveShadow = false;
            if (n.geometry && !n.geometry.attributes.normal) n.geometry.computeVertexNormals();
          }
        });
        normalizeModel(root);
        cache.set(url, root);
        res(root.clone(true));
      },
      undefined,
      rej
    );
  });
}

function makeRenderer(canvas, alpha = true) {
  const r = new THREE.WebGLRenderer({ canvas, antialias: true, alpha, powerPreference: "high-performance" });
  r.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  r.outputColorSpace = THREE.SRGBColorSpace;
  r.toneMapping = THREE.ACESFilmicToneMapping;
  r.toneMappingExposure = 1.15;
  return r;
}

/* studio-ish lighting with gold key + cool rim */
function lightRig(scene) {
  scene.add(new THREE.HemisphereLight(0x9fb4d0, 0x090a0c, 0.55));
  const key = new THREE.DirectionalLight(0xffe9c2, 2.4);
  key.position.set(4, 6, 6);
  scene.add(key);
  const gold = new THREE.PointLight(0xffcf6e, 60, 40, 2);
  gold.position.set(-3, 1.5, 4);
  scene.add(gold);
  const rim = new THREE.DirectionalLight(0x86b8ff, 1.6);
  rim.position.set(-5, 3, -6);
  scene.add(rim);
  const under = new THREE.DirectionalLight(0xffffff, 0.35);
  under.position.set(0, -5, 2);
  scene.add(under);
}

/* ============================================================ HERO */
function initHero() {
  const canvas = document.getElementById("hero-canvas");
  const loading = document.getElementById("hero-loading");
  if (!canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 0, 3.4);
  const renderer = makeRenderer(canvas, true);
  scene.environment = envMap(renderer);
  lightRig(scene);

  const group = new THREE.Group();
  scene.add(group);

  const resize = () => {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };

  const mouse = { x: 0, y: 0 };
  if (!REDUCE) {
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX / window.innerWidth - 0.5;
      mouse.y = e.clientY / window.innerHeight - 0.5;
    });
  }

  loadModel("models/ak47.glb")
    .then((model) => {
      // scale so length fills ~2.6 units
      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3());
      const s = 2.7 / size.x;
      model.scale.setScalar(s);
      model.position.y = 0.05;
      group.add(model);
      group.rotation.set(0.12, -0.6, 0.04);
      if (loading) loading.classList.add("hide");
      canvas.style.opacity = 1;
    })
    .catch((err) => {
      console.warn("Hero model failed:", err);
      if (loading) loading.classList.add("hide");
    });

  let ry = -0.6;
  const clock = new THREE.Clock();
  const animate = () => {
    const dt = clock.getDelta();
    if (!REDUCE) ry += dt * 0.12;
    group.rotation.y += ((ry + mouse.x * 0.5) - group.rotation.y) * 0.06;
    group.rotation.x += ((0.12 + mouse.y * 0.25) - group.rotation.x) * 0.06;
    group.position.x += ((mouse.x * 0.35) - group.position.x) * 0.05;
    group.position.y += ((-mouse.y * 0.2) - group.position.y) * 0.05;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();
  animate();
}

/* ============================================================ SHOWCASE */
const SHOWCASE = [
  { id: "s9", url: "models/s9.glb", name: "KTL S9", type: "Makinalı Tabanca", link: "urun.html?p=s9",
    desc: "9×19 mm kalibreli, gecikmeli geri tepme sistemli makinalı tabanca. Yarı/tam otomatik ateşleme, üstün yakın muharebe kontrolü.",
    specs: { "Kalibre": "9×19 mm", "Atış Hızı": "1000 atış/dk", "Kapasite": "32", "Etkili Menzil": "150 m" } },
  { id: "s9-plus", url: "models/s9.glb", name: "KTL S9+", type: "Hafif Makinalı Tüfek", link: "urun.html?p=s9-plus",
    desc: "Teleskopik 7 pozisyon dipçikli hafif makinalı tüfek. 6″–10″ namlu seçenekleri ve 30 fişek kapasite.",
    specs: { "Kalibre": "9×19 mm", "Atış Hızı": "900 atış/dk", "Kapasite": "30", "Dipçik": "7 pozisyon" } },
  { id: "fsb762", url: "models/fsb.glb", name: "KTL FSB 762", type: "Yarı Otomatik Tabanca", link: "urun.html?p=fsb762",
    desc: "7.62×25 mm Tokarev kalibreli özel tasarım tabanca. Melonite kaplamalı namlu, Picatinny NATO STANAG uyumu.",
    specs: { "Kalibre": "7.62×25 mm", "Kapasite": "9+1", "Namlu Çıkış": "480 m/s", "Menzil": "500 m" } },
  { id: "b40", url: "models/b40.glb", name: "KTL B40", type: "Bombaatar", link: "urun.html?p=b40",
    desc: "40 mm döner tamburlu, pompalamalı bombaatar. Manuel 4 atış kapasitesi ve teleskopik dipçik.",
    specs: { "Kalibre": "40 mm", "Besleme": "4 atış", "Etkili Menzil": "100–150 m", "Ağırlık": "4500 g" } },
  { id: "b40s", url: "models/tb40.glb", name: "KTL B40S", type: "Bombaatar", link: "urun.html?p=b40s",
    desc: "NATO 40×46 mm standardında, çift yönlü açılımlı bombaatar. Ayarlanabilir nişangah, MIL-STD-1913 ray.",
    specs: { "Kalibre": "40×46 mm", "Etkili Menzil": "100–400 m", "Namlu": "10″", "Ağırlık": "1670 g" } },
];

function initShowcase() {
  const canvas = document.getElementById("showcase-canvas");
  if (!canvas) return;
  const vloading = document.querySelector(".viewer .vloading");
  const nameEl = document.getElementById("sc-name");
  const typeEl = document.getElementById("sc-type");
  const descEl = document.getElementById("sc-desc");
  const specEl = document.getElementById("sc-specs");
  const tabsEl = document.getElementById("model-tabs");

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 0.3, 4);
  const renderer = makeRenderer(canvas, true);
  scene.environment = envMap(renderer);
  lightRig(scene);

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.enablePan = false;
  controls.minDistance = 2;
  controls.maxDistance = 7;
  controls.autoRotate = !REDUCE;
  controls.autoRotateSpeed = 1.1;

  let current = null;

  const resize = () => {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };

  function fit(model) {
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const s = 2.6 / Math.max(size.x, size.y, size.z);
    model.scale.setScalar(s);
    model.rotation.y = -0.5;
  }

  function setActiveTab(id) {
    tabsEl.querySelectorAll("button").forEach((b) =>
      b.classList.toggle("active", b.dataset.id === id)
    );
  }

  function show(item) {
    if (vloading) vloading.style.display = "flex";
    setActiveTab(item.id);
    nameEl.textContent = item.name;
    typeEl.textContent = item.type;
    descEl.textContent = item.desc;
    const linkEl = document.getElementById("sc-link");
    if (linkEl && item.link) linkEl.href = item.link;
    specEl.innerHTML = Object.entries(item.specs)
      .map(([k, v]) => `<li><div class="k">${k}</div><div class="v">${v}</div></li>`)
      .join("");
    loadModel(item.url)
      .then((model) => {
        if (current) scene.remove(current);
        fit(model);
        scene.add(model);
        current = model;
        controls.reset();
        camera.position.set(0, 0.3, 4);
        if (vloading) vloading.style.display = "none";
      })
      .catch((err) => {
        console.warn("Showcase model failed:", item.url, err);
        if (vloading) vloading.textContent = "Model yüklenemedi";
      });
  }

  // build tabs
  tabsEl.innerHTML = SHOWCASE.map(
    (m) => `<button data-id="${m.id}">${m.name}</button>`
  ).join("");
  tabsEl.querySelectorAll("button").forEach((b) =>
    b.addEventListener("click", () => show(SHOWCASE.find((m) => m.id === b.dataset.id)))
  );

  const animate = () => {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();
  animate();

  // lazy-load first model when section is near viewport
  let started = false;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting && !started) { started = true; show(SHOWCASE[0]); io.disconnect(); }
    });
  }, { rootMargin: "200px" });
  io.observe(canvas);
}

/* ============================================================ PRODUCT VIEWER (urun.html)
   İstek üzerine (3D butonu) çağrılır; yükleme ilerlemesini onProgress ile bildirir. */
function mountProductModel(canvas, url, onProgress) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 0.3, 4);
  const renderer = makeRenderer(canvas, true);
  scene.environment = envMap(renderer);
  lightRig(scene);

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.enablePan = false;
  controls.minDistance = 2;
  controls.maxDistance = 7;
  controls.autoRotate = !REDUCE;
  controls.autoRotateSpeed = 1.0;

  const resize = () => {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };

  new GLTFLoader().load(
    url,
    (gltf) => {
      const root = gltf.scene;
      const mat = gunmetal();
      root.traverse((n) => {
        if (n.isMesh) {
          n.material = mat;
          if (n.geometry && !n.geometry.attributes.normal) n.geometry.computeVertexNormals();
        }
      });
      normalizeModel(root);
      const box = new THREE.Box3().setFromObject(root);
      const size = box.getSize(new THREE.Vector3());
      root.scale.setScalar(2.6 / Math.max(size.x, size.y, size.z));
      root.rotation.y = -0.5;
      scene.add(root);
      if (onProgress) onProgress(1);
    },
    (e) => { if (onProgress && e.total) onProgress(Math.min(e.loaded / e.total, 0.99)); },
    (err) => { console.warn("product model failed", err); if (onProgress) onProgress(-1); }
  );

  const animate = () => { controls.update(); renderer.render(scene, camera); requestAnimationFrame(animate); };
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();
  animate();
}
window.KUTAL_mountModel = mountProductModel;

/* boot */
window.addEventListener("DOMContentLoaded", () => {
  try { initHero(); } catch (e) { console.warn(e); }
  try { initShowcase(); } catch (e) { console.warn(e); }
});
