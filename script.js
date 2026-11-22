/* =============================================================
   SWEETER — collection, lightbox, PL/EN switch
   ============================================================= */

// ---- Settings ---------------------------------------------------------------
const CONFIG = {
  instagram: "https://www.instagram.com/sweeter_nataliatabaczka/",
  dm: "https://ig.me/m/sweeter_nataliatabaczka",
  email: "",            // optional, e.g. "kontakt@sweeter.pl" — shows an extra contact link when set
};
const POST = id => `https://www.instagram.com/sweeter_nataliatabaczka/p/${id}/`;

// ---- Collection (photos & descriptions from the Instagram profile) ----------
// kind: "sweater" | "cardigan". fibre/note are optional.
const PIECES = [
  { img: "ivory-leaf.jpg", post: "DUF4bWXjP5j", kind: "sweater",
    name:   { pl: "Sweter w liście", en: "Leaf-lace sweater" },
    colour: { pl: "ecru", en: "ecru" },
    fibre:  { pl: "merino extra fine 17 µm z kaszmirem", en: "17-micron extra-fine merino with cashmere" },
    note:   { pl: "„Nie miałam wcześniej w rękach nic równie cudownie miękkiego!”", en: "“I’ve never held anything so wonderfully soft.”" } },
  { img: "red-leaf.jpg", post: "DfMbRI1iMil", kind: "sweater",
    name:   { pl: "Sweter w liście", en: "Leaf-lace sweater" },
    colour: { pl: "nasycona czerwień", en: "rich red" },
    fibre:  { pl: "kaszmir i merino", en: "cashmere & merino" },
    note:   { pl: "„Chyba najpiękniejszy sweter, który stworzyłam!”", en: "“Perhaps the most beautiful sweater I’ve ever made.”" },
    badge:  { pl: "często zamawiany", en: "often ordered" } },
  { img: "powder-blue-leaf.jpg", post: "DfmR93xiBTS", kind: "sweater",
    name:   { pl: "Sweter w liście", en: "Leaf-lace sweater" },
    colour: { pl: "poranna mgła", en: "morning mist" },
    note:   { pl: "Wasz ulubieniec — tym razem w kolorze porannej mgły.", en: "Your favourite — this time in the colour of morning mist." },
    badge:  { pl: "Wasz ulubieniec", en: "your favourite" } },
  { img: "black-bobble-cardigan.jpg", post: "Df1u-IDiAhf", kind: "cardigan",
    name:   { pl: "Bąbelek — kardigan", en: "Bąbelek cardigan" },
    colour: { pl: "czerń", en: "black" },
    fibre:  { pl: "alpaka suri i merino", en: "suri alpaca & merino" },
    note:   { pl: "Dłuższa wersja, z większymi bąblami — zgodnie z życzeniem klientki.", en: "A longer version with bigger bobbles — made to a client’s wishes." } },
  { img: "taupe-vneck.jpg", post: "Df64ZV2CDu6", kind: "sweater",
    name:   { pl: "Sweter w liście, dekolt V", en: "Leaf-lace V-neck" },
    colour: { pl: "taupe", en: "taupe" },
    fibre:  { pl: "merino i kaszmir", en: "merino & cashmere" } },
  { img: "mocha-fringe.jpg", post: "DfZOTBRiGEf", kind: "sweater",
    name:   { pl: "Boho", en: "Boho" },
    colour: { pl: "mokka", en: "mocha" } },
  { img: "grey-bobble.jpg", post: "DfzSKSpCLA4", kind: "sweater",
    name:   { pl: "Bąbelek", en: "Bąbelek (bobble)" },
    colour: { pl: "szary", en: "grey" } },
  { img: "taupe-leaf-cardigan.jpg", post: "Dcnp0QqCDeb", kind: "cardigan",
    name:   { pl: "Kardigan — nowy wzór", en: "Cardigan — new design" },
    colour: { pl: "taupe", en: "taupe" },
    fibre:  { pl: "kid moher i jedwab", en: "kid mohair & silk" },
    note:   { pl: "Lekki, delikatny i otulający — idealny na jesień.", en: "Light, delicate and enveloping — made for autumn." },
    badge:  { pl: "nowość", en: "new" } },
  { img: "charcoal-vneck.jpg", post: "Df9heeUCPhM", kind: "sweater",
    name:   { pl: "Sweter w liście, dekolt V", en: "Leaf-lace V-neck" },
    colour: { pl: "grafit", en: "graphite" },
    note:   { pl: "Spakowany i gotowy do drogi — w świat.", en: "Packed and ready to travel — around the world." } },
];

const INSTA = [
  { img: "red-worn.jpg", post: "DfPDi6UCCby" },
  { img: "taupe-vneck-worn.jpg", post: "Df_6aHpiMKe" },
  { img: "black-bobble-cardigan.jpg", post: "Df1u-IDiAhf" },
  { img: "ivory-leaf.jpg", post: "DUF4bWXjP5j" },
  { img: "mocha-fringe.jpg", post: "DfZOTBRiGEf" },
  { img: "powder-blue-leaf.jpg", post: "DfmR93xiBTS" },
];

// ---- English copy (Polish lives in index.html) -------------------------------
const EN = {
  "nav.collection": "Collection",
  "nav.materials": "Materials",
  "nav.order": "How to order",
  "nav.about": "About",
  "nav.contact": "Order a sweater",
  "hero.kicker": "luxury handmade knitwear",
  "hero.title": "Designing and knitting sweaters <em>for&nbsp;30&nbsp;years.</em>",
  "hero.lead": "Sweeter is a love of handcraft. Distinctive design. The highest quality. Flawless craftsmanship.",
  "hero.cta1": "View the collection",
  "hero.cta2": "Order your sweater",
  "hero.caption": "knitted by hand",
  "facts.years": "years of designing<br>and knitting",
  "facts.fibres": "natural fibres<br>of the highest quality",
  "facts.followers": "people follow<br>on Instagram",
  "facts.shipping": "shipping to every<br>corner of the world",
  "col.kicker": "collection",
  "col.title": "Sweaters that <em>embrace</em>",
  "col.lead": "Every design is knitted to order — in the colour, yarn and size you choose. Click a photo to see the details.",
  "col.all": "All",
  "col.sweaters": "Sweaters",
  "col.cardigans": "Cardigans",
  "col.note": "Some sweaters are <strong>ready to ship</strong> — see the “Od ręki” highlight on Instagram.",
  "quote.text": "I believe it’s worth owning less, but choosing consciously. Softness, noble fibres and&nbsp;timeless shapes never go out of&nbsp;style.",
  "mat.kicker": "materials",
  "mat.title": "Only <em>noble</em> fibres",
  "mat.lead": "I never compromise on yarn. I work only with the finest natural fibres — they decide how a sweater wears for years to come.",
  "mat.f1.t": "Cashmere &amp; extra-fine merino",
  "mat.f1.d": "Merino just 17 microns thin, enriched with cashmere. Unrivalled softness — ideal for sensitive skin.",
  "mat.f2.t": "Kid mohair &amp; silk",
  "mat.f2.d": "Light, delicate and enveloping. Silk adds a subtle sheen, mohair a soft, airy halo.",
  "mat.f3.t": "Suri alpaca &amp; merino",
  "mat.f3.d": "Wonderfully fluffy, yet light. The kind of cosiness you want to wear every day.",
  "ord.kicker": "made to order",
  "ord.title": "How your sweater <em>comes to life</em>",
  "ord.s1.t": "Choose a design",
  "ord.s1.d": "Pick a design from the collection or describe the sweater you’ve been dreaming of.",
  "ord.s2.t": "Colour, yarn, size",
  "ord.s2.d": "Together we choose the yarn, colour and measurements. Details too — like bigger bobbles on the Bąbelek cardigan.",
  "ord.s3.t": "Knitted by hand",
  "ord.s3.d": "Stitch by stitch. Every sweater takes time, heart and a lot of work — and you can feel it.",
  "ord.s4.t": "Shipped worldwide",
  "ord.s4.d": "Carefully packed, your sweater sets off to you — in Poland and anywhere in the world.",
  "about.kicker": "let’s meet",
  "about.title": "Hi, I’m <em>Natalia</em>",
  "about.p1": "I’ve been knitting since I was eight — a passion that has been with me since childhood and, over time, became my way of life.",
  "about.p2": "Today I run my own business, knitting sweaters to order. It’s my only source of income, but also a source of immense joy and satisfaction.",
  "ig.kicker": "instagram",
  "ig.lead": "New designs, sweaters on their way to clients, and reviews — in the “Opinie” highlights.",
  "ct.kicker": "questions / orders",
  "ct.title": "Order the sweater <em>you’ve dreamed of</em>",
  "ct.lead": "Tell me which design you love, in which colour and size — we’ll work out the rest together. Pricing and lead time are always individual.",
  "ct.dm": "Message me on Instagram",
  "foot.made": "Knitted by hand, with love ❤️",
  "lb.colour": "Colour",
  "lb.fibre": "Yarn",
  "lb.price": "Price",
  "lb.priceval": "quoted individually",
  "lb.order": "Order this design",
  "lb.post": "View post",
  "alt.ivory": "Ecru sweater with an openwork leaf pattern",
  "alt.portrait": "Caramel mohair sweater with balloon sleeves, worn with a gold chain necklace",
  "alt.cardigan": "Kid mohair and silk cardigan",
  "alt.worn": "Taupe cashmere and merino sweater",
};
const UI = {
  pl: { view: "zobacz szczegóły", sweater: "sweter", cardigan: "kardigan", close: "Zamknij", email: "Napisz e-mail" },
  en: { view: "view details", sweater: "sweater", cardigan: "cardigan", close: "Close", email: "Send an email" },
};

let lang = "pl";
const $ = id => document.getElementById(id);

/* -------------------------------------------------------------
   Gallery
   ------------------------------------------------------------- */
const gallery = $("gallery");
let filter = "all";

function renderGallery() {
  gallery.innerHTML = PIECES.map((p, i) => `
    <article class="piece reveal is-in ${filter !== "all" && p.kind !== filter ? "is-hidden" : ""}" data-i="${i}" tabindex="0" role="button"
             aria-label="${p.name[lang]} — ${p.colour[lang]}">
      <div class="piece__img" data-view="${UI[lang].view}">
        ${p.badge ? `<span class="piece__badge">${p.badge[lang]}</span>` : ""}
        <img src="images/${p.img}" alt="${p.name[lang]}, ${p.colour[lang]}" loading="lazy" width="512" height="640">
      </div>
      <div class="piece__info">
        <h3>${p.name[lang]}</h3>
        <p class="piece__meta">${p.colour[lang]}${p.fibre ? " · " + p.fibre[lang] : ""}</p>
      </div>
    </article>`).join("");
}

document.querySelectorAll(".filter").forEach(btn => btn.addEventListener("click", () => {
  filter = btn.dataset.filter;
  document.querySelectorAll(".filter").forEach(b => b.classList.toggle("is-active", b === btn));
  gallery.querySelectorAll(".piece").forEach(el => {
    el.classList.toggle("is-hidden", filter !== "all" && PIECES[+el.dataset.i].kind !== filter);
  });
}));

/* -------------------------------------------------------------
   Lightbox
   ------------------------------------------------------------- */
const lb = $("lightbox");
let current = -1;

function fillLightbox() {
  const p = PIECES[current];
  if (!p) return;
  $("lb-img").src = `images/${p.img}`;
  $("lb-img").alt = `${p.name[lang]}, ${p.colour[lang]}`;
  $("lb-kind").textContent = UI[lang][p.kind];
  $("lb-title").textContent = p.name[lang];
  $("lb-note").textContent = p.note ? p.note[lang] : "";
  $("lb-colour").textContent = p.colour[lang];
  $("lb-fibre-row").hidden = !p.fibre;
  $("lb-fibre").textContent = p.fibre ? p.fibre[lang] : "";
  $("lb-post").href = POST(p.post);
  $("lb-close").setAttribute("aria-label", UI[lang].close);
}

function openPiece(i) {
  current = i;
  fillLightbox();
  lb.showModal();
}

gallery.addEventListener("click", e => {
  const el = e.target.closest(".piece");
  if (el) openPiece(+el.dataset.i);
});
gallery.addEventListener("keydown", e => {
  const el = e.target.closest(".piece");
  if (el && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openPiece(+el.dataset.i); }
});
$("lb-close").addEventListener("click", () => lb.close());
lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });

/* -------------------------------------------------------------
   Instagram strip
   ------------------------------------------------------------- */
$("insta").innerHTML = INSTA.map(p => `
  <a href="${POST(p.post)}" target="_blank" rel="noopener" aria-label="Instagram post">
    <img src="images/${p.img}" alt="" loading="lazy" width="512" height="640">
  </a>`).join("");

/* -------------------------------------------------------------
   Language switch (PL text is read from the HTML, EN from the dictionary)
   ------------------------------------------------------------- */
const PL = {};
document.querySelectorAll("[data-i18n]").forEach(el => { PL[el.dataset.i18n] = el.innerHTML; });
document.querySelectorAll("[data-i18n-alt]").forEach(el => { PL[el.dataset.i18nAlt] = el.alt; });

function setLang(next) {
  lang = next;
  document.documentElement.lang = lang;
  const dict = lang === "en" ? EN : PL;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = dict[el.dataset.i18n] ?? PL[el.dataset.i18n];
    if (v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
    el.alt = dict[el.dataset.i18nAlt] ?? PL[el.dataset.i18nAlt];
  });
  document.querySelectorAll("[data-lang]").forEach(b => {
    b.classList.toggle("is-active", b.dataset.lang === lang);
    b.setAttribute("aria-pressed", b.dataset.lang === lang);
  });
  const mail = $("contact-email");
  if (CONFIG.email) {
    mail.hidden = false;
    mail.href = `mailto:${CONFIG.email}`;
    mail.textContent = UI[lang].email;
  }
  renderGallery();
  if (lb.open) fillLightbox();
  try { localStorage.setItem("sweeter-lang", lang); } catch (_) {}
}

document.querySelectorAll("[data-lang]").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

let saved = null;
try { saved = localStorage.getItem("sweeter-lang"); } catch (_) {}
setLang(saved === "en" ? "en" : "pl");

/* -------------------------------------------------------------
   Header, menu, reveal-on-scroll
   ------------------------------------------------------------- */
const header = document.querySelector(".header");
addEventListener("scroll", () => header.classList.toggle("is-scrolled", scrollY > 10), { passive: true });

const burger = document.querySelector(".burger");
const nav = $("nav");
burger.addEventListener("click", () => {
  const open = burger.getAttribute("aria-expanded") !== "true";
  burger.setAttribute("aria-expanded", open);
  nav.classList.toggle("is-open", open);
});
nav.addEventListener("click", e => {
  if (e.target.closest("a")) { burger.setAttribute("aria-expanded", "false"); nav.classList.remove("is-open"); }
});

const io = new IntersectionObserver(entries => entries.forEach(en => {
  if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
}), { threshold: .12, rootMargin: "0px 0px -40px 0px" });
document.querySelectorAll(".reveal:not(.is-in)").forEach(el => io.observe(el));

$("year").textContent = new Date().getFullYear();
