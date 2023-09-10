import { Link } from "react-router-dom";
import "../styles/components/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <Link to="https://github.com/7S-Coder" target="blank">
          <img src="src\assets\svg\github.svg" alt="logo Github" />
          7S-Coder
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
