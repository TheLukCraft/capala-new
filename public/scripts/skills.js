// skills.js
document.addEventListener("DOMContentLoaded", () => {
  const skills = [
    { name: "C#", imgSrc: "img/skills/c-sharp.png" },
    { name: "ASP.NET Core", imgSrc: "img/skills/aspdotnet.png" },
    { name: "JavaScript", imgSrc: "img/skills/javascript.png" },
    { name: "Vue.js", imgSrc: "img/skills/vue.png" },
    { name: "HTML", imgSrc: "img/skills/html.png" },
    { name: "CSS", imgSrc: "img/skills/css.png" },
    { name: "SQL Server", imgSrc: "img/skills/sql.png" },
    { name: "Git Source Control", imgSrc: "img/skills/git.png" },
    { name: "Azure", imgSrc: "img/skills/azure.png" },
    { name: "Docker", imgSrc: "img/skills/docker.png" },
  ];

  const skillsContainer = document.getElementById("skills-container");

  skills.forEach((skill) => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = skill.imgSrc;
    img.alt = skill.name;

    const p = document.createElement("p");
    p.textContent = skill.name;

    card.appendChild(img);
    card.appendChild(p);
    skillsContainer.appendChild(card);
  });
});
