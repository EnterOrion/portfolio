import { FC } from "react";
import Snail from "../assets/icons/caracol.png";
import Cart from "../assets/icons/cart.png";
import Journal from "../assets/icons/journal.png";
import Weather from "../assets/icons/weather.png";
import Cat from "../assets/icons/cat.png";

const Projects: FC = () => {
  return (
    <section className="projects">
      <header className="projects-header section-header">
        <h1>Projects</h1>
      </header>
      <div className="project-container">
        <div className="project-video"></div>
        <div className="project-overview">
          <div className="project-name">
            <img className="project-icon" src={Snail} alt="" />
            Snail Pic of the Day
          </div>
          <div className="project-links">
            <div className="github-link">
              <a
                href="https://github.com/EnterOrion/snail-pic-of-the-day"
                target="_blank"
              >
                Code
              </a>
            </div>
            <div className="preview-link">
              <a
                href="https://enterorion.github.io/snail-pic-of-the-day/#/"
                target="_blank"
              >
                Live
              </a>
            </div>
          </div>
          <div className="project-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi labore
            totam deleniti illum laborum quasi repellat doloremque quam error
            suscipit sint odit, alias quisquam fugiat sunt inventore placeat
            sapiente eos.
          </div>
        </div>
      </div>
      <div className="project-container">
        <div className="project-overview">
          <div className="project-name">
            <img className="project-icon" src={Cart} alt="" />
            Shopping Cart
          </div>
          <div className="project-links">
            <div className="github-link">
              <a
                href="https://github.com/EnterOrion/shopping-cart"
                target="_blank"
              >
                Code
              </a>
            </div>
            <div className="preview-link">
              <a
                href="https://enterorion.github.io/shopping-cart/#/"
                target="_blank"
              >
                Live
              </a>
            </div>
          </div>
          <div className="project-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            ipsum dolores officia odit qui commodi ipsam nesciunt eum? Explicabo
            tempora cum amet! Eos excepturi porro quibusdam quidem cumque enim
            numquam.
          </div>
        </div>
        <div className="project-video"></div>
      </div>
      <div className="project-container">
        <div className="project-video"></div>
        <div className="project-overview">
          <div className="project-name">
            <img className="project-icon" src={Cat} alt="" />
            Where is the cat?
          </div>
          <div className="project-links">
            <div className="github-link">
              <a
                href="https://github.com/EnterOrion/where-is-the-cat"
                target="_blank"
              >
                Code
              </a>
            </div>
            <div className="preview-link">
              <a
                href="https://enterorion.github.io/where-is-the-cat/"
                target="_blank"
              >
                Live
              </a>
            </div>
          </div>
          <div className="project-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            odio laboriosam porro enim, nesciunt culpa ut ad vel ab saepe quia
            natus delectus recusandae sit possimus. Exercitationem saepe eveniet
            ad.
          </div>
        </div>
      </div>
      <div className="project-container">
        <div className="project-overview">
          <div className="project-name">
            <img className="project-icon" src={Journal} alt="" />
            Dream Journal
          </div>
          <div className="project-links">
            <div className="github-link">
              <a
                href="https://github.com/EnterOrion/dream-journal"
                target="_blank"
              >
                Code
              </a>
            </div>
            <div className="preview-link">
              <a
                href="https://enterorion.github.io/dream-journal/"
                target="_blank"
              >
                Live
              </a>
            </div>
          </div>
          <div className="project-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            odio laboriosam porro enim, nesciunt culpa ut ad vel ab saepe quia
            natus delectus recusandae sit possimus. Exercitationem saepe eveniet
            ad.
          </div>
        </div>
        <div className="project-video"></div>
      </div>
      <div className="project-container">
        <div className="project-video"></div>
        <div className="project-overview">
          <div className="project-name">
            <img className="project-icon" src={Weather} alt="" />
            Weather Application
          </div>
          <div className="project-links">
            <div className="github-link">
              <a
                href="https://github.com/EnterOrion/weather-app"
                target="_blank"
              >
                Code
              </a>
            </div>
            <div className="preview-link">
              <a
                href="https://enterorion.github.io/weather-app/"
                target="_blank"
              >
                Live
              </a>
            </div>
          </div>
          <div className="project-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            odio laboriosam porro enim, nesciunt culpa ut ad vel ab saepe quia
            natus delectus recusandae sit possimus. Exercitationem saepe eveniet
            ad.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
