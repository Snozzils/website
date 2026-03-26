document.addEventListener("DOMContentLoaded", function () {
  const amazonPattern = /amazon\.|amzn\.(to|eu)/i;

  document.querySelectorAll("a[href]").forEach(function (link) {
    if (!amazonPattern.test(link.href)) return;

    link.addEventListener("click", function (event) {
      if (typeof gtag !== "function") return;

      event.preventDefault();

      const url = link.href;

      const buttonName = link.dataset.tracking || "amazon_link";
      const bookSlug = link.dataset.book || "unknown";
      const pageVariant = link.dataset.page || "default";

      let navigated = false;

      const go = function () {
        if (navigated) return;
        navigated = true;
        window.open(url, "_blank", "noopener");
      };

      gtag("event", "amazon_click", {
        button_name: buttonName,
        book_slug: bookSlug,
        page_variant: pageVariant,
        destination_url: url,
        page_location: window.location.href,
        page_title: document.title
      });

      // Give GA time to fire, but don't block UX
      setTimeout(go, 700);
    });
  });
});