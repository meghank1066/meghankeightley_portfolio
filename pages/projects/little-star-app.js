import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import LittleStarNodes from "../../components/LittleStarNodes";
import useMobileDevice from "../../hooks/useMobileDevice";

export default function LittleStarPage() {

  const isMobile = useMobileDevice();

  return (
    <>
      {/* {isMobile === false && <LittleStarNodes />} */}

      <div className="littleStarPageShell">

        <div className="littleStarWrapper">
          <Header className="littleStarNav" />
        </div>

        <main className="littleStarProjectPage">

          <section className="littleStarProjectHero">

            <div className="littleStarHeroLeft">

              <span className="littleStarProjectTag">
                UX DESIGN · EDUCATIONAL EXPERIENCE · GAMIFICATION
              </span>

              <h1 className="littleStarProjectTitle">
                Little Star Academy
              </h1>

              <p className="littleStarProjectDescription">
                A UX/UI design project focused on creating an engaging
                educational experience for young learners. The concept
                combines interactive learning games, progress tracking,
                and child-friendly design principles to encourage
                development through play while supporting parents and
                educators.
              </p>

              <div className="littleStar-hero-links">
  <a
    className="littleStar-hero-link"
    href="YOUR_LIVE_SITE_URL"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Figma Prototype
  </a>
  </div>

            </div>

            <div className="littleStarHeroRight">

              <div>
                <h4>PROJECT TYPE</h4>
                <p>Educational UX/UI Design Project</p>
              </div>

              <div>
                <h4>TIMELINE</h4>
                <p>4 Weeks</p>
                <p>2025</p>
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
                  Figma · FigJam · Prototyping
                </p>
              </div>

              <div>
                <h4>PROTOTYPE</h4>

                <p>
                  <a
                    href="YOUR_FIGMA_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="littleStarLink"
                  >
                    View Interactive Prototype
                  </a>
                </p>
              </div>

            </div>

          </section>

          <section className="littleStarHeroMockup">

            <div className="littleStarPlaceholderImage">
              LITTLE STAR ACADEMY SHOWCASE
            </div>

          </section>

          <section className="littleStarOverviewSection">
 <div className="littleStarSectionBackground"> 
  <div className="littleStarSectionLabel">
    01 · PROJECT OVERVIEW
  </div>

  <div className="littleStarSectionContent">

    <h2>
      Designing playful learning through structured interaction.
    </h2>

    <p>
      Little Star Academy was developed as a UX/UI design project focused on creating an
      engaging educational experience for young learners. The goal was to explore how
      gamification and interaction design can support early learning in a way that feels
      intuitive, motivating, and age-appropriate.
    </p>

    <p>
      The project was designed entirely in Figma, focusing on user flows, interaction states,
      and a child-friendly visual system that balances clarity with playfulness.
    </p>
</div>
  </div>

</section>


<section className="littleStarInsightSection">
 <div className="littleStarSectionBackground"> 
  <div className="littleStarSectionLabel">
    02 · DESIGN INSIGHT
  </div>

  <div className="littleStarSectionContent">

    <h2>
      Children learn through interaction, not instruction.
    </h2>

    <p>
      The core insight behind this project was that traditional educational interfaces often
      feel passive, requiring users to absorb information rather than engage with it.
      For younger users, engagement is driven by feedback, reward loops, and visual clarity.
    </p>

    <p>
      This led to a design direction focused on turning learning into a series of small,
      rewarding interactions rather than linear content consumption.
    </p>

    <div className="littleStarQuoteBlock">
      <p>
        “Learning becomes meaningful when it feels like play, not obligation.”
      </p>
    </div>
</div>
  </div>

</section>


<section className="littleStarDesignSection">
 <div className="littleStarSectionBackground"> 
  <div className="littleStarSectionLabel">
    03 · DESIGN APPROACH
  </div>

  <div className="littleStarSectionContent">

    <h2>
      Designing for clarity, emotion, and cognitive simplicity.
    </h2>

    <p>
      The interface was structured around reducing cognitive load while maintaining a sense
      of discovery. Every screen prioritises simple navigation, strong visual hierarchy,
      and immediate feedback.
    </p>

    <ul>
      <li>Bright, accessible visual language tailored for younger users</li>
      <li>Clear progression system to support motivation and retention</li>
      <li>Component-based UI system built for scalability in Figma</li>
    </ul>

  </div>
</div>
</section>


<section className="littleStarFeaturesSection">
 <div className="littleStarSectionBackground"> 
  <div className="littleStarSectionLabel">
    04 · KEY FEATURES
  </div>

  <div className="littleStarSectionContent">

    <h2>
      Gamified learning through structured progression.
    </h2>

    <p>
      The prototype explores interactive learning modules, progress tracking, and reward
      systems designed to encourage repetition and engagement.
    </p>

    <div className="littleStarImageGrid">
      <img src="/images/littlestar-home.png" alt="Home Screen" />
      <img src="/images/littlestar-learning.png" alt="Learning Module" />
    </div>
</div>
  </div>

</section>


<section className="littleStarDesignSection">
 <div className="littleStarSectionBackground"> 
  <div className="littleStarSectionLabel">
    05 · PROTOTYPE DESIGN
  </div>

  <div className="littleStarSectionContent">

    <h2>
      Built entirely in Figma as a high-fidelity interaction system.
    </h2>

    <p>
      The project was developed using Figma and FigJam to map user flows, define interaction
      states, and prototype key learning interactions. The focus was on behavioural design
      rather than implementation.
    </p>

  </div>
</div>
</section>


<section className="littleStarOutcomeSection">
 <div className="littleStarSectionBackground">
  <div className="littleStarSectionLabel">
    06 · OUTCOME
  </div>

  <div className="littleStarSectionContent">

    <h2>
      A playful, structured learning experience designed for engagement.
    </h2>

    <p>
      The final prototype demonstrates how gamification and UX design principles can be
      combined to create an educational platform that feels intuitive and motivating for
      young learners.
    </p>

  </div>
</div>
</section>


<section className="littleStarContributionSection">
 <div className="littleStarSectionBackground"> 
  <div className="littleStarSectionLabel">
    07 · MY CONTRIBUTION
  </div>

  <div className="littleStarSectionContent">

    <h2>
      End-to-end ownership of UX, UI, and interaction design.
    </h2>

    <p>
      I led the full design process from user flow mapping and wireframing through to
      high-fidelity prototyping in Figma. This included designing interaction systems,
      defining visual language, and structuring a scalable component library.
    </p>

    <p>
      A key challenge was balancing playful aesthetics with usability while ensuring the
      interface remained accessible and easy to navigate for younger audiences.
    </p>

  </div>
</div>
</section>

        </main>

        <div className="littleStarWrapper2">
          <Footer className="littleStarFooter" />
        </div>

      </div>
    </>
  );
}
