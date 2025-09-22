(function () {
  "use strict";

  function ready(callback) {
    if (document.readyState !== "loading") {
      callback();
    } else {
      document.addEventListener("DOMContentLoaded", callback, { once: true });
    }
  }

  function applyTheme(theme) {
    var root = document.documentElement;
    var normalized = theme === "dark" ? "dark" : "light";
    root.setAttribute("data-theme", normalized);
    root.classList.remove("theme-light", "theme-dark");
    root.classList.add("theme-" + normalized);

    try {
      window.localStorage.setItem("preferred-theme", normalized);
    } catch (error) {
      // Ignore storage errors (private mode, etc.)
    }

    return normalized;
  }

  function readStoredTheme() {
    try {
      return window.localStorage.getItem("preferred-theme");
    } catch (error) {
      return null;
    }
  }

  ready(function () {
    var assistantButton =
      document.querySelector("[data-assistant-button]") ||
      document.querySelector("#assistant-button");

    var assistantPanel =
      document.querySelector("[data-assistant-panel]") ||
      document.querySelector("#assistant-panel");

    var assistantCloseButtons = Array.prototype.slice.call(
      document.querySelectorAll("[data-assistant-dismiss], [data-assistant-close], #assistant-close")
    );

    function openAssistant(event) {
      if (event) {
        event.preventDefault();
      }

      if (assistantPanel) {
        assistantPanel.classList.add("is-visible");
        assistantPanel.removeAttribute("aria-hidden");
        document.body.classList.add("assistant-open");
        if (assistantButton) {
          assistantButton.setAttribute("aria-expanded", "true");
        }
      } else if (assistantButton && assistantButton.dataset.assistantUrl) {
        var target = assistantButton.getAttribute("target") || "_blank";
        window.open(assistantButton.dataset.assistantUrl, target, "noopener");
      }
    }

    function closeAssistant(event) {
      if (event) {
        event.preventDefault();
      }

      if (assistantPanel) {
        assistantPanel.classList.remove("is-visible");
        assistantPanel.setAttribute("aria-hidden", "true");
        document.body.classList.remove("assistant-open");
      }

      if (assistantButton) {
        assistantButton.setAttribute("aria-expanded", "false");
      }
    }

    if (assistantButton) {
      assistantButton.addEventListener("click", openAssistant);
    }

    if (assistantPanel) {
      assistantPanel.addEventListener("click", function (event) {
        if (event.target === assistantPanel) {
          closeAssistant(event);
        }
      });
    }

    assistantCloseButtons.forEach(function (button) {
      button.addEventListener("click", closeAssistant);
    });

    var storedTheme = readStoredTheme();
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    var initialTheme = storedTheme || (prefersDark ? "dark" : "light");
    var currentTheme = applyTheme(initialTheme);

    var themeToggle =
      document.querySelector("[data-theme-toggle]") ||
      document.querySelector("#theme-toggle");

    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", currentTheme === "dark" ? "true" : "false");

      themeToggle.addEventListener("click", function (event) {
        event.preventDefault();
        var newTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        applyTheme(newTheme);
        themeToggle.setAttribute("aria-pressed", newTheme === "dark" ? "true" : "false");
      });
    }
  });
})();
