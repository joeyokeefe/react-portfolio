import cssIcon from "./icons/cssIcon.svg";
import htmlIcon from "./icons/htmlIcon.svg";
import javaScriptIcon from "./icons/javaScriptIcon.svg";
import reactIcon from "./icons/reactIcon.svg";
import nodeIcon from "./icons/nodeIcon.svg";
import bootstrapLogo from "./icons/bootstrapIcon.svg";
import tailwindIcon from "./icons/tailwindIcon.svg";
import githubLogo from "./icons/githubLogo.svg";
import vsCodeIcon from "./icons/vsCodeIcon.svg";
import endangermentScreenshot from "./endangermentScreenshot.png";
import memoryGameScreenshot from "./memoryGameScreenshot.png";
import armBrainScreenshot from "./armBrainScreenshot.png";
import "./Projects.css";

function Projects() {
  return (
    <div id="projectsSection">
      <h2 id="projectsHeader">Projects</h2>
      <div id="projectsContainer">
        <div className="project">
          <h4 className="projectTitle">Endangerment!</h4>
          <img
            className="projectThumbnail"
            src={endangermentScreenshot}
            alt="Screenshot of a jeopardy-like trivia game portfolio project."
          />
          <p className="projectDescription">
            A trivia game made with jService API. Generates a random board of
            Jeopardy questions to play with your friends.
          </p>
          <a
            className="projectLink"
            href="https://endangerment.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Link
          </a>
        </div>
        <div className="project">
          <h4 className="projectTitle">ArmBrain Tutoring</h4>
          <img
            className="projectThumbnail"
            src={armBrainScreenshot}
            alt="Screenshot of a portfolio website titled ArmBrain Tutoring"
          />
          <p className="projectDescription">
            A template business site made with Bootstrap using a mobile-first
            approach.
          </p>
          <a
            className="projectLink"
            href="https://armbraintutoring.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Link
          </a>
        </div>
        <div className="project">
          <h4 className="projectTitle">Memory Game</h4>
          <img
            className="projectThumbnail"
            src={memoryGameScreenshot}
            alt="Screenshot of a memory game project."
          />
          <p className="projectDescription">
            A memory game built in vanilla JavaScript.
          </p>
          <a
            className="projectLink"
            href="https://portfoliomemorygame.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Link
          </a>
        </div>
      </div>
      <h3 id="toolsHeader">My Dev Tools</h3>
      <div id="iconsContainer">
        <img src={htmlIcon} alt="html" className="softwareIcon" />
        <img src={cssIcon} alt="css" className="softwareIcon" />
        <img src={javaScriptIcon} alt="javaScript" className="softwareIcon" />
        <img src={reactIcon} alt="reactJS" className="softwareIcon" />
        <img src={nodeIcon} alt="nodeJS" className="softwareIcon" />
        <img src={bootstrapLogo} alt="bootstrap" className="softwareIcon" />
        <img src={tailwindIcon} alt="tailwind" className="softwareIcon" />
        <img src={githubLogo} alt="github" className="softwareIcon" />
        <img src={vsCodeIcon} alt="vscode" className="softwareIcon" />
      </div>
    </div>
  );
}

export default Projects;
