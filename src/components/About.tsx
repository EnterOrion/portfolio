import { FC } from "react";
import Orion from "../assets/images/me.jpg";

const About: FC = () => {
  return (
    <section className="about">
      <div className="about-column-1">
        <header className="about-header section-header">
          <h1>About</h1>
        </header>
        <img className="about-img" src={Orion} alt="" />
      </div>
      <div className="about-info section-info">
        <p>
          Coding is more than just a profession or an activity that I enjoy
          doing. <u>Coding gives me the ability to create</u> whatever I want to
          create in the world, and that's one of the most freeing, powerful
          experiences. Programming has taught me how to be a better problem
          solver by teaching me how to break things down into smaller steps and
          understand the logic behind what's happening.
        </p>
        <br />
        <p>
          {" "}
          Those skills have had a widespread positive influence in my life and
          being able to break everything down into an elegant simplicity is
          <u> something that I find to be profound.</u>
        </p>
        <br />
        <p>
          I'm constantly learning and finding new ways to improve. I strive to
          write clean code and work with others to create great web
          applications. Through developing my skills by building projects and
          diligently researching whenever I come across a problem, I am
          confident <u>I could build whatever you would need me to build.</u>
        </p>
      </div>
    </section>
  );
};

export default About;
