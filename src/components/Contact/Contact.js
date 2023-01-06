import linkedinLogo from "./icons/linkedinLogo.png";
import githubLogo from "./icons/githubLogo.png";
import gmailLogo from "./icons/gmailLogo.png";

function Contact() {
  return (
    <div>
      <h2 className="fs-2 text-center">Reach out!</h2>
      <p className="text-center fs-6 mt-5">
        I am open to Front-end Development and Software Engineer positions
      </p>
      <div className="container text-center">
        <a href="https://www.linkedin.com/in/josephsokeefe/" target="_blank">
          <img src={linkedinLogo} />
        </a>
        <a href="https://github.com/joeyokeefe" target="_blank">
          <img src={githubLogo} />
        </a>
        <a href="mailto:joeyokeefe5@gmail.com" target="_blank">
          <img src={gmailLogo} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
