import "./App.css";
import image from "./assets/myimg.jpg";
import loimg from "./assets/vector-location-icon.jpg";
import coimg from "./assets/college.jpg";
import Education from "./Components/education";
import Skills from "./Components/Techni";
import Projects from "./Components/Projects";
import Contact from "./Components/Contactme";
function App() {
  return (
    <>
      <div className="innerbody">
        <header>
          <h1>Giresh</h1>
          <a>giresh09022004@gmail.com</a>
        </header>
        <section id="section-1">
          <p className="intro1">
            Hi There,
            <br /> I'm Giresh
          </p>
          <p className="intro2">
            I'm passionate about creating, learning,
            <br /> and building meaningful things.
            <br />
            Driven by curiosity and a love for solving problems.
          </p>
          <img src={image} className="img1" />
          <img src={loimg} className="img2" />
          <img src={coimg} className="img3" />
          <p className="add1">Paderu</p>
          <p className="add2">
            Maharaj Vijayaram Gajapathi Raj College of Engineering
          </p>
        </section>
       <div className="details">
         <Education/>
        <Skills/>
       </div>
       <Projects/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
