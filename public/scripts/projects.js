const projects = [
  {
    name: "Project One",
    description: "This is the description for Project One.",
    github: "https://github.com/user/project-one",
    live: "https://project-one.example.com",
  },
  {
    name: "Project Two",
    description: "This is the description for Project Two.",
    github: "https://github.com/user/project-two",
    live: "https://project-two.example.com",
  },
  {
    name: "Project Three",
    description: "This is the description for Project Three.",
    github: "https://github.com/user/project-three",
    live: "https://project-three.example.com",
  },
];

window.onload = () => {
  const projectsList = document.getElementById("projects-list");
  const projectName = document.getElementById("project-name");
  const projectDescription = document.getElementById("project-description");
  const githubLink = document.getElementById("github-link");
  const liveLink = document.getElementById("live-link");

  // Populate the project list
  projectsList.innerHTML = "";
  projects.forEach((project, index) => {
    const projectItem = document.createElement("li");
    projectItem.classList.add(
      "cursor-pointer",
      "hover:underline",
      "hover:decoration-wavy"
    );
    projectItem.textContent = project.name;
    projectItem.onclick = () => {
      projectName.textContent = project.name;
      projectDescription.textContent = project.description;
      githubLink.href = project.github;
      liveLink.href = project.live;
    };
    projectsList.appendChild(projectItem);
  });

  // Set the initial project details
  if (projects.length > 0) {
    projectName.textContent = projects[0].name;
    projectDescription.textContent = projects[0].description;
    githubLink.href = projects[0].github;
    liveLink.href = projects[0].live;
  }
};
