import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="hero">
      <div className="bounce-wrapper">
        <span style={{ "--i": 1 } as React.CSSProperties}>H</span>
        <span style={{ "--i": 2 } as React.CSSProperties}>E</span>
        <span style={{ "--i": 3 } as React.CSSProperties}>L</span>
        <span style={{ "--i": 4 } as React.CSSProperties}>L</span>
        <span style={{ "--i": 5 } as React.CSSProperties}>O</span>
        <span style={{ "--i": 6 } as React.CSSProperties}>!</span>
      </div>
      <div className="hero-main">
        <h1 className="hero-name">
          My name is <span className="hero-name-2">Orion Wesson.</span>
        </h1>

        <h1 className="hero-title">
          And I'm a{" "}
          <span className="hero-title-2">full stack web developer.</span>
        </h1>
      </div>
      <div className="scroll-down"></div>
    </section>
  );
};

export default Hero;
