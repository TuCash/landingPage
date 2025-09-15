document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".beneficio-card, .plan-card, .feature-row");
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
});

const heroBtn = document.querySelector(".hero-button");
if (heroBtn) {
  heroBtn.addEventListener("click", e => {
    e.preventDefault();
    alert("Gracias por tu interés en TuCash. Muy pronto podrás registrarte.");
  });
}
