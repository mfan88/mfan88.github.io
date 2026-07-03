const CARD_WIDTH = 68;
const CARD_GAP = 32;

function getCardStyle(index: number, activeIndex: number) {
  const offset = index - activeIndex;
  const isActive = offset === 0;

  return {
    width: `${CARD_WIDTH}%`,
    left: `${50 + offset * CARD_GAP}%`,
    transform: `translate(-50%, -50%) scale(${isActive ? 1 : 0.9})`,
  };
}

function updateCarousel(root: HTMLElement, activeIndex: number) {
  const cards = root.querySelectorAll<HTMLElement>("[data-carousel-card]");
  const prev = root.querySelector<HTMLButtonElement>("[data-carousel-prev]");
  const next = root.querySelector<HTMLButtonElement>("[data-carousel-next]");

  root.dataset.activeIndex = String(activeIndex);

  cards.forEach((card) => {
    const index = Number(card.dataset.index);
    const offset = index - activeIndex;
    const isActive = offset === 0;
    const style = getCardStyle(index, activeIndex);

    card.style.width = style.width;
    card.style.left = style.left;
    card.style.transform = style.transform;
    card.style.zIndex = isActive ? "10" : "0";
    card.style.opacity = isActive ? "1" : "0.4";
    card.style.pointerEvents = isActive ? "auto" : "none";
    card.classList.toggle("blur-0", isActive);
    card.classList.toggle("blur-md", !isActive);
    card.classList.toggle("opacity-100", isActive);
    card.classList.toggle("opacity-40", !isActive);
  });

  if (prev) prev.disabled = activeIndex === 0;
  if (next) next.disabled = activeIndex === cards.length - 1;
}

function setupExperienceCarousel() {
  const root = document.querySelector<HTMLElement>("[data-experience-carousel]");
  if (!root || root.dataset.carouselReady === "true") return;

  root.dataset.carouselReady = "true";

  let activeIndex = Number(root.dataset.activeIndex ?? 1);

  root.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    const cards = root.querySelectorAll("[data-carousel-card]");

    if (target.closest("[data-carousel-prev]")) {
      activeIndex = Math.max(0, activeIndex - 1);
      updateCarousel(root, activeIndex);
      return;
    }

    if (target.closest("[data-carousel-next]")) {
      activeIndex = Math.min(cards.length - 1, activeIndex + 1);
      updateCarousel(root, activeIndex);
    }
  });

  updateCarousel(root, activeIndex);
}

setupExperienceCarousel();
document.addEventListener("astro:page-load", setupExperienceCarousel);
