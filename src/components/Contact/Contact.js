import linkedinLogo from "./icons/linkedinLogo.png";
import githubLogo from "./icons/githubLogo.png";
import gmailLogo from "./icons/gmailLogo.png";
import "./Contact.css";

function Contact() {
  return (
    <section className="contactSection">
      <h2 className="contactHeader">Reach out!</h2>
      <p className="contactBlurb">
        I am open to Front-end Development and Software Engineer positions
      </p>
      <div className="contactLinks">
        <a href="https://www.linkedin.com/in/josephsokeefe/" target="_blank">
          <img src={linkedinLogo} alt="LinkedIn Logo" />
        </a>
        <a href="https://github.com/joeyokeefe" target="_blank">
          <img src={githubLogo} alt="GitHub Logo" />
        </a>
        <a href="mailto:joeyokeefe5@gmail.com" target="_blank">
          <img src={gmailLogo} alt="Gmail Logo" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
