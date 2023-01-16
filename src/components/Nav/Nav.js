import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const handleClick = () => {
    fetch("O'Keefe - CV.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "O'Keefe - CV.pdf";
        alink.click();
      });
    });
  };
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
      <a href="#" id="resumeLink" onClick={handleClick}>
        Resume
      </a>
    </nav>
  );
}

export default Nav;
