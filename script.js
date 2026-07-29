/* =========================================================
   ذكريات التخرج ٢٠٢٦ — منطق الموقع
   - يبني بولارويدات الخريجين من data.js ويدبّسها على الحائط
   - يجرب يحمّل صورة كل خريج، ولو مش موجودة بيسيب حروفه مكتوبة بخط اليد
   - بحث فوري وهما بيكتبوا، من غير زرار
   ========================================================= */

(function () {
  "use strict";

  const grid = document.getElementById("gradGrid");
  const emptyState = document.getElementById("emptyState");
  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearSearch");
  const gradCountEl = document.getElementById("gradCount");

  const PIN_CLASSES = ["pin-brick", "pin-teal", "pin-mustard"];

  const ARABIC_DIGITS = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  function toArabicDigits(n) {
    return String(n).replace(/[0-9]/g, (d) => ARABIC_DIGITS[+d]);
  }

  /** يرجّع أول حرفين مميزين من الاسم (زي "M.A" لـ "Mira Adel") */
  function getInitials(name) {
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return "";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }

  /** بيبني كارت واحد كـ DOM element */
  function buildCard(grad, index) {
    const card = document.createElement("a");
    card.href = grad.link;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    card.className = "grad-card";
    card.style.setProperty("--i", index);
    card.setAttribute("role", "listitem");
    card.dataset.name = grad.name.toLowerCase();
    card.dataset.college = (grad.college || "").toLowerCase();

    const pinClass = PIN_CLASSES[index % PIN_CLASSES.length];

    card.innerHTML = `
      <span class="pin ${pinClass}" aria-hidden="true"></span>
      <div class="photo-frame">
        <span class="initials">${getInitials(grad.name)}</span>
        <img alt="" loading="lazy" />
      </div>
      <div class="grad-caption">
        <div class="grad-name">${grad.name}</div>
        ${grad.college ? `<div class="grad-college">${grad.college}</div>` : ""}
        <div class="grad-cta">افتح دفتر الذكريات ↞</div>
      </div>
    `;

    // محاولة تحميل الصورة الحقيقية؛ لو فشلت (404) نسيب الحروف المكتوبة بخط اليد زي ما هي
    if (grad.photo) {
      const img = card.querySelector("img");
      const probe = new Image();
      probe.onload = () => {
        img.src = grad.photo;
        img.classList.add("loaded");
      };
      probe.onerror = () => {
        /* الصورة لسه مش متضافة — الحروف المكتوبة هي اللي هتفضل ظاهرة */
      };
      probe.src = grad.photo;
    }

    return card;
  }

  /** يرندر كل الخريجين مرة واحدة */
  function renderAll() {
    const frag = document.createDocumentFragment();
    GRADUATES.forEach((grad, i) => frag.appendChild(buildCard(grad, i)));
    grid.appendChild(frag);
    gradCountEl.textContent = toArabicDigits(GRADUATES.length);
  }

  /** فلترة فورية حسب الاسم (وبتشمل الكلية كمان لسهولة الدور) */
  function applyFilter(query) {
    const q = query.trim().toLowerCase();
    let visibleCount = 0;

    grid.querySelectorAll(".grad-card").forEach((card) => {
      const matches =
        q === "" ||
        card.dataset.name.includes(q) ||
        card.dataset.college.includes(q);
      card.hidden = !matches;
      if (matches) visibleCount++;
    });

    emptyState.hidden = visibleCount !== 0;
    clearBtn.hidden = q === "";
  }

  searchInput.addEventListener("input", (e) => applyFilter(e.target.value));

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    applyFilter("");
    searchInput.focus();
  });

  renderAll();
})();
