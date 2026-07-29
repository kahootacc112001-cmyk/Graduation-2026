/* =========================================================
   ذكريات التخرج ٢٠٢٦ — منطق الموقع
   - يبني كروت الخريجين من data.js
   - يجرب يحمّل صورة كل خريج، ولو مش موجودة بيسيب الأفاتار الملوّن
   - بحث فوري وهما بيكتبوا، من غير زرار
   ========================================================= */

(function () {
  "use strict";

  const grid = document.getElementById("gradGrid");
  const emptyState = document.getElementById("emptyState");
  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearSearch");
  const gradCountEl = document.getElementById("gradCount");

  const AVATAR_CLASSES = 6; // avatar-1 .. avatar-6 من الـ CSS، بتتكرر بالدور

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
    card.style.setProperty("--avatar", `var(--avatar-${(index % AVATAR_CLASSES) + 1})`);
    card.style.setProperty("--i", index);
    card.setAttribute("role", "listitem");
    card.dataset.name = grad.name.toLowerCase();
    card.dataset.college = (grad.college || "").toLowerCase();

    card.innerHTML = `
      <div class="avatar-wrap">
        <div class="seal-ring" aria-hidden="true">
          <svg viewBox="0 0 76 76">
            <circle cx="38" cy="38" r="36" />
          </svg>
        </div>
        <div class="avatar">
          <span class="avatar-initials">${getInitials(grad.name)}</span>
          <img alt="" loading="lazy" />
        </div>
      </div>
      <div class="grad-name">${grad.name}</div>
      ${grad.college ? `<div class="grad-college">${grad.college}</div>` : ""}
      <div class="grad-cta">افتح دفتر الذكريات ↞</div>
    `;

    // محاولة تحميل الصورة الحقيقية؛ لو فشلت (404) نسيب الأفاتار الملوّن زي ما هو
    if (grad.photo) {
      const img = card.querySelector("img");
      const probe = new Image();
      probe.onload = () => {
        img.src = grad.photo;
        img.classList.add("loaded");
      };
      probe.onerror = () => {
        /* الصورة لسه مش متضافة — الأفاتار الملوّن هو اللي هيفضل ظاهر */
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
    gradCountEl.textContent = GRADUATES.length;
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
