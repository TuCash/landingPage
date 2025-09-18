function handleLogoClick() {
  if (window.innerWidth <= 768) {
    toggleMobileMenu();
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function toggleMobileMenu() {
  const mobileNav = document.getElementById('mobileNav');
  if (mobileNav) {
    mobileNav.classList.toggle('active');
  }
}

function closeMobileMenu() {
  const mobileNav = document.getElementById('mobileNav');
  if (mobileNav) {
    mobileNav.classList.remove('active');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('click', function(event) {
    const mobileNav = document.getElementById('mobileNav');
    const logo = document.querySelector('.logo');
    
    if (mobileNav && logo) {
      if (!mobileNav.contains(event.target) && !logo.contains(event.target)) {
        mobileNav.classList.remove('active');
      }
    }
  });

  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      const mobileNav = document.getElementById('mobileNav');
      if (mobileNav) {
        mobileNav.classList.remove('active');
      }
    }
  });
});