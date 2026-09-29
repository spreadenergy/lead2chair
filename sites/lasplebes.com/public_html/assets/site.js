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

  // Cesar Chavez hours: highlight today and show open/closed in Fresno time (America/Los_Angeles).
  // Keep in sync with the hours tables and JSON-LD in index.html and es/index.html.
  var hours = { 0: [9, 17], 1: null, 2: [10, 18], 3: [10, 18], 4: [10, 18], 5: [10, 18], 6: [9, 17] };
  var now;
  try {
    now = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
  } catch (e) {
    now = new Date();
  }
  var day = now.getDay();
  var h = now.getHours() + now.getMinutes() / 60;
  var row = document.querySelector('#hours-chavez tr[data-day="' + day + '"]');
  if (row) row.classList.add("today");

  var el = document.getElementById("status");
  if (el) {
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
