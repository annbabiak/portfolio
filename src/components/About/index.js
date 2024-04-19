import React from "react";
import "./style.css";
import image_2 from "../../image/image_2.svg";

function About() {
  return (
    <section className="about__me" id="about">
      <div className="about__me__text">
        <h3>About me</h3>
        <p>My name is Anna, and I am from Lviv, Ukraine.</p>
        <p>
          I completed my Master's degree in Computer Science in 2023. I
          developed a fascination for front-end development during my time at
          university.
        </p>
        <p>
          To improve my knowledge and gain experience, I took several courses
          that helped me expand my technical skills.
        </p>
        <p>
          I have basic skills in HTML, CSS and JavaScript. Currently, I am
          actively working on improving my skills, especially focusing on
          learning React. The goal of my development is to improve the quality
          of my projects and create more interactive and dynamic web
          applications.
        </p>
        <p>
          In sum, though I'm a beginner, my sights are firmly set on becoming a
          proficient front-end developer.
        </p>
        <p>
          To obtain more detailed information about me, you can download my full
          resume by simply clicking the button below.
        </p>
        <div>
          <a
            href="../../../../CV/CV_Anna_Babiak_Junior_Front-End_Developer.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="cv__button"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="about__me__image">
        <img src={image_2} alt="About me"></img>
      </div>
    </section>
  );
}

export default About;
