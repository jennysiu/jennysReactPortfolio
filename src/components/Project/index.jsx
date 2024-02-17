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
      <img src={props.image} alt={props.title} />
   

      <section className="project-text">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <a href={props.link}>Link | </a>
        <a href={props.github}>GitHub</a>
      </section>

    </div>
  )
}

export default Project;