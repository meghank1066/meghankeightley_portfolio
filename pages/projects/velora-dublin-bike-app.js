import Header from "../../components/Header";
import Footer from "../../components/Footer";
import VeloraNodes from "../../components/VeloraNodes";
import useMobileDevice from "../../hooks/useMobileDevice";

export default function VeloraPage() {
  const isMobile = useMobileDevice();

  return (
    <>
      {isMobile === false && <VeloraNodes />}

      <div className="veloraPageShell">
        <div className="veloraWrapper">
          <Header className="veloraNav" />
        </div>

        <main className="veloraprojectPage">

          {/* HERO SECTION */}
          <section className="veloraprojectHero">
            <div className="veloraheroLeft">
              <span className="veloraprojectTag">
                MOBILE DEVELOPMENT · IOS APPLICATION
              </span>
              <h1 className="veloraprojectTitle">VELORA</h1>
              <p className="veloraprojectDescription">
                An iOS cycling companion designed to help users locate
                nearby bike stations, plan journeys, and navigate Dublin's
                public bike-sharing network through a clean and intuitive
                mobile experience.
              </p>
              <div className="velora-hero-links">
                <a className="velora-hero-link" href="YOUR_LIVE_SITE_URL" target="_blank" rel="noopener noreferrer">
                  Visit Live Site
                </a>
                <a className="velora-hero-link" href="YOUR_GITHUB_URL" target="_blank" rel="noopener noreferrer">
                  View My Code
                </a>
              </div>
            </div>

            <div className="veloraheroRight">
              <div>
                <h4>PROJECT TYPE</h4>
                <p>Individual Mobile App Project</p>
              </div>
              <div>
                <h4>TIMELINE</h4>
                <p>4 Weeks</p>
                <p>2025</p>
              </div>
              <div>
                <h4>ROLE</h4>
                <p>UX Design · UI Design · Swift Development</p>
              </div>
              <div>
                <h4>TOOLS</h4>
                <p>Swift · Xcode · Figma</p>
              </div>
              <div>
                <h4>REPOSITORY</h4>
                <p>
                  <a href="YOUR_GITHUB_LINK" target="_blank" rel="noopener noreferrer" className="veloraLink">
                    View GitHub Repository
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* MOCKUP SHOWCASE */}
      <section className="veloraHeroContainer">
  <div className="veloraHeroHeader">
    <h2>Velora</h2>
    <p className="veloraHeroYear">2026</p>
  </div>

  <div className="veloraHeroMockupWrapper">
    {/* Floating App Icons */}
    <div className="veloraAppIcons">
      <img src="/images/velora/velora-app-icons.png" alt="Velora app icons" />
    </div>

    {/* Main Showcase Image Box */}
    <div className="veloraMainShowcase">
      <p className="veloraTagline">Designing a cozy mobile experience for your needs</p>
      <div className="veloraImageWrapper">
        <img src="/images/velora/velora-promo-pic.png" alt="Velora promo showcase" />
      </div>
    </div>
  </div>
</section>

          {/* 02 · DESIGN INSIGHT */}
          <section className="veloraInsightSection">
            <div className="veloraSectionBackground"> 
              <div className="veloraSectionLabel">02 · DESIGN INSIGHT</div>
              <div className="veloraSectionContent">
                <h2>Navigation should feel instinctive, not computational.</h2>
                <p>
                  Most transport apps overload users with raw map data, turning
                  simple decisions into cognitive tasks. The insight behind Velora
                  was that cyclists don’t want “information” — they want certainty.
                </p>
                <p>
                  This led to a design direction focused on progressive disclosure:
                  showing only what’s needed at the exact moment it’s needed.
                </p>
                <div className="veloraQuoteBlock">
                  <p>“Good navigation disappears — it leaves only direction.”</p>
                </div>
              </div>
            </div>
          </section>

          {/* 03 · DESIGN APPROACH */}
          <section className="veloraDesignSection">
            <div className="veloraSectionBackground"> {/* Added missing wrapper */}
              <div className="veloraSectionLabel">03 · DESIGN APPROACH</div>
              <div className="veloraSectionContent">
                <h2>Minimal interface, maximal clarity.</h2>
                <p>
                  The UI was intentionally reduced to essential interaction points,
                  prioritising readability and speed over visual density.
                </p>
                <ul>
                  <li>Map-first layout with reduced UI interference</li>
                  <li>Station availability shown through simple visual states</li>
                  <li>One-tap journey planning flow</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 04 · KEY FEATURES */}
          <section className="veloraFeaturesSection">
            <div className="veloraSectionBackground"> {/* Added missing wrapper */}
              <div className="veloraSectionLabel">04 · KEY FEATURES</div>
              <div className="veloraSectionContent">
                <h2>Designed for real-time movement.</h2>
                <p>
                  Velora enables users to locate nearby stations, check bike
                  availability, and plan routes in real time with minimal friction.
                </p>
                <div className="veloraImageGrid">
                  <div className="veloraImagePlaceholder">MAP VIEW</div>
                  <div className="veloraImagePlaceholder">STATION DETAILS</div>
                </div>
              </div>
            </div>
          </section>

          {/* 05 · DESIGN & DEVELOPMENT */}
          <section className="veloraDevelopmentSection">
            <div className="veloraSectionBackground"> 
              <div className="veloraSectionLabel">05 · DESIGN & DEVELOPMENT</div>
              <div className="veloraSectionContent">
                <h2>Built natively for performance and responsiveness.</h2>
                <p>
                  The application was developed in Swift using Xcode, with Figma
                  used for interface prototyping and interaction mapping. The focus
                  was on maintaining smooth performance during map interactions and
                  real-time updates.
                </p>
              </div>
            </div>
          </section>

          {/* 06 · OUTCOME */}
          <section className="veloraOutcomeSection">
            <div className="veloraSectionBackground">
              <div className="veloraSectionLabel">06 · OUTCOME</div>
              <div className="veloraSectionContent">
                <h2>A streamlined cycling companion for urban mobility.</h2>
                <p>
                  The final application provides users with a lightweight, focused
                  experience for navigating Dublin’s bike-sharing system, reducing
                  decision time and improving journey confidence.
                </p>
              </div>
            </div>
          </section>

          {/* 07 · MY CONTRIBUTION */}
          <section className="veloraContributionSection">
            <div className="veloraSectionBackground"> {/* Fixed sporex typo */}
              <div className="veloraSectionLabel">07 · MY CONTRIBUTION</div>
              <div className="veloraSectionContent">
                <h2>End-to-end ownership from concept to implementation.</h2>
                <p>
                  I led the UX research, interface design, and full Swift
                  implementation of the application. This included structuring
                  navigation logic, designing mobile-first interaction flows, and
                  integrating real-time data into a usable interface.
                </p>
                <p>
                  A key challenge was balancing map complexity with usability while
                  maintaining fast, responsive interactions on mobile devices.
                </p>
              </div>
            </div>
          </section>

        </main>

        <div className="veloraWrapper2">
          <Footer className="veloraFooter" />
        </div>
      </div>
    </>
  );
}