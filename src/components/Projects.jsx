import { useEffect, useState } from "react"
import ComputerImg from "../assets/computer.png"
import "../styles/Projects.css"

function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    const response = await fetch('https://api.github.com/users/kevillin/repos')
    const data = await response.json()
    setProjects(data)
  } 


  return (
    <div>
    <h1>Repositório de Projects</h1>
    <hr />
    <div className="projects-container">
      {projects.map((project, index) => (
        <div className="project" key={project.id}>
          <a href={project.html_url}>
          <img className="project-img" src={ComputerImg} alt="computer-img" /></a>
          <div>
            <h1>{`Project #${index}`}</h1>
            <h2>{project.name.replace('-', ' ')}</h2>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Projects