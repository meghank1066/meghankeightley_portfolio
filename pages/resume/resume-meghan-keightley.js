import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ResumePage() {
  return (
    <>
      <div className="resumePageShell">
        <div className="resumeWrapper">
          <Header className="resumeNav" />
        </div>

        <main className="resumePage">
          {/* HEADER SECTION */}
          <header className="resumeHeaderSection">
            <span className="resumeTopTag"> Product Designer · UX/UI Designer · Software Engineer </span>
            
            {/* Added container row to snap button nicely right next to your name */}
            <div className="resumeTitleRow">
              <h1 className="resumeMainTitle">Meghan Keightley</h1>
              
              <a 
                href="/Meghan_Keightley_CV.pdf" 
                download="Meghan_Keightley_CV.pdf" 
                className="resumeDownloadBtn"
                title="Download PDF Version"
                aria-label="Download PDF CV"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            </div>
            
            <div className="resumeContactInfo">
              <a href="mailto:MeganKeightley5@gmail.com">Megankeightley5@gmail.com</a>
              <span>+353 (0)83 826 6021</span>
              <span>Dublin, Ireland</span>

              <div className="resumeLinksRow">
  <a
    className="resume-hero-link"
    href="https://www.linkedin.com/in/meghankeightley/"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn
  </a>

  <a
    className="resume-hero-link"
    href="https://github.com/meghank1066"
    target="_blank"
    rel="noreferrer"
  >
    GitHub
  </a>
</div>
            </div>
          </header>

          {/* PROFILE / SUMMARY */}
          <section className="resumeMeghanSection">
            <h2>Profile</h2>
            <div className="resumeMeghanContent">
              <p> Product Designer and Software Development graduate currently pursuing an
      MSc in Interactive Digital Media at Trinity College Dublin. I combine
      user-centred design, interaction design and frontend development to create
      intuitive, accessible and technically feasible digital products. My
      experience spans UX research, user journeys, wireframing, prototyping,
      visual design and React development, allowing me to bridge the gap between
      product design and implementation.</p>
            </div>
          </section>

          {/* TECHNICAL SKILLS */}
         <section className="resumeMeghanSection">
  <h2>Skills</h2>

  <div className="resumeSectionContent skillsGrid">

    <p>
      <strong>Product Design & UX:</strong>{" "}
      User-Centred Design, Design Thinking, UX Research, User Personas,
      User Journeys, User Flows, Information Architecture, Wireframing,
      Interaction Design, Prototyping, Usability Testing, Accessibility,
      WCAG Principles, Responsive Design, Design Systems
    </p>

    <p>
      <strong>Design Tools:</strong>{" "}
      Figma, FigJam, Figma AI, Adobe Illustrator, Adobe After Effects,
      Adobe Creative Cloud, Blender
    </p>

    <p>
      <strong>Frontend Development:</strong>{" "}
      React, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3/SCSS,
      Tailwind CSS, SwiftUI, UIKit
    </p>

    <p>
      <strong>Backend & APIs:</strong>{" "}
      Node.js, ASP.NET Core, REST APIs, Entity Framework, SQL, MongoDB
    </p>

    <p>
      <strong>Engineering & Collaboration:</strong>{" "}
      Git, Agile/Scrum, CI/CD, Test-Driven Development, System Architecture,
      Cross-Functional Collaboration
    </p>

    <p>
      <strong>Programming:</strong>{" "}
      Python, C#, Java, Kotlin, Swift, C++, SQL
    </p>

  </div>
</section>

          {/* EDUCATION */}
          <section className="resumeMeghanSection">
  <h2>Education</h2>

  <div className="resumeSectionContent">

    <div className="resumeItemRow">
      <div className="resumeItemLeft">
        <h3>MSc Interactive Digital Media</h3>
        <span className="resumeSubText">
          Trinity College Dublin — 1:1 Expected 
        </span>
      </div>

      <div className="resumeItemRight">
        2026 — 2027
      </div>
    </div>

    <div className="resumeItemRow">
      <div className="resumeItemLeft">
        <h3>BSc (Hons) Computing in Software Development</h3>
        <span className="resumeSubText">
          Dundalk Institute of Technology — 2.1 Honours
        </span>
      </div>

      <div className="resumeItemRight">
        2022 — 2026
      </div>
    </div>

  </div>
</section>

          {/* EXPERIENCE */}
          <section className="resumeMeghanSection">
            <h2>Experience</h2>
            <div className="resumeSectionContent">
              
              <div className="resumeItemRow">
  <div className="resumeItemLeft">
    <h3>Immersive Experience Designer & Developer</h3>
    <span className="resumeSubText">
      NexSpace VR Project · Erasmus+ · Antwerp, Belgium
    </span>
  </div>

  <div className="resumeItemRight">
    Jan 2025 — Jun 2025
  </div>
</div>

<ul className="resumeBullets">
  <li>
    Designed and developed an immersive VR experience for Meta Quest 3,
    combining interaction design, spatial UX and Unity development using C#.
  </li>

  <li>
    Mapped user journeys and designed spatial interaction patterns to create
    intuitive experiences within a 3D environment.
  </li>

  <li>
    Translated user and design requirements into interactive prototypes and
    functional experiences while balancing usability, visual fidelity and
    real-time technical constraints.
  </li>

  <li>
    Collaborated within an international multidisciplinary team, bridging
    design and technical requirements and communicating implementation
    decisions to creative and technical stakeholders.
  </li>
</ul>

          <div className="resumeItemRow">
  <div className="resumeItemLeft">
    <h3>Frontend Developer & UI Designer</h3>
    <span className="resumeSubText">
      e.COAL Project · Erasmus+ Intensive Development Programme · Lens, France
    </span>
  </div>

  <div className="resumeItemRight">
    Feb 2024
  </div>
</div>

<ul className="resumeBullets">
  <li>
    Selected to represent DkIT in an international multidisciplinary development
    sprint focused on building an interactive, media-rich web application.
  </li>

  <li>
    Designed and implemented responsive, mobile-first interfaces using React,
    translating product requirements and visual concepts into reusable frontend
    components.
  </li>

  <li>
    Collaborated with an international team to integrate frontend experiences
    with REST APIs while balancing visual design, usability and technical
    constraints.
  </li>
</ul>

            </div>
          </section>

          {/* PROJECTS */}
          <section className="resumeMeghanSection">
            <h2>Product Design & SRE Projects</h2>
            <div className="resumeSectionContent">

              <div className="resumeItemRow">
  <div className="resumeItemLeft">
    <h3>SPOREX — AI Mould Detection Platform</h3>
    <span className="resumeSubText">
      Product Designer · Scrum Project Manager · Lead UI/UX Designer
    </span>
  </div>

  <div className="resumeItemRight">
    2026
  </div>
</div>

<ul className="resumeBullets">
  <li>
    Led the UX/UI design of a mobile application using user personas,
    user journeys, wireframes and high-fidelity interface design to simplify
    an AI-assisted mould detection workflow.
  </li>

  <li>
    Translated complex computer-vision functionality into a clear,
    user-friendly experience, considering information hierarchy,
    accessibility and interaction patterns.
  </li>

  <li>
    Managed Agile/Scrum planning and coordinated design and development
    activities across the project team.
  </li>

  <li>
    Collaborated closely with developers to ensure design decisions were
    technically feasible and consistently implemented across the application.
  </li>
</ul>

              <div className="resumeItemRow">
  <div className="resumeItemLeft">
    <h3>Dublin Bikes — Mobile UX Redesign</h3>
    <span className="resumeSubText">
      UX Research · Interaction Design · SwiftUI · REST API
    </span>
  </div>

  <div className="resumeItemRight">
    Independent
  </div>
</div>

<ul className="resumeBullets">
  <li>
    Investigated usability and navigation challenges within bike-sharing
    applications and translated findings into redesigned user flows and
    interface patterns.
  </li>

  <li>
    Designed and developed a responsive iOS experience using SwiftUI,
    focusing on information hierarchy, accessibility and efficient access
    to real-time bike availability.
  </li>

  <li>
    Integrated an open-data REST API and local data caching to support a
    responsive experience while working within real-world technical
    constraints.
  </li>
</ul>

            <div className="resumeItemRow">
  <div className="resumeItemLeft">
    <h3>Foodio — Voice-First Food Ordering Experience</h3>
    <span className="resumeSubText">
      Product Design · UX/UI · Interaction Design · React
    </span>
  </div>

  <div className="resumeItemRight">
    2026
  </div>
</div>

<ul className="resumeBullets">
  <li>
    Designed a voice-first food ordering experience exploring how
    conversational interaction could reduce friction within traditional
    food delivery journeys.
  </li>

  <li>
    Applied user-centred design principles to map the ordering journey,
    identify interaction points and structure the experience around
    conversational input and visual confirmation.
  </li>

  <li>
    Designed and developed an interactive React prototype to test the
    product concept in a realistic digital environment.
  </li>

  <li>
    Considered accessibility, cognitive load, information architecture and
    interaction feedback when designing the experience.
  </li>
</ul>

            </div>
          </section>

          {/* INTERESTS & WORK */}
          {/* <section className="resumeMeghanSection">
            <h2>Leadership & Community Engagement</h2>
            <div className="resumeSectionContent">
              <p><strong>Leadership:</strong> Founder & Chairperson — DKIT Fashion Society. Orchestrated society architecture, brand direction and  financial resource logistics. Active Member of the Google Developer Student Club (GDSC) at DKIT.</p>
              <p><strong>Professional Development:</strong> 2+ Years of Customer Operations experience at Primark, cultivating client interaction techniques, rapid problem-solving and  time management skills within fast-paced target windows.</p>
            </div>
          </section> */}
          {/* EXPERIENCE & LEADERSHIP */}
<section className="resumeMeghanSection">
  <h2>Experience & Leadership</h2>

  <div className="resumeSectionContent">

    <p>
  <strong>Retail Assistant — Primark</strong><br />
  <em>Drogheda · 2+ Years </em><br />
  Delivered customer-focused service within a high-volume retail environment,
  developing strong communication, teamwork, problem-solving and
  time-management skills while adapting to changing customer and operational
  needs.
</p>
<br />
   <p>
  <strong>Founder & Chairperson — DkIT Fashion Society</strong><br />
  Founded and led a student creative society, overseeing its brand direction,
  event planning, budgeting, committee coordination and day-to-day operations.
  Collaborated with university stakeholders and society members to establish
  and grow an inclusive creative community.
</p>
<br />
    <p>
      <strong>Clubs & Societies</strong><br />
      Active member of the Google Developer Student Club (GDSC), Women in STEM Society and several university societies throughout my studies. Regularly participated in workshops, networking events and collaborative activities that supported both my technical development and engagement with the wider university community.
    </p>
<br />
  </div>
</section>
        </main>

        <div className="resumeWrapper2">
          <Footer className="resumeFooter" />
        </div>
      </div>
    </>
  );
}