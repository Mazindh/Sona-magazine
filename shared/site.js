(function(){
  const html = document.documentElement;
  try {
    const t = localStorage.getItem('sunaa-theme');
    if (t) html.setAttribute('data-theme', t);
  } catch(_) {}

  function ready(fn){
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function(){
    const themeBtn = document.getElementById('themeBtn');
    if (themeBtn) {
      themeBtn.addEventListener('click', function(){
        const cur = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', cur);
        try { localStorage.setItem('sunaa-theme', cur); } catch(_) {}
      });
    }
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');
    if (menuBtn && navLinks) {
      menuBtn.addEventListener('click', function(){ navLinks.classList.toggle('is-open'); });
      navLinks.addEventListener('click', function(e){
        if (e.target.tagName === 'A') navLinks.classList.remove('is-open');
      });
    }
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });
})();
