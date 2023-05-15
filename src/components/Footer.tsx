import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer>
      <div className="footer-links">
        <a href="mai&#108;to&#58;o%&#55;2i&#111;nwe&#115;s%&#54;&#70;&#110;%40&#103;%&#54;D%61il&#46;c&#111;&#109;">
          <i
            className="fa-solid fa-paper-plane"
            style={{ color: "#fafafa" }}
            title="Email"
          ></i>
        </a>
        <a href="https://github.com/EnterOrion" target="_blank">
          <i className="devicon-github-original" title="Github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/orion-wesson-bb5b47148"
          target="_blank"
        >
          <i className="devicon-linkedin-plain" title="LinkedIn"></i>
        </a>

        <a href="src/assets/files/Orion Wesson Resume.pdf" target="_blank">
          <i className="fa-solid fa-file" title="Download Resume PDF"></i>
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
