import { useEffect, useState } from "react";
import "../styles/Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const response = await fetch("https://api.github.com/users/kevillin/repos");
    const data = await response.json();
    setProjects(data.filter((p) => p.id !== 
    490085984 && p.id !== 649930875));
  };

  return (
    <div>
      <h1 id="projetos">Repositório de Projects</h1>
      <hr />
      <div className="projects-container">
        {projects.map((project) => (
          <a id="projects-ancora" href={project.html_url} key={project.id}>
            <div className="project">
                <h2>{project.name.replace("-", " ")}</h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
