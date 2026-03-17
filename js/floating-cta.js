document.addEventListener("DOMContentLoaded", function () {
  const floatingCta = document.getElementById("floatingAmazonCta");
  const heroCta = document.querySelector(".detail-actions");
  const footer = document.querySelector("footer");

  if (!floatingCta || !heroCta) return;

  const toggleFloatingCta = () => {
    const heroRect = heroCta.getBoundingClientRect();
    const footerRect = footer ? footer.getBoundingClientRect() : null;

    const heroOutOfView = heroRect.bottom < 0;
    const footerTooClose = footerRect ? footerRect.top < window.innerHeight - 100 : false;

    if (heroOutOfView && !footerTooClose) {
      floatingCta.classList.add("is-visible");
    } else {
      floatingCta.classList.remove("is-visible");
    }
  };

  window.addEventListener("scroll", toggleFloatingCta, { passive: true });
  window.addEventListener("resize", toggleFloatingCta);
  toggleFloatingCta();
});