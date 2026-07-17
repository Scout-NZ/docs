/* Te Awhi — progressive enhancement only.
   The site is fully usable with this file absent. */
(function () {
  "use strict";

  // Signal JS availability (gates the awa animation in CSS)
  document.documentElement.classList.add("js");

  // Awa motif: draw the river line when it scrolls into view
  var awaLines = document.querySelectorAll(".awa[data-animate]");
  if ("IntersectionObserver" in window && awaLines.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("awa-flow");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    awaLines.forEach(function (el) { observer.observe(el); });
  } else {
    awaLines.forEach(function (el) { el.classList.add("awa-flow"); });
  }

  // Mobile navigation: reveal the toggle button and collapse the nav.
  // Without this script the nav stays permanently visible (stacked).
  var navToggle = document.querySelector(".nav-toggle");
  var siteNav = document.getElementById("site-nav");
  if (navToggle && siteNav) {
    navToggle.removeAttribute("hidden");
    navToggle.addEventListener("click", function () {
      var open = siteNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    siteNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        siteNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Crisis panel: close on Escape and on click outside.
  var crisis = document.querySelector("details.crisis");
  if (crisis) {
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && crisis.open) {
        crisis.removeAttribute("open");
        var summary = crisis.querySelector("summary");
        if (summary) summary.focus();
      }
    });
    document.addEventListener("click", function (e) {
      if (crisis.open && !crisis.contains(e.target)) crisis.removeAttribute("open");
    });
  }
})();
