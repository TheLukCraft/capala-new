let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const icons = document.querySelector(".social-icons");
  const currentScrollY = window.scrollY;

  // Efekt "gonienia"
  const scrollDifference = currentScrollY - lastScrollY;
  icons.style.transition = "transform 0.5s ease-out";
  icons.style.transform = `translateY(${scrollDifference}px)`;

  // Reset transform after transition
  setTimeout(() => {
    icons.style.transition = "";
    icons.style.transform = "translateY(0)";
  }, 500);

  lastScrollY = currentScrollY;
});
