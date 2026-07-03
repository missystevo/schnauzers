/* ==========================================================================
   The Mini Schnauzer Guide — script.js
   1) Accessible mobile navigation toggle (keyboard + aria-expanded)
   2) Contact form processing: inline validation, error messages shown
      BEFORE submit, and a success message on completion.
   3) Auto-updates the footer year.
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- 1. Mobile navigation ---------- */
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.querySelector(".label").textContent = open ? "Close" : "Menu";
    });

    // Close the menu when a link is chosen or Escape is pressed
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.querySelector(".label").textContent = "Menu";
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.querySelector(".label").textContent = "Menu";
        toggle.focus();
      }
    });
  }

  /* ---------- 2. Contact form ---------- */
  const form = document.getElementById("contact-form");
  if (form) {
    const status = document.getElementById("form-status");
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Each rule: field id -> validation function returning true when valid
    const rules = {
      name:    (v) => v.trim().length >= 2,
      email:   (v) => emailRe.test(v.trim()),
      subject: (v) => v.trim() !== "",
      message: (v) => v.trim().length >= 10,
    };

    function setInvalid(field, invalid) {
      const wrap = field.closest(".field");
      wrap.classList.toggle("invalid", invalid);
      field.setAttribute("aria-invalid", String(invalid));
    }

    // Live-clear an error as soon as the user fixes the field
    Object.keys(rules).forEach(function (id) {
      const field = document.getElementById(id);
      if (!field) return;
      field.addEventListener("input", function () {
        if (rules[id](field.value)) setInvalid(field, false);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();               // process with script, no page reload
      status.className = "form-status";
      status.textContent = "";

      let firstInvalid = null;
      Object.keys(rules).forEach(function (id) {
        const field = document.getElementById(id);
        const ok = rules[id](field.value);
        setInvalid(field, !ok);
        if (!ok && !firstInvalid) firstInvalid = field;
      });

      if (firstInvalid) {
        status.classList.add("failure");
        status.textContent = "Please fix the highlighted fields and try again.";
        firstInvalid.focus();           // move keyboard focus to the problem
        return;
      }

      // Success — in a real deployment this is where you'd send the data.
      const name = document.getElementById("name").value.trim();
      status.classList.add("success");
      status.textContent = "Thanks, " + name + "! Your message has been sent. We'll reply soon.";
      form.reset();
    });
  }

  /* ---------- 3. Footer year ---------- */
  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
})();
