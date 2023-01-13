import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <NavLink to="/" className="navLink">
        About
      </NavLink>
      <NavLink to="projects" className="navLink">
        Projects
      </NavLink>
      <NavLink to="work" className="navLink">
        Work
      </NavLink>
      <NavLink to="contact" className="navLink">
        Contact
      </NavLink>
      <a href="#" id="resumeLink">
        Resume
      </a>
    </nav>
  );
}

export default Nav;
