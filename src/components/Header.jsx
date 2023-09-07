import { NavLink } from "react-router-dom";

import "../styles/components/Header.scss";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <p>SEPT</p>
      </div>
      <nav>
        <ul>
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/skills">
            <li>Compétences</li>
          </NavLink>
          <NavLink to="/work">
            <li>Travaux</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
