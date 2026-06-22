import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import NintendoScene from "../../components/NintendoScene";
import useMobileDevice from "../../hooks/useMobileDevice";

export default function NintendoPage() {

  const isMobile = useMobileDevice();

  return (
    <>
      {/* {isMobile === false && <NintendoScene />} */}

      <div className="nintendoPageShell">

        <div className="nintendoWrapper">
          <Header className="nintendoNav" />
        </div>

        <main className="nintendoprojectPage">

          <section className="nintendoprojectHero">

            <div className="nintendoheroLeft">

              <span className="nintendoprojectTag">
                UX DESIGN · CASE STUDY · INTERFACE REDESIGN
              </span>

              <h1 className="nintendoprojectTitle">
                NINTENDO SWITCH
              </h1>

              <p className="nintendoprojectDescription">
                A high-fidelity UX case study mapping out a next-generation ecosystem 
                for the Nintendo Switch. This redesign introduces intuitive navigation pillars, 
                streamlined asset discovery, a centralized player profile, and a responsive 
                Light/Dark environment built to modern console standards.
              </p>

            </div>

            <div className="nintendoheroRight">

              <div>
                <h4>PROJECT TYPE</h4>
                <p>UX Case Study</p>
              </div>

              <div>
                <h4>TIMELINE</h4> 
                <p>June 2026</p>
              </div>

              <div>
                <h4>ROLE</h4>
                <p>
                  UX Research · UX Design · UI Design
                </p>
              </div>

              <div>
                <h4>TOOLS</h4>
                <p>
                  Figma · FigJam · Photoshop
                </p>
              </div>

              <div>
                <h4>STATUS</h4>
<p>
 Independent Case Study
</p>
              </div>

            </div>

          </section>

         <section className="nintendoheroMockup">

  {/* Option A: Use a standard HTML image tag */}
  <img 
    className="nintendoplaceholderImage" 
    src="/images/Nintendo-Switch 2-UI-Redesign.png" 
    alt="Nintendo Switch 2 UI Redesign Showcase"
    style={{ width: "100%", height: "auto", display: "block" }} 
  />

</section>
   <section className="nintendoOverviewSection">
  <div className="nintendoSectionBackground"> 
    <div className="nintendoSectionLabel">01 · PROJECT OVERVIEW</div>

    <div className="nintendoSectionContent">
      <h2>Reimagining how players move through the console experience.</h2>

      <p>
        This project explores a next-generation operating system concept for the Nintendo Switch 2, focusing on how the interface could feel more intuitive and responsive to modern player needs.
      </p>

      <p>
        The aim was to simplify the system’s information structure, improve how games are organised and create clearer pathways for discovering new content.
      </p>

      <p>
        It also considers how a unified design system could scale smoothly across various experiences, while keeping the interface familiar and easy to navigate.
      </p>
    </div>
  </div>
</section>
  <section className="nintendoheroMockup">
    <h2 className="nintendoh2">
      Figma UI/UX
    </h2>
            {/* FIXED: Style converted to object, width set to 100% for responsiveness, allowFullScreen fixed */}
            <iframe 
              className="nintendoplaceholderImage" 
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} 
              width="100%" 
              height="500" 
              src="https://embed.figma.com/proto/sBr3OWIk4oDHch6He7G2f7/Nintendo-Switch-2-%7C-UI-Redesign?node-id=2004-790&scaling=contain&content-scaling=fixed&page-id=78%3A1051&starting-point-node-id=2004%3A790&show-proto-sidebar=1&embed-host=share" 
              allowFullScreen
            />
          </section>


<section className="nintendoInsightSection">
            <div className="nintendoSectionBackground"> 
              <div className="nintendoSectionLabel">02 · DESIGN INSIGHT</div>
              <div className="nintendoSectionContent">
                <h2>System menus should support your momentum, not pause it.</h2>
              <p>
        The original Nintendo Switch user interface is highly praised for its speed and minimalist utility, but its layout leaves 
        opportunities on the table when it comes to deep game organization, player stats and community features. As digital 
        libraries expand, the software needs to scale gracefully without losing its responsive edge. In comparison to competitor consoles, it differs in excess content, which is why it works and also why it doesn't.
      </p>
      <p>
        I started this independent case study to explore how the console's interface could evolve for the next generation. Rather than replacing 
        Nintendo's signature brand charm, the goal was to streamline user flows across several core view states including a brand-new Library grid, 
        custom user Collections, a predictive eShop discovery layout and an analytical profile dashboard. Below you can see my moodboard with collected images for inspiration 
        for the Nintendo Switch 2's redesign.
      </p>
                {/* <div className="nintendoQuoteBlock"> */}
             <div className="nintendoImageGrid"> 
               <h3 className="h3text"> Original UI </h3>
                  <img 
                    src="/images/BeforevsAfter.png" 
                    alt="Before vs After" 
                  /> 
                  <h3 className="h3text"> Inspiration Board </h3>
                  <img 
                    src="/images/UI-Concept-Inspiration.png" 
                    alt="Inspiration for the new UrdI" 
                  />
                </div>
                </div>
              </div>
            {/* </div> */}
          </section>


<section className="nintendoDesignSection">
  <div className="nintendoSectionBackground"> 
    <div className="nintendoSectionLabel">03 · DESIGN APPROACH</div>

  <div className="nintendoSectionContent">

  <h2>
    My Approach: building on Nintendo's identity while creating a cleaner experience.
  </h2>

  <p>
    My approach was focused on keeping the simplicity and familiarity of the 
    Nintendo Switch interface, while exploring how it could be improved for a 
    more modern console experience. I focused on creating clearer layouts, 
    stronger visual hierarchy, and reusable UI patterns that would make 
    navigation feel more organised and intuitive.
  </p>

  <p>
    The visual direction was built around Nintendo's existing identity, using 
    familiar colours and playful elements while introducing a more structured 
    interface system. The design explored how light and dark environments could 
    work consistently, with strong contrast and clear visual feedback for users.
  </p>

  <ul>

    <li>
      <strong>Light & Dark Modes:</strong> Designed two interface themes that 
      maintain the same visual language while adapting to different user 
      preferences and environments.
    </li>

    <li>
      <strong>Improved Navigation:</strong> Refined key areas of the interface 
      to make features like profiles, settings, notifications, and system 
      information easier to discover.
    </li>

    <li>
      <strong>Controller-focused Layouts:</strong> Considered spacing, sizing, 
      and focus states to create an interface that feels natural when navigating 
      with a physical controller.
    </li>

  </ul>


  <div className="nintendo-color-row">

    <div className="nintendo-swatch">
      <div 
        className="nintendo-swatch-block" 
        style={{background:"#050505"}}
      ></div>

      <span className="nintendo-swatch-hex">
        #050505
      </span>

      <span className="nintendo-swatch-name">
        Dark Mode / Background
      </span>
    </div>


    <div className="nintendo-swatch">
      <div 
        className="nintendo-swatch-block" 
        style={{background:"#E60012"}}
      ></div>

      <span className="nintendo-swatch-hex">
        #E60012
      </span>

      <span className="nintendo-swatch-name">
        Primary Accent / Background
      </span>
    </div>


    <div className="nintendo-swatch">
      <div 
        className="nintendo-swatch-block" 
        style={{background:"#FFFFFF", border:"1px solid #ddd"}}
      ></div>

      <span className="nintendo-swatch-hex">
        #FFFFFF
      </span>

      <span className="nintendo-swatch-name">
       Surface & Text
      </span>
    </div>

  </div>

</div>
  </div>
</section>


<section className="nintendoFeaturesSection">
  <div className="nintendoSectionBackground"> 
    <div className="nintendoSectionLabel">04 · KEY FEATURES</div>
    <div className="nintendoSectionContent">
      <h2> Seamless Resume </h2>
      <p>
        The main home dashboard focuses heavily on active momentum. The "Jump Back In" card features a suspended game state overlaying the 
        background image, giving players instant access with clear, glanceable contextual details like total runtime, achievement completion, 
        and a primary launch action button. This is something nintendo switch's UI currently lacks, with other consoles integrating this, I felt
        it's a strong design choice and provides a more personalised experience for the user. 
      </p>
    <div className="nintendoImageGrid">
                  <img 
                    src="/images/switch2-resume-game-light.png" 
                    alt="Nintendo Switch 2 UI Jump back in - Light Mode" 
                  />
                  <img 
                    src="/images/switch2-resume-game-dark.png" 
                    alt="Nintendo Switch 2 UI Jump back in - Dark Mode" 
                  />
                </div>
    </div>
  </div>
</section>

          {/* FEATURE B: THE LIBRARY */}
          <section className="nintendoFeaturesSection">
            <div className="nintendoSectionBackground"> 
              <div className="nintendoSectionLabel">04 · KEY FEATURES</div>
              <div className="nintendoSectionContent">
                <h2> Game Library</h2>
                <p>
                  Moving past simple item lists, the redesigned Library spaces assets across broad horizontal tracks. 
                  Bright card tokens with precise focus indicator borders allow smooth asset handling using the console d-pad, 
                  packing critical title information elegantly onto a high-contrast foundation.
                </p>
                <div className="nintendoImageGrid">
                  <img src="/images\switch2-library-light.png" alt="Library View - Light Mode" />
                  <img src="/images/switch2-library-dark.png" alt="Library View - Dark Mode" />
                </div>
              </div>
            </div>
          </section>

          {/* FEATURE C: COLLECTIONS */}
          <section className="nintendoFeaturesSection">
            <div className="nintendoSectionBackground"> 
              <div className="nintendoSectionLabel">04 · KEY FEATURES</div>
              <div className="nintendoSectionContent">
                <h2>Personalised Collections</h2>
                <p>
                  To manage large numbers of downloaded games, the Collections dashboard lets users organize software 
                  into customized folders. These groups look like elegant galleries, keeping title arrangements organized 
                  and making it fast to pick your next game.
                </p>
                <div className="nintendoImageGrid">
                  <img src="/images/switch2-collections-light.png" alt="Collections Hub View - Light Mode" />
                  <img src="/images/switch2-collections-dark.png" alt="Collections Hub View - Dark Mode" />
                
                </div>
              </div>
            </div>
          </section>

          {/* FEATURE D: GAME FOCUS PAGE */}
          {/* <section className="nintendoFeaturesSection">
            <div className="nintendoSectionBackground"> 
              <div className="nintendoSectionLabel">04 · KEY FEATURES</div>
              <div className="nintendoSectionContent">
                <h2> High-Fidelity Game Focus View</h2>
                <p>
                  Selecting a game takes the user to a detailed dashboard. This screen houses core contextual actions like 
                  asset management, add-on expansion trackers, in-game premium currencies, and complete game profile information, 
                  using rich, full-bleed wallpaper backdrops that match the game's theme.
                </p>
                <div className="nintendoImageGrid">
                  <img src="/images/switch2-game-focus-light.png" alt="Game Focus View - Light Mode" />
                </div>
              </div>
            </div>
          </section> */}

          {/* FEATURE E: RECOMMENDED FOR YOU */}
          <section className="nintendoFeaturesSection">
            <div className="nintendoSectionBackground"> 
              <div className="nintendoSectionLabel">04 · KEY FEATURES</div>
              <div className="nintendoSectionContent">
                <h2> Discovery &amp; Recommendations</h2>
                <p>
                  The discovery engine integrates personalized, algorthmically driven recommendations straight onto the main board. 
                  This layout mimics clean showcase hubs, updating active cards automatically to highlight upcoming eShop launches, 
                  trending community activities and curated title suggestions.
                </p>
                <div className="nintendoImageGrid">
                  <img src="/images/switch2-recommended-light.png" alt="Recommended View - Light Mode" />
                <img src="/images/switch2-recommended-dark.png" alt="Recommended View - Light Mode" />
                </div>
              </div>
            </div>
          </section>

          {/* FEATURE F: PROFILE DASHBOARD */}
          <section className="nintendoFeaturesSection">
            <div className="nintendoSectionBackground"> 
              <div className="nintendoSectionLabel">04 · KEY FEATURES</div>
              <div className="nintendoSectionContent">
                <h2> Centralized Profile Management</h2>
                <p>
                  The My Profile space coordinates player data into a sleek control panel. This cleaner dashboard 
                  organizes user statistics, account credentials, avatar customizers and financial wallet logs 
                  onto a balanced layout that looks modern and matches the console's overall aesthetic.
                </p>
                <div className="nintendoImageGrid">
                  <img src="/images/switch2-profile-light.png" alt="My Profile View - Light Mode" />
                  <img src="/images/switch2-profile-dark.png" alt="My Profile View - Dark Mode" />
               
                </div>
              </div>
            </div>
          </section>
<section className="nintendoOutcomeSection">
  <div className="nintendoSectionBackground"> 
    <div className="nintendoSectionLabel">05 · PROTOTYPE & OUTCOME</div>

    <div className="nintendoSectionContent">

      <h2>
        Turning a concept into a more personable console experience.
      </h2>

      <p>
        I developed the redesign through Figma by creating reusable components, 
        interface states and interactive prototypes to explore how the experience 
        could flow across different areas of the console. Rather than completely 
        changing Nintendo's existing identity, my aim was to build on what already 
        works while introducing clearer navigation, improved organisatio and offer an even
        more personalised user experience.
      </p>

      <p>
        Overall, the outcome I aimed for was a cleaner and more connected interface 
        that feels familiar to existing Switch users and competitor console UI while addressing areas where 
        the current system could be expanded. This project helped me explore how 
        small UX decisions, such as information layout, hierarchy and accessibility 
        of features can have a large impact on how users interact with a digital 
        product.
      </p> <div className="nintendoImageGrid">
<img src="/images/marioclose.jpg" alt="Mario" />
                </div>  
    </div>
  </div>
</section>

        </main>

        <div className="nintendoWrapper2">
          <div className="nintendoFooter">
    <Footer />
  </div>
  </div>
      </div>
    </>
  );
}