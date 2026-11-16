/* GeoFM Lab theme toggle. The <head> of every page sets html.dark before paint;
   this file only adds the button and persists the choice (one key for all pages). */
(function () {
  var KEY = "geofm-theme";
  var root = document.documentElement;

  function label(btn) {
    var dark = root.classList.contains("dark");
    btn.innerHTML = '<span class="ico" aria-hidden="true"></span><span class="lbl">' + (dark ? "Light" : "Dark") + "</span>";
    btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    btn.setAttribute("aria-pressed", dark ? "true" : "false");
  }

  function mount() {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "theme-toggle";
    label(btn);
    btn.addEventListener("click", function () {
      var dark = root.classList.toggle("dark");
      try { localStorage.setItem(KEY, dark ? "dark" : "light"); } catch (e) {}
      label(btn);
    });
    var slot = document.querySelector("[data-theme-slot]");
    if (slot) { slot.appendChild(btn); return; }
    btn.classList.add("floating");
    (document.querySelector("header") || document.body).appendChild(btn);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
