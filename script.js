// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/*
  TODO (edit once your Page/LinkedIn Group URLs exist):
  Replace the placeholder "#" hrefs below with your real links,
  or just edit the href="#" values directly in index.html for
  #fbPageLink and #linkedinLink.
*/
const fbPage = document.getElementById('fbPageLink');
const linkedin = document.getElementById('linkedinLink');
// Example once ready:
// if (fbPage) fbPage.href = "https://www.facebook.com/YOUR_PAGE_USERNAME";
// if (linkedin) linkedin.href = "https://www.linkedin.com/groups/XXXXXXXX/";
