(() => {
  const notice = document.querySelector('[data-translation-notice]');
  if (notice && new URLSearchParams(window.location.search).get('translation') === 'unavailable') notice.hidden = false;
})();
