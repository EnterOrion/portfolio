import { FC } from "react";
import SongGif from "../assets/images/SongSocial.gif";
import SnailPic from "../assets/images/SnailPicOfTheDay.gif";
import WeatherApp from "../assets/images/WeatherApp.gif";
import ShoppingCart from "../assets/images/ShoppingCart.gif";
import CatGif from "../assets/images/WhereIsTheCat.gif";
import DreamJournal from "../assets/images/DreamJournal.gif";
import Music from "../assets/icons/music.png";
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
        <div className="project-overview">
          <div className="project-name">
            <img className="project-icon" src={Music} alt="" />
            On Repeat (Beta)
          </div>
          <div className="project-links">
            <div className="github-link">
              <a
                href="https://github.com/EnterOrion/song-social"
                target="_blank"
              >
                Code
              </a>
            </div>
            <div className="preview-link">
              <a
                href="https://enterorion.github.io/song-social/#/"
                target="_blank"
              >
                Live
              </a>
            </div>
          </div>
          <div className="project-description">
            Design is complete! A social media application for sharing songs
            that have been stuck in your head. The app connects the user's
            spotify account for authentication and uses Firebase for the
            backend, which stores the user's posts. Users will be able to like,
            comment, and add songs to their Spotify playlists that other users
            have posted.
          </div>
        </div>
        <img className="project-video" src={SongGif} />
      </div>
      <div className="project-container">
        <img className="project-video" src={SnailPic} />
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
            A catalogue of snail pictures. Utilizes my own REST API for
            retrieving pictures and posting new ones (through a separate Admin
            dashboard). NodeJS, Express, and MongoDB was used for the backend,
            while React was used for the frontend.
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
            A mock shopping page for one of my favorite bands. Renders unique
            pages for each individual product. Users can update the state of the
            cart throughout the app, adding or removing products as they please.
            React, with Zustand for state management, was used.
          </div>
        </div>
        <img className="project-video" src={ShoppingCart} />
      </div>
      <div className="project-container">
        <img className="project-video" src={CatGif} />
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
            A twist on the classic "Where's Waldo?". There are three levels,
            each one much harder than the previous one. Firebase stores the
            coordinates of the cat in the photo along with the leaderboard that
            the user can write to if they find the cat fast enough!
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
            Gives the user the ability to create, read, and delete different
            dreams that they've had, using local storage to store them. Asks the
            user once a day what they dreamed of last night and then takes them
            to the journal's home page. It also will note reoccurring dream
            symbols. React was used for the components.
          </div>
        </div>
        <img className="project-video" src={DreamJournal} />
      </div>
      <div className="project-container">
        <img className="project-video" src={WeatherApp} />
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
            Utilizes the OpenWeatherMap API to find the weather of the inputted
            city. The background will change upon different weather conditions.
            Built in vanilla Javascript and bundled using Webpack, this was my
            first experience handling asynchronous code.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
