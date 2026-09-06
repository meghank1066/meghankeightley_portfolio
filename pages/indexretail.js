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
// import Cursor from "../components/Cursor";
import SakuraScene from "../components/SakuraScene";
import BridgeScene from "../components/BridgeScene";
import UnlockPortfolio from "../components/UnlockPortfolio";
import PetalScene from "../components/PetalScene";
import MoonScene from "../components/MoonScene";
import useMobileDevice from "../hooks/useMobileDevice";
// Local Data
import data from "../data/portfolio.json";
import { projects, casestudies } from "../data/projectsretail";
import skillsData from "../data/skillsretail.json";

export default function Home() {
  // Ref
  const isMobile = useMobileDevice();
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
  "Customer Experience",
  "Retail",
  "Working Style",
  "Fashion & Creativity",
  "Retail Operations",
];
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 12;
    const rotateX = -((y - centerY) / centerY) * 12;

    card.style.transform = `
    perspective(1400px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale3d(1.03,1.03,1.03)
  `;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = `
    perspective(1400px)
    rotateX(0deg)
    rotateY(0deg)
    scale3d(1,1,1)
  `;
  };

const renderSkillIcons = (skills) => {
  return skills.map((skill) => (
    <div key={skill.name} className="skillIcon">
      {skill.icon && <i className={skill.icon}></i>}
      {skill.name}
    </div>
  ));
};

const renderAllSkills = () => {
  const allSkills = [
    ...skillsData.customerService,
    ...skillsData.retail,
    ...skillsData.teamwork,
    ...skillsData.fashion,
    ...skillsData.tools,
  ];

  return renderSkillIcons(allSkills);
};

console.log("isMobile:", isMobile);

useIsomorphicLayoutEffect(() => {
  stagger(
    [textOne.current, textTwo.current, textThree.current, textFour.current],
    { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
    { y: 0, x: 0, transform: "scale(1)" },
  );
}, []);

  return (
    <div className={`relative ${data.showCursor ? "cursor-none" : ""}`}> 
      {/* {isMobile === false && <UnlockPortfolio />} */}
      {isMobile === false && <SakuraScene />}
      {isMobile === false && <PetalScene />}
 
      <Head>
        <title>{data.name}</title> 
        <link rel="icon" type="image/png" href="/images/portfolio-logo.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
       
      </Head>
      <div>
        <Header 
          scrollToSection={scrollToSection}
          logoSrc="/images/portfoliologodm.png"
        />
        <section id="home" className="hero-section">
          <div className="hero-text">
            <h1>
              Meghan
              <br />
              Keightley
            </h1>

            <p>Retail Sales Associate</p>
            <div className="socialButtons">
              <a href="/cv/MeghanKeightley_UrbanOutfittersCV.pdf" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3589/3589055.png"
                  alt="CV"
                />
              </a>
{/* 
              <a href="https://github.com/meghank1066" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png"
                  alt="GitHub"
                />
              </a> */}

              <a
                href="https://www.linkedin.com/in/meghankeightley/"
                target="_blank" rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/color/48/linkedin.png"
                  alt="LinkedIn"
                />
              </a>

              <a href="mailto:megankeightley5@gmail.com">
                <img
                  src="https://images.icon-icons.com/2642/PNG/512/google_mail_gmail_logo_icon_159346.png"
                  alt="Email"
                />
              </a>
            </div>
          </div>
          {/* </section> */}
        </section>{" "}
        {/* hero */}
        {isMobile && (
          <div className="mobile-photo-section">
            <div className="photo-wrapper">
              <img
                // src="/images/headshot1.webp"
                src="/images/headshot2.png"
                alt="Meghan"
                className="about-photo"
                // 
              />
            </div>
          </div>
        )}
        {isMobile === false && (
          <div className="ticker">
            <div className="ticker-track">
              <span>
                MEGHAN KEIGHTLEY ✦ SOFTWARE ENGINEERING ✦ FRONTEND DEVELOPER ✦
                UX DESIGN ✦ MEGHAN KEIGHTLEY ✦ SOFTWARE ENGINEERING ✦ FRONTEND
                DEVELOPER ✦ UX DESIGN ✦ MEGHAN KEIGHTLEY ✦ SOFTWARE ENGINEERING
                ✦ FRONTEND DEVELOPER ✦ UX DESIGN ✦ MEGHAN KEIGHTLEY ✦ SOFTWARE
                ENGINEERING
              </span>
            </div>
          </div>
        )}{" "} {!isMobile && ( 
        <section className="philosophySection">
         <div className="philosophyContent">
  <h2 className="philosophyTitle">
    I believe fashion is a way of expressing who you are before you say a word.
  </h2>

  <p className="philosophySubtitle">
    “If you want a sense of self, make something.” This is a principle I
    return to in both fashion and creative work. I love how clothing, styling
    and visual details can transform how someone feels and help them express
    their individuality. I’m drawn to fashion retail because it brings
    creativity, people and self-expression together, creating spaces where
    customers can discover something that feels uniquely them.
  </p>
</div>
        </section>
         ) }
        <section id="about" className="about-section">
          <div className="about-grid">
            <div className="about-content">
              {/* <span className="section-tag">
        About
      </span> */}

              <h1 className="about-content">
                I'm Meghan.
                <br></br>
               I'm a 22-year-old creative and fashion enthusiast with a passion for style, culture and self-expression.
              </h1>
<p>
  I have several years of experience in fashion retail, working across both
  Penneys Drogheda and Primark Dundalk since 2023. Working in busy retail
  environments has given me a strong understanding of customer service,
  teamwork and the fast-paced nature of fashion retail. I enjoy helping
  customers find pieces that suit their individual style while creating a
  welcoming and positive experience in store.
</p>

<p>
  Fashion and creativity have always been a major part of my interests.
  During my time at Dundalk Institute of Technology, I founded the college's
  first Fashion Society, bringing students together through fashion, trends,
  creativity and community. I love discovering new styles, following fashion
  culture and thinking about how clothing and visual presentation can help
  people express their individuality.
</p>

<p>
  Alongside fashion, I studied Software Engineering and have developed a
  strong interest in design and digital experiences. My background has taught
  me to approach creative problems from different perspectives, combining
  attention to detail with an understanding of how people interact with
  products, spaces and brands. In my free time, I enjoy travelling, content
  creation, video editing, reading and exploring fashion and creative
  inspiration.
</p>
</div>

            {isMobile === false && (
              <div className="about-side">
                <div
                  className="photo-wrapper"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src="/images/headshot1.webp"
                    alt="Meghan"
                    className="about-photo"
                  />
                </div>
<div className="education-item">
  <div className="education-logo trinity-logo">
    <img
      src="/images/career/tcdlogo.png"
      alt="Trinity College Dublin Logo"
      className="education-logo penneys-logo"
    />
  </div>

  <div className="education-details">
    <h3>Trinity College Dublin</h3>
    <p>MSc Interactive Digital Media</p>
  </div>

  <span className="education-date">2026 — 2027</span>
</div>
        <div className="education-item">
  <div className="education-logo penneys-logo">
    <img
      src="/images/career/penneys.png"
      alt="Penneys Logo"
      className="education-logo-img penneys-logo-img"
    />
  </div>

  <div className="education-details">
    <h3>Penneys Drogheda</h3>
    <p>Permanent Sales Assistant</p>
  </div>

  <span className="education-date">2023 — 2025</span>
</div>

<div className="education-item">
  <div className="education-logo penneys-logo">
    <img
      src="/images/career/penneys.png"
      alt="Penneys Logo"
      className="education-logo-img penneys-logo-img"
    />
  </div>

  <div className="education-details">
    <h3>Penneys Dundalk</h3>
    <p>Seasonal Sales Assistant</p>
  </div>

  <span className="education-date">2026 — Present</span>
</div>
</div>
            )}
          </div>
        </section>
        <div className="skillsColumn">
  <h3 className="headingText">My skills</h3>
  {isMobile === false && <BridgeScene />}
</div>

<section className="about-section">
  <div className="skillsContent">
    <div className="skillsButtonsContainer">
      {buttonNames.map((buttonName) => (
        <button
          key={buttonName}
          className={`${theme === "light" ? "light" : "dark"} ${
            selectedButton === buttonName ? "selected" : ""
          }`}
          onClick={() => handleButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>

    <div className="skillsIconsContainer">
      {selectedButton === "All" && renderAllSkills()}

      {selectedButton === "Customer Experience" &&
        renderSkillIcons(skillsData.customerService)}

      {selectedButton === "Retail" &&
        renderSkillIcons(skillsData.retail)}

      {selectedButton === "Working Style" &&
        renderSkillIcons(skillsData.teamwork)}

      {selectedButton === "Fashion & Creativity" &&
        renderSkillIcons(skillsData.fashion)}

      {selectedButton === "Retail Operations" &&
        renderSkillIcons(skillsData.tools)}
    </div>
  </div>
</section>
     
  
        <section id="projects" className="projectsSection">
<h2 className="caseStudiesHeading">Featured Projects</h2>
  <div className="projectsList">

    {projects.map((project) => (

     <Link
  key={project.slug}
  href={`/projects/${project.slug}`}
  className="projectCard"
>
  <div className="projectInfo">

    <span className="projectCategory">
      {project.category}
    </span>

    <h2>
      {project.title}
    </h2>

    <h3>
      {project.type}
    </h3>

    <p>
      {project.description}
    </p>

    <button className="caseButton">
      <span></span>
      view project
    </button>

  </div>

  <div className="projectPreview">
    <img 
      src={project.image}
      alt={project.title}
    />
  </div>

</Link>

    ))}

  </div>

</section>
        {/* <section id="case-studies" className="caseStudiesSection">
          <h2 className="caseStudiesHeading">Projects</h2>

          <div className="caseStudiesGrid">
            {casestudies.map((study) => (
              // <Link key={study.slug} href={`/case-studies/${study.slug}`}>
              <Link 
  key={study.slug} 
  href={`/case-studies/${study.slug}`}
  className="caseStudyLinkWrapper"
>
                <div className="caseStudyCard">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="caseStudyImage"
                  />

                  <h3>{study.title}</h3>

                  <p>{study.description}</p>

                  <span className="caseStudyTag">{study.category}</span>

                  <div className="caseStudyLink">View case study ↗</div>
                </div>
              </Link>
            ))}
          </div>
        </section> */}
        <section id="contact" className="contactSection">
          <div className="contactContent">
            <h2 className="contactHeading">Let's Work Together</h2>

            <p className="contactText">
             Interested in fashion, retail and creating great customer experiences? I'd love to hear from you.
            </p>
            <a
              href="mailto:megankeightley5@gmail.com"
              className="contactButton"
            >
              Contact me
            </a>
          </div>

          {/* ✦ */}
          {isMobile === false && (
            <div className="moonWrapper">
              {isMobile === false && <MoonScene />}
            </div>
          )}
        </section>
        {/* {isMobile && (
          <footer className="mobileFooter">
            <div className="mobileFooterContent">
              <p className="mobileFooterText">
                © Meghan Keightley, {new Date().getFullYear()}
              </p>

              <a
                href="https://github.com/meghank1066"
                target="_blank"
                rel="noopener noreferrer"
                className="mobileFooterGithub"
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 128 128"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M64 5.1C30.7 5.1 3.6 32.1 3.6 65.5c0 26.7 17.3 49.3 41.3 57.3
            3 .6 4.1-1.3 4.1-2.9 0-1.4-.1-6.2-.1-11.2-16.8
            3.7-20.3-7.1-20.3-7.1-2.7-7-6.7-8.8-6.7-8.8-5.5-3.7.4-3.7.4-3.7
            6.1.4 9.3 6.2 9.3 6.2 5.4 9.2 14.1 6.6 17.6 5
            .5-3.9 2.1-6.6 3.8-8.1-13.4-1.5-27.5-6.7-27.5-29.8
            0-6.6 2.4-12 6.2-16.2-.6-1.5-2.7-7.7.6-16
            0 0 5.1-1.6 16.6 6.2 4.8-1.3 10-2 15.1-2
            5.1 0 10.3.7 15.1 2 11.5-7.8 16.6-6.2 16.6-6.2
            3.3 8.3 1.2 14.5.6 16 3.9 4.2 6.2 9.6 6.2 16.2
            0 23.2-14.1 28.3-27.6 29.8 2.2 1.9 4.1 5.6 4.1
            11.2 0 8.1-.1 14.6-.1 16.6 0 1.6 1.1 3.5 4.1
            2.9 24-8 41.3-30.6 41.3-57.3C124.4 32.1 97.3
            5.1 64 5.1z"
                  />
                </svg>
              </a>
            </div>
          </footer>
        )} */}
        <h1 ref={textOne} className="hidden"></h1>
        <div className="homeFooterWrapper">
  <Footer />
</div>
      </div>
    </div>
  );
}
