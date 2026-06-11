import { useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import { useTheme } from "next-themes";
import Cursor from "../components/Cursor";
import SakuraScene from "../components/SakuraScene";
import BridgeScene from "../components/BridgeScene";
import UnlockPortfolio from "../components/UnlockPortfolio";
import PetalScene from "../components/PetalScene";
// Local Data
import data from "../data/portfolio.json";
import projects from "../data/projects";
import skillsData from "../data/skills.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const [selectedButton, setSelectedButton] = useState("All");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle Button Click
  const buttonNames = [
    "All",
    "Frontend",
    "Backend",
    "Tools",
    "Design",
    "Testing",
  ];
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const renderSkillIcons = (skills) => {
    return skills.map((skill) => (
      <div key={skill.name} className="skillIcon">
        <i className={skill.icon}></i>
        {skill.name}
      </div>
    ));
  };
  const renderAllSkills = () => {
    const allSkills = [
      ...skillsData.frontend,
      ...skillsData.backend,
      ...skillsData.tools,
    ];

    return renderSkillIcons(allSkills);
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" },
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      <UnlockPortfolio />
      <SakuraScene />
      <PetalScene />

      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </Head>
      <div>
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <section  id="home" className="hero-section">
          <div className="hero-text">
            <h1>
              Meghan
              <br />
              Keightley
            </h1>

            <p>Software Engineer</p>
            <div className="socialButtons">

  <a href="/cv/MeghanKeightley_CV.pdf" target="_blank">
    <img src="https://cdn-icons-png.flaticon.com/512/3589/3589055.png" alt="CV" />
  </a>

  <a href="https://github.com/meghank1066" target="_blank">
    <img src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png" alt="GitHub" />
  </a>

  <a href="https://www.linkedin.com/in/meghan-k-01265a2b9/" target="_blank">
    <img src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn" />
  </a>

  <a href="mailto:megankeightley5@gmail.com">
    <img src="https://images.icon-icons.com/2642/PNG/512/google_mail_gmail_logo_icon_159346.png" alt="Email" />
  </a>

</div>
            {/* <div className="buttonsContainer">
              <button>
              <a
  href="/cv/MeghanKeightley_CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="contactBtn"
>
  <img
    src="https://img.icons8.com/ios-filled/50/ffffff/resume.png"
    alt="resume icon"
  />
  My CV
</a>
              </button>
              <button>
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/github.png"
                  alt="github icon"
                />
                <a href="https://github.com/meghank1066" target="_blank">
                  GitHub
                </a>
              </button>
              <button>
                <img
                  src="https://img.icons8.com/ios-filled/50/0A66C2/linkedin.png"
                  alt="linkedin icon"
                />
                <a
                  href="https://www.linkedin.com/in/meghan-k-01265a2b9/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </button>
              <button>
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/new-post.png"
                  alt="email icon"
                />
                 <a href="mailto:megankeightley5@gmail.com" target="_blank">
                  Email
                </a>
              </button>
            </div> */}
          </div>
        </section>
        <div className="ticker">
          <div className="ticker-track">
            <span>
              MEGHAN KEIGHTLEY ✦ SOFTWARE ENGINEERING ✦ FRONTEND DEVELOPER ✦ UX
              DESIGN ✦
            </span>

            <span>
              MEGHAN KEIGHTLEY ✦ SOFTWARE ENGINEERING ✦ FRONTEND DEVELOPER ✦ UX
              DESIGN ✦
            </span>
          </div>
        </div>

        <section id="about"className="about-section">
          <div className="about-grid">
            <div className="about-content">
              {/* <span className="section-tag">
        About
      </span> */}

              <h1 className="about-content">
                I'm Meghan.
                <br></br>
                I'm a 22-year-old aspiring graduate software engineer
              </h1>

              <p>
                I studied Software Engineering at Dundalk Institute of
                Technology and hope to pursue a master's degree to further
                specialise in the areas I'm most passionate about. During my
                studies, I spent six months in Antwerp on Erasmus, where I
                explored user experience design within virtual reality
                environments. That experience sparked a particular interest in
                emerging technologies, especially haptic technology and how
                users interact with digital worlds.
              </p>

              <p>
                Beyond technology, I'm a strong design enthusiast with interests
                that extend far beyond software. I founded my college's first
                Fashion Society, combining my love for creativity, community
                building and design. Alongside my studies, I worked as a Sales
                Assistant in Primark for three years, where I developed strong
                communication and teamwork skills in a fast-paced environment.
              </p>

              <p>
                In my free time, I enjoy cycling, travelling, content creation,
                video editing, reading, cooking and staying active. I love
                learning new things and I'm always looking for opportunities to
                combine creativity, design and technology in meaningful ways.
              </p>
            </div>

            <div className="about-side">
              <div className="photo-wrapper">
                <img
                  src="/models/megan_pic.png"
                  alt="Meghan"
                  className="about-photo"
                />
              </div>

              <div className="education-card">
                <div className="education-header">
                  {/* <span className="education-icon">🎓</span> */}

                  <svg
                    viewBox="0 0 24 24"
                    className="education-icon"
                    aria-hidden="true"
                  >
                    <path d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" />

                    <path d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5" />
                  </svg>

                  <h2>work &amp; education</h2>
                </div>

                <div className="education-item">
                  <div className="education-logo">
                    <img
                      src="/models/dkit.jpg"
                      alt="DKIT Logo"
                      className="education-logo-img"
                    />
                  </div>

                  <div className="education-details">
                    <h3>Dundalk Institute of Technology</h3>

                    <p>BSc (Hons) in Computing in Software Development</p>
                  </div>

                  <span className="education-date">2022 — 2026</span>
                </div>

                <div className="education-item">
                  <div className="education-logo">
                    <img
                      src="/models/aphogeschool.png"
                      alt="AP Logo"
                      className="education-logo-img"
                    />
                  </div>

                  <div className="education-details">
                    <h3>AP University Antwerp</h3>

                    <p>Erasmus Exchange Programme</p>
                  </div>

                  <span className="education-date">2025</span>
                </div>
              </div>
            </div>
          </div>
 </section>
          <div className="skillsColumn">
            <h1 className="headingText">Technical skills</h1>
            <BridgeScene />
          </div>
             <section className="about-section">
          <div className="skillsContent">
            <div className="skillsButtonsContainer">
              {buttonNames.map((buttonName) => (
                <button
                  key={buttonName}
                  className={`${theme === "light" ? "light" : "dark"} ${selectedButton === buttonName ? "selected" : ""}`}
                  onClick={() => handleButtonClick(buttonName)}
                >
                  {buttonName}
                </button>
              ))}
            </div>
            <div className="skillsIconsContainer">
              {selectedButton === "All" && renderAllSkills()}
              {selectedButton === "Frontend" &&
                renderSkillIcons(skillsData.frontend)}
              {selectedButton === "Backend" &&
                renderSkillIcons(skillsData.backend)}
              {selectedButton === "Tools" && renderSkillIcons(skillsData.tools)}
              {selectedButton === "Testing" &&
                renderSkillIcons(skillsData.testing)}
              {selectedButton === "Design" &&
                renderSkillIcons(skillsData.design)}
            </div>
            
          </div>

          
  {/* <div className="projectsGrid">

    {projects.map((project) => (

      <Link
        key={project.slug}
        href={`/projects/${project.slug}`}
      >

        <a className="projectCard">

          <img
            src={project.image}
            alt={project.title}
          />

          <div className="projectInfo">

            <h3>{project.title}</h3>

            <p>{project.description}</p>

          </div>

        </a>

      </Link>

    ))}

  </div> */}

          </section>
  <section
  id="projects"
  className="projectsSection"
>

  <h1 className="projectsHeading">
    Featured Projects
  </h1>

  <div className="projectTicker">

    <div className="projectTrack">

      {[...projects, ...projects].map(
        (project, index) => (

          <Link
            key={index}
            href={`/projects/${project.slug}`}
          >

            <a className="projectCard">

              <img
                src={project.image}
                alt={project.title}
              />

              <h3>
                {project.title}
              </h3>

            </a>

          </Link>

        )
      )}

    </div>

  </div>

</section>
<section
  id="contact"
></section>
<section
  id="contact"
></section>

        <h1 ref={textOne} className="hidden"></h1>
        <div></div>
        <Footer />
      </div>
    </div>
  );
}
