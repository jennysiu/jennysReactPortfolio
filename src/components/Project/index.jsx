// [x] Must be a reusable component that ingests JSON data as a props and renders a single instance for each project.
// [x] Must utilize router props to properly render the right project based on user selection
// [x] Must render the following info:
  // [x] Project title
  // [x] Link to the deployed version
  // [x] Link to the GitHub repository
  // [x] GIF or screenshot of the deployed application
import "./style.css";

function Project(props) {
  return (
    <div className="project-card">
      <a href={props.link} className="project-image-link" target="_blank" rel="noopener noreferrer">
        <div className="project-image-container">
          <img src={props.image} alt={props.title} className="project-image"/>
        </div>
      </a>
      
      <section className="project-text">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div className="project-links">
          <a className="project-link" href={props.link}>Link</a>
          <span className="link-divider"> / </span>
          <a className="project-link" href={props.github}>GitHub</a>
        </div>
      </section>

    </div>
  )
}

export default Project;