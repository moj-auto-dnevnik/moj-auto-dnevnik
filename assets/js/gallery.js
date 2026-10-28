(function () {
  'use strict';
  var toggle = document.querySelector('[data-gallery-toggle]');
  var items = Array.from(document.querySelectorAll('.gallery-item'));
  var dialog = document.querySelector('#image-viewer');
  if (!toggle || !dialog || !items.length) return;
  var image = dialog.querySelector('img');
  var caption = dialog.querySelector('[data-viewer-caption]');
  var status = dialog.querySelector('[data-viewer-status]');
  var current = 0, expanded = false, opener = null;
  var labels = {
    sr: { all: 'Pogledaj sve slike', less: 'Prikaži četiri slike', open: 'Uvećaj sliku', error: 'Slika nije učitana.' },
    en: { all: 'Show all images', less: 'Show four images', open: 'Enlarge image', error: 'Image could not be loaded.' },
    de: { all: 'Alle Bilder anzeigen', less: 'Vier Bilder anzeigen', open: 'Bild vergrößern', error: 'Das Bild konnte nicht geladen werden.' }
  };
  function language() { return document.documentElement.lang === 'sr-Latn' ? 'sr' : document.documentElement.lang; }
  function words() { return labels[language()] || labels.sr; }
  function hydrate(item) {
    var img = item.querySelector('img');
    if (img.dataset.srcset) { img.srcset = img.dataset.srcset; delete img.dataset.srcset; }
    if (img.dataset.src) { img.src = img.dataset.src; delete img.dataset.src; }
  }
  function updateLabels() {
    toggle.textContent = expanded ? words().less : words().all;
    items.forEach(function (item) { item.querySelector('button').setAttribute('aria-label', words().open + ': ' + item.querySelector('img').alt); });
    if (dialog.open) { caption.textContent = items[current].querySelector('img').alt; image.alt = caption.textContent; }
  }
  toggle.addEventListener('click', function () {
    expanded = !expanded;
    items.slice(4).forEach(function (item) { item.hidden = !expanded; if (expanded) hydrate(item); });
    toggle.setAttribute('aria-expanded', String(expanded)); updateLabels();
    if (!expanded) toggle.scrollIntoView({ block: 'nearest', behavior: 'instant' });
  });
  function show(index) {
    current = (index + items.length) % items.length;
    var button = items[current].querySelector('button');
    image.alt = items[current].querySelector('img').alt;
    caption.textContent = image.alt; status.textContent = (current + 1) + ' / ' + items.length;
    image.src = button.dataset.full;
  }
  items.forEach(function (item, index) {
    item.querySelector('button').addEventListener('click', function (event) {
      opener = event.currentTarget; show(index); dialog.showModal(); document.body.classList.add('viewer-open');
    });
  });
  image.addEventListener('error', function () { status.textContent = words().error; });
  dialog.querySelector('[data-viewer-close]').addEventListener('click', function () { dialog.close(); });
  dialog.querySelector('[data-viewer-prev]').addEventListener('click', function () { show(current - 1); });
  dialog.querySelector('[data-viewer-next]').addEventListener('click', function () { show(current + 1); });
  dialog.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') { event.preventDefault(); show(current - 1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); show(current + 1); }
  });
  dialog.addEventListener('click', function (event) { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', function () { document.body.classList.remove('viewer-open'); image.removeAttribute('src'); if (opener) opener.focus({ preventScroll: true }); });
  document.addEventListener('website-language-change', updateLabels);
  updateLabels();
})();
