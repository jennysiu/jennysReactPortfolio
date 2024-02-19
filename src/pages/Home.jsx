// This should be a welcome landing page that contains:
// [x] Your Name
// [x] A Headshot of you
// [x] Your brand statement
// [x] Some indication that this is your portfolio site
import jennyHeadshot from "../assets/images/jennyHeadshot.jpeg";
import "./styling/Home.css"

function Home() {
  return (
    <section className="home-section">
      <div className="header-container">
        <div className="text-container">
          <p className="greetings">Hello world 👋</p>
          <h1>I'm Jenny, Front-End Web Developer.</h1>
          <p className="brand-statement">
            "Inpired by nature and always learning."
          </p>
        </div>
        <img className="jenny-headshot" src={jennyHeadshot} alt="Picture of Jenny Siu" />
      </div>
      <div className="about-me">
        <h2>About Me</h2>
        <p> Hi, I'm Jenny Siu, a front-end web developer with a passion for creating beautiful, responsive, and user-friendly websites and applications. 
            <br />
            <br />
            I am a recent graduate of the Front-End Web Development Bootcampng my as a developer, where I learnt some of the latest technologies including React. Welcome to my React Portfolio website. 
          </p>
      </div>
    </section>
  )
}

export default Home;
