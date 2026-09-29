// Shared behaviour for the English (/) and Spanish (/es/) pages.
(function () {
  var es = document.documentElement.lang === "es";

  // Remember an explicit language choice so the auto-redirect on / respects it.
  var links = document.querySelectorAll("[data-set-lang]");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      try { localStorage.setItem("lp-lang", this.getAttribute("data-set-lang")); } catch (e) {}
    });
  }

  // For each location: highlight today's row and show open/closed in Fresno time (America/Los_Angeles).
  // Hours come from the table's data-hours ({day: [open, close] in decimal hours, or null}); keep them
  // in sync with the visible rows and the JSON-LD in index.html and es/index.html.
  var now;
  try {
    now = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
  } catch (e) {
    now = new Date();
  }
  var day = now.getDay();
  var h = now.getHours() + now.getMinutes() / 60;
  var tables = document.querySelectorAll("table.hours[data-hours]");
  for (var t = 0; t < tables.length; t++) {
    var table = tables[t], hours;
    try { hours = JSON.parse(table.getAttribute("data-hours")); } catch (e) { continue; }
    var row = table.querySelector('tr[data-day="' + day + '"]');
    if (row) row.classList.add("today");
    var el = table.previousElementSibling;
    if (!el || !el.classList.contains("status")) continue;
    var today = hours[day];
    if (today && h >= today[0] && h < today[1]) {
      el.textContent = es ? "● Abierto ahora" : "● Open now";
      el.className = "status open";
    } else {
      el.textContent = es ? "● Cerrado ahora" : "● Closed now";
      el.className = "status shut";
    }
  }
  var year = document.getElementById("year");
  if (year) year.textContent = now.getFullYear();
})();
