/* =============================================================
   SWEETER — collection, lightbox, PL/EN switch
   ============================================================= */

// ---- Settings ---------------------------------------------------------------
const CONFIG = {
  instagram: "https://www.instagram.com/sweeter_nataliatabaczka/",
  dm: "https://ig.me/m/sweeter_nataliatabaczka",
  email: "",            // optional, e.g. "kontakt@sweeter.pl" — shows an extra contact link when set
};

// ---- Collection gallery -------------------------------------------------------
// images/gallery/NN.jpg (large) + images/gallery/thumb/NN.jpg (grid).
// Shown in a fresh random order on every page load.
const GALLERY_COUNT = 47;
const GALLERY = Array.from({ length: GALLERY_COUNT }, (_, i) => String(i + 1).padStart(2, "0") + ".jpg");
for (let i = GALLERY.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [GALLERY[i], GALLERY[j]] = [GALLERY[j], GALLERY[i]];
}

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
  "facts.years": "years of designing<br>and knitting",
  "facts.fibres": "natural fibres<br>of the highest quality",
  "facts.followers": "people follow<br>on Instagram",
  "facts.shipping": "shipping to every<br>corner of the world",
  "col.kicker": "collection",
  "col.title": "Sweaters that <em>embrace</em>",
  "col.lead": "Every sweater that leaves my hands is unique and made with one particular person in mind. I choose the cut, colour, finish, type of yarn and size so that it fits its owner perfectly.<br>I do everything myself — from the first stitch to the last seam — so the wait can sometimes be longer, but in return everyone receives something truly special. Made with heart.",
  "col.note": "Some sweaters are <strong>ready to ship</strong> — see the “Od ręki” highlight on Instagram.",
  "mat.kicker": "materials",
  "mat.title": "Only <em>noble</em> fibres",
  "mat.lead": "I work only with high-quality natural yarns, creating in the spirit of slow fashion – with respect for time, nature, material and people.",
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
  "about.p3": "I love what I do!<br>I believe that in every stitch you can feel the warmth of hands and the passion that turns ordinary yarn into something truly special.",
  "ct.kicker": "questions / orders",
  "ct.title": "Order the sweater <em>you’ve dreamed of</em>",
  "ct.lead": "Tell me which design you love, in which colour and size — we’ll work out the rest together. Pricing and lead time are always individual.",
  "ct.dm": "Message me on Instagram",
  "foot.made": "Knitted by hand, with love ❤️",
  "alt.ivory": "Ecru sweater with an openwork leaf pattern",
  "alt.portrait": "Caramel mohair sweater with balloon sleeves, worn with a gold chain necklace",
  "alt.cardigan": "Kid mohair and silk cardigan",
  "alt.worn": "Taupe cashmere and merino sweater",
};
const UI = {
  pl: { view: "powiększ", photo: "Sweter Sweeter, dziergany ręcznie przez Natalię", dialog: "Zdjęcie", prev: "Poprzednie zdjęcie", next: "Następne zdjęcie", close: "Zamknij", email: "Napisz e-mail" },
  en: { view: "enlarge", photo: "Sweeter sweater, hand-knitted by Natalia", dialog: "Photo", prev: "Previous photo", next: "Next photo", close: "Close", email: "Send an email" },
};

let lang = "pl";
const $ = id => document.getElementById(id);

/* -------------------------------------------------------------
   Gallery
   ------------------------------------------------------------- */
const gallery = $("gallery");

function renderGallery() {
  gallery.innerHTML = GALLERY.map((img, i) => `
    <article class="piece reveal is-in" data-i="${i}" tabindex="0" role="button" aria-label="${UI[lang].view}">
      <div class="piece__img" data-view="${UI[lang].view}">
        <img src="images/gallery/thumb/${img}" alt="${UI[lang].photo}" loading="lazy" width="600" height="800">
      </div>
    </article>`).join("");
}

/* -------------------------------------------------------------
   Lightbox
   ------------------------------------------------------------- */
const lb = $("lightbox");
let current = -1;

function fillLightbox() {
  const img = GALLERY[current];
  if (!img) return;
  $("lb-img").src = `images/gallery/${img}`;
  $("lb-img").alt = UI[lang].photo;
  lb.setAttribute("aria-label", UI[lang].dialog);
  $("lb-prev").setAttribute("aria-label", UI[lang].prev);
  $("lb-next").setAttribute("aria-label", UI[lang].next);
  $("lb-close").setAttribute("aria-label", UI[lang].close);
}

function openPiece(i) {
  current = i;
  fillLightbox();
  lb.showModal();
}

function step(delta) {
  current = (current + delta + GALLERY.length) % GALLERY.length;
  fillLightbox();
}

$("lb-prev").addEventListener("click", () => step(-1));
$("lb-next").addEventListener("click", () => step(1));
lb.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
  if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
});

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
