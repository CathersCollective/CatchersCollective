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
    kicker: "Private 1-on-1 lessons · 60 min sessions",
    gridClass: "private-package-grid",
    noteLabel: "Pro tip:",
    note:
      "Push families toward the 10-pack or monthly retainer from the start. Consistent, long-term training is what actually moves the needle — and it keeps your schedule filled and revenue predictable.",
    cards: [
      {
        title: "Drop-in",
        price: "$90",
        unit: "/ session",
        detail: "No commitment, pay as you go",
        items: ["60-min 1-on-1 session", "Any pillar focus", "Session recap notes"],
      },
      {
        badge: "Most popular",
        title: "5-Session Pack",
        price: "$425",
        unit: "/ pack",
        detail: "$85/session · save $25",
        emphasized: true,
        items: [
          "5 x 60-min sessions",
          "Personalized development plan",
          "Progress tracking",
          "1 video review included",
        ],
      },
      {
        badge: "Best value",
        badgeClass: "value",
        title: "10-Session Pack",
        price: "$800",
        unit: "/ pack",
        detail: "$80/session · save $100",
        items: [
          "10 x 60-min sessions",
          "Full pillar assessment",
          "3 video reviews included",
          "Priority scheduling",
          "Parent progress report",
        ],
      },
      {
        title: "Monthly Retainer",
        price: "$340",
        unit: "/ mo",
        detail: "4 sessions/mo · $85/session",
        items: [
          "4 x 60-min sessions",
          "Ongoing development plan",
          "2 video reviews/mo",
          "Text access between sessions",
        ],
      },
    ],
  },
  groups: {
    kicker: "Small group sessions · 2-4 catchers · 75 min · pricing per player",
    gridClass: "",
    noteLabel: "Revenue math:",
    note:
      "A group of 4 catchers on a 10-pack generates $1,800 for 10 sessions — the same time investment as a 10-pack private for $800. Groups are your most efficient use of time once demand builds.",
    cards: [
      {
        title: "Drop-in",
        price: "$55",
        unit: "/ player",
        detail: "Per session, no commitment",
        items: ["75-min group session", "Max 4 catchers", "Focused drill work"],
      },
      {
        badge: "Most popular",
        title: "5-Session Pack",
        price: "$250",
        unit: "/ player",
        detail: "$50/session · save $25/player",
        emphasized: true,
        items: ["5 x 75-min sessions", "Group development plan", "Individual feedback each session"],
      },
      {
        badge: "Best value",
        badgeClass: "value",
        title: "10-Session Pack",
        price: "$450",
        unit: "/ player",
        detail: "$45/session · save $100/player",
        items: [
          "10 x 75-min sessions",
          "Individual assessments",
          "1 video review per player",
          "Priority group booking",
        ],
      },
    ],
  },
  clinics: {
    kicker: "Clinics & camps · event-based pricing per player",
    gridClass: "",
    noteLabel: "Revenue math:",
    note:
      "A sold-out weekend camp at 20 players = $5,980. Run 4-6 per year and clinics alone become a major revenue stream — plus they're your best funnel for private lesson clients.",
    cards: [
      {
        title: "Half-Day Clinic",
        price: "$85",
        unit: "/ player",
        detail: "3 hrs · up to 12 catchers",
        items: [
          "Focused on 1-2 pillars",
          "Station-based format",
          "Great for team groups",
          "Certificate of completion",
        ],
      },
      {
        badge: "Recommended start",
        title: "Full-Day Camp",
        price: "$165",
        unit: "/ player",
        detail: "6 hrs · up to 16 catchers",
        emphasized: true,
        items: [
          "All 6 pillars covered",
          "Morning & afternoon sessions",
          "Individual assessments",
          "Video breakdown included",
          "Catchers Collective gear",
        ],
      },
      {
        badge: "Highest revenue event",
        badgeClass: "value",
        title: "Weekend Camp",
        price: "$299",
        unit: "/ player",
        detail: "2 days · up to 20 catchers",
        items: [
          "Deep dive all 6 pillars",
          "Live game situation work",
          "Full video analysis report",
          "Gear + digital workbook",
          "Post-camp follow-up call",
        ],
      },
    ],
  },
  online: {
    kicker: "Online & virtual coaching · remote players or between-session support",
    gridClass: "private-package-grid",
    noteLabel: "Scalability play:",
    note:
      "Online coaching is the one service that isn't limited by your location or hours. Even 10 players on the Pro Plan creates $1,990/mo in recurring revenue while in-person training keeps growing.",
    cards: [
      {
        title: "Video Analysis",
        price: "$50",
        unit: "/ review",
        detail: "Async · 48hr turnaround",
        items: ["Submit 1 video clip", "Written + annotated feedback", "3 key takeaways"],
      },
      {
        title: "Starter Plan",
        price: "$99",
        unit: "/ mo",
        detail: "For players outside the Nashville area",
        items: ["2 video reviews/mo", "Written feedback reports", "Monthly check-in call (30 min)"],
      },
      {
        badge: "Most popular",
        title: "Pro Plan",
        price: "$199",
        unit: "/ mo",
        detail: "Best for committed remote athletes",
        emphasized: true,
        items: [
          "4 video reviews/mo",
          "2 live virtual sessions/mo",
          "Custom drill programming",
          "Text access to Josh",
        ],
      },
      {
        badge: "Elite",
        badgeClass: "value",
        title: "Elite Plan",
        price: "$299",
        unit: "/ mo",
        detail: "For serious college-bound catchers",
        items: [
          "Unlimited video reviews",
          "4 live virtual sessions/mo",
          "Recruiting guidance",
          "Priority response (24hrs)",
          "Game film breakdown",
        ],
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
      return `
        <article class="package-card ${card.emphasized ? "emphasized" : ""}">
          ${badge}
          <h3>${card.title}</h3>
          <strong>${card.price} <small>${card.unit}</small></strong>
          <p>${card.detail}</p>
          <ul>${items}</ul>
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
