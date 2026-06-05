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
    kicker: "Private lesson options",
    gridClass: "two-card-grid",
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
        title: "One-Month Group Catching Program",
        titleTab: true,
        options: [
          {
            price: "$350",
            unit: "/ 4-session pack",
            detail: "Four 90-minute sessions",
          },
        ],
        emphasized: true,
        items: [
          "Maximum of four catchers per group",
          "All four sessions must be used within a 30-day window",
          "Video recap from OnForm after the completed session",
          "Best for consistent skill work and month-long development",
        ],
      },
    ],
  },
  academy: {
    kicker: "Catcher's Collective Online Academy · launch details coming soon",
    gridClass: "",
    noteLabel: "Launch note:",
    note:
      "Final course access, pricing, and registration links will be added when the academy launch path is ready.",
    cards: [
      {
        badge: "Online Academy",
        title: "8-12 Foundations",
        price: "Coming Soon",
        unit: "",
        detail: "The Foundation Code",
        items: [
          "Athletic development, nutrition, and habits for young catchers",
          "Receiving, blocking, transfers and footwork, throwing, and Game IQ foundations",
          "Built for simple, confident skill development before the game speeds up",
        ],
      },
      {
        badge: "Online Academy",
        title: "13-15 Development",
        price: "Coming Soon",
        unit: "",
        detail: "The Field General Blueprint",
        emphasized: true,
        items: [
          "Athletic development, nutrition, and recovery for the high school transition",
          "Receiving, blocking, transfers and footwork, and throwing under pressure",
          "Game management, IQ, leadership, film, and self-evaluation habits",
        ],
      },
      {
        badge: "Online Academy",
        title: "16-18 High School Prep",
        price: "Coming Soon",
        unit: "",
        detail: "The Prospect Signal",
        items: [
          "Athletic development, nutrition/recovery, and recruiting/career development",
          "Receiving, blocking, transfers and footwork, throwing, and game management/IQ",
          "Pitch calling, game prep, pitcher leadership, mental game, and film/self-evaluation",
        ],
      },
      {
        badge: "Online Academy",
        title: "19-22 College",
        price: "Coming Soon",
        unit: "",
        detail: "Behind the Plate Masterclass",
        items: [
          "Identity, life skills, athletic development, nutrition/recovery, and pro preparation",
          "Receiving, blocking, transfers and footwork, throwing, and game management/IQ",
          "Game preparation, advanced pitcher management, leadership, mental game, and film/self-evaluation",
          "Career navigation and the reality of pro ball",
        ],
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
        contentClass: "baseball-card-content",
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

  if (!kicker || !grid) return;

  kicker.textContent = packageSet.kicker;
  grid.className = `package-grid ${packageSet.gridClass}`.trim();
  grid.innerHTML = packageSet.cards
    .map((card) => {
      const badge = card.badge
        ? `<span class="package-badge ${card.badgeClass || ""}">${card.badge}</span>`
        : "";
      const items = card.items.map((item) => `<li>${item}</li>`).join("");
      const pricing = card.options
        ? `<div class="package-options ${card.options.length === 1 ? "single-option" : ""}" aria-label="${card.title} pricing options">
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
      const cardContent = `
        ${badge}
        <h3 class="${card.titleTab ? "package-title-tab" : ""}">${card.title}</h3>
        ${pricing}
        ${cardBody}
        ${checklist}
      `;
      return `
        <article class="package-card ${card.emphasized ? "emphasized" : ""} ${card.cardClass || ""}">
          ${card.contentClass ? `<div class="${card.contentClass}">${cardContent}</div>` : cardContent}
        </article>
      `;
    })
    .join("");
  if (note) {
    note.innerHTML = `<strong>${packageSet.noteLabel}</strong> <span>${packageSet.note}</span>`;
  }
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

  const playlist = video.dataset.videoPlaylist
    ? video.dataset.videoPlaylist.split("|").filter(Boolean)
    : [];

  if (playlist.length > 1) {
    let activeClip = 0;

    const updateActiveClip = () => {
      video.src = playlist[activeClip];
      video.setAttribute("controls", "");
    };

    const playNextClip = () => {
      activeClip = (activeClip + 1) % playlist.length;
      updateActiveClip();
      video.play().catch(() => {});
    };

    updateActiveClip();

    video.addEventListener("ended", () => {
      playNextClip();
    });
  }

  video.play().catch(() => {
    video.addEventListener("canplay", () => video.play().catch(() => {}), { once: true });
  });
});
