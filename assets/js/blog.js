/* Local, progressive enhancement: every published post is readable without JS. */
(function () {
  "use strict";
  document.querySelectorAll("[data-blog-index]").forEach(function (index) {
    var tools = index.querySelector("[data-blog-tools]");
    if (!tools) return;
    var search = index.querySelector("[data-blog-search]");
    var filters = Array.from(index.querySelectorAll("[data-blog-filter]"));
    var posts = Array.from(index.querySelectorAll("[data-blog-post]"));
    var count = index.querySelector("[data-blog-count]");
    var empty = index.querySelector("[data-blog-no-results]");
    var category = "all";

    function update() {
      var terms = search.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
      var visible = 0;
      posts.forEach(function (post) {
        var text = post.dataset.search.toLocaleLowerCase();
        var matches = (category === "all" || post.dataset.category === category) &&
          terms.every(function (term) { return text.indexOf(term) !== -1; });
        post.hidden = !matches;
        if (matches) visible += 1;
      });
      filters.forEach(function (button) {
        button.setAttribute("aria-pressed", String(button.dataset.blogFilter === category));
      });
      count.textContent = visible + " " + index.dataset.resultUnit;
      empty.hidden = visible !== 0;
    }

    filters.forEach(function (button) {
      button.addEventListener("click", function () {
        category = button.dataset.blogFilter;
        update();
      });
    });
    search.addEventListener("input", update);
    index.querySelector("[data-blog-reset]").addEventListener("click", function () {
      category = "all";
      search.value = "";
      update();
      search.focus();
    });
    tools.hidden = false;
    update();
  });
})();
