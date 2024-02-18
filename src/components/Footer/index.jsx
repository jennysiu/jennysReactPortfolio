import '@fortawesome/fontawesome-free/css/all.css';
import './style.css';

function Footer() {
  return (
    <footer>
      <section className="footer-links">
        <a href="https://github.com/jennysiu">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/jenny-siu-534576156/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="mailto:jenny.siu79@gmail.com">
          <i className="fa-solid fa-envelope"></i>
        </a>
      </section>  
      <p>© Jenny Siu. All rights</p>
    </footer>
  )
}

export default Footer;