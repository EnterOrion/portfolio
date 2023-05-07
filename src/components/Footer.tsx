import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer>
      <div className="footer-links">
        <i className="fa-solid fa-paper-plane" style={{ color: "#fafafa" }}></i>
        <i className="devicon-github-original"></i>
        <i className="devicon-linkedin-plain"></i>
      </div>
      <div className="attribution">
        Made with ❤️ by <u>Orion Wesson</u>
      </div>
    </footer>
  );
};
export default Footer;
