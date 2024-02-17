// [ ] Must render dynamically 6 instances of the Project component
  // [ ] Be sure to store your project data in a JSON file and import it into your project
import Project from "../components/Project"; 
import projectData from "../assets/data/projectData.json";
import "./styling/ProjectGallery.css";

function ProjectGallery() {
  return (
    <div>
      <h1>Project Gallery</h1>
      <section className="projects-container">
        {projectData.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
            github={project.github}
            image={project.image}
          />
        ))}
      </section>
    </div>
  )
}

export default ProjectGallery;