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
      {/* <p className="veloraTagline">Made with Dublin Bikes Decaux API</p> */}
      <div className="veloraImageWrapper">
        <img src="/images/velora/velora-promo-pic.png" alt="Velora promo showcase" />
      </div>
    </div>
  </div>
</section>

      <section className="veloraInsightSection">
            <div className="veloraSectionBackground"> 
              <div className="veloraSectionLabel">02 · DESIGN & DEVELOPMENT INSIGHT</div>
              <div className="veloraSectionContent">
                <h2>Optimization isn't just a visual preference—it's a critical hardware requirement.</h2>
                <p>
                  Connecting directly to live data streams poses a hidden threat to mobile apps: raw API loops can trigger severe memory leaks and CPU spikes. Early iterations of Velora caused hardware development crashes because parsing unthrottled JSON coordinate payloads overwhelmed the rendering thread. 
                </p>
                <p>
                  The design evolved systematically to protect device performance. By engineering MapKit clustering, the app throttles engine demands—combining dense city nodes cleanly into single group pins when zoomed out. This background optimization keeps frame rates liquid smooth while providing instant, glanceable bike counts right when a user stands on a street corner.
                </p>
                
                <h3 className="h3text"> Initial Architecture & Wireframes </h3>
                    <iframe
               className="veloraplaceholderImage" 
  style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
  // width="800"
  // height="450"
  width="100%"
  height="500"
  src="https://embed.figma.com/proto/olJpR1vAzTurDPIVpO1s0M/Velora-Bike-App?node-id=906-2618&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=906%3A2504&embed-host=share"
  allowFullScreen
></iframe>

                {/* <div className="veloraImageGrid"> 

                  <h3 className="h3text"> Aesthetic Moodboard </h3>
                  <img 
                    src="/images/velora-inspiration-board.png" 
                    alt="Inspiration board tracking color choices and calming styles" 
                  />
                </div> */}
              </div>
            </div>
          </section>

          {/* SECTION 3: STRATEGIC APPROACH */}
          <section className="veloraDesignSection">
            <div className="veloraSectionBackground"> 
              <div className="veloraSectionLabel">03 · DESIGN & TECHNICAL APPROACH</div>

              <div className="veloraSectionContent">
                <h2>
                  Building empathy through visual pacing and custom UI overlays.
                </h2>

                <p>
                  Instead of utilizing highly aggressive, over-saturated environment colors, Velora speaks through a custom pastel palette. This approach links the software directly to the fresh, low-impact nature of cycling, calming eye strain during bright outdoor use or rushed commutes.
                </p>

                <p>
                  On a technical level, the layout relies heavily on isolated state management patterns, using custom side overlays and dynamic map drawers to prevent layout shifts while keeping standard navigation systems uninterrupted.
                </p>

                <ul>
                  <li>
                    <strong>Strategic Accents:</strong> Using an intentional baby blue hue reserved strictly for critical call-to-action milestones to guide navigation without visual fatigue.
                  </li>
                  <li>
                    <strong>Map Overlays:</strong> A slide-out RightSideView panel containing isolated map toggles and a fluid search system interacting directly with live filtered nodes.
                  </li>
                  <li>
                    <strong>Thread Safety & Concurrency:</strong> Handling live background network fetching safely to guarantee notifications fire perfectly even when the application is suspended.
                  </li>
                </ul>

                <div className="velora-color-row">

                  <div className="velora-swatch">
                    <div 
                      className="velora-swatch-block" 
                      style={{background:"#BDE0FE"}}
                    ></div>
                    <span className="velora-swatch-hex">#BDE0FE</span>
                    <span className="velora-swatch-name">Baby Blue / CTA Accent</span>
                  </div>

                  <div className="velora-swatch">
                    <div 
                      className="velora-swatch-block" 
                      style={{background:"#15435A"}}
                    ></div>
                    <span className="velora-swatch-hex">#15435A</span>
                    <span className="velora-swatch-name">Dark Teal / Dark Mode Accent</span>
                  </div>

                  <div className="velora-swatch">
                    <div 
                      className="velora-swatch-block" 
                      style={{background:"#F8F9FA", border:"1px solid #ddd"}}
                    ></div>
                    <span className="velora-swatch-hex">#F8F9FA</span>
                    <span className="velora-swatch-name">Surface Canvas / Low-Strain Base</span>
                  </div>

                </div>

             
              </div>
            </div>
          </section>

          {/* SECTION 4: KEY FEATURES */}
          {/* FEATURE A: MARKER CLUSTERING */}
          <section className="veloraFeaturesSection">
            <div className="veloraSectionBackground"> 
              <div className="veloraSectionLabel">04 · KEY FEATURES</div>
              <div className="veloraSectionContent">
                <h2> Live Map &amp; Marker Clustering </h2>
                <p>
                  To handle the dense network of Dublin bike stations gracefully, Velora relies on an advanced MapKit clustering engine. Nearby stations smoothly consolidate into single numeric tokens upon zooming out, reducing rendering weight on the processor and preventing high UI clutter for the user.
                </p>
                <div className="veloraImageGrid">
                  <img src="/images/velora/velora-map.png" alt="Map Layer with Station Clustering" />
                  <img src="/images/velora/velora-map2.png" alt="Detailed Map View showing individual pins" />
                </div>a/
              </div>
            </div>
          </section>

          {/* FEATURE B: SWIPE TO UNLOCK */}
          <section className="veloraFeaturesSection">
            <div className="veloraSectionBackground"> 
              <div className="veloraSectionLabel">04 · KEY FEATURES</div>
              <div className="veloraSectionContent">
                <h2> Tactile Gesture Mechanics </h2>
                <p>
                  Moving past generic, error-prone tap buttons, starting a journey uses a custom-coded Swipe-to-Unlock gesture layout. This interaction adds an intentional, professional feel to the transaction while staying safely isolated away from standard native iOS back-swipe navigation behaviors.
                </p>
                <div className="veloraImageGrid">
                  <img src="/images/velora/velora-gesture-start.png" alt="Swipe to unlock interface state" />
                  <img src="/images/velora/velora-trips-journey.png" alt="Active journey timer view" />
                </div>
              </div>
            </div>
          </section>

          {/* FEATURE C: PROXIMITY SORTING */}
          <section className="veloraFeaturesSection">
            <div className="veloraSectionBackground"> 
              <div className="veloraSectionLabel">04 · KEY FEATURES</div>
              <div className="veloraSectionContent">
                <h2> Dynamic Proximity Sorting </h2>
                <p>
                  Instead of presenting locations alphabetically, the SearchView constantly tracks real-time CoreLocation user positions. It calculates local distance parameters on the fly, reorganizing the entire feed so that the closest functional stations always float directly to the top of the user's view list.
                </p>
                <div className="veloraImageGrid">
                  <img src="/images/velora/velora-list.png" alt="Station search sorted by proximity" />
                  <img src="/images/velora/savedstations.png" alt="Favorites view filter state" />
                </div>
              </div>
            </div>
          </section>

          {/* FEATURE D: ENVIRONMENTAL IMPACT TRACKER */}
          <section className="veloraFeaturesSection">
            <div className="veloraSectionBackground"> 
              <div className="veloraSectionLabel">04 · KEY FEATURES</div>
              <div className="veloraSectionContent">
                <h2> Gamified Sustainability Profiles </h2>
                <p>
                  The My Profile space integrates data persistence loops that save trip history after the app closes. It takes raw journey completion parameters and transforms them into an automated environmental dashboard, updating personal offsets and tracking carbon-saving accomplishments natively.
                </p>
                <div className="veloraImageGrid">
                  <img src="/images/velora/environmental-fix.png" alt="User Profile Sustainability Dashboard" />
                  <img src="/images/velora/velora-notifications.png" alt="Local trip completion notifications" />
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5: OUTCOME */}
          <section className="veloraOutcomeSection">
            <div className="veloraSectionBackground"> 
              <div className="veloraSectionLabel">05 · PERSISTENCE & OUTCOME</div>

              <div className="veloraSectionContent">
                <h2>
                  From baseline data architecture to an all-inclusive iOS product.
                </h2>

                <p>
                  Developing Velora as a solo engineer was a comprehensive masterclass in handling full-cycle iOS life cycles. Moving from initial design concept mapping to building complex background logic required shifting deep dependencies safely, organizing threads carefully, and fine-tuning state synchronization parameters.
                </p>

                <p>
                  Ultimately, the project bridges the gap between clean structural architecture and empathetic interface patterns—delivering a beautiful, high-utility service that solves a real everyday urban problem effortlessly.
                </p> 
                
                <div className="veloraImageGrid">
                  <img src="/images/velora-final-mockup.jpg" alt="Final polished Velora app presentation screen" />
                </div>  
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