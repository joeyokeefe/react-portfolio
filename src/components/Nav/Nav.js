import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <NavLink to="/">About</NavLink>
      <NavLink to="projects">Projects</NavLink>
      <NavLink to="work">Work</NavLink>
      <NavLink to="contact">Contact</NavLink>
      <a href="#">Resume</a>
    </nav>
  );
}

export default Nav;
