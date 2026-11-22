/* Keep every photo in the archive when JavaScript is unavailable. */
(() => {
  document.querySelectorAll('[data-news-carousel]').forEach((gallery) => {
    const photos = Array.from(gallery.querySelectorAll(':scope > figure'));
    const controls = gallery.querySelector('.news-gallery-controls');
    const previous = controls.querySelector('[data-news-photo-previous]');
    const next = controls.querySelector('[data-news-photo-next]');
    const counter = controls.querySelector('.news-gallery-counter');
    let current = 0;

    function movePhoto(step) {
      photos[current].hidden = true;
      current = (current + step + photos.length) % photos.length;
      photos[current].hidden = false;
      counter.textContent = `${current + 1} / ${photos.length}`;
    }

    previous.addEventListener('click', () => movePhoto(-1));
    next.addEventListener('click', () => movePhoto(1));
    controls.addEventListener('keydown', (event) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      movePhoto(event.key === 'ArrowLeft' ? -1 : 1);
    });

    for (const photo of photos.slice(1)) photo.hidden = true;
    gallery.classList.add('is-carousel');
    controls.hidden = false;
  });
})();
