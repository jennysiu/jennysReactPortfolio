// [ ] Must be a reusable component that ingests JSON data as a props and renders a single instance for each project.
// [ ] Must utilize router props to properly render the right project based on user selection
// [ ] Must render the following info:
  // [ ] Project title
  // [ ] Link to the deployed version
  // [ ] Link to the GitHub repository
  // [ ] GIF or screenshot of the deployed application
import "./style.css";

function Project(props) {
  return (
    <div className="project-card">
      <section className="project-text">
        <h3>{props.title}</h3>
        <a href={props.link}>Deployed Link</a>
        <a href={props.github}>GitHub Repository</a>
      </section>
      <div className="project-image-container">
        <img src={props.image} alt={props.title} />
      </div>
    </div>
  )
}

export default Project;