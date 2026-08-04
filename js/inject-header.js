// inject-header.js
// Centralized site header injection to keep navigation DRY
(function(){
  const headerHtml = `
    <header class="header">
        <div class="container nav">
            <a href="index.html" class="logo">
                <img src="images/logo.png" alt="Abroad Safaris Logo">
                <span data-i18n="nav.brand">Abroad Safaris</span>
            </a>
            <ul class="nav-links">
                <li><a href="index.html" data-i18n="nav.home">Home</a></li>
                <li><a href="about.html" data-i18n="nav.about">About</a></li>
                <li><a href="explore.html" data-i18n="nav.explore">Destinations</a></li>
                <li><a href="tours.html" data-i18n="nav.tours">Safaris</a></li>
                <li><a href="services.html" data-i18n="nav.services">Services</a></li>
                <li><a href="blog.html" data-i18n="nav.blog">Blog</a></li>
                <li><a href="contact.html" data-i18n="nav.contact">Contact</a></li>
            </ul>
            <div style="display: flex; align-items: center; gap: 0.75rem;">
                <div class="lang-switcher">
                    <button class="lang-btn active" data-lang="en" aria-label="Switch to English">EN</button>
                    <button class="lang-btn" data-lang="fr" aria-label="Switch to French">FR</button>
                </div>
                <a href="contact.html?inquiry=plan-your-trip#quiz" class="btn btn-primary" style="padding: 0.6rem 1.5rem; font-size: 0.875rem;" data-i18n="nav.cta">Start Planning</a>
                <div class="mobile-toggle"><i class="fas fa-bars"></i></div>
            </div>
        </div>
    </header>
  `;

  // Insert into placeholder(s)
  function inject() {
    const placeholder = document.getElementById('site-header');
    if (placeholder) {
      placeholder.innerHTML = headerHtml;

      // After injection, re-apply translations & bind switcher
      if (window.AbroadI18n) {
        const savedLang = localStorage.getItem('as_lang') || 'en';
        window.AbroadI18n.applyTranslations(savedLang);
        window.AbroadI18n.bindSwitcher();
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
