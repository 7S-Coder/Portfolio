import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <ul>
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
      </ul>
    </header>
  );
};
export default Header;
