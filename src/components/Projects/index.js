import React from "react";
import "./style.css";
import shopping_list from "../../image/shopping_list.png";
import memory_game from "../../image/memory_game.png";

function Projects() {
  return (
    <section className="project__cards__container" id="projects">
      <h3>Projects</h3>
      <div className="project__card">
        <div className="project__image">
          <a
            href="https://annbabiak.github.io/shopping-list/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={shopping_list} alt="Shopping List"></img>
          </a>
        </div>
        <div className="project__description">
          <h4>Shopping List</h4>
          <p>
            I created a React application that allows for the management of a
            shopping list. I implemented a dynamic interface, enabling items to
            be added, deleted, and edited, as well as marking them as purchased
            by crossing them off the list. I used CSS for an appealing design
            and user-friendly interface.
          </p>
          <div>
            <a
              href="https://github.com/annbabiak/shopping-list"
              target="_blank"
              rel="noopener noreferrer"
              className="project__button"
            >
              View Project
            </a>
          </div>
        </div>
      </div>

      <div className="project__card">
        <div className="project__description">
          <h4>Memory Game</h4>
          <p>
            Memory Game is an interactive game developed using React. The game
            allows users to test their memory by looking for matching pairs of
            cards. This project demonstrate my skills in working with React,
            including creating components, managing state, and using React
            Hooks. I also used CSS to create an attractive user interface.
          </p>
          <div>
            <a
              href="https://github.com/annbabiak/memory-game"
              target="_blank"
              rel="noopener noreferrer"
              className="project__button"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="project__image">
          <a
            href="https://annbabiak.github.io/memory-game/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={memory_game} alt="Memory Game"></img>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
