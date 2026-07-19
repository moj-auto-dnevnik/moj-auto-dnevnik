/* FAQ client-side search: filters items by question or answer text. */
(function () {
  "use strict";
  var input = document.getElementById("faq-search");
  var empty = document.querySelector(".faq-empty");
  if (!input) return;

  function normalize(s) { return (s || "").toLowerCase(); }

  input.addEventListener("input", function () {
    var q = normalize(input.value.trim());
    var anyVisible = false;

    document.querySelectorAll(".faq-group").forEach(function (group) {
      var groupVisible = false;
      group.querySelectorAll(".faq-item").forEach(function (item) {
        var text = normalize(item.textContent);
        var match = q === "" || text.indexOf(q) !== -1;
        item.style.display = match ? "" : "none";
        if (match) { groupVisible = true; anyVisible = true; }
        if (q && match) item.setAttribute("open", ""); else if (!q) item.removeAttribute("open");
      });
      group.style.display = groupVisible ? "" : "none";
    });

    if (empty) empty.classList.toggle("show", !anyVisible);
  });
})();
