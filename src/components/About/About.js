import "./About.css";

import profilePicture from "./profilePicture.png";

function About() {
  return (
    <section className="aboutSection">
      <h1 className="mainTitle">
        Hi! I'm <span>Joe O'Keefe</span>
      </h1>
      <div className="aboutDetails">
        <section className="aboutBio">
          <p>
            I have been passionate about technology for as long as I can
            remember. My journey in technology began when I was a child, and I
            started learning how to manipulate the files on my computer to
            install the newest Minecraft mods. Since then, my love for
            technology has grown and expanded far beyond the confines of video
            games.
          </p>
          <p>
            In my professional career, I have taken on additional
            responsibilities in IT, and I have become the IT Administrator in my
            current workplace. Additionally, I have spent considerable time
            working towards becoming a software engineer, and I have developed
            an interest in using my proficiency with technology to create new
            things. I have always been a creative person, and it is clear to me
            that software development is the perfect medium for me to combine my
            love of art and technology.
          </p>
        </section>
        <img src={profilePicture} height="300px" className="profilePicture" />
      </div>
    </section>
  );
}

export default About;
