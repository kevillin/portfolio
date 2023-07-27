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

    console.log(data)
    setProjects(data.filter((p) => p.id !== 
    490085984 && p.id !== 649930875));
  };

  return (
    <div>
      <h1 id="projetos">Repositório de Projetos</h1>
      <hr />
      <div className="projects-container">
        {projects.map((project) => (
          <a id="projects-ancora" href={project.html_url} key={project.id}>
            <div className="project">
                <h2>{project.name.replaceAll("-", " ").replace("project", "")}</h2>
                <p>{project.description}</p>
                <p>Linguagem Usada: {project.language}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
