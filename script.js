const header = document.querySelector("[data-header]");

function updateHeader() {
  if (!header || header.classList.contains("compact")) return;
  header.classList.toggle("scrolled", window.scrollY > 40);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

document.querySelectorAll(".lead-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button");
    if (!button) return;
    button.textContent = "Inquiry ready to connect";
    button.disabled = true;
  });
});

const packageSets = {
  private: {
    kicker: "Private lesson options · details coming soon",
    gridClass: "two-card-grid",
    noteLabel: "Planning note:",
    note:
      "These cards are placeholders while the final offer details, prices, and calls to action are shaped.",
    cards: [
      {
        title: "1:1 Training with Josh",
        titleTab: true,
        options: [
          {
            price: "$99",
            unit: "/ session",
            detail: "Drop in, pay as you go",
          },
          {
            price: "$375",
            unit: "/ 4-pack",
            detail: "Four 60-minute sessions",
          },
        ],
        items: [
          "Any pillar training available for 60 minutes",
          "Video recap from OnForm after the completed session",
          "Best for focused 1:1 instruction, skill correction, and development planning",
        ],
      },
      {
        title: "Group Training Session",
        titleTab: true,
        options: [
          {
            price: "$220",
            unit: "/ session",
            detail: "Single session · no commitment",
          },
          {
            price: "$205",
            unit: "/ session",
            detail: "4-session pack",
          },
        ],
        emphasized: true,
        items: [
          "90-minute group training sessions",
          "Up to 4 catchers per session",
          "Single session is $55 per catcher",
          "4-session pack is $205 total per 90-minute session",
        ],
      },
    ],
  },
  academy: {
    kicker: "Online academy options · details coming soon",
    gridClass: "two-card-grid",
    noteLabel: "Planning note:",
    note:
      "These cards are placeholders while the final course ladder, launch sequence, and purchase paths are shaped.",
    cards: [
      {
        badge: "Option 1",
        title: "Online Academy Card",
        price: "TBD",
        unit: "",
        detail: "Details coming soon",
        items: ["Program details to be added", "Course structure to be added", "Best-fit athlete notes to be added"],
      },
      {
        badge: "Option 2",
        title: "Online Academy Card",
        price: "TBD",
        unit: "",
        detail: "Details coming soon",
        emphasized: true,
        items: ["Program details to be added", "Course structure to be added", "Best-fit athlete notes to be added"],
      },
    ],
  },
  clinics: {
    kicker: "Clinics and camps · seasonal registration updates",
    gridClass: "single-card-grid",
    noteLabel: "Seasonal note:",
    note:
      "Camp and clinic details will be added here as soon as registration windows are ready to open.",
    cards: [
      {
        badge: "Seasonal",
        title: "Clinics and Camps",
        detail: "Announced by Coach Josh",
        cardClass: "announcement-card baseball-card",
        items: [],
        body:
          "Clinics and camps are seasonal and announced by Coach Josh. More information on camps will be provided here when camp and clinic registration is open.",
      },
    ],
  },
};

let lockedPackageTab = "private";

function setActivePackageTab(type) {
  document.querySelectorAll("[data-package-tab]").forEach((button) => {
    const isActive = button.dataset.packageTab === type;
    button.classList.toggle("active", isActive);
    if (isActive) {
      button.setAttribute("aria-current", "true");
    } else {
      button.removeAttribute("aria-current");
    }
  });
}

function renderPackageCards(type) {
  const packageSet = packageSets[type] || packageSets.private;
  const kicker = document.querySelector("[data-package-kicker]");
  const grid = document.querySelector("[data-package-grid]");
  const note = document.querySelector("[data-package-note]");

  if (!kicker || !grid || !note) return;

  kicker.textContent = packageSet.kicker;
  grid.className = `package-grid ${packageSet.gridClass}`.trim();
  grid.innerHTML = packageSet.cards
    .map((card) => {
      const badge = card.badge
        ? `<span class="package-badge ${card.badgeClass || ""}">${card.badge}</span>`
        : "";
      const items = card.items.map((item) => `<li>${item}</li>`).join("");
      const pricing = card.options
        ? `<div class="package-options" aria-label="${card.title} pricing options">
            ${card.options
              .map(
                (option) => `
                  <div>
                    <strong>${option.price} <small>${option.unit}</small></strong>
                    <p>${option.detail}</p>
                  </div>
                `
              )
              .join("")}
          </div>`
        : card.price
        ? `<strong>${card.price} <small>${card.unit}</small></strong>
          <p>${card.detail}</p>`
        : `<p>${card.detail}</p>`;
      const cardBody = card.body ? `<p class="package-card-body">${card.body}</p>` : "";
      const checklist = items ? `<ul>${items}</ul>` : "";
      return `
        <article class="package-card ${card.emphasized ? "emphasized" : ""} ${card.cardClass || ""}">
          ${badge}
          <h3 class="${card.titleTab ? "package-title-tab" : ""}">${card.title}</h3>
          ${pricing}
          ${cardBody}
          ${checklist}
        </article>
      `;
    })
    .join("");
  note.innerHTML = `<strong>${packageSet.noteLabel}</strong> <span>${packageSet.note}</span>`;
}

const packageTabButtons = document.querySelectorAll("[data-package-tab]");
const packageTabList = document.querySelector(".package-tabs");

packageTabButtons.forEach((tab) => {
  const previewTab = () => {
    lockedPackageTab = tab.dataset.packageTab;
    setActivePackageTab(lockedPackageTab);
    renderPackageCards(lockedPackageTab);
  };

  tab.addEventListener("pointerenter", previewTab);
  tab.addEventListener("mouseenter", previewTab);
  tab.addEventListener("mouseover", previewTab);
  tab.addEventListener("focus", previewTab);

  tab.addEventListener("click", () => {
    previewTab();
  });
});

setActivePackageTab(lockedPackageTab);
renderPackageCards(lockedPackageTab);

document.querySelectorAll("[data-package-link]").forEach((link) => {
  link.addEventListener("click", () => {
    const targetTab = document.querySelector(`[data-package-tab="${link.dataset.packageLink}"]`);
    if (targetTab) targetTab.click();
  });
});

document.querySelectorAll("[data-autoplay-video]").forEach((video) => {
  video.muted = true;
  video.play().catch(() => {
    video.addEventListener("canplay", () => video.play().catch(() => {}), { once: true });
  });
});
