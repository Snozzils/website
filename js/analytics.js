document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a[href*='amazon.']").forEach(function (link) {
    link.addEventListener("click", function (event) {
      const url = link.href;
      const buttonName = link.dataset.tracking || "amazon_link";

      if (typeof gtag === "function") {
        event.preventDefault();

        gtag("event", "amazon_click", {
          button_name: buttonName,
          destination_url: url,
          page_location: window.location.href,
          page_title: document.title,
          event_callback: function () {
            window.open(url, "_blank", "noopener");
          }
        });

        setTimeout(function () {
          window.open(url, "_blank", "noopener");
        }, 700);
      }
    });
  });
});