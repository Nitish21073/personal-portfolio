import React from "react";
import "./about.css";
import ME from "../../assets/img.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <h5>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reprehenderit quae magni minima expedita, illo pariatur! Ea
                aliquid, officiis deleniti dolorum culpa molestiae veritatis ex
                vitae. Est, cupiditate reprehenderit? Numquam earum aperiam
                perferendis! Itaque sapiente rem tempore in officia, incidunt
                quas accusantium dolorem libero corporis ipsum exercitationem
                amet quisquam possimus repellat voluptates tenetur, pariatur
                eius.
              </h5>
            </article>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
