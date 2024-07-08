let rotateDirection = true;

function rotateProjectsSection() {
  const projectsSection = document.getElementById("projects");

  // Dodaj klasę rotating
  projectsSection.classList.add("rotating");

  if (rotateDirection) {
    projectsSection.style.transform = "rotateY(360deg)";
  } else {
    projectsSection.style.transform = "rotateY(-360deg)";
  }

  rotateDirection = !rotateDirection;

  // Usuń klasę rotating po zakończeniu animacji
  setTimeout(() => {
    projectsSection.classList.remove("rotating");
  }, 1000); // Czas musi odpowiadać czasowi trwania animacji CSS
}

document.addEventListener("DOMContentLoaded", () => {
  const projectItems = document.querySelectorAll("#projects-list li");

  projectItems.forEach((item) => {
    item.addEventListener("click", rotateProjectsSection);
  });
});
