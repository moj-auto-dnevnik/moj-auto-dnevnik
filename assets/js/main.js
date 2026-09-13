/* Moj Auto Dnevnik — website interactions */
(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  var langButtons = document.querySelectorAll("[data-lang-choice]");
  var page = document.documentElement;
  var head = document.querySelector("head");
  var titleEl = document.querySelector("title");
  var descriptionEl = document.querySelector('meta[name="description"]');

  function setLanguage(lang) {
    lang = lang === "en" ? "en" : "sr";

    document.querySelectorAll("[data-sr][data-en]").forEach(function (el) {
      el.textContent = lang === "en"
        ? el.getAttribute("data-en")
        : el.getAttribute("data-sr");
    });

    document.querySelectorAll("[data-label-sr][data-label-en]").forEach(function (el) {
      el.setAttribute(
        "aria-label",
        lang === "en"
          ? el.getAttribute("data-label-en")
          : el.getAttribute("data-label-sr")
      );
    });

    page.setAttribute("lang", lang === "en" ? "en" : "sr-Latn");

    if (head && titleEl) {
      var ts = head.getAttribute("data-title-sr");
      var te = head.getAttribute("data-title-en");
      if (ts && te) {
        titleEl.textContent = lang === "en" ? te : ts;
      }
    }

    if (descriptionEl) {
      var ds = descriptionEl.getAttribute("data-description-sr");
      var de = descriptionEl.getAttribute("data-description-en");
      if (ds && de) {
        descriptionEl.setAttribute(
          "content",
          lang === "en" ? de : ds
        );
      }
    }

    langButtons.forEach(function (button) {
      var active =
        button.getAttribute("data-lang-choice") === lang;

      button.setAttribute(
        "aria-pressed",
        active ? "true" : "false"
      );

      button.classList.toggle("active", active);
    });

    try {
      localStorage.setItem("mojAutoDnevnikLang", lang);
    } catch (e) {}
  }

  if (langButtons.length) {
    langButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        setLanguage(
          button.getAttribute("data-lang-choice")
        );
      });
    });

    var savedLang = "sr";

    try {
      savedLang =
        localStorage.getItem("mojAutoDnevnikLang") || "sr";
    } catch (e) {}

    setLanguage(savedLang);
  }

  var here =
    (location.pathname.split("/").pop() || "index.html")
      .toLowerCase();

  document.querySelectorAll(".nav-links a").forEach(function (a) {
    var href =
      (a.getAttribute("href") || "").toLowerCase();

    if (
      href === here ||
      (here === "" && href === "index.html")
    ) {
      a.classList.add("active");
    }
  });

  var reduce =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

  var els = document.querySelectorAll(".reveal");

  if (
    !reduce &&
    "IntersectionObserver" in window &&
    els.length
  ) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.08
      }
    );

    els.forEach(function (el) {
      io.observe(el);
    });
  } else {
    els.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
