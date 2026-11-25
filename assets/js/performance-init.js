(function () {
  "use strict";

  function enableLazyLoading(image) {
    if (image.hasAttribute("loading") && image.getAttribute("loading") === "eager") {
      return;
    }

    if (!image.hasAttribute("loading")) {
      image.setAttribute("loading", "lazy");
    }
    if (!image.hasAttribute("decoding")) {
      image.setAttribute("decoding", "async");
    }
  }

  function prepareBelowFoldImages(root) {
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    var images = root.querySelectorAll ? root.querySelectorAll("img") : [];

    for (var i = 0; i < images.length; i += 1) {
      if (images[i].getBoundingClientRect().top >= viewportHeight) {
        enableLazyLoading(images[i]);
      }
    }
  }

  function initializeImageLoading() {
    prepareBelowFoldImages(document);

    if (window.MutationObserver) {
      var observer = new window.MutationObserver(function (mutations) {
        for (var i = 0; i < mutations.length; i += 1) {
          for (var j = 0; j < mutations[i].addedNodes.length; j += 1) {
            var node = mutations[i].addedNodes[j];
            if (node.nodeType === 1) {
              if (node.matches && node.matches("img") &&
                  node.getBoundingClientRect().top >= (window.innerHeight || document.documentElement.clientHeight)) {
                enableLazyLoading(node);
              }
              prepareBelowFoldImages(node);
            }
          }
        }
      });

      observer.observe(document.documentElement, { childList: true, subtree: true });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeImageLoading, { once: true });
  } else {
    initializeImageLoading();
  }
}());
