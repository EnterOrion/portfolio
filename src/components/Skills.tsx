import { FC } from "react";

const Skills: FC = () => {
  return (
    <section className="skills">
      <header className="skill-header section-header">
        <h1>Skills</h1>
      </header>
      <div className="skills-container">
        <div className="skill">
          <i className="devicon-javascript-plain colored"></i>Javascript
        </div>
        <div className="skill">
          <i className="devicon-html5-plain colored"></i>HTML
        </div>
        <div className="skill">
          <i className="devicon-css3-plain colored"></i>CSS
        </div>
        <div className="skill">
          <i className="devicon-react-original colored"></i>React
        </div>
        <div className="skill">
          <i className="devicon-sass-original colored"></i>SASS
        </div>
        <div className="skill">
          <i className="devicon-mongodb-plain colored"></i>MongoDB
        </div>
        <div className="skill">
          <i className="devicon-firebase-plain colored"></i>Firebase
        </div>
        <div className="skill">
          <i className="devicon-express-original colored"></i>Express
        </div>
        <div className="skill">
          <i className="devicon-nodejs-plain colored"></i>NodeJS
        </div>
        <div className="skill">
          <i className="devicon-typescript-plain colored"></i>Typescript
        </div>
        <div className="skill">
          <i className="devicon-jest-plain colored"></i>Jest
        </div>
        <div className="skill">
          <i className="devicon-ubuntu-plain colored"></i>Ubuntu
        </div>
      </div>
    </section>
  );
};

export default Skills;
