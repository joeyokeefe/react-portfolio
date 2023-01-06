import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav justify-content-end gap-3 me-5 pt-3 text-nowrap">
      <NavLink to="/" className="text-decoration-none nav-link active">
        About
      </NavLink>
      <NavLink to="projects" className="text-decoration-none nav-link">
        Projects
      </NavLink>
      <NavLink to="work" className="text-decoration-none nav-link">
        Work
      </NavLink>
      <NavLink to="contact" className="text-decoration-none nav-link">
        Contact
      </NavLink>
      <a href="#" className="text-decoration-none nav-link">
        Resume
      </a>
    </nav>
  );
}

export default Nav;
