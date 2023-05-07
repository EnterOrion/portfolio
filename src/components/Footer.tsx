import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer>
      <div className="footer-links">
        <a href="mailto:orionwesson@gmail.com" target="_blank">
          <i
            className="fa-solid fa-paper-plane"
            style={{ color: "#fafafa" }}
          ></i>
        </a>
        <a href="https://github.com/EnterOrion" target="_blank">
          <i className="devicon-github-original"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/orion-wesson-bb5b47148"
          target="_blank"
        >
          <i className="devicon-linkedin-plain"></i>
        </a>
      </div>
      <div className="attribution">
        <a href="https://github.com/EnterOrion" target="_blank">
          {" "}
          Made with ❤️ by <u>Orion Wesson</u>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
