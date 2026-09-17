"use strict";
const back = document.querySelector('.top-link');
const topTarget = document.getElementById('top');
if (back && topTarget) back.addEventListener('click', event => {
  event.preventDefault();
  topTarget.focus({preventScroll: true});
  window.scrollTo({top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
});
