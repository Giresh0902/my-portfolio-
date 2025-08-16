import React from "react";
import video from "../assets/OOPS_PROJECT_VIDEO.mp4";
import p1 from "../assets/p1.png";

function Projects() {
  return (
    <div className="projects">
      <section id="section-4">
        <div className="pr1">
          <h1>PROJECTS</h1>
          <h2 className="p1">Simple-Bank in java(oops)</h2>
          <video controls>
            <source src={video} type="video/mp4"></source>
          </video>
          <div className="p1d">
            <p>
              Built a Java-based OOPs project for managing bank operations like
              account creation, transactions, and balance inquiry.
            </p>
            <p>
              <strong>Implemented OOP principles such as:</strong>
            </p>
            <ul>
              <li>
                <strong>Encapsulation:</strong> Secured account details and user
                data within classes.
              </li>
              <li>
                <strong>Abstraction:</strong> Provided a simplified interface
                for banking operations.
              </li>
              <li>
                <strong>Inheritance:</strong> Used base classes for common
                banking features and derived classes for specific account types.
              </li>
              <li>
                <strong>Polymorphism:</strong> Allowed flexibility in
                transaction processing and interest calculation.
              </li>
              <a
                href="https://github.com/Giresh0902/BANK-MANAGEMENT-SYSTEM.git"
                className="github-link"
              >
                <i class="fab fa-github fa-2x"></i>
              </a>
              <a
                href="https://www.linkedin.com/posts/giresh-immidisetty-4b2101260_java-oop-bankingsystem-activity-7296410373446897664-50mS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAWVYYBsGkSzz6rUPd9KQLGlw4sL8nGlEg"
                className="linkedin-link"
              >
                <i class="fab fa-linkedin fa-2x"></i>
              </a>
            </ul>
          </div>
        </div>
        <div className="pr2">
          <h2>Number Plate Detection System</h2>
          <div class="project-container">
            <img src={p1} className="img1" />

            <p>
              Developed a{" "}
              <span class="highlight">computer vision-based system</span> to
              detect and extract vehicle number plates from images and videos.
            </p>

            <p>
              The system processes input data, recognizes license plate numbers
              using OCR techniques, and integrates with a web interface for
              real-time display and interaction.
            </p>

            <p class="tech-used">
              <strong class="highlight">Technologies Used:</strong>
              EJS, CSS, Python, OpenCV, EasyOCR, Node.js, MongoDB
            </p>
            <a
                href="https://github.com/Giresh0902/BANK-MANAGEMENT-SYSTEM.git"
                className="github-link"
              >
                <i class="fab fa-github fa-2x"></i>
              </a>
              <a
                href="https://www.linkedin.com/posts/giresh-immidisetty-4b2101260_java-oop-bankingsystem-activity-7296410373446897664-50mS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAWVYYBsGkSzz6rUPd9KQLGlw4sL8nGlEg"
                className="linkedin-link"
              >
                <i class="fab fa-linkedin fa-2x"></i>
              </a>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Projects;
