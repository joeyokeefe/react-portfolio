import cssIcon from "./icons/cssIcon.png";
import htmlIcon from "./icons/htmlIcon.png";
import javaScriptIcon from "./icons/javaScriptIcon.png";
import reactIcon from "./icons/reactIcon.png";
import nodeIcon from "./icons/nodeIcon.png";
import bootstrapLogo from "./icons/bootstrapIcon.png";
import tailwindIcon from "./icons/tailwindIcon.png";
import githubLogo from "./icons/githubLogo.png";
import vsCodeIcon from "./icons/vsCodeIcon.png";
import endangermentScreenshot from "./endangermentScreenshot.png";
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
            width="500px"
          />
          <p className="projectDescription">
            A trivia game made with jService API. Generates a random board of
            Jeopardy questions to play with your friends.
          </p>
          <a
            class="projectLink"
            href="https://endangerment.netlify.app"
            target="_blank"
          >
            Link
          </a>
        </div>
      </div>
      <h3 id="toolsHeader">My Dev Tools</h3>
      <div id="iconsContainer">
        <img src={htmlIcon} alt="html" class="softwareIcon" />
        <img src={cssIcon} alt="css" class="softwareIcon" />
        <img src={javaScriptIcon} alt="javaScript" class="softwareIcon" />
        <img src={reactIcon} alt="reactJS" class="softwareIcon" />
        <img src={nodeIcon} alt="nodeJS" class="softwareIcon" />
        <img src="..." alt="SQL" class="softwareIcon" />
        <img src={bootstrapLogo} alt="bootstrap" class="softwareIcon" />
        <img src={tailwindIcon} alt="tailwind" class="softwareIcon" />
        <img src={githubLogo} alt="github" class="softwareIcon" />
        <img src={vsCodeIcon} alt="vscode" class="softwareIcon" />
      </div>
    </div>
  );
}

export default Projects;
