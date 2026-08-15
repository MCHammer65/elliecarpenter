/* =========================================================
   Ellie Carpenter — portfolio
   No dependencies. Everything degrades to a working page
   if this file never loads.
   ========================================================= */

(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Current year in the footer ---------- */

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Mobile navigation ---------- */

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primaryNav');

  if (toggle && nav) {
    var setNav = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      nav.setAttribute('data-open', String(open));
    };

    toggle.addEventListener('click', function () {
      setNav(toggle.getAttribute('aria-expanded') !== 'true');
    });

    // Close after following an in-page link.
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setNav(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setNav(false);
        toggle.focus();
      }
    });
  }

  /* ---------- Header shadow once scrolled ---------- */

  var header = document.getElementById('siteHeader');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-stuck', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Lightbox ----------
     Built before the image pass below, so that frames whose photographs
     are already cached still get wired up. Only built if the page has
     zoomable figures at all. */

  var enableZoom = function () {};
  var zoomables = document.querySelectorAll('.frame--zoomable');

  if (zoomables.length) {
    var lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Image viewer');
    lightbox.setAttribute('data-open', 'false');
    lightbox.innerHTML =
      '<button class="lightbox__close" type="button" aria-label="Close image viewer">&times;</button>' +
      '<div><img alt=""><p class="lightbox__caption"></p></div>';
    document.body.appendChild(lightbox);

    var boxImg = lightbox.querySelector('img');
    var boxCaption = lightbox.querySelector('.lightbox__caption');
    var closeBtn = lightbox.querySelector('.lightbox__close');
    var lastFocused = null;

    var openBox = function (frame) {
      var img = frame.querySelector('img');
      // Nothing to enlarge until the photograph has loaded.
      if (!img || !frame.classList.contains('is-loaded')) return;

      lastFocused = document.activeElement;
      boxImg.src = img.currentSrc || img.src;
      boxImg.alt = img.alt || '';
      boxCaption.textContent = img.getAttribute('data-caption') || img.alt || '';
      lightbox.setAttribute('data-open', 'true');
      document.body.style.overflow = 'hidden';
      // Wait for the style change to flush — a visibility:hidden element
      // cannot take focus, so focusing in the same frame silently fails.
      requestAnimationFrame(function () { closeBtn.focus(); });
    };

    var closeBox = function () {
      lightbox.setAttribute('data-open', 'false');
      document.body.style.overflow = '';
      boxImg.removeAttribute('src');
      if (lastFocused && lastFocused.focus) lastFocused.focus();
    };

    // A frame becomes a real control only once there is something to open.
    enableZoom = function (frame) {
      if (frame.hasAttribute('role')) return;
      var img = frame.querySelector('img');
      frame.setAttribute('role', 'button');
      frame.setAttribute('tabindex', '0');
      frame.setAttribute('aria-label', 'Enlarge image' + (img && img.alt ? ': ' + img.alt : ''));
    };

    Array.prototype.forEach.call(zoomables, function (frame) {
      frame.addEventListener('click', function () { openBox(frame); });
      frame.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openBox(frame);
        }
      });
    });

    closeBtn.addEventListener('click', closeBox);
    lightbox.addEventListener('click', function (e) {
      // Clicking the backdrop, or the padding around the image, closes it.
      if (e.target === lightbox || e.target.tagName === 'DIV') closeBox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.getAttribute('data-open') === 'true') closeBox();
    });
    // Close is the only control inside, so keep Tab from escaping the dialog.
    lightbox.addEventListener('keydown', function (e) {
      if (e.key === 'Tab') {
        e.preventDefault();
        closeBtn.focus();
      }
    });
  }

  /* ---------- Image loading ----------
     Each figure shows a printed-looking placeholder until its photograph
     loads. A missing file simply leaves the placeholder in view rather
     than breaking the layout. */

  var markLoaded = function (img) {
    var frame = img.closest('.frame');
    if (!frame) return;
    frame.classList.add('is-loaded');
    if (frame.classList.contains('frame--zoomable')) enableZoom(frame);
  };

  Array.prototype.forEach.call(document.querySelectorAll('.frame img'), function (img) {
    if (img.complete) {
      // Cached, or already failed. naturalWidth is 0 only on failure.
      if (img.naturalWidth > 0) markLoaded(img);
      return;
    }
    img.addEventListener('load', function () { markLoaded(img); });
  });

  /* ---------- Reveal on scroll ---------- */

  var revealables = document.querySelectorAll('.reveal');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(revealables, function (el) {
      el.classList.add('is-visible');
    });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });

    Array.prototype.forEach.call(revealables, function (el) { observer.observe(el); });
  }
})();
