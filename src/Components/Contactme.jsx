import React from "react";
import my_resume from "../assets/22331A1238.pdf";
function Contact() {
    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <p><i class="fa-solid fa-square-phone" aria-hidden="true"></i>7386600549</p>
            <p><i class="fa-solid fa-envelope" aria-hidden="true"></i>giresh09022004@gmail.com</p>
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
              <a className="github-link">
                <i class="fa-brands fa-whatsapp fa-2x" aria-hidden="true"></i>
              </a>
              <a href={my_resume} download=""><button>Download CV</button></a>
        </div>
    );
    
}

export default Contact