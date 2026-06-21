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
            <span className="resumeTopTag">Software Engineer · UI/UX Designer</span>
            
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
                <a className="resume-hero-link" href="#" target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="resume-hero-link" href="#" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </header>

          {/* PROFILE / SUMMARY */}
          <section className="resumeMeghanSection">
            <h2>Profile</h2>
            <div className="resumeMeghanContent">
              <p>
                First-Class (2.1) Software Development graduate combining a core computer science foundation with a specialisation in frontend interfaces and user-centered digital systems. 
                Proven capability in driving agile, international team projects and engineering cross-platform applications from research to production. Currently seeking a graduate opportunity or advanced MSc research program focusing on the intersection of Interactive Media, UX Design and  Creative Computing.
              </p>
            </div>
          </section>

          {/* TECHNICAL SKILLS */}
          <section className="resumeMeghanSection">
            <h2>Technical Skills</h2>
            <div className="resumeSectionContent skillsGrid">
              <p><strong>Languages:</strong> JavaScript (ES6+), TypeScript, Swift, Kotlin, Java, Python, C#, C++, SQL</p>
              <p><strong>Frameworks & Web Architecture:</strong> React, Next.js, ASP.NET Core, Node.js, RESTful APIs, Entity Framework, Docker</p>
              <p><strong>Frontend & UI/UX Design:</strong> HTML5, CSS3/SCSS, Tailwind CSS, SwiftUI, UIKit, Wireframing, High-Fidelity Prototyping, Usability Testing, User Journeys, WCAG Accessibility</p>
              <p><strong>Design & Creative Media:</strong> Figma, Figma AI, Blender (3D Modeling), Adobe Illustrator, After Effects, Creative Cloud</p>
              <p><strong>Engineering Practices:</strong> Agile/Scrum Methodologies, Git/Version Control, CI/CD pipelines, System Architecture, Test-Driven Development</p>
            </div>
          </section>

          {/* EDUCATION */}
          <section className="resumeMeghanSection">
            <h2>Education</h2>
            <div className="resumeSectionContent">
              <div className="resumeItemRow">
                <div className="resumeItemLeft">
                  <h3>BSc (Hons) in Computing in Software Development (Level 8)</h3>
                  <span className="resumeSubText">Dundalk Institute of Technology — Awarded 2.1 Honours</span>
                </div>
                <div className="resumeItemRight">2022 — 2026</div>
              </div>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section className="resumeMeghanSection">
            <h2>Selected Experience</h2>
            <div className="resumeSectionContent">
              
              <div className="resumeItemRow">
                <div className="resumeItemLeft">
                  <h3>Immersive Virtual Reality Experience Developer</h3>
                  <span className="resumeSubText">Unity Game Developer & Designer | 6-Month International Erasmus Semester — Antwerp, Belgium</span>
                </div>
                <div className="resumeItemRight">Jan 2025 — June 2025</div>
              </div>
              <ul className="resumeBullets">
                <li>Engineered a collaborative virtual reality simulation in Unity using C# for the Meta Quest 3, leveraging the High Definition Render Pipeline (HDRP) for hyper-realistic visual environments.</li>
                <li>Introduced UX design frameworks, establishing user journey maps, spatial layout patterns and  immersive interactive mechanics tailored for spatial computing.</li>
                <li>Sourced, optimized and  programmatically integrated 3D visual assets to balance high-fidelity environmental storytelling with real-time performance constraints.</li>
                <li>Collaborated within a multidisciplinary, international cross-functional team, serving as the core bridge translating technical execution workflows into accessible creative goals for design stakeholders.</li>
              </ul>

              <div className="resumeItemRow">
                <div className="resumeItemLeft">
                  <h3>Full-Stack Developer</h3>
                  <span className="resumeSubText">e.COAL Project | Erasmus+ Intensive Development Programme — Lens, France</span>
                </div>
                <div className="resumeItemRight">Feb 2024</div>
              </div>
              <ul className="resumeBullets">
                <li>Selected to represent institutional engineering capabilities in an international, intensive fast-track development sprint building an interactive, media-rich web application.</li>
                <li>Architected responsive, mobile-first frontend interfaces using React, ensuring high-fidelity visual translation and integration with a Laravel/Node.js RESTful API backend.</li>
              </ul>

            </div>
          </section>

          {/* PROJECTS */}
          <section className="resumeMeghanSection">
            <h2>Engineering & Design Projects</h2>
            <div className="resumeSectionContent">

              <div className="resumeItemRow">
                <div className="resumeItemLeft">
                  <h3>AI Mould Detection Mobile Platform ("SPOREX")</h3>
                  <span className="resumeSubText">Scrum Project Manager & Lead Frontend UI/UX Designer — Capstone Group Thesis</span>
                </div>
                <div className="resumeItemRight">2026</div>
              </div>
              <ul className="resumeBullets">
                <li>Co-engineered a computer-vision native application using Java/Kotlin in Android Studio that leverages cloud-based AI image recognition models to process and diagnose environmental hazards.</li>
                <li>Designed the entire application design ecosystem from user persona mapping and wireframing up to intuitive, high-fidelity responsive component trees.</li>
                <li>Managed core Agile/Scrum milestones, directing development velocity while balancing smooth asynchronous API parsing between frontend components and backend microservices.</li>
              </ul>

              <div className="resumeItemRow">
                <div className="resumeItemLeft">
                  <h3>Dublin Bikes iOS UI/UX Redesign</h3>
                  <span className="resumeSubText">Swift, SwiftUI/UIKit, Core Data, Open-Data REST API (Individual Project)</span>
                </div>
                <div className="resumeItemRight">Independent</div>
              </div>
              <ul className="resumeBullets">
                <li>Conducted standalone usability research to isolate navigation pain points within public transport systems, translating findings into a fully customized, responsive iOS tracking architecture.</li>
                <li>Integrated external open data REST APIs to stream real-time availability updates, leveraging Core Data subsystems to provide instantaneous local caching for an optimal, lag-free user experience.</li>
              </ul>

              <div className="resumeItemRow">
                <div className="resumeItemLeft">
                  <h3>Context-Aware Style Recommendation Engine</h3>
                  <span className="resumeSubText">SQL, Entity Framework, External API Integration (Backend Project)</span>
                </div>
                <div className="resumeItemRight">Independent</div>
              </div>
              <ul className="resumeBullets">
                <li>Built a scalable backend system that models multi-source relational schemas using SQL and Entity Framework to ingest weather parameters and deliver tailored product filtering.</li>
                <li>Programmed custom filtering logic to map real-time API integrations into structured application payloads.</li>
              </ul>

            </div>
          </section>

          {/* INTERESTS & WORK */}
          <section className="resumeMeghanSection">
            <h2>Leadership & Community Engagement</h2>
            <div className="resumeSectionContent">
              <p><strong>Leadership:</strong> Founder & Chairperson — DKIT Fashion Society. Orchestrated society architecture, brand direction and  financial resource logistics. Active Member of the Google Developer Student Club (GDSC) at DKIT.</p>
              <p><strong>Professional Development:</strong> 2+ Years of Customer Operations experience at Primark, cultivating client interaction techniques, rapid problem-solving and  time management skills within fast-paced target windows.</p>
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